import React, {useCallback, useEffect, useState} from 'react';
import { LatestView } from '../view/LatestView';
import { LatestViewContainerWrapper } from "./styles";
import {ICurrencyRate} from "../../../models/rate-models";

export const LatestViewContainer: React.FC = () => {

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
            <LatestViewContainerWrapper>
                <LatestView
                    data={currencyRates}
                    onChangeBaseCurrency={loadCurrencyRates}
                />
            </LatestViewContainerWrapper>
    )
};
