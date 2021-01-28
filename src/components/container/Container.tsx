import React from 'react';
import {LatestViewContainer} from "../latest/container/LatestViewContainer";
import {TabComponent} from "../tabs/TabComponent";

export const Container: React.FC = () => {

  return (
    <div className="App">
        <TabComponent />
        <LatestViewContainer />
    </div>
  );
}
