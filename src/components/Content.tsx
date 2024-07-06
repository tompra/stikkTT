import React from 'react';
import { ContentProps } from '../types';

const Content: React.FC<ContentProps> = ({
    header,
    main,
    footer,
}): JSX.Element => {
    return (
        <div className='home-content'>
            <div className='home-content__header'>{header}</div>
            <div className='home-content__main'>{main}</div>
            <div className='home-content__footer'>{footer}</div>
        </div>
    );
};

export default Content;
