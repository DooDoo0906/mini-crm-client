export async function getOrders(){ const res = await fetch('/api/orders'); if(!res.ok) throw new Error('failed'); return res.json(); }
