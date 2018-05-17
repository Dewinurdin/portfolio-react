import React, { Component } from "react";
import { Grid, Row, Col, Thumbnail, Button, Image } from 'react-bootstrap';
// import { CenteredHeader } from "../App";
import "../components/stylings/ColorScheme";
// import GiphyImg from '../assets/Giphy.gif';

class Code extends Component {
  constructor(props) {
    super(props)
      this.state = {
        giphyBtnClick: false,
        crystalBtnClick: false,
        reactPortBtnClick: false
      }
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
    this.setState({ reactPortBtnClick: true })
    window.location.href = "https://myfriendsfinder.herokuapp.com/";
  }
  

  render() {
    return (
   
        <div>
          <Grid>
            <Row>
              <Col xs={6} md={4}>
                <Image src="https://media.giphy.com/media/QkXGUuYckwS9W/giphy.gif" 
                  style={{ height: 200, width: 350 }} 
                  onClick={this.spotifyProjectClick}
                  rounded responsive 
                  />                  
                    <h4>Spotify Project</h4>                                   
              </Col>

              <Col xs={6} md={4}>              
                <Image src="https://developers.giphy.com/static/img/api.c99e353f761d.gif"  
                  style={{ height: 200, width: 370 }} 
                  onClick={this.giphyClick}
                  rounded responsive 
                  />                 
                    <h4>AJAX with Giphy API</h4>
                  
                  {/* <p>
                    <Button 
                      onClick={this.giphyClick}                    
                      bsStyle="primary">Preview me</Button>&nbsp;                    
                  </p> */}               
              </Col>

              <Col xs={6} md={4}>
                <Image src="https://cdn.dribbble.com/users/50064/screenshots/2417760/crystals_high.gif" 
                  style={{ height: 200, width: 350 }}
                  onClick={this.crystalClick} 
                  rounded responsive 
                  />
                    <h4>Crystal Collector Game</h4>              
              </Col> 

              <Col xs={6} md={4}>
                <Image src="https://media.giphy.com/media/xT1R9TaUQfgf5qQZEY/giphy.gif" 
                  style={{ height: 200, width: 350, marginTop: 30 }} 
                  onClick={this.wanderSumClick}
                  rounded responsive 
                  />                  
                    <h4> Wander Sum </h4>                  
              </Col> 

              <Col xs={6} md={4}>
                <Image src="https://media.giphy.com/media/Z21HJj2kz9uBG/giphy.gif" 
                  style={{ height: 200, width: 350, marginTop: 30 }}
                  onClick={this.crystalClick} 
                  rounded responsive 
                  />
                    <h4>Friend Finder</h4>              
              </Col>           
             
            </Row>
          </Grid>
        </div>
    );
  }
}

export default Code;