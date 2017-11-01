import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import axios from 'axios';
import env from './environment';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
      images: [],
    };
  }

  componentWillMount() {
    axios.get(`${env.serverURL}/api/photos`).then((photos) => {
      console.log(photos.data);
      const images = photos.data.map((photo) => {
        return {
          original: photo,
          thumbnail: photo,
        };
      });
      this.setState({ images });
    });
  }

  render() {
    return (
      <div className="main_card">
        <h4 id="title"> Photo Gallery </h4>
        <p id="subtitle"> Here's what's happening in the lab </p>
        <ImageGallery
          items={this.state.images}
          slideInterval={20000}
          lazyLoad
          autoPlay
          showThumbnails={false}
        />
      </div>
    );
  }
}

export default Gallery;
