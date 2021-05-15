import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";

class MyCarousel extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: "",
      height: "",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle",
      bottom: '10px'
    };
  }

  static get CARD_STYLE() {
    return {
      height: "200px",
      width: "200px",
      paddingTop: "80px",
      textAlign: "center",
      background: "#52C0F5",
      color: "#FFF",
      fontFamily: "sans-serif",
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "10px",
      boxSizing: "border-box"
    };
  }

  render() {
    return (
      <div style={MyCarousel.CONTAINER_STYLE}>
        <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
          <div style={MyCarousel.CARD_STYLE}>First Card</div>
          <div style={MyCarousel.CARD_STYLE}>Second Card</div>
          <div style={MyCarousel.CARD_STYLE}>Third Card</div>
          <div style={MyCarousel.CARD_STYLE}>Fourth Card</div>
          <div style={MyCarousel.CARD_STYLE}>Fifth Card</div>
        </ReactCardCarousel>
      </div>
    );
  }
}

export default MyCarousel