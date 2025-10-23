export async function getDashboard(){ const res = await fetch('/api/dashboard'); if(!res.ok) throw new Error('failed'); return res.json(); }
