import React from 'react';
import { DateView } from '../../general/date-view/DateView';
import { IPropsLatestView } from './types';

export const LatestView: React.FC<IPropsLatestView> = ({ date }) => {
    return (
        <div>
            <DateView date={date}/>
        </div>
    )
}
