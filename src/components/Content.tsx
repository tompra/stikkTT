import React from 'react';

const Content: React.FC = ({ header, main, footer }): JSX.Element => {
    return (
        <div className='home-content'>
            <div className='home-content__header'>
                <h3>{header}</h3>
            </div>
            <div className='home-content__main'>
                <h3>{main}</h3>
            </div>
            <div className='home-content__footer'>
                <h3>{footer}</h3>
            </div>
        </div>
    );
};

export default Content;
