import React from 'react';
import {LatestViewContainer} from "../latest/container/LatestViewContainer";
import {TestHookComponentUseMemo} from "../../testHooks/TestHookComponentUseMemo";
import {TestHookComponentCallback} from "../../testHooks/TestHookComponentUseCallback";
import {TestHookComponentUseEffect} from "../../testHooks/TestHookComponentUseEffect";

export const Container: React.FC = () => {
  return (
    <div className="App">
        <LatestViewContainer />
    </div>
  );
}
