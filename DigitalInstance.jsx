import React, { Component } from 'react';
import styles from './styles.scss';

export default class DigitalInstance extends Component{
  constructor(){
    super();
  }
    render(){
        return(
          <div className="container"> 
          <p> Los Angeles, CA </p>
          <p>    If you try to understand life, you realize that Code is something much simpler to understand. </p> </div>
          

          <div className="icons">
            <a href=""> Github</a>
            <a href=""> LinkedIn</a>
            <a href=""> Blog</a>
            <a href=""> Company 1</a>
            <a href=""> Other Site</a>
          </div>
        )
    }
}


module.exports=DigitalInstance;