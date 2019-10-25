//domain site with components written in jsx(for now all in one file with App as main component)
//App holds the state, child components access thorugh .props.{}

import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';
import { render } from 'react-dom'


//import components and stylesheets
import 'styles.scss';

//App holds state and uses lifecycle methods, so everything is rendered in sync
//binding other component functions is done in the constructor
class App extends Component{
    constructor(props){
        super(props); //super helps the virtual DOM recognize this as a Component object thype,
        //must have super constructor as the first line 
        this.state={

        };
        // this is the current context of the App constructor(Top of Component Hierarchy super)
        this.toggle=this.toggle.bind(this);
        this.refresh=this.refresh.bind(this);
        this.getFreshState=this.getFreshState.bind(this);
    }


    componentDidMount(){
        document.title="Angen Changpagne";
    }
    componentDidUpdate(){
        
    }
    
    render(){


        return (<div id="cyborg">
            <nav>  <span><DigitalInstance> </DigitalInstance> </span>   </nav>
            <Code-caine> </Code-caine>



        </div>
        );
    }
}

export default App;