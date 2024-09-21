import React, { useEffect } from 'react';

const TwitterEmbed = () => {
    useEffect(() => {
        // Load Twitter's widgets.js script
        const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <blockquote className="twitter-tweet">
                <p lang="en" dir="ltr">
                    The autumn season awakens in Palia, ushering in the return of the beloved Maji Market, fall foliage, Halloween store, and more!<br /><br />
                    Patch 0.184 🧡 9.24.24<br />
                    🎆 Maji Market Returns!<br />
                    🏹 Balloon Pop Mini-game<br />
                    🍂 Fall Foliage<br />
                    🎃 Spooky Furniture Returns<br />
                    🐈‍⬛ Premium Shop brings a new Pet,…
                    <a href="https://t.co/2af20aGLNw">pic.twitter.com/2af20aGLNw</a>
                </p>
                &mdash; Palia (@playPalia)
                <a href="https://twitter.com/playPalia/status/1836814480501874813?ref_src=twsrc%5Etfw">September 19, 2024</a>
            </blockquote>
        </div>
    );
};

export default TwitterEmbed;
