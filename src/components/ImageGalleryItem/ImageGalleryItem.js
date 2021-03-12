import React from "react";
import  "./ImageGalleryItem.css";
import PropTypes from "prop-types";

const ImageGalleryItem=(imgUrl)=>{
    return(
<li className="ImageGalleryItem">
  <img src={imgUrl} alt="#" className="ImageGalleryItem-image" />
</li>
    )
}

// ImageGalleryItem.propTypes = {
 
// };

export default ImageGalleryItem;
