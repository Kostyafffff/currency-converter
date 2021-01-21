import React, {useState } from 'react';
import {IPropsBaseCurrency, THandleChangeEvent} from './types';
import Select from '@material-ui/core/Select';
import { MenuItem } from "@material-ui/core";

export const BaseCurrencyComponent: React.FC<IPropsBaseCurrency> = ({currencies, baseCurrency}) => {
    const [currency, setCurrency] = useState(baseCurrency);

    const updateValue = (ev: React.ChangeEvent<THandleChangeEvent>): void => {
        setCurrency(ev.target.value as string)
    }
    const renderedValue = () => currency;

    return (
       <Select
           renderValue={renderedValue}
           displayEmpty={true}
           value={currency}
           onChange={updateValue}
           style={{width: 120}}>
           {currencies.map(it => (<MenuItem value={it} key={it}>{it}</MenuItem>))}
       </Select>
    );
}
