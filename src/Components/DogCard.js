import React from "react";

class DogCard extends React.Component {

state={
  clicked: false
}

clickHandle=()=>{
  this.setState({
    clicked: !this.state.clicked
  })
}

  render() {
    return (
      <div>
        <h2>{this.props.dog.name}</h2>
        <img alt="" src={this.props.dog.img} />
        <button onClick={this.clickHandle}>Bark</button>
        <h1 className='bark'>{this.state.clicked ? "RUFF": ""}</h1>
      </div>
    );
  }
}


export default DogCard;
