import React, {useEffect, useState} from 'react';
import { LatestView } from '../view/LatestView';

export const LatestViewContainer: React.FC = () => {
    useEffect(() => {
        const url = 'http://data.fixer.io/api/latest?access_key=9afad43f0d60551a2ca634d07fc70cca';
        fetch(url).then((response) => response.json())
    });

    useState();
    return (
        <LatestView date={222}/>
    )
};
