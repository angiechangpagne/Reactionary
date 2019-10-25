import React, { Component } from 'react';
import styles from './styles.scss';

function Projects(){

        return(
            <div className='projects'> <h1> Projects</h1>
            <p> JavaScript | Java | React | Redux | Node | Python | MySQL | Fashion(Primary Language) 
                <p> Mandarin | Spanish | CSS/SCSS | Entrepreneurship</p>
            </p>
                <ul> 
                    <li> <span> <img src=""> </img>Google Extension: Synthia</span>
                        <p> Speech Text Synthesizer using Google Open Source Speech API</p>
                    </li>
                    <li> <span> <img src=""> </img>Code-Caine Algorithm App</span></li>
                    <li> <span> <img src=""> </img>Bots and Thots Twitter Bot </span></li>
                    <li> <span> <img src=""> </img>Mischiff Fashion LLC</span></li>
                    <li> <span> <img src=""> </img>Rogue </span>
                    <p> Fashion Collections Catalogue and Designer Tool Development</p></li>
                    <li> <span><img src=""> </img> Machine and Deep Learning with Tensorflow</span> 
                    <p> Github</p></li>

                </ul>

            </div>
        )
}

module.exports=Projects;