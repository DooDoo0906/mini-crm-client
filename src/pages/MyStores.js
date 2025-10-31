import React, { useEffect, useState } from "react";
import BadgePill from "../components/BadgePill";
import { getStores } from "../api/storesApi";

export default function MyStores() {
  const [stores, setStores] = useState([]);
  useEffect(() => {
    getStores().then(setStores);
  }, []);
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-extrabold">My Stores</h1>
        <button
          className="px-4 py-2 rounded text-white"
          style={{ background: "#3991a7" }}
        >
          Connect New Store
        </button>
      </div>
      <div className="card">
        <table className="w-full text-left">
          <thead className="text-sm text-gray-500">
            <tr>
              <th>STORE NAME</th>
              <th>PLATFORM</th>
              <th>STATUS</th>
              <th>AUTO SYNC</th>
              <th>LAST SYNC</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {stores.map((s) => (
              <tr key={s.id} className="border-t">
                <td className="py-4">{s.name}</td>
                <td>{s.platform}</td>
                <td>
                  <BadgePill
                    variant={
                      s.status === "Connected"
                        ? "connected"
                        : s.status === "Error"
                        ? "error"
                        : "default"
                    }
                  >
                    {s.status}
                  </BadgePill>
                </td>
                <td className="text-green-600">{s.autoSync ? "On" : "Off"}</td>
                <td className="text-sm text-gray-500">{s.lastSync}</td>
                <td className="text-teal-700">{s.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
