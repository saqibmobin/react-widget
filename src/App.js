import React from 'react';
import Accordion from './components/Accordion';

const items = [
    {
        title: 'Why use react as a frontend framework?',
        content: 'Because react is awesome.',
    },
    {
        title: 'What is the capital of slovenia?',
        content: 'Ljubljana is the capital of slovenia.',
    },
    {
        title: 'Dili is the capital of which country?',
        content: "East Timor's capital is Dili",
    },
];

export default () => {
    return (
        <div>
            <Accordion items={items} />
        </div>
    );
};
