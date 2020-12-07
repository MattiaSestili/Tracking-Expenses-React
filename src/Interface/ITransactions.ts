export interface IBalance {
  amount: number;
  currency_iso: string;
}

export interface IProvider {
  title: string;
  account_number: string;
  sort_code: string;
  description: string;
}

export interface IAmount {
  value: number;
  currency_iso: string;
}

export interface ITransactionsInfo {
  balance: IBalance;
  id: string;
  provider: IProvider;
  transactions: ITransactions[];
}

export interface ITransactions {
  amount: IAmount;
  description: string;
  category_title: string;
  date: string;
  id: string;
}
