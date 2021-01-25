import React from 'react';
import { DateView } from '../../general/date-view/DateView';
import { IPropsLatestView } from './types';
import { BaseCurrencyComponent } from "../base-currency/BaseCurrencyComponent";
import { LatestCurrencyList } from "../list/LatestCurrencyList";

export const LatestView: React.FC<IPropsLatestView> = ({ data, onChangeBaseCurrency }) => {
   const { base, date, rates } = data;

   const currencies = Object.keys(rates);

    return (
        <div>
            <DateView date={date}/>
            <BaseCurrencyComponent
                baseCurrency={base}
                currencies={currencies}
                onChangeBaseCurrency={onChangeBaseCurrency}
            />
            <LatestCurrencyList rates={rates}/>
        </div>
    );
}
