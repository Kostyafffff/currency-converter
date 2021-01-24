import React from "react";
import {IPropsLatestCurrencyList} from "./types";
import {Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';


export const LatestCurrencyList: React.FC<IPropsLatestCurrencyList> = ({ rates }) => {

    return(
        <Table>
            <TableHead>
                <TableCell>
                    Currency
                </TableCell>
                <TableCell align={"left"}>
                    Rate
                </TableCell>
            </TableHead>
            <TableBody>
                {
                    <TableRow>
                    </TableRow>
                }
            </TableBody>
        </Table>
    )
}
