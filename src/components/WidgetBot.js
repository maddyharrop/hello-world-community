import React from 'react';
import WidgetBot from '@widgetbot/react-embed'

const Widget = () => (
    <div className="Sidebar">
        <div className="ContentSection">
            <h2>Community Images</h2>
            <p>Share in our fun!</p>
        </div>
        <WidgetBot
            server="1270711335683887154"
            channel="1278064177835016314"
            width="350"
            height="1340"
        />
    </div>

)

export default Widget