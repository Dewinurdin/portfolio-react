import { injectGlobal } from 'styled-components';
import { ColorScheme } from './ColorScheme';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Zilla+Slab+Highlight');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    color: ${ColorScheme.mainText}; 
  }

  h4, h5, h6 {
    font-family: 'Open Sans', sans-serif;
  }
  p {
    font-size: 1.25rem;
    color: #ffffff;
    margin-top: 1rem;
  }

  hr {
    width: 70%;
  }
  a {
    text-decoration: none;
    font-weight: bold;
    color: ${ColorScheme.secondary};
    transition: all .3s ease;
    &:hover {
      text-decoration: none;
      color: ${ColorScheme.primary};
    }
    &:focus {
      text-decoration: none;
      color: ${ColorScheme.primary};
      
    }
  }
  input[type=text], textarea {
    border-style: groove;
    border-width: 1px;
    padding: 1px;
  }
  button {
    padding: 5px 10px;
    background: 0 0;
    border: 2px solid ${ColorScheme.secondary};
    border-radius: 3px;
    display: block;
    margin: 0 auto;;
    color: ${ColorScheme.secondary};
    font-family: Gotham,Helvetica,Arial,sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    transition: all .3s ease;
    &:hover {
      background: ${ColorScheme.primary};
      color: #fff;
      border-color: ${ColorScheme.primary};
    }
  }
  
  img {
    height: 12em;
    border-radius: 3px;
    width: 90%;
    margin-top: 1rem;
    background-color: #ffffff;
  }

  @media only screen and (max-width: 375px) {
    img {
      height: 5rem;
      width: 7.5rem;
      border-radius: 3px;
      margin-top: 1rem;
      background-color: #ffffff;
    }
    p {
      font-size: 0.65rem;
      text-align: center;
      padding-top: .5rem;
    }
    
    h1 {
      font-size: 1px;
      color: black;
    }
  }
    


`;