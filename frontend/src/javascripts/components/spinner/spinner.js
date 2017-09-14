import React from 'react';
import { RingLoader } from 'react-spinners';
import './spinner.scss';

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div className='spinner-block'>
        <div className='sweet-loading'>
          <RingLoader size={180}
            color={'#ffffff'} 
            loading={this.state.loading} 
          />
          <div className='loading-text'>Loading...</div>
        </div>
      </div>
    )
  }
}

export default Spinner