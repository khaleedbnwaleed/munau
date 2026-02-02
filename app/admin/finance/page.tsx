'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function AdminFinancePage() {
  const [items, setItems] = useState<any[]>([]);
  const [summary, setSummary] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const res = await fetch('/api/admin/finance');
        const json = await res.json();
        setItems(json.data || []);
        setSummary(json.summary || {});
      } catch (e) {
        console.error('[v0] load finance failed', e);
      } finally { setLoading(false); }
    }
    load();
  }, []);

  const applyPayment = async (id: number) => {
    const amt = Number(prompt('Payment amount') || '0');
    if (!amt) return;
    const res = await fetch('/api/admin/finance', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, paidAmount: amt }) });
    if (res.ok) {
      const json = await res.json();
      setItems(prev => prev.map(p => p.id === id ? json.data : p));
      // recalc summary locally (or reload)
      const totalOutstanding = items.reduce((s, i) => s + (i.id === id ? json.data.outstanding : i.outstanding), 0)
      setSummary(prev => ({ ...prev, totalOutstanding }))
    } else alert('Failed to apply payment');
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b border-border sticky top-0 z-40">
        <div className="flex items-center justify-between h-16 px-6">
          <div className="flex items-center gap-4">
            <Link href="/admin/dashboard" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Munau" width={36} height={36} />
              <span className="font-bold">Admin - Finance</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="p-6 max-w-7xl mx-auto">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Finance</h1>
          <div className="text-sm text-muted-foreground">
            <div>Total Outstanding: ₦{summary.totalOutstanding ?? 0}</div>
            <div>Total Due: ₦{summary.totalDue ?? 0}</div>
          </div>
        </div>

        <Card className="p-6">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4">Student ID</th>
                    <th className="text-left py-3 px-4">Description</th>
                    <th className="text-left py-3 px-4">Amount</th>
                    <th className="text-left py-3 px-4">Paid</th>
                    <th className="text-left py-3 px-4">Outstanding</th>
                    <th className="text-right py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((i) => (
                    <tr key={i.id} className="border-b border-border hover:bg-secondary/50">
                      <td className="py-3 px-4">{i.studentId}</td>
                      <td className="py-3 px-4">{i.description}</td>
                      <td className="py-3 px-4">₦{i.amount}</td>
                      <td className="py-3 px-4">₦{i.paid}</td>
                      <td className="py-3 px-4">₦{i.outstanding}</td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex gap-2 justify-end">
                          <Button size="sm" onClick={() => applyPayment(i.id)}>Apply Payment</Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card>
      </main>
    </div>
  );
}
