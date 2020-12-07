import { ITransactions } from "../Interface/ITransactions";
import * as React from "react";

const TrackingBody = (props: { transactions: ITransactions[] }) => {
  const [enableFilter, setFilter] = React.useState(false);
  //    const [transactions, setTransactions} = React.useState(...props.transactions);
  const [transactions] = React.useState(props.transactions);

  // TODO consider to move this function into a utility class and re-use it where it is needed (i.e now duplicated in the TrackingHeader.tsx)
  const _getCurrencyIcon = (currency: string) => {
    switch (currency) {
      case "GBP": {
        return "£";
      }

      default:
        return "";
    }
  };

  const _filterTop10 = () => {
    setFilter(!enableFilter);
  };

  const tr = enableFilter
    ? transactions
        .sort((a, b) => {
          return a.amount.value - b.amount.value;
        })
        .splice(0, 10)
    : transactions;

  return (
    <div className="body-tracking-transactions">
      <h5>
        {"History"}
        <span>
          {" "}
          <button type="button" onClick={_filterTop10}>
            {"Filter"}
          </button>
        </span>
      </h5>
      <ul>
        {tr.map((t) => (
          <li>
            {t.description +
              " " +
              t.amount.value +
              _getCurrencyIcon(t.amount.currency_iso)}
            <div>
              <small>{t.category_title}</small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackingBody;
