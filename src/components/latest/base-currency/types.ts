export interface IPropsBaseCurrency {
    baseCurrency: string;
    currencies: string[];

    onChangeBaseCurrency(currency: string): void;
}

export type THandleChangeEvent = { value: unknown };
