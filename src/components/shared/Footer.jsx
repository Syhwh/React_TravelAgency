import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Image, Grid,Row,Col} from 'react-bootstrap';
import '../../Styles/footer.css'

export default class Navigation extends Component{
    render(){
        return(
            <div>

            <footer className="footer">
                <Grid>
                <Row className= "show-grid  ">
                    <Col xs={12} sm={12} className="icons ">
                    <div className="social-icons">
                    <Image src="/assets/img/logo_facebook.png" className="social-icon"/>
                    <Image src="/assets/img/logo_twiter.png" className="social-icon"/>
                    <Image src="/assets/img/logo_google+.png" className="social-icon"/>
                    <Image src="/assets/img/logo_linkedin.png" className="social-icon"/>
                    </div>
                    </Col>
                </Row>
                <Row className= "show-grid text-center">
                <Col xs={12} sm={4} className="icons"> 
                <Image src="/assets/img/logo_place.png" className="social-icon"/>
                 <div clasName="info-footer">
                 <h4> ADDRESS</h4>
                 <p> 868 Street Name, City</p>
                 <p>Branford, 68686</p>              
                </div>
                </Col>
                <Col xs={12} sm={4} className="icons"> 
                <Image src="/assets/img/logo_email.png" className="social-icon"/>
                 <div clasName="info-footer">
                 <h4> EMAIL</h4>
                 <p> info@company.com</p>
                 <p>support@company.com</p>              
                </div>
                </Col>

                <Col xs={12} sm={4} className="icons"> 
                <Image src="/assets/img/logo_phone.png" className="social-icon"/>
                 <div clasName="info-footer">
                 <h4> ADDRESS</h4>
                 <p> +123456789</p>
                 <p>+44(0)424 244 4422</p>              
                </div>
                </Col>
                
                


                </Row>
                </Grid>
                </footer>


            </div>
            
        )}
    }