export interface ICurrencyRate {
    base: string;
    date: string;
    rates: Record<string, number>;
}
