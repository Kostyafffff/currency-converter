export interface ICurrencyRate {
    base: string;
    date: string;
    rates: Array<TRate>;
}

export type TRate = {
    currency: number;
}
