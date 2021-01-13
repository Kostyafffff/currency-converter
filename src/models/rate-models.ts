export interface ICurrencyRate {
    base: string;
    date: string;
    rates: Array<rate>;
}

type rate = {
    currency: number;
}
