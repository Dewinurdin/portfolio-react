import React, { Component } from 'react';
import { CenteredHeader } from '../App';
import { Container } from 'reactstrap'

class Home extends Component {
  render() {
    return (
      <Container fluid> 
        <CenteredHeader><strong>Hi! I'm Dewi. <br/>I'm a Web developer based in DFW area, TX.</strong></CenteredHeader>

        <h4><strong>I'm comfortable throughout the stack, but my passion lies in the back end development.</strong></h4>
        <h4><strong>My goal is to take your brand to the next level.</strong></h4>
    
      </Container>
    );
  }
}
export default Home;