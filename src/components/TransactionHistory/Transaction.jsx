import { useState } from "react";
import { CustomButton } from "../Button";
import { transactions } from "./transaction-data";
import { StatusIcon } from "./StatusIcon";

export const Transaction = () => {
  const [status, setStatus] = useState("");
  return (
    <div className="">
      <table className="min-w-full bg-white mt-10">
        <thead>
          <tr className="">
            <th className="px-4 py-2 text-left text-sm font-medium text-custom-grey-60  tracking-wider">
              Service
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-custom-grey-60  tracking-wider">
              Amount
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-custom-grey-60  tracking-wider">
              Total Amount
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-custom-grey-60  tracking-wider">
              Status
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-custom-grey-60  tracking-wider">
              Payment Method
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-custom-grey-60 tracking-wider">
              Transaction No.
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-custom-grey-60  tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-custom-grey-30">
          {transactions.map((transaction, index) => (
            <tr key={index} className={"my-2"}>
              <td className="px-4 py-2 whitespace-nowrap flex items-center gap-2">
                <div>
                  <StatusIcon status={transaction.status}/>
                </div>
                <div className="flexx flex-col items-start">
                  <div className="text-sm font-semibold text-custom-grey-60 mb-2">
                    {transaction.service}
                  </div>
                  <div className="text-xs font-normal text-custom-grey-70">
                    {transaction.number}
                  </div>
                </div>
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm font-semibold text-custom-grey-60">
                {transaction.amount}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm font-semibold text-custom-grey-60">
                {transaction.totalAmount}
              </td>
              <td className="px-4 py-2 whitespace-nowrap">
                <div className="flex items-center">
                  {/* <StatusIcon status={transaction.status} /> */}
                  <span
                    className={`ml-1 text-sm font-semibold ${
                      transaction.status === "Success"
                        ? "text-custom-success"
                        : transaction.status === "Failed"
                        ? "text-custom-red-error"
                        : "text-custom-warning"
                    }`}
                  >
                    {transaction.status}
                  </span>
                </div>
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm font-semibold text-custom-grey-60">
                {transaction.paymentMethod}
              </td>
              <td className="px-4 py-2 whitespace-nowrap">
                <div className="text-sm font-semibold text-custom-grey-60 mb-2">
                  {transaction.transactionNo}
                </div>
                <div className="text-xs font-normal text-custom-grey-70">
                  {transaction.date}
                </div>
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-blue-600 hover:text-blue-900">
                {/* <button className="font-medium">Open</button> */}
                <CustomButton
                  className={
                    "bg-custom-faint-white text-custom-primary-blue py-2 px-3 rounded-lg text-base font-semibold"
                  }
                  children={"Open"}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
