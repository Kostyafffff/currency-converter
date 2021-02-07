import styled  from 'styled-components';
import {DateView} from "../../general/date-view/DateView";

export const LatestViewWrapper = styled.div`
    overflow-y: auto;
    height: 500px;
    overflow-x: hidden;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const DateViewStyled = styled(DateView)`
  display: block;
`;
