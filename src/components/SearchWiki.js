import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchList from './SearchList';

const SearchWiki = () => {
    const [term, setTerm] = useState('program');
    const [debounceTerm, setDebounceTerm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebounceTerm(term);
        }, 500);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [term]);

    useEffect(() => {
        const apiCall = async () => {
            const { data } = await axios.get(
                'https://en.wikipedia.org/w/api.php',
                {
                    params: {
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: debounceTerm,
                    },
                }
            );

            setResults(data.query.search);
        };
        if (debounceTerm) {
            apiCall();
        } else {
            setResults([]);
        }
    }, [debounceTerm]);

    return (
        <div className='ui segment'>
            <div className='ui form'>
                <div className='field'>
                    <label>Search</label>
                    <input
                        value={term}
                        type='text'
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className='ui relaxed divided list'>
                <SearchList results={results} />
            </div>
        </div>
    );
};

export default SearchWiki;
