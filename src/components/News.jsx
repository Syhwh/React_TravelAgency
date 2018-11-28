import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron,Grid,Col,Image,Button} from 'react-bootstrap';

export default class News extends Component{
    render(){
        return(
            <Grid>
                <Jumbotron>
                    <h2>Welcome</h2>
                    <p>NEWS</p>
                </Jumbotron>
                <Link to="/about">
                <Button bsStyle="primary">Go to About</Button></Link>
            </Grid>
        )
    }
}