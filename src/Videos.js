import React from 'react';
import './Videos.css';
import ListOfVideos from './ListOfVideos.js';
import videolist from './videolist.js';

// <VideoWithTitle title="" source='' />

function Videos() {
	return (
            <div className='Videos'>

              <div> <ListOfVideos list={videolist} /> </div>

            </div>
  )
}

export default Videos;