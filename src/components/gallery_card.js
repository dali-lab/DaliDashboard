import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    };
  }

  render() {
    const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/',
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/',
      },
    ];
    return (
      <div className="main_card">
        <h4 id="title"> Photo Gallery </h4>
        <p id="subtitle"> Here's what's happening in the lab </p>
        <ImageGallery
          items={images}
          slideInterval={2000}
        />
      </div>
    );
  }
}

export default Gallery;
