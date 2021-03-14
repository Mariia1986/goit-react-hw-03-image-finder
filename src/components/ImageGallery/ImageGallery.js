import React, { Component } from "react";
import "./ImageGallery.css";
import ImageGalleryItem from "../ImageGalleryItem";
import Modal from "../Modal";
import PropTypes from "prop-types";

class ImageGallery extends Component {
  state = {
    modalOpen: false,
    imgSrc: "",
    imgAlt: "",
  };

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen, imgSrc: "", imgAlt: "" });
  };

  handleClick = (imgSrc, imgAlt) => {
    this.toggleModal();

    this.setState({ imgSrc, imgAlt });
  };

  render() {
    const { gallery } = this.props;
    const { imgSrc, imgAlt, modalOpen } = this.state;
    return (
      <ul className="ImageGallery">
        {gallery.map((el) => (
          <ImageGalleryItem
            onClick={this.handleClick}
            key={el.id}
            imgUrl={el.webformatURL}
            imgAlt={el.tags}
            imgSrc={el.largeImageURL}
          />
        ))}
        {modalOpen && (
          <Modal
            imgUrl={imgSrc}
            imgAlt={imgAlt}
            closeModal={this.toggleModal}
          />
        )}
      </ul>
    );
  }
}

// ImageGallery.propTypes={
//  }

export default ImageGallery;
