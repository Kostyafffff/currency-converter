import React from 'react';
import { IPropsLatestView } from './types';
import { BaseCurrencyComponent } from "../base-currency/BaseCurrencyComponent";
import { LatestCurrencyList } from "../list/LatestCurrencyList";
import {DateViewStyled, HeaderWrapper, LatestViewWrapper} from "./styles";

export const LatestView: React.FC<IPropsLatestView> = ({ data, onChangeBaseCurrency }) => {
   const { base, date, rates } = data;

   const currencies = Object.keys(rates);

    return (
        <LatestViewWrapper>
            <HeaderWrapper>
                <DateViewStyled date={date}/>
                <BaseCurrencyComponent
                    baseCurrency={base}
                    currencies={currencies}
                    onChangeBaseCurrency={onChangeBaseCurrency}
                />
            </HeaderWrapper>
            <LatestCurrencyList rates={rates}/>
        </LatestViewWrapper>
    );
}
