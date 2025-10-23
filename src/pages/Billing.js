import React, {useEffect,useState} from 'react';
import { getInvoices } from '../api/billingApi';

export default function Billing(){ const [invoices,setInvoices]=useState([]); useEffect(()=>{ getInvoices().then(setInvoices); },[]);
  return (
    <div>
      <div className="flex items-center justify-between mb-6"><h1 className="text-3xl font-extrabold">Billing & Invoices</h1></div>
      <div className="grid grid-cols-2 gap-6"><div className="card bg-yellow-50"><div className="text-sm">Current Balance</div><div className="text-2xl font-bold mt-2">$1,250.75</div><div className="mt-4"><input className="w-full p-3 border rounded" defaultValue="$ 1,000.00"/></div><div className="mt-4"><button className="w-full py-3" style={{background:'#3991a7',color:'white'}}>Proceed to Payment</button></div></div>
      <div className="card"><div className="text-lg font-semibold mb-3">Invoice History</div><table className="w-full text-left"><thead className="text-sm text-gray-500"><tr><th>INVOICEID</th><th>DATE</th><th>TYPE</th><th>AMOUNT</th><th>STATUS</th></tr></thead><tbody>{invoices.map(i=> <tr key={i.id} className="border-t"><td className="py-4">{i.id}</td><td>{i.date}</td><td>{i.type}</td><td>{i.amount}</td><td><span className="px-3 py-1 rounded-full text-sm" style={{background:i.statusBg}}>{i.status}</span></td></tr>)}</tbody></table></div></div>
    </div>
  );
}
