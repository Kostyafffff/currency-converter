import React, {useEffect, useState} from 'react';
import { LatestView } from '../view/LatestView';
import { LatestViewContainerWrapper } from "./styles";
import {ICurrencyRate} from "../../../models/rate-models";

export const LatestViewContainer: React.FC = () => {

    const [currencyRates, setCurrencyRates] = useState<ICurrencyRate>();

    useEffect(() => {
        const url = 'https://api.exchangeratesapi.io/latest?base';

        fetch(url)
            .then(response => response.json())
            .then(data => setCurrencyRates(data));

    }, [setCurrencyRates])

    if (currencyRates === undefined) {
        //TODO WRAPPER WITH LOADER
        return <div> NO DATA</div>
    }

    return (
            <LatestViewContainerWrapper>
                <LatestView data={currencyRates}/>
            </LatestViewContainerWrapper>
    )
};
