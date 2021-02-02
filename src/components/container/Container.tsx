import React from 'react';
import {TabComponent} from "../tabs/TabComponent";
import {ContainerStyled} from "./styles";

export const Container: React.FC = () => {

  return (
      <ContainerStyled>
        <TabComponent />
      </ContainerStyled>
  );
}
