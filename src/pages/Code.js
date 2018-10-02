import React, { Component } from "react";
import { Grid, Row, Col, Image } from 'react-bootstrap';
import "../components/stylings/ColorScheme";

class Code extends Component {
  constructor(props) {
    super(props)
      this.state = {
        giphyBtnClick: false,
        crystalBtnClick: false,
        friendFinderBtnClick: false,
        reactPortBtnClick: false,
        krhx3BtnClick: false,
        liquorLandBtnClick: false
      }
  }
  krhx3Click = () => {
    this.setState({ krhx3BtnClick: true })
    window.location.href = "https://krhx3.com/";
  }
  liquorLandClick = () => {
    this.setState({ liquorLandBtnClick: true })
    window.location.href = "http://liquorland.us/";
  }

  giphyClick = () => {
    this.setState({ giphyBtnClick: true })
    window.location.href = "https://dewinurdin.github.io/GiphyAPI/GiphyApi.html";
  }

  crystalClick = () => {
    this.setState({ crystalBtnClick: true })
    window.location.href = "https://dewinurdin.github.io/Crystal-Game/index.html";
  }

  spotifyProjectClick = () => {
    this.setState({ reactPortBtnClick: true })
    window.location.href = "https://spotify-project.herokuapp.com/";
  }

  wanderSumClick = () => {
    this.setState({ reactPortBtnClick: true })
    window.location.href = "https://wander-sum.herokuapp.com/";
  }

  friendFinderClick = () => {
    this.setState({ friendFinderBtnClick: true })
    window.location.href = "https://myfriendsfinder.herokuapp.com/";
  }  

  render() {
    return (
   
        <div>
          <Grid>
            <Row>
            <Col xs={4} md={4}>
                <Image src={require('../assets/architecture-driveway-home.jpg')} alt='KRHX3'
                  style={{ width: "auto" }} 
                  onClick={this.krhx3Click}
                  rounded responsive 
                  />                  
                    <h4>KRHX3</h4>                                   
            </Col>

            <Col xs={4} md={4}>
                <Image src={require('../assets/wines.jpg')} alt='Liquor Land'
                  style={{ width: "auto" }} 
                  onClick={this.liquorLandClick}
                  rounded responsive 
                  />                  
                    <h4>Liquor Land</h4>                                   
              </Col>

              <Col xs={4} md={4}>
                <Image src={require('../assets/spotify.jpg')} alt='spotify'
                  style={{  width: "auto" }} 
                  onClick={this.spotifyProjectClick}
                  rounded responsive 
                  />                  
                    <h4>Spotify Project</h4>                                   
              </Col>

              <Col xs={4} md={4}>              
                <Image src="https://developers.giphy.com/static/img/api.c99e353f761d.gif" alt='giphy ajax'
                  style={{ width: "auto", paddingLeft: -5 }} 
                  onClick={this.giphyClick}
                  rounded responsive 
                  />                 
                    <h4>AJAX with Giphy API</h4>            
              </Col>

              <Col xs={4} md={4}>
                <Image src={require('../assets/beads-colorful-colourful.jpg')} alt='crystal' 
                  style={{ width: "auto" }}
                  onClick={this.crystalClick} 
                  rounded responsive 
                  />
                    <h4>Crystal Collector Game</h4>              
              </Col> 

              <Col xs={4} md={4}>
                <Image src={require('../assets/adorable-animal-blur.jpg')} alt='friends' 
                  style={{ width: "auto" }}
                  onClick={this.friendFinderClick} 
                  rounded responsive 
                  />
                    <h4>Friend Finder</h4>              
              </Col>    

                {/* <Col xs={4} md={4}>
                <Image src="https://media.giphy.com/media/xT1R9TaUQfgf5qQZEY/giphy.gif" 
                  style={{ height: 200, width: 350, marginTop: 30 }} 
                  onClick={this.wanderSumClick}
                  rounded responsive 
                  />                  
                    <h4> Wander Sum </h4>                  
              </Col>  */}       
             
            </Row>
          </Grid>
        </div>
    );
  }
}

export default Code;