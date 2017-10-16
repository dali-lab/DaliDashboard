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

  renderImage(image) {
    return (
      <div className="image-gallery-image">
        <img alt="img" src={image.original} style={{ maxHeight: 200, objectFit: 'scale-down' }} />
      </div>
    );
  }

  renderThumb(image) {
    return (
      <div className="image-gallery-image">
        <img alt="img" src={image.thumbnail} style={{ height: 70, objectFit: 'scale-down' }} />
      </div>
    );
  }

  render() {
    return (
      <div className="main_card">
        <h4 id="title"> Photo Gallery </h4>
        <p id="subtitle"> Here's what's happening in the lab </p>
        <ImageGallery
          items={this.state.images}
          slideInterval={2000}
          renderItem={(item) => this.renderImage(item)}
          renderThumbInner={(item) => this.renderThumb(item)}
          autoPlay
          lazyLoad
          slideDuration={5000}
        />
      </div>
    );
  }
}

export default Gallery;
