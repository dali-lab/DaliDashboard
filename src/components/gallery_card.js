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
      photos: [],
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

  componentWillMount() {
    axios.get('https://dalilab-api.herokuapp.com/api/photos/')
      .then(res => {
        const images = res.data.map((data) => {
          return { original: data };
        });
        this.setState({ photos: images });
      });
  }

  render() {
    return (
      <div className="main_card">
        <h4 id="title"> Photo Gallery </h4>
        <p id="subtitle"> Here's what's happening in the lab </p>
        <ImageGallery
          items={this.state.photos}
          slideInterval={2000}
          lazyLoad
          showThumbnails={false}
        />
      </div>
    );
  }
}

export default Gallery;
