/* global searchTerm */

import React from 'react';
import { useEffect, useState } from 'react';

const EmojiGrid = ({data, setRecentlyCopied}) => {
    if (!data) {
        return null;
    }

    const handleCopyToClipboard = async (emoji) => {
      try{
        await navigator.clipboard.writeText(emoji);
        console.log('Emoji copied to clipboard:', emoji);

        setRecentlyCopied((prevEmojis) => [emoji, ...prevEmojis.slice(0, 4)]);
      } catch(error) {
          console.error('Error copying emoji to clipboard:', error);
      }
    };

    const emojis = data.map((e, index) => (
        <div key={index} 
        className="w-24 h-16 text-5xl flex flex-col items-center justify-center cursor-pointer"
        onClick={() => handleCopyToClipboard(e.character)}>
            <p>{e.character}</p>
            <p>{}</p>
        </div>
    ));

    return (
        <div className="grid grid-cols-4 gap-4 place-items-center overflow-y-auto overflow-x-hidden custom-scrollbar" style={{maxHeight: '300px'}}>
          {emojis}
        </div>
      );
    };

const Hero = () => {
    const [originalData, setOriginalData] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [recentlyCopied, setRecentlyCopied] = useState([]);

    useEffect(() => {
        fetch('https://emoji-api.com/emojis?access_key=b4622714d660d7b74542f70cc7709644231eb958')
          .then((res) => {
            if (!res.ok) {
              throw new Error('Network response was not ok');
            }
            return res.json();
          })
          .then((res) => {
            setOriginalData(res);
            console.log('Data fetched successfully:', res);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);

    
    const handleSearch = (value) => {
        const filteredEmojis = originalData.filter((e) => e.unicodeName.toLowerCase().includes(value.toLowerCase()));
        setSearchResults(filteredEmojis);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        handleSearch(value);
    };

    return (
        <div className="flex justify-center">
          <div className="bg-secondary opacity-90 p-4 shadow-md rounded-xl" style={{ width: '1200px', height: '450px' }}>
            <div className="flex justify-center">

              {/* Search bar and emoji grid*/}
              <div className="mr-40">
                <div className="flex flex-col justify-center items-center">
                    <input 
                    type="text" 
                    placeholder="Search & click to copy" 
                    className="mt-10 w-80 h-10 rounded-xl mb-4 pl-4"
                    value={searchTerm}
                    onChange={handleChange}/>
                </div>
                <div className="flex justify-center items-center">
                    {searchResults.length > 0 ? 
                    <EmojiGrid data={searchResults} 
                    searchTerm={searchTerm}
                    setRecentlyCopied={setRecentlyCopied} /> : <p className="text-xl font-light">Loading...</p>}
                </div>
              </div>
              
              {/* Recently copied emojis */}
              <div className="mt-11">
                <h1 className="text-2xl font-light">Recently copied:</h1>
                <div className="flex flex-col">
                  {recentlyCopied.map((emoji, index) => (
                    <div key={index} className="mb-5 text-5xl">
                      {emoji}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
    )   
}

export default Hero;