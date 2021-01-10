import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ text, language }) => {
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [text]);

    useEffect(() => {
        const doTranslate = async () => {
            const { data } = await axios.post(
                'https://translation.googleapis.com/language/translate/v2',
                {},
                {
                    params: {
                        q: debouncedText,
                        target: language.value,
                        format: 'text',
                        key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
                    },
                }
            );

            setTranslated(data.data.translations[0].translatedText);
        };

        doTranslate();
    }, [debouncedText, language]);

    return (
        <React.Fragment>
            <div>{translated}</div>
        </React.Fragment>
    );
};

export default Convert;
