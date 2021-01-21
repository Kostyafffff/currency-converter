import React from "react";
import {IPropsLatestCurrencyList} from "./types";
import { Table } from '@material-ui/core';


export const LatestCurrencyList: React.FC<IPropsLatestCurrencyList> = ({ rates }) => {

    return(
        <Table />
    )
}
