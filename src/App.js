import React, { Component } from "react";
import "./App.css";
import pixaBay from "./sourses/apiService";
import Searchbar from "./components/Serchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import Spinner from "./components/Loader";
const { getFetch } = pixaBay;

class App extends Component {
  state = {
    query: "",
    page: 1,
    gallery: [],
    status: "",
    error: "",
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (query !== prevState.query || page !== prevState.page) {
      this.setState({ status: "pending" });
      this.getImage(query, page);
    }
  }

  getImage(query, page) {
    getFetch(query, page)
      .then((result) => {
        console.log(result);
        if (result.length) {
          this.setState((prev) => ({
            gallery: [...this.state.gallery, ...result],
            status: "resolved",
          }));
          if (page !== 1) {
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: "smooth",
            });
          }
        } else {
          this.setState({
            status: "rejected",
            error: `There no images on your query ${query}`,
          });
        }
      })
      .catch((err) => {
        this.setState({
          images: [],

          status: "rejected",
        });
      });
  }

  getQuery = (query) => {
    this.setState((prevstate) => {
      if (prevstate.query === query) {
        return;
      }
      return { query, page: 1, gallery: [] };
    });
  };

  getPage = () => {
    this.setState((prev) => ({ page: prev.page + 1 }));
  };

  render() {
    const { status, gallery, error } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.getQuery} />
        {(status === "pending" || status === "resolved") && (
          <ImageGallery gallery={gallery} />
        )}
        {status === "resolved" && gallery.length && (
          <Button onClick={this.getPage} />
        )}
        {status === "rejected" && <div className="errorContainer">{error}</div>}
        {status === "pending" && (
          <div className="container">
            <Spinner />
          </div>
        )}
      </div>
    );
  }
}

export default App;
