import React from 'react';
import { Language } from '../../../../utils/language/provider';
import Intro from './Intro';
import About from './About';
import Works from './Works';
import Contact from './Contact';

const texts = [
    {
        name: <Language dictionary={{
                english: "introduce",
                russian: "вступление"
        }} />,
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