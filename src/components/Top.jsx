import React from 'react';
import EmojiFloat from './EmojiFloat'

const Top = () => {
    return (
        <div className="flex justify-center items-center w-full h-custom bg-top opacity-90 z-10 mb-5">
            <div className="flex flex-col items-center">
                <h1 className="text-6xl text-primary mb-6">
                    <span className="font-light">Emoji Finder </span>
                    <span className="font-bold">App</span></h1>
                <p className="text-2xl text-primary font-light">A web app to discover emojis using a free</p>
                <p className="text-2xl text-primary font-light mb-4">API from unicode.org.</p>
                <a href="https://github.com/den012"
                className="text-xl text-primary font-light underline">⚠️ Github</a>
            </div>
            <EmojiFloat/>
        </div>
    )
}

export default Top;