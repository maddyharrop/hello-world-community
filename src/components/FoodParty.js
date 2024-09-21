import React from 'react';
import WidgetBot from '@widgetbot/react-embed'

const Party = () => (
    <div className='Party'>
        <div >
            <h2>Food Party</h2>
            <p>Links to our latest Palia food party</p>
        </div>
        <div className='widget-container'>
            <WidgetBot
                server="1270711335683887154"
                channel="1273215951915188285"
                width="100%" /* Set width to 100% to fill the parent */
                height="400px" /* Set height to 100% */
            />
        </div>
    </div>

)

export default Party