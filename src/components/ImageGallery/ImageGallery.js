import React, { Component } from "react";
import "./ImageGallery.css";
import ImageGalleryItem from '../ImageGalleryItem'
import PropTypes from "prop-types";

class ImageGallery extends Component{

    state = {
        modalOpen: false,
        bigSrc: '',
        bigAlt: '',
      };


render(){
const{gallery}=this.props
return(
    <ul className="ImageGallery">
        {gallery.map((el)=>(<ImageGalleryItem  key={el.id} imgUrl={el.webformatURL} tags={el.
tags
}/>))}
 
</ul>
)

}}

// ImageGallery.propTypes={
//  }



export default ImageGallery;

