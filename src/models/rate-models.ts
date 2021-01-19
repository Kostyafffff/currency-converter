export interface ICurrencyRate {
    base: string;
    date: string;
    rates: Array<TRate>;
}

type TRate = {
    currency: number;
}
