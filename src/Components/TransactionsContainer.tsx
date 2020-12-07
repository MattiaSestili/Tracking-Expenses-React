import * as React from "react";
import { PromiseAPI } from "../API/PromiseAPI";
import { ITransactionsInfo } from "../Interface/ITransactions";
import TrackingBody from "./TrackingBody";
import TrackingHeader from "./TrackingHeader";

const TransactionsContainer = () => {
  const [
    transactionsInfo,
    setTransactions,
  ] = React.useState<ITransactionsInfo>();
  React.useEffect(() => {
    const _fetchData = async () => {
      try {
        const result = await new PromiseAPI().GetTransaction();
        if (!result) {
          throw new Error("API call returned false. Transactions not loaded!");
        }

        setTransactions(result);
      } catch (error) {
        console.log(error);
      }
    };

    _fetchData();
  }, []);

  if (transactionsInfo) {
    return (
      <div className="container-tracker">
        <TrackingHeader balance={transactionsInfo.balance} />
        <TrackingBody transactions={transactionsInfo.transactions} />
      </div>
    );
  }

  return null;
};

export default TransactionsContainer;
