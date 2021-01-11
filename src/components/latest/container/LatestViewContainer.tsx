import React, {useEffect, useState} from 'react';
import { LatestView } from '../view/LatestView';

export const LatestViewContainer: React.FC = () => {

    const [currencyRates, setCurrencyRates] = useState({});

    useEffect(() => {
        const url = 'https://api.exchangeratesapi.io/latest?base';

       const fetchPromise = fetch(url);
       console.log(fetchPromise);

       const jsonPromise = fetchPromise.then(response => response.json());
       console.log(jsonPromise);
       const result = jsonPromise.then(data => setCurrencyRates(data));

    }, [setCurrencyRates])

    return (
    <>
        <LatestView date={222}/>
    </>
    )
};
