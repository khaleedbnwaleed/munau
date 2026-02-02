'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function AdminAdmissionsPage() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const res = await fetch('/api/admin/admissions');
        const json = await res.json();
        setItems(json.data || []);
      } catch (e) {
        console.error('[v0] load admissions failed', e);
      } finally { setLoading(false); }
    }
    load();
  }, []);

  const handleApprove = async (applicationId: string) => {
    const res = await fetch(`/api/admin/admissions/${applicationId}`, {
      method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ status: 'approved' })
    });
    if (res.ok) {
      const json = await res.json(); setItems(prev => prev.map(p => p.applicationId === applicationId ? json.data : p));
    } else alert('Failed to approve');
  };

  const handleDelete = async (applicationId: string) => {
    if (!confirm('Delete application?')) return;
    const res = await fetch(`/api/admin/admissions/${applicationId}`, { method: 'DELETE' });
    if (res.ok) setItems(prev => prev.filter(p => p.applicationId !== applicationId));
    else alert('Failed to delete');
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b border-border sticky top-0 z-40">
        <div className="flex items-center justify-between h-16 px-6">
          <div className="flex items-center gap-4">
            <Link href="/admin/dashboard" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Munau" width={36} height={36} />
              <span className="font-bold">Admin - Admissions</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="p-6 max-w-7xl mx-auto">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admissions</h1>
        </div>

        <Card className="p-6">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4">Applicant</th>
                    <th className="text-left py-3 px-4">Program</th>
                    <th className="text-center py-3 px-4">Status</th>
                    <th className="text-right py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((a) => (
                    <tr key={a.applicationId} className="border-b border-border hover:bg-secondary/50">
                      <td className="py-3 px-4">{a.firstName} {a.lastName}</td>
                      <td className="py-3 px-4">{a.program}</td>
                      <td className="py-3 px-4 text-center">
                        <Badge variant={a.status === 'approved' ? 'default' : a.status === 'pending' ? 'secondary' : 'destructive'}>{a.status}</Badge>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex gap-2 justify-end">
                          {a.status === 'pending' && <Button size="sm" onClick={() => handleApprove(a.applicationId)}>Approve</Button>}
                          <Button size="sm" onClick={() => alert(JSON.stringify(a, null, 2))}>View</Button>
                          <Button size="sm" variant="destructive" onClick={() => handleDelete(a.applicationId)}>Delete</Button>
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
