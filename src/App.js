import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "./App.css";
import pixaBay from './sourses/apiService'
const {getFetch}= pixaBay

// console.log(getFetch('moon', 1))

class App extends Component {
  state = {
    query:'moon',
    page:1,
    gallery:[]

  };
  
   componentDidMount(){

    const{query, page}=this.state
    getFetch(query, page).then(result=>{
      this.setState({gallery:[...result]})
    })

}

   

 componentDidUpdate(prevProps, prevState){
   
 }


 

  render() {
    
    return (
      <div className="App">
       
      </div>
    );
  }
}

export default App;
