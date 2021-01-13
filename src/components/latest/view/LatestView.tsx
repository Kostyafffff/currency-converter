import React from 'react';
import { DateView } from '../../general/date-view/DateView';
import { IPropsLatestView } from './types';
import {BaseCurrencyComponent} from "../base-currency/BaseCurrencyComponent";

export const LatestView: React.FC<IPropsLatestView> = ({ data }) => {
    const currencies = Object.keys(data.rates);

    console.log(currencies)
    return (
        <div>
            <DateView date={data.date}/>
            <BaseCurrencyComponent
                baseCurrency={data.base}
                currencies={currencies}
            />
        </div>
    );
}
