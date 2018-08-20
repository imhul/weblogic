import React, { Component } from 'react';
import Gravatar from 'react-gravatar';

const texts = [
    {
        name: 'introduce',
        text: () => ( 
            <div> 
                {/* TODO: Need to be styled */}
                <Gravatar email="blashirk@gmail.com" size={ 100 } />
                <div>I believe that design makes the world a better ;)</div>
                <div>"Having gone a long way, 
                    having gained experience, 
                    I chose the best of modern 
                    technologies for creating 
                    my products. I create sites 
                    and applications, 
                    drawing inspiration from 
                    the Material Design concept
                    and React library for building 
                    user interfaces."</div>
                    <div>
                        <p>Tkachuk Zakhar</p>
                        <p>front-end developer</p>
                        {/* TODO: Need set popup */}
                        <a href="../../../data/summary.rar" title="summary" class="uk-button uk-button-default uk-button-large uk-float-right uk-margin msgs"
                    data-message="<span uk-icon='icon: check'></span> Summary already downloaded">
                    <span class="uk-margin-right" uk-icon="icon: cloud-download"></span>summary</a>
                    </div>
            </div>
        )
    },
    {
        name: 'about',
        text: () => (<div>about</div>)
    },
    {
        name: 'works',
        text: () => (<div>works</div>)
    },
    {
        name: 'contacts',
        text: () => (<div>contacts</div>)
    }
];

export default texts;