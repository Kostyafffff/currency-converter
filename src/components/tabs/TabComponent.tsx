import React, {useCallback, useState} from "react";
import { TAB_VALUE } from "./types";
import { Tab } from "@material-ui/core";
import {TabsStyled} from "./styles";
import {LatestViewContainer} from "../latest/container/LatestViewContainer";

export const TabComponent: React.FC = () => {

    const [tab, setTab] = useState(0);

    const onTabChange = useCallback((event: React.ChangeEvent<{}>, newValue: number): void => {
        setTab(newValue);
    }, [setTab]);

    switch(tab) {
        case 0:
           return (
               //TODO move LatestView container to another component
           <>
            <TabsStyled value={tab} onChange={onTabChange}>
                <Tab label={TAB_VALUE.LATEST} />
                <Tab label={TAB_VALUE.CONVERTER}  />
                <Tab label={TAB_VALUE.HISTORY} />
            </TabsStyled>
            <LatestViewContainer />
            </>
        )
        default:
            return (
                <div>ssss</div>
            )
    }

}
