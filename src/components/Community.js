import React from 'react';
import Header from './Header'; // Adjust the path if necessary
import { useLocation } from 'react-router-dom';

function Community() {
    const location = useLocation(); // Get the current location to pass props if needed

    return (
        <div className="CommunityPage">
            <div className="CommunityContent">
                <p>
                    Hi and welcome to the Hello World community!
                    <br />
                    Hello World is a community formed by us players who have come together to have fun and share our gaming experiences! 💖
                    <br />
                    We want everyone to have a great time here, and following the rules helps create a positive and safe environment for everyone to enjoy!
                    <br />
                    Be respectful and nice towards other members.
                    <br />
                    Treat others as you would like to be treated.
                    <br />
                    Use the site for its intended purpose.
                    <br />
                    Do not use hate speech or engage in other hateful conduct.
                    <br />
                    Do not promote, coordinate, or engage in harassment.
                    <br />
                    Do not threaten to harm another individual or group of people.
                    <br />
                    Harassing, engaging in hateful speech, or threatening other members will result in a permanent ban.
                </p>
            </div>
        </div>
    );
}

export default Community;
