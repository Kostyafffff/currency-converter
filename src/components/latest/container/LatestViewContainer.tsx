import React, {useEffect, useState} from 'react';
import { LatestView } from '../view/LatestView';
import { LatestViewContainerWrapper } from "./styles";
import {ICurrencyRate} from "./types";

export const LatestViewContainer: React.FC = () => {
    const [currencyRates, setCurrencyRates] = useState<ICurrencyRate>({} as ICurrencyRate);

    console.log(currencyRates)

    useEffect(() => {
        const url = 'https://api.exchangeratesapi.io/latest?base';

        fetch(url)
            .then(response => response.json())
            .then(data => setCurrencyRates(data));

    }, [setCurrencyRates])

    return (
            <LatestViewContainerWrapper>
                <LatestView date={222}/>
            </LatestViewContainerWrapper>
    )
};
