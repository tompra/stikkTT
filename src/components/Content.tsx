import React from 'react';
import { ContentProps } from '../types';

const Content: React.FC<ContentProps> = ({
    header,
    main,
    footer,
}): JSX.Element => {
    return (
        <div className='home-content'>
            <div className='home-content__header'>
                <h3>{header}</h3>
            </div>
            <div className='home-content__main'>{main}</div>
            <div className='home-content__footer'>
                <h3>{footer}</h3>
            </div>
        </div>
    );
};

export default Content;
