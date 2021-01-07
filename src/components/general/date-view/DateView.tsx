import React from 'react';
import { IPropsDatePicker } from './types';

export const DateView: React.FC<IPropsDatePicker> = ({ date }) => {
    return (
        <span>{date}</span>
    );
};
