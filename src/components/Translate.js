import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        title: 'Afrikans',
        value: 'af',
    },
    {
        title: 'Hindi',
        value: 'hi',
    },
    {
        title: 'Dutch',
        value: 'nl',
    },
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div className='ui container'>
            <div className='ui form'>
                <div className='ui field'>
                    <label className='label'>Enter Text</label>
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
            </div>
            <Dropdown
                label='Select Language'
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
            />
            <div className='ui header'>
                <label className='label'>Output</label>
                <h1>
                    <Convert text={text} language={language} />
                </h1>
            </div>
        </div>
    );
};

export default Translate;
