import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


function Footer() {
    
    return (
        <footer>
            {/* <div className="box-right-contact">
                <a target="_blank" href="mailto:bibo_1011@yahoo.com"><i className="fas fa-envelope"></i></a>
                <a target="_blank" href="https://github.com/bibo1011"><i className="fab fa-github"></i></a>
                
                <a target="_blank" href="https://www.facebook.com/bibo1011/"><i className="fab fa-facebook"></i></a>
                <a target="_blank" href="https://www.youtube.com/channel/UCejBxvVwKs7Or6Yv6T9DKGw?view_as=subscriber"><i className="fab fa-youtube"></i></a>
            </div> */}

            <Row>
                <Col>
                    {/* <ul className="social-link"> 
                        <li><a target="_blank" href="mailto:bibo_1011@yahoo.com"><i className="small fas fa-envelope"></i></a></li>
                        <li><a target="_blank" href="https://github.com/bibo1011"><i className="small fab fa-github"></i></a></li>

                        <li><a target="_blank" href="https://www.facebook.com/bibo1011/"><i className="small fab fa-facebook"></i></a></li>
                        <li><a target="_blank" href="https://www.youtube.com/channel/UCejBxvVwKs7Or6Yv6T9DKGw?view_as=subscriber"><i className="small fab fa-youtube"></i></a></li>
                    </ul> */}
                    <ul style={{listStyle:'none'}}>
                        <li>&copy; Copyright 2021 bibo1011</li>
                    </ul>
                   

                </Col>
                <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
            </Row>

        </footer>
    )}
export default Footer;