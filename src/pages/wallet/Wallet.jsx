import React, {useContext} from "react";
import { AuthContext } from "../../context/AuthContext";
const Wallet = () => {  
	const {user} = useContext(AuthContext); 
  const wallet = user?.wallet
  const transactions = user?.transactions 

  return (
    <div className="bg-green-200 w-full relative">
      <div className="mx-5 pt-20 py-2 text-green-900">
        <p className="mx-3 font-bold">Available Balance</p>
        <p className="text-4xl mx-3 font-extrabold my-2">&#8358; {wallet?.balance || `18,420.81`}</p>
        <div className="mx-5 flex gap-5 space-x-2">
          <button className="button">
            <a href="./withdraw">
              <i className="fa fa-send"></i> SEND
            </a>
          </button>
          <button className="button uppercase">
            <a href="./receive">
              <i className="fa fa-download"> </i> Receive{" "}
            </a>
          </button>
        </div>
        <div className="space-y-5 text-sm">
          <p className="font-semibold pt-5 text-xl">Transaction History</p>
          {transactions?.map((transction, index) => {
            const{amount, date}= transction
              return (<div key={index} className="bg-white rounded-lg px-4 py-4">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg text-green-500 p-1">
                {amount}
              </p>
              <p className="font-semibold text-green-500">Successful</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg">
                Receive from Musa Mik...
              </p>
              <p className="font-semibold">{date}</p>
            </div>
          </div>)})}
          <div className="bg-white rounded-lg px-4 py-5">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg text-red-500">-1,000.00</p>
              <p className="font-semibold text-green-500">Successful</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg">Send to Musa Mik...</p>
              <p className="font-semibold">08:06, Jan 03</p>
            </div>
          </div>
          <div className="bg-white rounded-lg px-4 py-4">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg text-green-500 p-1">
                +1,200.00
              </p>
              <p className="font-semibold text-green-500">Successful</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg">
                Receive from John Abr...
              </p>
              <p className="font-semibold">08:06, Dec 17</p>
            </div>
          </div>
          <div className="bg-white rounded-lg px-4 py-4">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg text-green-500 p-1">
                +2,000.00
              </p>
              <p className="font-semibold text-green-500">Successful</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg">
                Receive from Musa Mik...
              </p>
              <p className="font-semibold">08:06, Nov 21</p>
            </div>
          </div>
          <div className="bg-white rounded-lg px-4 py-4">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg text-green-500 p-1">
                +2,000.00
              </p>
              <p className="font-semibold text-green-500">Successful</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg">
                Receive from Musa Mik...
              </p>
              <p className="font-semibold">08:06, Nov 21</p>
            </div>
          </div>
          <div className="bg-white rounded-lg px-4 py-5">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg text-red-500">-3,000.00</p>
              <p className="font-semibold text-green-500">Successful</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg">Send to Musa Mik...</p>
              <p className="font-semibold">08:06, Nov 02</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
