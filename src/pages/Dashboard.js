import React, { useEffect, useState } from "react";
import { getDashboard } from "../api/dashboardApi";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import Dropdown from "../components/DropDown";
import DropdownBox from "../components/DropDownBox";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [option, setOption] = useState("30");
  useEffect(() => {
    getDashboard().then(setData);
  }, []);
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-extrabold">Dashboard</h1>
      </div>
      <div className="grid grid-cols-4 gap-6 mb-6">
        <div className="card-yellow col-span-1 ">
          <div className="text-sm text-gray-500">Balance</div>
          <div className="text-2xl font-bold mt-2">$1,250.75</div>
          <div className="mt-4">
            <PrimaryButton
              title="Recharge Balance"
              onClick={() => {
                alert("Recharge Balance clicked");
              }}
            />
          </div>
        </div>
        <div className="card col-span-1">
          <div className="text-sm text-gray-500">Orders (Last 30d)</div>
          <div className="text-2xl font-bold mt-2">12 Unfulfilled</div>
        </div>
        <div className="card col-span-1">
          <div className="text-sm text-gray-500">Open Cases</div>
          <div className="text-2xl font-bold mt-2">2 Open</div>
        </div>
        <div className="card col-span-1">
          <div className="text-sm text-gray-500">Quick Actions</div>
          <div className="flex flex-col gap-3 mt-3">
            <SecondaryButton
              title="Create Order"
              onClick={() => {
                alert("Creat order button click");
              }}
            />
            <SecondaryButton
              title="Request Sourcing"
              onClick={() => {
                alert("Request Sourcing button click");
              }}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="card col-span-2 h-56 flex items-center justify-center text-gray-400">
          <Dropdown
            label="Action"
            options={[
              { label: "Last 7 Days", value: "7" },
              { label: "Last 30 Days", value: "30" },
              { label: "Last 90 Days", value: "90" },
            ]}
            value={option}
            onChange={(value) => {
              setOption(value);
            }}
          />
          <DropdownBox
            label="Action"
            options={[
              { label: "Last 7 Days", value: "7" },
              { label: "Last 30 Days", value: "30" },
              { label: "Last 90 Days", value: "90" },
            ]}
            value={option}
            onChange={(value) => {
              setOption(value);
            }}
          />
        </div>
        <div className="card col-span-1">
          <div className="text-sm text-gray-700 font-semibold mb-4">
            Fulfillment Status
          </div>
          <div className="h-40 flex items-center justify-center">
            Donut Chart
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        <div className="card">
          {" "}
          <div className="text-lg font-semibold mb-3">
            Orders Requiring Action
          </div>
          <table className="w-full text-left text-sm">
            <tbody>
              <tr className="border-t">
                <td className="py-3 font-medium">#ORD-5124</td>
                <td className="py-3">Invalid Address</td>
                <td className="py-3 text-right">View</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="card">
          {" "}
          <div className="text-lg font-semibold mb-3">
            🔔 Items Awaiting Your Approval
          </div>
          <table className="w-full text-left text-sm">
            <tbody>
              <tr className="border-t">
                <td className="py-3 font-medium">Quote #SRC-845</td>
                <td className="py-3 text-right">Review Quote</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
