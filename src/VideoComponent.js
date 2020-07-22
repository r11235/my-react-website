import React from 'react';
import './VideoComponent.css'

function VideoComponent(props){
	return (
        <div className="Video">
            <iframe allowfullscreen title={props.title} className="" width='852' height='479'
                    scrolling='no' frameborder='0' style={{border: 'none'}}
                    src={props.source}></iframe>
        </div>)};

export default VideoComponent;