import React from 'react';
import Intro from './Intro';
import About from './About';
import Works from './Works';
import Contact from './Contact';

const texts = [
    {
        name: 'introduce',
        text: () => <Intro />
    },
    {
        name: 'about',
        text: () => <About />
    },
    {
        name: 'works',
        text: () => <Works />
    },
    {
        name: 'contacts',
        text: () => <Contact />
    }
];

export default texts