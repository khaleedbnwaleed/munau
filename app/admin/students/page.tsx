'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function AdminStudentsPage() {
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const res = await fetch('/api/admin/students');
        const json = await res.json();
        setStudents(json.data || []);
      } catch (e) {
        console.error('[v0] load students failed', e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm('Delete student?')) return;
    const res = await fetch(`/api/admin/students/${id}`, { method: 'DELETE' });
    if (res.ok) setStudents(prev => prev.filter(s => s.id !== id));
    else alert('Failed to delete');
  };

  const toggleStatus = async (s: any) => {
    const newStatus = s.status === 'active' ? 'suspended' : 'active';
    const res = await fetch(`/api/admin/students/${s.id}`, {
      method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ status: newStatus })
    });
    if (res.ok) {
      const json = await res.json();
      setStudents(prev => prev.map(p => p.id === s.id ? json.data : p));
    } else alert('Failed to update');
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b border-border sticky top-0 z-40">
        <div className="flex items-center justify-between h-16 px-6">
          <div className="flex items-center gap-4">
            <Link href="/admin/dashboard" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Munau" width={36} height={36} />
              <span className="font-bold">Admin - Students</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="p-6 max-w-7xl mx-auto">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Students</h1>
          <Button onClick={() => alert('Create student (mock)')}>Add Student</Button>
        </div>

        <Card className="p-6">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4">Matric</th>
                    <th className="text-left py-3 px-4">Name</th>
                    <th className="text-left py-3 px-4">Program</th>
                    <th className="text-left py-3 px-4">Level</th>
                    <th className="text-center py-3 px-4">Status</th>
                    <th className="text-right py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((s) => (
                    <tr key={s.id} className="border-b border-border hover:bg-secondary/50">
                      <td className="py-3 px-4">{s.matric}</td>
                      <td className="py-3 px-4">{s.name}</td>
                      <td className="py-3 px-4">{s.program}</td>
                      <td className="py-3 px-4">{s.level}</td>
                      <td className="py-3 px-4 text-center">
                        <Badge variant={s.status === 'active' ? 'default' : 'destructive'}>{s.status}</Badge>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex gap-2 justify-end">
                          <Button size="sm" onClick={() => toggleStatus(s)}>{s.status === 'active' ? 'Suspend' : 'Activate'}</Button>
                          <Button size="sm" variant="destructive" onClick={() => handleDelete(s.id)}>Delete</Button>
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
