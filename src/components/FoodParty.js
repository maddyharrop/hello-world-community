import React from 'react';
import WidgetBot from '@widgetbot/react-embed';

const FoodParty = () => (
    <div className='Party'>
        <h2>Food Party</h2>
        <p>Links to our latest Palia food party</p>
        <div className='widget-container'>
            <WidgetBot
                server="1270711335683887154"
                channel="1273215951915188285"
                width="100%"
                height="400px"
            />
        </div>
    </div>
);

export default FoodParty;
