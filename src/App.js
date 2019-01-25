import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './pages/Home';
import Code from './pages/Code';
import Contact from './pages/Contact';
import Background from './background-blur-clean.jpg'

export const ColorScheme = {
  primary: 'red',
  secondary: 'blue',
  third: 'purple',
  fourth: 'goldenrod'
}

const AppDiv = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-size: 1.15em;
`;

export const CenteredHeader = styled.h3`
  text-align: center;
  margin-bottom: 1.25em;`


const ContainerDiv = styled.div`
  margin: 1% 17% 3% 17%;
  flex: 1;
  font-family: 'Open Sans', sans-serif;
`
class App extends Component {

  render() {
    return (
        <Router>
            <AppDiv 
              className="App"
              style={{background: `url(${Background})`,  backgroundRepeat: 'no-repeat',
              width: '1200'
            }}
            >       
              <ContainerDiv>
                <Header />       
                  <Switch>
                    <Route exact path='/' component={Home} />        
                    <Route exact path='/code' component={Code} />
                    <Route exact path='/contact' component={Contact} />       
          
                  </Switch>          
              </ContainerDiv>
              <Footer />
            </AppDiv>
        </Router>
      );
    }
}

export default App;