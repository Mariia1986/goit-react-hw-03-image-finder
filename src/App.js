import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "./App.css";
import pixaBay from './sourses/apiService'
import Searchbar from './components/Serchbar'
import ImageGallery from './components/ImageGallery'
const {getFetch}= pixaBay


// console.log(getFetch('moon', 1))

class App extends Component {
  state = {
    query:'moon',
    page:1,
    gallery:[],

  };
  
   componentDidMount(){

    const{query, page}=this.state
    getFetch(query, page).then(result=>{
      this.setState({gallery:[...result]})
      
    })

}

   

 componentDidUpdate(prevProps, prevState){
   
 }


 getQuery =(query) => {
 
  this.setState({ query });
};

getPage=()=>{
  this.setState({page: this.prevState.page+1 });
}
  render() {
    
    return (
      <div className="App">
       <Searchbar getQuery={this.getQuery}/>
       <ImageGallery gallery={this.state.gallery}/>
      </div>
    );
  }
}

export default App;
