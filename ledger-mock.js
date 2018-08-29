import uuidv4 from "uuid/v4";
import moment from "moment";

export default class Ledger {
  constructor(config) {
    console.log("config", config);
  }

  async retrieveBalance({ account, key }) {
    console.log("retrieveBalance", account, key);
    return Promise.resolve({
      amount: 11.21,
      currency: "VTX"
    });
  }

  // recordTransfer({
  //     from: {
  //         account: "vtxdistrib"
  //     },
  //     to: {
  //         account: "vtxtrust11",
  //         wallet: "EOS5vBqi8YSzFCeTv4weRTwBzVkGCY5PN5Hm1Gp3133m8g9MtHTbW"
  //     },
  //     amount: 123.45
  // })

  //
  // Returns: Promise
  async recordTransfer(transferDetails) {
    return Promise.resolve(randomTransfer(transferDetails));
  }

  // Returns two transactions
  async retrieveTransactions({ account, wallet }) {
    return Promise.resolve({
      transactions: [
        randomTransfer({ from: "vtxdistrib", to: { account, wallet } }),
        randomTransfer({ from: "vtxdistrib", to: { account, wallet } })
      ]
    });
  }
}

function randomTransfer({ from, to, amount }) {
  return {
    id: uuidv4(),
    from,
    to,
    submittedAt: moment().format(),
    amount: amount ? amount : Math.random() * 10000,
    currency: "VTX"
  };
}
