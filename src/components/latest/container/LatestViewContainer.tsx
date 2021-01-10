import React from 'react';
import { LatestView } from '../view/LatestView';
import {TestHookComponentUseMemo} from "../../../testHooks/TestHookComponentUseMemo";

export const LatestViewContainer: React.FC = () => {

    return (
    <>
        <LatestView date={222}/>
    </>
    )
};
