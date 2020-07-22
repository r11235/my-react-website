import React from 'react';
import './Dog.css';
import ListOfVideos from './ListOfVideos.js';
import videolist from './videolist.js';

// <VideoWithTitle title="" source='' />

function Dog() {
	return (
            <div className='Dog'>

              <div> <ListOfVideos list={videolist} /> </div>

            </div>
  )
}

export default Dog;