import React from 'react';
import WidgetBot from '@widgetbot/react-embed';
import Emoji from './Emoji';

const CommParty = () => (
    <div className='Party'>
        <div>
            <h2>Community Party</h2>
            <p>Invited from our community for parties:</p>
            <ul className='comm-party-list'>
                <li>
                    <Emoji name="PaliaCake" alt="Cooking Emoji" />
                    Cooking Party
                </li>
                <li>
                    <Emoji name="HuntersHorn" alt="Hunting Emoji" />
                    Hunting Party
                </li>
                <li>
                    <Emoji name="RainbowTipped_Butterfly" alt="Bug Emoji" />
                    Bug Party
                </li>
                <li>
                    <Emoji name="Dari_Cloves" alt="Foraging Emoji" />
                    Foraging Party
                </li>
                <li>
                    <Emoji name="silversalmon" alt="Fishing Emoji" />
                    Fishing Party
                </li>
                <li>
                    <Emoji name="starstone_amethyst" alt="Mining Emoji" />
                    Mining Party
                </li>
            </ul>
        </div>
        <div className='widget-container'>
            <WidgetBot
                server="1270711335683887154"
                channel="1286790581279785042"
                width="100%"
                height="400px"
            />
        </div>
    </div>
);

export default CommParty;
