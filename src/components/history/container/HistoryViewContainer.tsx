import React, {useCallback, useEffect, useState} from 'react';
import { ICurrencyRate } from "../../../models/rate-models";

export const HistoryViewContainer: React.FC = () => {

    const [currencyRates, setCurrencyRates] = useState<ICurrencyRate>();

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

        </HistoryViewContainer>
    )
};
