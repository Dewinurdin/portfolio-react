import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

class Parallax extends React.Component {
    render (){
        return (
            <Grid>
            <Row>
              <Col xs={6} md={4}>
                <Image src="https://developers.giphy.com/static/img/api.c99e353f761d.gif"  style={{ height: 200, width: 350 }} rounded responsive />
              </Col>
              <Col xs={6} md={4}>
                <Image src="https://cdn.dribbble.com/users/50064/screenshots/2417760/crystals_high.gif" style={{ height: 200, width: 350 }} rounded responsive />
              </Col>
              <Col xs={6} md={4}>
                <Image src="https://media.giphy.com/media/FgTqKY4QECTOU/giphy.gif" style={{ height: 200, width: 350 }} rounded responsive />
              </Col>
            </Row>
          </Grid>
       
            // <section>
            //     <img class="mySlides" src="https://vignette.wikia.nocookie.net/austinally/images/1/14/Random_picture_of_shark.png/revision/latest?cb=20150911004230" alt="a" style={{width: "50%" }} />
            //     <img class="mySlides" src="https://wallpaperbrowse.com/media/images/750826.gif" alt="b" style={{width: "50%" }} />
            //     <img class="mySlides" src="https://wallpaperbrowse.com/media/images/0d1a2e8c94f7d902b16340a35d51fd6f--baby-pandas-giant-pandas.jpg" alt="c" style={{width: "50%" }} />
            // </section>
        

        );
    }
    
}

export default Parallax;