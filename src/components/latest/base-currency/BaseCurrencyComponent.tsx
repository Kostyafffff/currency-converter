import React, {useState} from 'react';
import { IPropsBaseCurrency } from './types';
import Select from '@material-ui/core/Select';
import {MenuItem} from "@material-ui/core";

export const BaseCurrencyComponent: React.FC<IPropsBaseCurrency> = ({currencies, baseCurrency}) => {
    const [currency, setCurrency] = useState(currencies[0]);

    // const updateValue = (ev: any): void => {
    //     setCurrency(ev.currentTarget.value)
    // }
    return (
        <div>
            <Select
                style={{width: 120}}>
                {currencies.map(it => (<MenuItem>{it}</MenuItem>))}
            </Select>
        </div>
    );
}
