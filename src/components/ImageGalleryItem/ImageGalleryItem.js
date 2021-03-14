import React from "react";
import "./ImageGalleryItem.css";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ imgUrl, imgAlt, onClick, imgSrc }) => {
  return (
    <li className="ImageGalleryItem" onClick={() => onClick(imgSrc, imgAlt)}>
      <img src={imgUrl} alt={imgAlt} className="ImageGalleryItem-image" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  imgUrl: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};
