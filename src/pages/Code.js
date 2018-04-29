import React, { Component } from "react";
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
// import { CenteredHeader } from "../App";
import "../components/stylings/ColorScheme";

class Code extends Component {
  render() {
    return (
   
        <div>
          <Grid>
            <Row>
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