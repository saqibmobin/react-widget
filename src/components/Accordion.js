import React, { useState } from 'react';

const Accordion = ({ items }) => {
    const [activeState, setActiveState] = useState(null);

    const onTitleClick = (index) => {
        setActiveState(index);
    };

    const resolvedItems = items.map((item, index) => {
        const active = index === activeState ? 'active' : '';

        return (
            <React.Fragment key={item.title}>
                <div
                    className={`title ${active}`}
                    onClick={() => onTitleClick(index)}
                >
                    <i className='dropdown icon'></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });
    return <div className='ui styled accordion'>{resolvedItems}</div>;
};

export default Accordion;
