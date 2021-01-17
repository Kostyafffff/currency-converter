import React from 'react';
import { IPropsBaseCurrency } from './types';
import Select from '@material-ui/core/Select';

export const BaseCurrencyComponent: React.FC<IPropsBaseCurrency> = ({currencies, baseCurrency}) => {

    return (
        <div>
            <Select
                label={baseCurrency}
                native={true}
                defaultValue={baseCurrency}
            />

        </div>
    );
}
