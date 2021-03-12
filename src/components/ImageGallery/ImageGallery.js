import React from "react";
import "./ImageGallery.css";
import ImageGalleryItem from '../ImageGalleryItem'
import PropTypes from "prop-types";

const ImageGallery=({gallery})=>{
console.log(gallery)
return(
    <ul className="ImageGallery">
        {gallery.map((el)=>(<ImageGalleryItem  key={el.id} imgUrl={el.webformatURL}/>))}
 
</ul>
)

}

// ImageGallery.propTypes={
//  }



export default ImageGallery;

