import React from 'react';
import TitleComponent from './TitleComponent.js'
import VideoComponent from './VideoComponent.js'

class VideoWithTitle extends React.Component {

	render () {

		const title = this.props.title;
		const src = this.props.source;

	    return (
            <div>

              <div style={{'text-align':'center'}}>
                <h2>
                  <TitleComponent title={title} />
                </h2>
              </div>

              <VideoComponent title={title} source={src} />
            
            </div>
        );
    }
}

export default VideoWithTitle;