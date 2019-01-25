import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';

import "../components/stylings/ColorScheme";
import '../components/stylings/globalStyle'


class Code extends Component {
  constructor(props) {
    super(props)
      this.state = {
        idSelected: '',
        fwamImageUrl: process.env.PUBLIC_URL + '/assets/fwamLogo.png',
        krhx3ImageUrl: process.env.PUBLIC_URL + '/assets/architecture-driveway-home.jpg',
        liquorLandImageUrl: process.env.PUBLIC_URL + '/assets/wines.jpg',
        spotifyImageUrl: process.env.PUBLIC_URL + '/assets/spotify.jpg',
        giphyImageUrl: "https://developers.giphy.com/static/img/api.c99e353f761d.gif",
        crystalImageUrl: process.env.PUBLIC_URL + '/assets/beads-colorful-colourful.jpg',
        friendsAppImageUrl: process.env.PUBLIC_URL + '/assets/adorable-animal-blur.jpg'
      }
  }

  // wanderSumClick = () => {
  //   this.setState({ reactPortBtnClick: true })
  //   window.location.href = "https://wander-sum.herokuapp.com/";
  // }

  buttonClick = ({ target: { name } }) => {
    if ( name === 'fwam' ){
      return window.location.href = "https://www.fortworthaviationmuseum.com";
    } else if ( name === 'krhx3') {
      return window.location.href = "https://krhx3.com/";
    } else if ( name === 'liquorland') {
      return window.location.href = "http://liquorland.us/";
    } else if ( name === 'spotify') {
      return window.location.href = "https://spotify-project.herokuapp.com/";
    } else if ( name === 'giphy') {
      return window.location.href = "https://dewinurdin.github.io/GiphyAPI/GiphyApi.html";
    } else if ( name === 'crystalgame') {
      return window.location.href = "https://dewinurdin.github.io/Crystal-Game/index.html";
    } else if ( name === 'friendsFinder') {
      return window.location.href = "https://myfriendsfinder.herokuapp.com/";
    }
  }

  render() {
    return (
      <Container style={{ textAlign: 'center' }}> 
        <Row> 
          <Col xs="4"> 
              <img src={this.state.fwamImageUrl} alt='Fort Worth Aviation'
                name="fwam"
                style={{ padding: '2rem' }}
                onClick={this.buttonClick}                
                rounded responsive 
                />                  
                  <p style={{color: 'white'}}><strong>Fort Worth Aviation Museum</strong></p>                                   
            </Col>    
            <Col xs="4"> 
              <img src={this.state.krhx3ImageUrl} alt='KRHX3'
                name="krhx3"
                onClick={this.buttonClick}
                rounded responsive 
                />                  
                  <p><strong>KRHX3</strong></p>                                   
            </Col>

            <Col xs="4"> 
              <img  src={this.state.liquorLandImageUrl} alt='Liquor Land'
                name="liquorland"
                onClick={this.buttonClick}
                rounded responsive 
                />                  
                  <p><strong>Liquor Land</strong></p>                                   
            </Col>

            <Col xs="4"> 
              <img   src={this.state.spotifyImageUrl} alt='spotify'
                name="spotify"
                onClick={this.buttonClick}
                rounded responsive 
                />                  
                  <p><strong>Spotify Project</strong></p>                                   
            </Col>

            <Col xs="4">    
              <img  src={this.state.giphyImageUrl} alt='giphy ajax'
                name="giphy"
                onClick={this.buttonClick}
                rounded responsive 
                />                 
                  <p><strong>AJAX with Giphy API</strong></p>            
            </Col>
            
            <Col xs="4">
              <img  src={this.state.crystalImageUrl} alt='Crystal Game' 
                name="crystalgame"
                onClick={this.buttonClick} 
                rounded responsive 
                />
                  <p><strong>Crystal Collector Game</strong></p>              
            </Col> 

            <Col xs="4"> 
              <img src={this.state.friendsAppImageUrl} alt='friends' 
                name="friendsFinder"
                onClick={this.buttonClick} 
                rounded responsive 
                />
                  <p><strong>Friend Finder</strong></p>              
            </Col>    

            {/* <Col xs={4} md={4}>
            <Image src="https://media.giphy.com/media/xT1R9TaUQfgf5qQZEY/giphy.gif" 
              style={{ height: 200, width: 350, marginTop: 30 }} 
              onClick={this.wanderSumClick}
              rounded responsive 
              />                  
                <P> Wander Sum </P>                  
          </Col>  */}       
          
        </Row>
      </Container>
    );
  }
}

export default Code;