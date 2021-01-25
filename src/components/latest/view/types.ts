import {ICurrencyRate} from "../../../models/rate-models";

export interface IPropsLatestView {
    data: ICurrencyRate;

    onChangeBaseCurrency(currency: string): void;
}
