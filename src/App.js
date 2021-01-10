import React, { useState } from 'react';
import Accordion from './components/Accordion';
import SearchWiki from './components/SearchWiki';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate.js';
import Route from './components/Route';
import Header from './components/Header';

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

const options = [
    {
        title: 'The color green',
        value: 'green',
    },
    {
        title: 'The color red',
        value: 'red',
    },
    {
        title: 'Pinkish shade',
        value: 'pink',
    },
];

export default () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Header />
            <Route path='/'>
                <Accordion items={items} />
            </Route>
            <Route path='/list'>
                <SearchWiki />
            </Route>
            <Route path='/dropdown'>
                <Dropdown
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path='/translate'>
                <Translate />
            </Route>
        </div>
    );
};
