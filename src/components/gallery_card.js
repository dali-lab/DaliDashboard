import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import axios from 'axios';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
      photos: [],
    };
  }

  componentWillMount() {
    axios.get(`https://dalilab-api.herokuapp.com/api/photos/`)
      .then(res => {
        var images = [];
        for (var i=0; i<res.data.length; i++) {
          var input = {'original': res.data[i]};
          images.push(input);
        }
        this.setState({ photos: images });
      });
  }

  render() {
    const images = this.state.photos;
    return (
      <div className="main_card">
        <h4 id="title"> Photo Gallery </h4>
        <p id="subtitle"> Here's what's happening in the lab </p>
        <ImageGallery
          items={images}
          slideInterval={2000}
          lazyLoad = {true}
          showThumbnails = {false}
        />
      </div>
    );
  }
}

export default Gallery;
