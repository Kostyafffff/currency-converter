import React, {useCallback, useState} from "react";
import { TAB_VALUE } from "./types";
import { Tab } from "@material-ui/core";
import {TabsStyled} from "./styles";

export const TabComponent: React.FC = () => {

    const [tab, setTab] = useState(0);

    const onTabChange = useCallback((event: React.ChangeEvent<{}>, newValue: number): void => {
        setTab(newValue);
    }, [setTab]);

    return (
        <TabsStyled value={tab} onChange={onTabChange}>
             <Tab label={TAB_VALUE.LATEST} />
             <Tab label={TAB_VALUE.CONVERTER}  />
             <Tab label={TAB_VALUE.HISTORY} />
        </TabsStyled>
    )
}
