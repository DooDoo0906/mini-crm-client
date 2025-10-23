export async function getStores(){ const res = await fetch('/api/stores'); if(!res.ok) throw new Error('failed'); return res.json(); }
