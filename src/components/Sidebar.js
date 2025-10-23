import React from 'react';
import { NavLink } from 'react-router-dom';
import InboxIcon from '@mui/icons-material/Inbox';

const items = [
  { label: 'Dashboard', to: '/' },
  { label: 'My Stores', to: '/stores' },
  { label: 'Orders', to: '/orders' },
  { label: 'Products', to: '/products' },
  { label: 'Sourcing', to: '/sourcing' },
  { label: 'Billing & Invoices', to: '/billing' },
  { label: 'Cases', to: '/cases' },
  { label: 'Affiliate', to: '/affiliate' },
  { label: 'Knowledge Base', to: '/kb' }
];

export default function Sidebar() {
  return (
    <aside className="w-72 min-w-52 bg-white min-h-screen border-r">
      <div className="px-6 py-8"><div className="text-2xl font-extrabold text-teal-700 sidebar-logo">EboxMan</div></div>
      <nav className="px-4">
        {items.map(it => (
          <NavLink key={it.to} to={it.to} className={({isActive})=>`flex items-center justify-between px-4 py-3 rounded-md my-1 ${isActive?'bg-teal-50 text-teal-700 font-medium':'text-gray-700 hover:bg-gray-50'}`}>
            <span className="flex items-center gap-3"><InboxIcon fontSize="small" />{it.label}</span>
            {it.label==='Orders' && <span className="bg-yellow-300 text-xs rounded-full px-2">3</span>}
            {it.label==='Sourcing' && <span className="bg-yellow-200 text-xs rounded-full px-2">1</span>}
            {it.label==='Cases' && <span className="bg-red-400 text-white text-xs rounded-full px-2">1</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
