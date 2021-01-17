import React, {useEffect, useState} from 'react';
import { LatestView } from '../view/LatestView';
import { LatestViewContainerWrapper } from "./styles";

export const LatestViewContainer: React.FC = () => {
    const initialSate = {
        base: '',
        date: '',
        rates: [],
    };

    const [currencyRates, setCurrencyRates] = useState(initialSate);

    useEffect(() => {
        const url = 'https://api.exchangeratesapi.io/latest?base';

        fetch(url)
            .then(response => response.json())
            .then(data => setCurrencyRates(data));

    }, [setCurrencyRates])

    //TODO need refactor when find appropriate solution
    if (currencyRates === initialSate) {
        return <div> NO DATA</div>
    }

    return (
            <LatestViewContainerWrapper>
                <LatestView data={currencyRates}/>
            </LatestViewContainerWrapper>
    )
};
