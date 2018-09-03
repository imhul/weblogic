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
        key: 1,
        text: () => <Intro />
    },
    {
        name: <Language dictionary={{
            english: "About",
            russian: "Обо мне"
    }} />,
        key: 2,
        text: () => <About />
    },
    {
        name: <Language dictionary={{
            english: "Works",
            russian: "Работы"
    }} />,
        key: 3,
        text: () => <Works />
    },
    {
        name: <Language dictionary={{
            english: "Contacts",
            russian: "Контакты"
    }} />,
        key: 4,
        text: () => <Contact />
    }
];

export default texts