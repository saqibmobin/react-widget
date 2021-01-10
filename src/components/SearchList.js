import React from 'react';

const SearchList = ({ results }) => {
    const renderedList = results.map((result) => {
        return (
            <div key={result.pageid} className='item'>
                <div className='right floated ui'>
                    <a
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        className='ui button'
                    >
                        Go
                    </a>
                </div>
                <div className='content'>
                    <div className='header'>{result.title}</div>
                    <div className='description'>
                        <span
                            dangerouslySetInnerHTML={{ __html: result.snippet }}
                        ></span>
                    </div>
                </div>
            </div>
        );
    });
    return <React.Fragment>{renderedList}</React.Fragment>;
};

export default SearchList;
