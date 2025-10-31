import React, { useEffect, useState } from "react";
import { getProducts } from "../api/productsApi";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then(setProducts);
  }, []);
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-extrabold">Products</h1>
        <button
          className="px-4 py-2 rounded text-white"
          style={{ background: "#3991a7" }}
        >
          Request Sourcing
        </button>
      </div>
      <div className="card">
        <div className="mb-4">
          <input
            className="w-full p-3 border rounded"
            placeholder="Search SKU, Product Name..."
          />
        </div>
        <div className="table-responsive">
          <table className="w-full text-left">
            <thead className="text-sm text-gray-500">
              <tr>
                <th>PRODUCT</th>
                <th>SKU</th>
                <th>STORE</th>
                <th>MAPPING STATUS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="border-t">
                  <td className="py-4">{p.title}</td>
                  <td>{p.sku}</td>
                  <td>{p.store}</td>
                  <td>
                    <span
                      className="px-3 py-1 rounded-full text-sm"
                      style={{ background: p.mapBg }}
                    >
                      {p.mapStatus}
                    </span>
                  </td>
                  <td>View</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
