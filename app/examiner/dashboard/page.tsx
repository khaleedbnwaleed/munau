'use client';

import { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, FileText, CheckCircle, Users, X, BookOpen, FileText as FileIcon, MessageSquare, BarChart2, Calendar } from 'lucide-react';

export default function ExaminerDashboard() {
  const [markingQueue, setMarkingQueue] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<'overview' | 'queue' | 'schedule' | 'questionbank' | 'release' | 'messages' | 'analytics'>('overview');
  const [schedules, setSchedules] = useState<any[]>([]);
  const [questionBank, setQuestionBank] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);
  const [releaseHistory, setReleaseHistory] = useState<any[]>([]);

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

  // load mock schedules, question bank, messages
  useEffect(() => {
    setSchedules([
      { id: 'S-1', course: 'Anatomy', date: '2026-02-15', time: '09:00', venue: 'Hall A' },
      { id: 'S-2', course: 'Physiology', date: '2026-02-18', time: '13:00', venue: 'Hall B' },
    ]);
    setQuestionBank([
      { id: 1, title: 'Anatomy - MCQs', items: 40 },
      { id: 2, title: 'Physiology - Short answers', items: 20 },
    ]);
    setMessages([
      { id: 1, from: 'Admin', body: 'Finalize results by Friday.' },
    ]);
    setReleaseHistory([
      { id: 1, course: 'Anatomy', releasedAt: '2026-01-30', total: 120 },
    ]);
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

      <main className="p-6 max-w-7xl mx-auto grid md:grid-cols-6 gap-6">
        {/* Sidebar */}
        <aside className="md:col-span-1 space-y-4">
          <Card className="p-4">
            <nav className="space-y-2">
              <button className={`w-full text-left flex items-center gap-2 py-2 px-2 rounded ${activeTab === 'overview' ? 'bg-secondary/10' : ''}`} onClick={() => setActiveTab('overview')}>
                <BarChart2 className="w-4 h-4" /> Overview
              </button>
              <button className={`w-full text-left flex items-center gap-2 py-2 px-2 rounded ${activeTab === 'queue' ? 'bg-secondary/10' : ''}`} onClick={() => setActiveTab('queue')}>
                <FileText className="w-4 h-4" /> Marking Queue
              </button>
              <button className={`w-full text-left flex items-center gap-2 py-2 px-2 rounded ${activeTab === 'schedule' ? 'bg-secondary/10' : ''}`} onClick={() => setActiveTab('schedule')}>
                <Calendar className="w-4 h-4" /> Exam Schedule
              </button>
              <button className={`w-full text-left flex items-center gap-2 py-2 px-2 rounded ${activeTab === 'questionbank' ? 'bg-secondary/10' : ''}`} onClick={() => setActiveTab('questionbank')}>
                <BookOpen className="w-4 h-4" /> Question Bank
              </button>
              <button className={`w-full text-left flex items-center gap-2 py-2 px-2 rounded ${activeTab === 'release' ? 'bg-secondary/10' : ''}`} onClick={() => setActiveTab('release')}>
                <CheckCircle className="w-4 h-4" /> Results Release
              </button>
              <button className={`w-full text-left flex items-center gap-2 py-2 px-2 rounded ${activeTab === 'messages' ? 'bg-secondary/10' : ''}`} onClick={() => setActiveTab('messages')}>
                <MessageSquare className="w-4 h-4" /> Messages
              </button>
              <button className={`w-full text-left flex items-center gap-2 py-2 px-2 rounded ${activeTab === 'analytics' ? 'bg-secondary/10' : ''}`} onClick={() => setActiveTab('analytics')}>
                <BarChart2 className="w-4 h-4" /> Analytics
              </button>
            </nav>
          </Card>

          <Card className="p-4">
            <h4 className="font-semibold mb-2">Quick Actions</h4>
            <div className="space-y-2">
              <Button size="sm" onClick={() => setActiveTab('queue')}>Open Marking Queue</Button>
              <Button size="sm" variant="outline" onClick={() => setActiveTab('release')}>Release Results</Button>
            </div>
          </Card>
        </aside>

        {/* Main */}
        <section className="md:col-span-5 space-y-6">
          {activeTab === 'overview' && (
            <div>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <Card className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">Pending Markings</p>
                  <p className="text-2xl font-bold text-foreground">{pendingCount}</p>
                </Card>
                <Card className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">Released Results</p>
                  <p className="text-2xl font-bold text-foreground">{releaseHistory.length}</p>
                </Card>
                <Card className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">Upcoming Exams</p>
                  <p className="text-2xl font-bold text-foreground">{schedules.length}</p>
                </Card>
              </div>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                <ul className="space-y-3">
                  {markingQueue.slice(0,5).map((m) => (
                    <li key={m.id} className="flex justify-between">
                      <div>
                        <strong>{m.student}</strong> <span className="text-sm text-muted-foreground">{m.course}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">{m.status}</div>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          )}

          {activeTab === 'queue' && (
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
                              <Button size="sm" onClick={() => markScript(m.id)}>Mark</Button>
                              <Button variant="destructive" size="sm" onClick={() => rejectScript(m.id)}>Reject</Button>
                            </div>
                          ) : (
                            <div className="flex gap-2 justify-end">
                              <Button variant="outline" size="sm">Download</Button>
                              <Button size="sm" onClick={() => alert('View script (mock)')}>View</Button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          )}

          {activeTab === 'schedule' && (
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Exam Schedule</h3>
              <div className="space-y-3">
                {schedules.map((s) => (
                  <div key={s.id} className="p-3 border rounded flex justify-between items-center">
                    <div>
                      <div className="font-semibold">{s.course}</div>
                      <div className="text-sm text-muted-foreground">{s.date} • {s.time} • {s.venue}</div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm">Edit</Button>
                      <Button variant="destructive" size="sm">Cancel</Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {activeTab === 'questionbank' && (
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Question Bank</h3>
              <div className="space-y-3">
                {questionBank.map((q) => (
                  <div key={q.id} className="p-3 border rounded flex justify-between items-center">
                    <div>
                      <div className="font-semibold">{q.title}</div>
                      <div className="text-sm text-muted-foreground">Items: {q.items}</div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm">Edit</Button>
                      <Button variant="outline" size="sm">Export</Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {activeTab === 'release' && (
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Results Release</h3>
              <div className="space-y-3">
                {releaseHistory.map((r) => (
                  <div key={r.id} className="p-3 border rounded flex justify-between items-center">
                    <div>
                      <div className="font-semibold">{r.course}</div>
                      <div className="text-sm text-muted-foreground">Released: {r.releasedAt}</div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm">View</Button>
                      <Button variant="outline" size="sm">Revoke</Button>
                    </div>
                  </div>
                ))}
                <div className="mt-4">
                  <Button onClick={() => alert('Release results (mock)')}>Release Selected Results</Button>
                </div>
              </div>
            </Card>
          )}

          {activeTab === 'messages' && (
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Messages</h3>
              <div className="space-y-3">
                {messages.map((m) => (
                  <div key={m.id} className="p-3 border rounded flex justify-between items-center">
                    <div>
                      <div className="font-semibold">{m.from}</div>
                      <div className="text-sm text-muted-foreground">{m.body}</div>
                    </div>
                    <div>
                      <Button size="sm">Reply</Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {activeTab === 'analytics' && (
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Analytics</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded">Marking distribution (placeholder)</div>
                <div className="p-4 border rounded">Release timelines (placeholder)</div>
              </div>
            </Card>
          )}
        </section>
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