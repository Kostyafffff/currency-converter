import React, {useCallback, useEffect, useState} from 'react';
import { ICurrencyRate } from "../../../models/rate-models";
import { HistoryViewContainer } from "./styles";
import { TextField } from "@material-ui/core";
import {LatestCurrencyList} from "../../latest/list/LatestCurrencyList";

export const HistoryView: React.FC = () => {

    const [currencyRates, setCurrencyRates] = useState<ICurrencyRate>();
    const [startDate, setStartDate] = useState('2017-05-24');

    const loadCurrencyRates = useCallback((): void => {
        const url = `https://api.exchangeratesapi.io/${startDate}`;

        fetch(url)
            .then(response => response.json())
            .then(data => setCurrencyRates(data));
    }, [startDate, setCurrencyRates]);


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
        </HistoryViewContainer>
    )
};
