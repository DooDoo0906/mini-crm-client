import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import MyStores from "./pages/MyStores";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Sourcing from "./pages/Sourcing";
import Billing from "./pages/Billing";
import Cases from "./pages/Cases";
import Login from "./pages/Login";
import { useAuth } from "./auth/AuthContext";

export default function App() {
  const { user } = useAuth();
  return (
    <>
      {!user && <Login />}
      {user && (
        <div className="min-h-screen flex text-gray-700">
          <Sidebar />
          <div className="flex-1 bg-[#f2f4f7]">
            <Header />
            <main className="p-8">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/stores" element={<MyStores />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/products" element={<Products />} />
                <Route path="/sourcing" element={<Sourcing />} />
                <Route path="/billing" element={<Billing />} />
                <Route path="/cases" element={<Cases />} />
              </Routes>
            </main>
          </div>
        </div>
      )}
    </>
  );
}
