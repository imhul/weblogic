import React from 'react';
import { Language } from '../../../../utils/language/provider';
import Intro from './Intro';
import About from './About';
import Works from './Works';
import Contact from './Contact';

const texts = [
    {
        name: <Language dictionary={{
                english: "Introduce",
                russian: "Вступление"
        }} />,
        text: () => <Intro />
    },
    {
        name: <Language dictionary={{
            english: "About",
            russian: "Обо мне"
    }} />,
        text: () => <About />
    },
    {
        name: <Language dictionary={{
            english: "Works",
            russian: "Работы"
    }} />,
        text: () => <Works />
    },
    {
        name: <Language dictionary={{
            english: "Contacts",
            russian: "Контакты"
    }} />,
        text: () => <Contact />
    }
];

export default texts