import React from 'react';
import './VideoComponent.css'
// width='852' height='479'
// <meta name="viewport" content="width=device-width, initial-scale=1.0">

function VideoComponent(props){
	return (
        <div className="Video">
            <iframe allowfullscreen title={props.title} width='468.6' height='263.45'
                    scrolling='no' frameborder='0' style={{border: 'none',}} 
                    src={props.source}>
            </iframe>
        </div>
    )
};

export default VideoComponent;