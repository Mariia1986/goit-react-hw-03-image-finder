import React from "react";
import  "./ImageGalleryItem.css";
import PropTypes from "prop-types";

const ImageGalleryItem=({imgUrl, imgAlt, onClick, imgSrc})=>{
    return(
<li className="ImageGalleryItem" onClick={()=>onClick( imgSrc, imgAlt)}>
  <img src={imgUrl} alt={imgAlt} className="ImageGalleryItem-image" />
</li>
    )
}

// ImageGalleryItem.propTypes = {
 
// };

export default ImageGalleryItem;
