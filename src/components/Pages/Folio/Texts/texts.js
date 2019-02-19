import React from 'react';
import { Language } from '../../../../utils/language/provider';
import Intro from './Intro';
import Roadmap from './Roadmap';
import Works from './Works';
import Contact from './Contact';
import { Icon } from 'antd';

const texts = [
    {
        name: <div><Language dictionary={{
                english: "Intro",
                russian: "Вступление"
        }} /><Icon type="poweroff" /></div>,
        key: 1,
        text: <Intro />
    },
    {
        name: <div><Language dictionary={{
            english: "Roadmap",
            russian: "Roadmap"
        }} /><Icon type="compass" /></div>,
        key: 2,
        text: <Roadmap />
    },
    {
        name: <div><Language dictionary={{
            english: "Works",
            russian: "Работы"
        }} /><Icon type="rocket" /></div>,
        key: 3,
        text: <Works />
    },
    {
        name: <div><Language dictionary={{
            english: "Contacts",
            russian: "Контакты"
        }} /><Icon type="message" /></div>,
        key: 4,
        text: <Contact />
    }
];

export default texts;