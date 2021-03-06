import React, { Component } from "react";
import "./Serchbar.css";
import PropTypes from "prop-types";

class Searchbar extends Component {
  state = {
    queryValue: "",
  };
  handleChange = (e) => {
    this.setState({ queryValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;

    onSubmit(this.state.queryValue);
    this.state.queryValue = "";
  };

  render() {
    const { queryValue } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            value={queryValue}
            onChange={handleChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
