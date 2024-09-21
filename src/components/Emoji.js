import React from 'react';
import CookingEmoji from '../img/Celebration_Cake.png';
import HuntingEmoji from '../img/Hunters_Horn.png';
import BugEmoji from '../img/Rainbow-Tipped_Butterfly.png';
import ForagingEmoji from '../img/Dari_Cloves.png';
import FishingEmoji from '../img/Long_Nosed_Unicorn_Fish.png';
import MiningEmoji from '../img/Amethyst.png';

const emojiMap = {
    PaliaCake: CookingEmoji,
    HuntersHorn: HuntingEmoji,
    RainbowTipped_Butterfly: BugEmoji,
    Dari_Cloves: ForagingEmoji,
    silversalmon: FishingEmoji,
    starstone_amethyst: MiningEmoji,
};

const Emoji = ({ name, alt }) => {
    const src = emojiMap[name];

    return (
        <div className="emoji-container">
            <img className="emoji" src={src} alt={alt} />
        </div>
    );
};

export default Emoji;
