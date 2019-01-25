import React, { Component } from 'react';
import styled from 'styled-components';
import { ColorScheme } from './stylings/ColorScheme.js';

const FooterDiv = styled.div`
  padding-top: 0;
  padding-bottom: 0;
  background-color: #edf8fb;
  text-align: center;
  height: 22.25rem;
`;

const SocialIconList = styled.ul`
  margin-top: 4.5rem;
  list-style: none;
  padding: 0;
`;

const SocialIcon = styled.li`
  display: inline;
  color: red;
`;

const FAIcon = styled.i`
  &:hover {
    color: ${ColorScheme.third};
    transition: all .3s ease;
    transform: scale(1.1) translateY(-5px);
  }
`;

class Footer extends Component {
  render() {
    return (
      <FooterDiv>
            <div className="row social" style={{ margin: 0 }}>
              <div className="col-lg-12">
                <SocialIconList>
                  <SocialIcon><a href="mailto:dewinurdin@gmail.com" ><FAIcon className="fa fa-envelope fa-fw fa-2x" /></a></SocialIcon>
                  <SocialIcon><a href="https://www.linkedin.com/in/dewi-nurdin/" ><FAIcon className="fa fa-linkedin fa-fw fa-2x" /></a></SocialIcon>
                  <SocialIcon><a href="https://github.com/DewiNurdin" ><FAIcon className="fa fa-github fa-fw fa-2x" /></a></SocialIcon>
                </SocialIconList>
                <br />
              </div>
            </div>
            <div className="row" id="copyright" style={{ margin: 0 }}>
              <div className="col-lg-12">
                <h5 style={{color: 'black'}}>© 2018 Dewi Nurdin </h5>
              </div>
            </div>
      </FooterDiv>
        );
  }
}

export default Footer;