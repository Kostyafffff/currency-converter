import React, {useCallback, useEffect, useState} from 'react';
import { ICurrencyRate } from "../../../models/rate-models";
import {HistoryViewContainer} from "./styles";
import {TextField} from "@material-ui/core";

export const HistoryView: React.FC = () => {

    const [currencyRates, setCurrencyRates] = useState<ICurrencyRate>();
    const [startDate, setStartDate] = useState('');

    console.log('!!!!!!!!' + startDate)

    const loadCurrencyRates = useCallback((currency: string): void => {
        const url = `https://api.exchangeratesapi.io/latest?base=${currency}`;

        fetch(url)
            .then(response => response.json())
            .then(data => setCurrencyRates(data));
    }, [setCurrencyRates]);


    useEffect(() => {
        loadCurrencyRates('GBP');

    }, [loadCurrencyRates])


    if (currencyRates === undefined) {
        //TODO WRAPPER WITH LOADER
        return <div> NO DATA</div>
    }

    return (
        <HistoryViewContainer>
            <form className={'classes.container'} noValidate>
                <TextField
                    id="date"
                    label="date"
                    type="date"
                    onChange={date => setStartDate(date.target.value)}
                    defaultValue="2017-05-24"
                    className={'classes.textField'}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
        </HistoryViewContainer>
    )
};
