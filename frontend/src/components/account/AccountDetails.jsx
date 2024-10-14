import moment from "moment";
import React from "react";
import { FcRating } from "react-icons/fc";
// import {account} from "../../assets/icons/account.png";

export const AccountDetails = ({ account }) => {
  return (
    <div className="acc_detail  items-center justify-center gap-4 px-6 py-8 my-10 ">
      <h3 className="w-full acc_card  flex items-center text-xl my-5 text-left font-bold   text-black-900 ">
        {/* <FcRating className="mr-1" size={35} /> */}
        {/* <img src={account} alt="account" className="mr-2" /> */}
        Account Details:-
      </h3>

      <div className="acc_card  lg:gap-0 p-3 text-black text-center font-semibold ">
        <p className="w-full lg:w-auto px-4 py-2 rounded-md">
          Account ID :
        </p>
        <span className="w-full lg:w-auto text-blue-900  px-4 py-2 rounded-md">
          {account._id}
        </span>
      </div>

      <div className="acc_card  lg:gap-0 p-3 text-black text-center font-semibold ">
        <p className="w-full lg:w-auto px-4 py-2 rounded-md">
          Created At :
        </p>
        <span className="w-full lg:w-auto text-blue-900  px-4 py-2 rounded-md">
          {moment(account.createdAt).format("DD MMMM YYYY")}
        </span>
      </div>

      <div className=" acc_card  lg:gap-0 p-3 text-black text-center font-semibold ">
        <p className=" w-full lg:w-auto px-4 py-2 rounded-md">
          Balance :
        </p>
        <span className="w-full lg:w-auto text-blue-900  px-4 py-2 rounded-md">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "INR",
          }).format(account.balance)}
        </span>
      </div>

      <div className="acc_card  lg:gap-0 p-3 text-black text-center font-semibold ">
        <p className="w-full lg:w-auto  px-4 py-2 rounded-md">
          OutGoing Transactions :
        </p>
        <span className="w-full lg:w-auto text-red-900  px-4 py-2 rounded-md">
          {account.out.length > 0
            ? new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "INR",
              }).format(
                account.out.reduce(
                  (totalAmount, log) => (totalAmount += log.balance_transfered),
                  0
                )
              )
            : new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "INR",
              }).format(0)}
        </span>
      </div>

      <div className="acc_card  lg:gap-0 p-3 text-black text-center font-semibold ">
        <p className="w-full lg:w-auto px-4 py-2 rounded-md">
          Incoming Transactions :
        </p>
        <span className="w-full lg:w-auto text-green-900 px-4 py-2 rounded-md">
          {account.in.length > 0
            ? new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "INR",
              }).format(
                account.in.reduce(
                  (totalAmount, log) => (totalAmount += log.balance_transfered),
                  0
                )
              )
            : new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "INR",
              }).format(0)}
        </span>
      </div>

      <div className="acc_card  lg:gap-0 p-3 text-black text-center font-semibold ">
        <p className="w-full lg:w-auto px-4 py-2 rounded-md">
          Deposit Amount :
        </p>
        <span className="w-full lg:w-auto text-green-900 px-4 py-2 rounded-md">
          {account.deposit_logs.length > 0
            ? new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "INR",
              }).format(
                account.deposit_logs.reduce(
                  (totalAmount, log) => (totalAmount += log.depositted_amount),
                  0
                )
              )
            : new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "INR",
              }).format(0)}
        </span>
      </div>

      <div className="acc_card  lg:gap-0 p-3 text-black text-center font-semibold ">
        <p className="w-full lg:w-auto px-4 py-2 rounded-md">
          Withdrawal Amount :
        </p>
        <span className="w-full lg:w-auto text-red-900 px-4 py-2 rounded-md">
          {account.withdraw_logs.length > 0
            ? new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "INR",
              }).format(
                account.withdraw_logs.reduce(
                  (totalAmount, log) => (totalAmount += log.withdrawed_amount),
                  0
                )
              )
            : new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "INR",
              }).format(0)}
        </span>
      </div>
    </div>
  );
};
