import React from 'react';
import VideoWithTitle from './VideoWithTitle.js';

function ListOfVideos(props) {
	return (
    	props.list.map(item => <VideoWithTitle title={item.title} source={item.source} />)
    );
}

export default ListOfVideos;