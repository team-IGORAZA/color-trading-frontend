import TransactionList from "./TransactionList";
import { useState } from "react";

export default function Transactions() {
  const [isWithDrawals, setIsWithDrawals] = useState(false);
  const activeBtnBg = "linear-gradient(90deg, #C84E89 0%, #F15F79 100%)";

  return (
    <div className="mt-4">
      <div className="flex justify-between gap-2 w-full items-center">
        <button
          style={{ background: `${isWithDrawals ? activeBtnBg : "transparent"}` }}
          onClick={() => setIsWithDrawals((prev) => !prev)}
          className="btn w-1/2 text-white border-none uppercase"
        >
          Withdrawals
        </button>
        <button
          style={{ background: `${!isWithDrawals ? activeBtnBg : "transparent"}` }}
          onClick={() => setIsWithDrawals((prev) => !prev)}
          className="btn w-1/2 border-none text-white uppercase"
        >
          Deposits
        </button>
      </div>
      <hr  className="mt-1 border-white"/>
      {isWithDrawals ? <TransactionList /> : <TransactionList />}
    </div>
  );
}
