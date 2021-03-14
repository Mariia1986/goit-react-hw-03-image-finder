import React, { Component } from "react";
import "./Modal.css";
import { createPortal } from "react-dom";
import { propTypes } from "react-bootstrap/esm/Image";
import PropTypes from "prop-types";

const modalRef = document.getElementById("modal-root");

class Modal extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.onKeyClick);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyClick);
  }

  handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  onKeyClick = (e) => {
    if (e.code === "Escape") {
      this.props.closeModal();
    }
  };

  render() {
    const { imgUrl, imgAlt } = this.props;
    return createPortal(
      <div className="Overlay" onClick={this.handleCloseModal}>
        <div className="Modal">
          <img src={imgUrl} alt={imgAlt} />
        </div>
      </div>,
      modalRef
    );
  }
}

export default Modal;

Modal.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
