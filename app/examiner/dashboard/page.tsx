'use client';

import { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, FileText, CheckCircle, Users, X } from 'lucide-react';

export default function ExaminerDashboard() {
  const [markingQueue, setMarkingQueue] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/examiner/marking-queue');
        if (res.ok) {
          const json = await res.json();
          setMarkingQueue(json.data || []);
        }
      } catch (e) {
        console.error('[v0] load marking queue failed', e);
      }
    }
    load();
  }, []);

  // simple client-side guard
  const router = useRouter();
  useEffect(() => {
    const role = typeof window !== 'undefined' ? localStorage.getItem('role') : null;
    if (role !== 'admin' && role !== 'examiner') {
      router.push('/auth/login');
    }
  }, [router]);

  const [upcomingExams] = useState([
    { id: 'EX-101', course: 'Anatomy', date: '2026-02-15', time: '09:00' },
    { id: 'EX-102', course: 'Physiology', date: '2026-02-18', time: '13:00' },
  ]);

  const pendingCount = useMemo(() => markingQueue.filter((m) => m.status === 'pending').length, [markingQueue]);
  const releasedCount = useMemo(() => markingQueue.filter((m) => m.status === 'marked').length, [markingQueue]);

  const markScript = async (id: number) => {
    try {
      const res = await fetch('/api/examiner/marking-queue', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: 'marked' })
      });
      if (res.ok) {
        const json = await res.json();
        setMarkingQueue(prev => prev.map(m => (m.id === id ? json.data : m)));
      } else {
        alert('Failed to mark');
      }
    } catch (e) {
      alert('Failed to mark');
    }
  };

  const rejectScript = async (id: number) => {
    try {
      const res = await fetch('/api/examiner/marking-queue', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: 'rejected' })
      });
      if (res.ok) {
        const json = await res.json();
        setMarkingQueue(prev => prev.map(m => (m.id === id ? json.data : m)));
      } else {
        alert('Failed to reject');
      }
    } catch (e) {
      alert('Failed to reject');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('role');
    router.push('/auth/login');
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b border-border sticky top-0 z-40">
        <div className="flex items-center justify-between h-16 px-6">
          <div className="flex items-center gap-4">
            <Link href="/examiner/dashboard" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Munau College Logo" width={36} height={36} className="rounded-lg object-cover" />
              <span className="font-bold">Examiner Panel</span>
            </Link>
          </div>
          <div>
            <Button variant="ghost" onClick={handleLogout}>Logout</Button>
          </div>
        </div>
      </header>

      <main className="p-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <Card className="p-6">
            <p className="text-sm text-muted-foreground mb-2">Pending Markings</p>
            <p className="text-2xl font-bold text-foreground">{pendingCount}</p>
          </Card>
          <Card className="p-6">
            <p className="text-sm text-muted-foreground mb-2">Released Results</p>
            <p className="text-2xl font-bold text-foreground">{releasedCount}</p>
          </Card>
          <Card className="p-6">
            <p className="text-sm text-muted-foreground mb-2">Upcoming Exams</p>
            <p className="text-2xl font-bold text-foreground">{upcomingExams.length}</p>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Marking Queue</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4">Student</th>
                    <th className="text-left py-3 px-4">Course</th>
                    <th className="text-center py-3 px-4">Submitted</th>
                    <th className="text-center py-3 px-4">Status</th>
                    <th className="text-right py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {markingQueue.map((m) => (
                    <tr key={m.id} className="border-b border-border hover:bg-secondary/50">
                      <td className="py-3 px-4">{m.student}</td>
                      <td className="py-3 px-4">{m.course}</td>
                      <td className="py-3 px-4 text-center">{m.submittedAt}</td>
                      <td className="py-3 px-4 text-center">
                        <Badge variant={m.status === 'pending' ? 'secondary' : m.status === 'marked' ? 'default' : 'destructive'}>
                          {m.status.charAt(0).toUpperCase() + m.status.slice(1)}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-right">
                        {m.status === 'pending' ? (
                          <div className="flex gap-2 justify-end">
                            <Button size="sm" onClick={() => markScript(m.id)}>
                              Mark
                            </Button>
                            <Button variant="destructive" size="sm" onClick={() => rejectScript(m.id)}>
                              Reject
                            </Button>
                          </div>
                        ) : (
                          <Button variant="outline" size="sm" className="gap-2">
                            <DownloadIconFallback /> View
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Upcoming Exams</h3>
            <div className="space-y-3">
              {upcomingExams.map((e) => (
                <div key={e.id} className="p-3 rounded-lg border border-border flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{e.course}</div>
                    <div className="text-sm text-muted-foreground">{e.date} • {e.time}</div>
                  </div>
                  <div className="text-sm text-muted-foreground">{e.id}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}

function DownloadIconFallback() {
  // small inline icon to avoid additional imports
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}