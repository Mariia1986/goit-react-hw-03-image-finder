import React, { Component } from "react";
import  './Button.css';
import PropTypes from "prop-types";

const Button=({onClick})=>{
return(

      <button type="button" className="Button" onClick={onClick}>
        Load more
      </button>
    

)

}

export default Button