import React, {useCallback, useState} from "react";
import { TAB_VALUE } from "./types";

export const TabComponent: React.FC = () => {

    const [tab, setTab] = useState(TAB_VALUE.LATEST);

    const onTabChange = useCallback((): void => {
        setTab(tab)
    }, [setTab])

    return (
        <div>

        </div>)
}
