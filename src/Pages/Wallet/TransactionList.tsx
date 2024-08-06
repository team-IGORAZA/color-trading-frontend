
const TransactionList = () => {
  const transactions = [
    {
      date: '08/04/2024',
      time: '17:34',
      mainnetType: 'Bank Card',
      rechargeOrder: 'nsgd21547631642153',
      channelName: 'ICEPAY(100-50000)',
      rechargeAmount: '',
      transactionStatus: 'Processing'
    },
    {
      date: '20/06/2024',
      time: '23:56',
      mainnetType: 'Bank Card',
      rechargeOrder: 'nsgd21547631642153',
      channelName: 'ICEPAY(100-50000)',
      rechargeAmount: '',
      transactionStatus: 'Processing'
    },
    {
      date: '16/01/2024',
      time: '20:23',
      mainnetType: 'Bank Card',
      rechargeOrder: 'nsgd21547631642153',
      channelName: 'ICEPAY(100-50000)',
      rechargeAmount: '',
      transactionStatus: 'Processing'
    },
    {
      date: '02/05/2024',
      time: '05:34',
      mainnetType: 'Bank Card',
      rechargeOrder: 'nsgd21547631642153',
      channelName: 'ICEPAY(100-50000)',
      rechargeAmount: '',
      transactionStatus: 'Processing'
    }
  ];

  return (
    <div className=" p-4 text-white font-mono">
      {transactions.map((transaction, index) => (
        <div key={index} className="mb-4 bg-blue-900 p-3 rounded-lg">
          <div className="flex justify-between mb-2">
            <span>{transaction.date}</span>
            <span>{transaction.time}</span>
          </div>
          <div className="grid grid-cols-2 gap-y-1 text-sm">
            <span className="text-gray-400">Mainnet Type</span>
            <span>{transaction.mainnetType}</span>
            <span className="text-gray-400">Recharge Order</span>
            <span>{transaction.rechargeOrder}</span>
            <span className="text-gray-400">Channel Name</span>
            <span>{transaction.channelName}</span>
            <span className="text-gray-400">Recharge Amount</span>
            <span>{transaction.rechargeAmount}</span>
            <span className="text-gray-400">Transaction Status</span>
            <span className="text-blue-400">{transaction.transactionStatus}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;