import React, {useCallback, useEffect, useState} from 'react';
import { ICurrencyRate } from "../../../models/rate-models";
import { HistoryViewContainer } from "./styles";
import { TextField } from "@material-ui/core";
import { LatestCurrencyList } from "../../latest/list/LatestCurrencyList";
import { BaseCurrencyComponent } from "../../latest/base-currency/BaseCurrencyComponent";

export const HistoryView: React.FC = () => {
    const [currencyRates, setCurrencyRates] = useState<ICurrencyRate>();
    const [startDate, setStartDate] = useState('2017-05-24');
    const [currency, setCurrency] = useState<string>('');

    let rates: string[] = [];
    if(currencyRates !== undefined) {
        rates = Object.keys(currencyRates.rates);
    }

    // const setCurrencyRate = useCallback(() => {
    //     setCurrency(currency);
    // }, [currency, setCurrency]);

    const loadCurrencyRates = useCallback((): void => {
        const url = `https://api.exchangeratesapi.io/${startDate}?base=${currency}`;

        fetch(url)
            .then(response => response.json())
            .then(data => setCurrencyRates(data));
    }, [startDate, setCurrencyRates, currency]);


    useEffect(() => {
        loadCurrencyRates();
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
                    defaultValue={startDate}
                    className={'classes.textField'}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
            <LatestCurrencyList rates={currencyRates.rates} />
            <BaseCurrencyComponent
                baseCurrency={currency}
                onChangeBaseCurrency={loadCurrencyRates}
                currencies={rates}
            />
        </HistoryViewContainer>
    )
};
