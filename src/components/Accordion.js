import React, { useState } from 'react';

const Accordion = ({items}) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index);

    }

    const newItems = items.map( (item, index) => {
        
        const active = index === activeIndex ? 'active' : '';
        
        
        return (
        <React.Fragment key ={index}>
                <div className={`title ${active}`} onClick={() => handleClick(index)}>
                    <i className='dropdown icon'></i>
                    {item.title}
                </div>

                <div className={`content ${active}`}>
                    <p>{item.bio}</p>
                </div>
        </React.Fragment>
        );
    }

    )

    return (
        <div className='ui styled accordion'>
        {newItems}
        </div>
        
    )
}

export default Accordion;