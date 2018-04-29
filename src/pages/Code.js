import React, { Component } from "react";
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
// import { CenteredHeader } from "../App";
import "../components/stylings/ColorScheme";
// import GiphyImg from '../assets/Giphy.gif';

class Code extends Component {
  constructor(props) {
    super(props)
      this.state = {
        giphyBtnClick: false,
        crystalBtnClick: false
      }
  }

  giphyClick = () => {
    this.setState({ giphyBtnClick: true })
    window.location.href = "https://dewinurdin.github.io/GiphyAPI/GiphyApi.html";
  }

  crystalClick = () => {
    this.setState({ giphyBtnClick: true })
    window.location.href = "https://dewinurdin.github.io/Crystal-Game/index.html";
  }

  render() {
    return (
   
        <div>
          <Grid>
            <Row>
              <Col xs={6} md={4}>
                <Thumbnail src='https://developers.giphy.com/static/img/api.c99e353f761d.gif' alt="242x200">
                  <h4>AJAX with Giphy API</h4>
                  <p></p>
                  <p>
                    <Button 
                      onClick={this.giphyClick}                    
                      bsStyle="primary">Preview me</Button>&nbsp;
                    
                  </p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail src="https://cdn.dribbble.com/users/50064/screenshots/2417760/crystals_high.gif" alt="242x200">
                  <h4>Crystal Collector Game - Jquery</h4>                 
                  <p>
                    <Button 
                    onClick={this.crystalClick}
                    bsStyle="primary">Click to play</Button>&nbsp;
                  </p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail src="/thumbnaildiv.png" alt="242x200">
                  <h3>Thumbnail label</h3>
                  <p>Description</p>
                  <p>
                    <Button bsStyle="primary">Button</Button>&nbsp;
                    <Button bsStyle="default">Button</Button>
                  </p>
                </Thumbnail>
              </Col>
            </Row>
          </Grid>
        </div>
    );
  }
}

export default Code;