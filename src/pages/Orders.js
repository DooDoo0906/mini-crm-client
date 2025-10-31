import React, { useEffect, useState } from "react";
import { getOrders } from "../api/ordersApi";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getOrders().then(setOrders);
  }, []);
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-extrabold">Orders</h1>
      </div>
      <div className="card">
        <div className="mb-4">
          <input
            className="w-full p-3 border rounded"
            placeholder="Search Order#, SKU..."
          />
        </div>
        <div className="table-responsive">
          <table className="w-full text-left">
            <thead className="text-sm text-gray-500">
              <tr>
                <th></th>
                <th>ORDER#</th>
                <th>DATE</th>
                <th>STORE</th>
                <th>TOTAL</th>
                <th>ORDER STATUS</th>
                <th>PAYMENT</th>
                <th>TRACKING</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id} className="border-t">
                  <td className="py-4">
                    <input type="checkbox" />
                  </td>
                  <td className="py-4 text-teal-700">{o.order}</td>
                  <td className="py-4">{o.date}</td>
                  <td>{o.store}</td>
                  <td>{o.total}</td>
                  <td>
                    <span
                      className="px-3 py-1 rounded-full text-sm"
                      style={{
                        background: o.statusBadgeBg,
                        color: o.statusBadgeColor,
                      }}
                    >
                      {o.status}
                    </span>
                  </td>
                  <td>
                    <span
                      className="px-3 py-1 rounded-full text-sm"
                      style={{
                        background: o.payBadgeBg,
                        color: o.payBadgeColor,
                      }}
                    >
                      {o.payment}
                    </span>
                  </td>
                  <td className="text-teal-700 underline">
                    {o.tracking || "--"}
                  </td>
                  <td>View</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-sm text-gray-500">
          Showing 1 to 4 of 99 orders
        </div>
      </div>
    </div>
  );
}
