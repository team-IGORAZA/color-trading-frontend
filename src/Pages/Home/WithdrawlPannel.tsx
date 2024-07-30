import React from 'react';
import { FiDollarSign } from 'react-icons/fi';

interface WithdrawalItem {
  amount: number;
  time: string;
}

const WithdrawalPanel: React.FC = () => {
  const withdrawals: WithdrawalItem[] = [
    { amount: 395354, time: '13:33' },
    { amount: 395354, time: '13:33' },
    { amount: 395354, time: '13:33' },
    { amount: 395354, time: '13:33' },
    { amount: 395354, time: '13:33' },
  ];

  return (
    <div className=" p-4 rounded-lg shadow-lg w-full">
      <h2 className="text-white text-lg font-semibold mb-4 flex items-center ">
        <FiDollarSign className="mr-2" />
        Today's Withdrawal
      </h2>
      <ul className="space-y-2">
        {withdrawals.map((item, index) => (
          <li key={index} className="bg-[#020A4A] rounded-lg p-3 flex items-center justify-between">
            <div className="flex items-center">
              <div className="rounded-full p-2 mr-3">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" className='h-16 rounded-lg' alt="" />
              </div>
              <div>
                <p className="text-white font-bold text-lg">{item.amount.toLocaleString()}</p>
                <p className="text-gray-400 text-sm">{item.time}</p>
              </div>
            </div>
            <div className="text-white py-1 px-2 rounded text-lg font-bold flex items-center gap-3">
                <span className='btn-bg p-2 rounded-full h-8 w-8 flex items-center justify-center'>T</span>
              235.54 USDT
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WithdrawalPanel;