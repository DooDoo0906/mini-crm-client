import React, { useEffect, useState } from "react";
import BadgePill from "../components/BadgePill";
import { getCases } from "../api/casesApi";
import PrimaryButton from "../components/PrimaryButton";

export default function Cases() {
  const [cases, setCases] = useState([]);
  useEffect(() => {
    getCases().then(setCases);
  }, []);
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-extrabold">Support Cases</h1>
        <PrimaryButton
          title="Open New Case"
          onClick={() => {
            alert("Open New Case clicked");
          }}
          className="w-40"
        />
      </div>
      <div className="card table-responsive">
        <table className="w-full text-left">
          <thead className="text-sm text-gray-500">
            <tr>
              <th>CASEID</th>
              <th>ORDER#</th>
              <th>TYPE</th>
              <th>PRIORITY</th>
              <th>STATUS</th>
              <th>LAST UPDATE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((c) => (
              <tr key={c.id} className="border-t">
                <td className="py-4 font-semibold">#{c.caseId}</td>
                <td className="py-4">#{c.order}</td>
                <td>{c.type}</td>
                <td>
                  <BadgePill
                    variant={
                      c.priority === "High"
                        ? "high"
                        : c.priority === "Medium"
                        ? "medium"
                        : "default"
                    }
                  >
                    {c.priority}
                  </BadgePill>
                </td>
                <td>
                  {c.status === "Awaiting Reply" ? (
                    <BadgePill variant="awaiting">{c.status}</BadgePill>
                  ) : (
                    <BadgePill variant="inprogress">{c.status}</BadgePill>
                  )}
                </td>
                <td className="text-sm text-gray-500">{c.lastUpdate}</td>
                <td className="text-teal-700">View</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
