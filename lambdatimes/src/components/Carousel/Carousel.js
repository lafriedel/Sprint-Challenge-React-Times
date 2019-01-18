import React, { Component } from 'react';
import { carouselData } from '../../data'

// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [],
      index: 0,
      displayedImg: ""
    }
  }
  componentDidMount(){
    this.setState({
      images: carouselData,
      displayedImg: carouselData[0]
    })
  }

  leftClick = () => {

  }

  rightClick = () => {
    if (this.state.index < 3) {
      this.setState(prevState => ({index: ++this.state.index, displayedImg: carouselData[this.state.index]}))
    } else {
      this.setState({
        index: 0,
        displayedImg: carouselData[0]
      })
    }

  }

  selectedImage = () => {
    return <img src={this.state.displayedImg} style={{display: 'block'}} />
  }
  
  render(){
    console.log(this.state.displayedImg);
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}