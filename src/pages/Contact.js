import React, { Component } from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

import { CenteredHeader } from '../App'

const FormInput = {
  width: '60%',
  display: 'block',
  align: 'center',
  marginLeft: '20%',
  textAlign: 'center'
}

const EmailMe = styled.p`
  text-align: center;
  padding: 4%;
  font-size: 1.75rem;
`

const PortButton = styled.a`
  padding: 10px 15px;
  background: 0 0;
  ${'' /* border: 2px solid ${ColorScheme.secondary}; */}
  border-radius: 3px;
  margin: 0 5px;
  ${'' /* color: ${ColorScheme.secondary}; */}
  font-family: Gotham, Helvetica, Arial, sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  transition: all 0.3s ease;
  &:hover {
    ${'' /* background: ${ColorScheme.primary}; */}
    color: #fff;
    ${'' /* border-color: ${ColorScheme.primary}; */}
  }
  @media (max-width: 600px) {
    padding: 5px 7px;
  }
`;

class Contact extends Component {

  render() {
    return (
      <Container style={{ textAlign:'center' }}>
        <CenteredHeader>Get in touch with me!</CenteredHeader>

        <Form action="https://formspree.io/dewinurdin@gmail.com" method="POST">
          <FormGroup>
            <Label for="name">Name </Label>
            <Input type="name" name="name" placeholder="Your name" 
              style={ FormInput}
            />
          </FormGroup>

          <FormGroup>
            <Label for="email">Email </Label>
            <Input type="email" name="email" placeholder="your-email@email.com" 
              style={ FormInput}
            />
          </FormGroup>

          <FormGroup>
            <Label for="message">Message</Label>
            <Input type="textarea" name="message" 
              style={{ width: '60%', height: '15rem', marginLeft: '20%'}}
            />
          </FormGroup>

          <Button>Submit</Button>

        </Form>

        <EmailMe>Or, just email me directly at <a href="mailto:dewinurdin@gmail.com" ><strong>dewinurdin@gmail.com</strong></a>.</EmailMe>

        <hr/> 
        <CenteredHeader><PortButton href="https://docs.google.com/document/d/1H-za2Nh4uU0sUEgbE4uTF7_9U89CQ6qswVosLbL_3n8/edit?usp=sharing" target="_blank">Download My Resume</PortButton></CenteredHeader>
      </Container>
    );
  }
}

export default Contact;