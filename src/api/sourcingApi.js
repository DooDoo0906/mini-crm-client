export async function getSourcing(){ const res = await fetch('/api/sourcing'); if(!res.ok) throw new Error('failed'); return res.json(); }
