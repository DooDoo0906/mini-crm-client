import React, {useEffect,useState} from 'react';
import { getSourcing } from '../api/sourcingApi';

export default function Sourcing(){ const [list,setList]=useState([]); useEffect(()=>{ getSourcing().then(setList); },[]);
  return (
    <div>
      <div className="flex items-center justify-between mb-6"><h1 className="text-3xl font-extrabold">Sourcing Requests</h1><button className="px-4 py-2 rounded text-white" style={{background:'#3991a7'}}>New Sourcing Request</button></div>
      <div className="card table-responsive"><table className="w-full text-left"><thead className="text-sm text-gray-500"><tr><th>REQID</th><th>PRODUCT</th><th>DATE</th><th>STATUS</th><th>QUOTE PRICE</th><th>ACTIONS</th></tr></thead><tbody>{list.map(r=> <tr key={r.id} className="border-t"><td className="py-4">{r.req}</td><td>{r.product}</td><td>{r.date}</td><td><span className="px-3 py-1 rounded-full text-sm" style={{background:r.statusBg}}>{r.status}</span></td><td>{r.price}</td><td className="text-teal-700">{r.action}</td></tr>)}</tbody></table></div>
    </div>
  );
}
