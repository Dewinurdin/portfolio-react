import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

import "../components/stylings/ColorScheme";

const Image = styled.img`
  width: 15em;
  height: 12em;
  border-radius: 3px;
  width=80%;
  margin-top: 1rem;
`;

class Code extends Component {
  constructor(props) {
    super(props)
      this.state = {
        giphyBtnClick: false,
        crystalBtnClick: false,
        friendFinderBtnClick: false,
        reactPortBtnClick: false,
        krhx3BtnClick: false,
        liquorLandBtnClick: false,
        fwaMuseumBtnClick: false
      }
  }
  fwaMuseum = () => {
    this.setState({ fwaMuseumBtnClick: true })
    window.location.href = "https://www.fortworthaviationmuseum.com";
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
  fwaMuseum = () => {
    this.setState({ friendFinderBtnClick: true })
    window.location.href = "https://www.fortworthaviationmuseum.com";
  } 

  render() {
    return (
      <Container fluid> 
        <Row> 
          <Col xs="4"> 
              <Image src={process.env.PUBLIC_URL + '/assets/fwamLogo.png'} alt='Fort Worth Aviation'
                onClick={this.fwaMuseum}
                rounded responsive 
                />                  
                  <h4><strong>Fort Worth Aviation Museum</strong></h4>                                   
            </Col>    
            <Col xs="4"> 
              <Image src={process.env.PUBLIC_URL + '/assets/architecture-driveway-home.jpg'} alt='KRHX3'
                onClick={this.krhx3Click}
                rounded responsive 
                />                  
                  <h4><strong>KRHX3</strong></h4>                                   
            </Col>

            <Col xs="4"> 
              <Image  src={process.env.PUBLIC_URL + '/assets/wines.jpg'} alt='Liquor Land'
                onClick={this.liquorLandClick}
                rounded responsive 
                />                  
                  <h4><strong>Liquor Land</strong></h4>                                   
            </Col>

            <Col xs="4"> 
              <Image   src={process.env.PUBLIC_URL + '/assets/spotify.jpg'} alt='spotify'
                onClick={this.spotifyProjectClick}
                rounded responsive 
                />                  
                  <h4><strong>Spotify Project</strong></h4>                                   
            </Col>

            <Col xs="4">    
              <Image  src="https://developers.giphy.com/static/img/api.c99e353f761d.gif" alt='giphy ajax'
                onClick={this.giphyClick}
                rounded responsive 
                />                 
                  <h4><strong>AJAX with Giphy API</strong></h4>            
            </Col>
            
            <Col xs="4">
              <Image  src={process.env.PUBLIC_URL + '/assets/beads-colorful-colourful.jpg'} alt='crystal' 
                onClick={this.crystalClick} 
                rounded responsive 
                />
                  <h4><strong>Crystal Collector Game</strong></h4>              
            </Col> 

            <Col xs="4"> 
              <Image src={process.env.PUBLIC_URL + '/assets/adorable-animal-blur.jpg'} alt='friends' 
                onClick={this.friendFinderClick} 
                rounded responsive 
                />
                  <h4><strong>Friend Finder</strong></h4>              
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
      </Container>
    );
  }
}

export default Code;