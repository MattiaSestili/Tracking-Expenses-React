import { IBalance } from "../Interface/ITransactions";

const TrackingHeader = (props: { balance: IBalance }) => {
  const _getCurrencyIcon = () => {
    const currency = props.balance.currency_iso;
    switch (currency) {
      case "GBP": {
        return "£";
      }

      default:
        return "";
    }
  };

  return (
    <div className="header-expenses">
      <div>
        {"Expenses Tracker"}
        <span>
          {/* TODO Expand this to a proper header with a toolbar to be able to change card or account and currency*/}
        </span>
      </div>
      <h3>{"Balance"}</h3>
      <p>{props.balance.amount + _getCurrencyIcon()}</p>
    </div>
  );
};

export default TrackingHeader;
