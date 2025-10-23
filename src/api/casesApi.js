export async function getCases(){ const res = await fetch('/api/cases'); if(!res.ok) throw new Error('failed'); return res.json(); }
