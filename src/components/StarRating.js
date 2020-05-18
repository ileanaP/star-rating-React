import React, { Component } from "react";
import Star from './Star';

class StarRating extends Component {

  // Initialize a 'rating' state
  state = {
    rating:0
  }

  // Write a function that returns 5 Star components
  stars() {
    let stars = [];

    let rating = this.state.rating;

    ([...Array(5).keys()]).forEach(i => {
      let className = i < rating ? "selected" : "";
      stars.push(<Star className={className} fmm={i+1} updateStarRating={this.updateStarRating}/>)
    });

    return stars;
  }

  // Write an event handler that updates the rating state.
  // Pass the function to a Star component via props
  updateStarRating = (fmm) => {
    fmm = Math.min(5, fmm);
    fmm = Math.max(0, fmm);
    this.setState({rating: fmm});
  }


  render() {

    let stars = this.stars();

    return (
      <ul className="course--stars">
        {stars}
      </ul>
    );
  }
}

export default StarRating;