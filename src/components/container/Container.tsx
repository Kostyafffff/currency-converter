import React from 'react';
import {LatestViewContainer} from "../latest/container/LatestViewContainer";
import {TabComponent} from "../tabs/TabComponent";
import {ContainerStyled} from "./styles";

export const Container: React.FC = () => {

  return (
      <ContainerStyled>
        <TabComponent />
        <LatestViewContainer />
      </ContainerStyled>
  );
}
