import React, { Component } from "react";
import DogsData from '../dogs'
import DogCard from '../Components/DogCard'



class DogList extends Component {

  state ={
    dogs: []
  };

  componentDidMount(){
      this.setState({dogs: DogsData})
  }

  render() {
    const arrayOfDogCards = this.state.dogs.map((dogObj)=> 
      <DogCard key={dogObj.id} dog={dogObj}/>
    )
    return <div className="dogContainer">
              {this.state.dogs.length > 0 ? arrayOfDogCards : <h1>Loading...</h1>}
            </div>
  }
}

export default DogList;
