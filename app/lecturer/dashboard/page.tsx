"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Calendar,
  Upload,
  Users,
  MessageSquare,
  Bell,
  BarChart2,
  CheckSquare,
  Clock,
} from "lucide-react";

export default function LecturerDashboard() {
  const router = useRouter();

  // UI state
  const [activeTab, setActiveTab] = useState<
    "overview" | "gradebook" | "attendance" | "materials" | "announcements" | "messages" | "analytics"
  >("overview");

  const [courses, setCourses] = useState<{ id: string; title: string }[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<string>("C-101");

  // Student roster and grade handling
  const [studentRoster, setStudentRoster] = useState<any[]>([]);

  // Mock attendance and announcements/messages
  const [attendance, setAttendance] = useState<Record<string, any[]>>({});
  const [announcements, setAnnouncements] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);

  // quick stats
  const pendingGrades = useMemo(() => studentRoster.filter((s) => s.grade == null).length, [studentRoster]);

  // load courses + roster from mock api
  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/lecturer/roster?courseId=${selectedCourse}`);
        if (res.ok) {
          const json = await res.json();
          setCourses(json.courses || []);
          setStudentRoster(json.roster || []);
        }
      } catch (e) {
        console.error('Failed to load roster', e);
      }
    }
    load();
  }, [selectedCourse]);

  // initial mock data for attendance/announcements/messages
  useEffect(() => {
    setAttendance({
      'C-101': [
        { date: '2026-02-01', present: 22, total: 25 },
        { date: '2026-01-25', present: 24, total: 25 },
      ],
    });
    setAnnouncements([
      { id: 1, title: 'Exam Schedule Released', body: 'See exam timetable for next month.' },
      { id: 2, title: 'Staff Meeting', body: 'Monthly meeting on Friday at 3pm.' },
    ]);
    setMessages([
      { id: 1, from: 'Admin', body: 'Please submit your attendance report.' },
    ]);
  }, []);

  // guard: simple client-side role check
  useEffect(() => {
    const role = typeof window !== 'undefined' ? localStorage.getItem('role') : null;
    if (role !== 'admin' && role !== 'lecturer') {
      router.push('/auth/login');
    }
  }, [router]);

  const updateGrade = (studentId: number, value: number | null) => {
    setStudentRoster((prev) => prev.map((s) => (s.id === studentId ? { ...s, grade: value } : s)));
  };

  const saveGrade = async (s: any) => {
    try {
      const res = await fetch('/api/lecturer/roster', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseId: selectedCourse, studentId: s.id, grade: s.grade }),
      });
      if (res.ok) {
        const json = await res.json();
        alert(`Saved grade for ${s.name}: ${json.data.grade}`);
      } else alert('Failed to save grade');
    } catch (e) {
      alert('Failed to save grade');
    }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const form = new FormData();
      form.append('file', file);
      const res = await fetch('/api/lecturer/upload', { method: 'POST', body: form });
      const json = await res.json();
      if (res.ok) alert(`Uploaded: ${json.url}`);
      else alert('Upload failed');
    } catch (e) {
      alert('Upload failed');
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
            <Link href="/lecturer/dashboard" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Munau College Logo" width={36} height={36} className="rounded-lg object-cover" />
              <span className="font-bold">Lecturer Panel</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="secondary">{selectedCourse}</Badge>
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
              <button className={`w-full text-left flex items-center gap-2 py-2 px-2 rounded ${activeTab === 'gradebook' ? 'bg-secondary/10' : ''}`} onClick={() => setActiveTab('gradebook')}>
                <BookOpen className="w-4 h-4" /> Gradebook
              </button>
              <button className={`w-full text-left flex items-center gap-2 py-2 px-2 rounded ${activeTab === 'attendance' ? 'bg-secondary/10' : ''}`} onClick={() => setActiveTab('attendance')}>
                <CheckSquare className="w-4 h-4" /> Attendance
              </button>
              <button className={`w-full text-left flex items-center gap-2 py-2 px-2 rounded ${activeTab === 'materials' ? 'bg-secondary/10' : ''}`} onClick={() => setActiveTab('materials')}>
                <Upload className="w-4 h-4" /> Materials
              </button>
              <button className={`w-full text-left flex items-center gap-2 py-2 px-2 rounded ${activeTab === 'announcements' ? 'bg-secondary/10' : ''}`} onClick={() => setActiveTab('announcements')}>
                <Bell className="w-4 h-4" /> Announcements
              </button>
              <button className={`w-full text-left flex items-center gap-2 py-2 px-2 rounded ${activeTab === 'messages' ? 'bg-secondary/10' : ''}`} onClick={() => setActiveTab('messages')}>
                <MessageSquare className="w-4 h-4" /> Messages
              </button>
              <button className={`w-full text-left flex items-center gap-2 py-2 px-2 rounded ${activeTab === 'analytics' ? 'bg-secondary/10' : ''}`} onClick={() => setActiveTab('analytics')}>
                <Clock className="w-4 h-4" /> Analytics
              </button>
            </nav>
          </Card>

          <Card className="p-4">
            <h4 className="font-semibold mb-2">Courses</h4>
            <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)} className="w-full rounded-md border px-3 py-2">
              {courses.length ? courses.map((c) => <option key={c.id} value={c.id}>{c.title}</option>) : <option value="C-101">C-101</option>}
            </select>
          </Card>
        </aside>

        {/* Main content */}
        <section className="md:col-span-5 space-y-6">
          {/* Overview / Stats */}
          {activeTab === 'overview' && (
            <div>
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <Card className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">Assigned Courses</p>
                  <p className="text-2xl font-bold text-foreground">{courses.length || 1}</p>
                </Card>
                <Card className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">Upcoming Classes</p>
                  <p className="text-2xl font-bold text-foreground">2</p>
                </Card>
                <Card className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">Students to Grade</p>
                  <p className="text-2xl font-bold text-destructive">{pendingGrades}</p>
                </Card>
                <Card className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">Materials</p>
                  <p className="text-2xl font-bold text-foreground">Upload</p>
                </Card>
              </div>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Announcements</h3>
                <ul className="space-y-2">
                  {announcements.map((a) => (
                    <li key={a.id} className="border-b border-border pb-2">
                      <div className="flex justify-between">
                        <div>
                          <strong>{a.title}</strong>
                          <p className="text-sm text-muted-foreground">{a.body}</p>
                        </div>
                        <span className="text-sm text-muted-foreground">Now</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          )}

          {/* Gradebook */}
          {activeTab === 'gradebook' && (
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Gradebook</h3>
                <div className="flex items-center gap-2">
                  <Button variant="ghost">Export CSV</Button>
                  <Button variant="outline">Auto-fill</Button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4">Student</th>
                      <th className="text-left py-3 px-4">Matric No</th>
                      <th className="text-right py-3 px-4">Grade</th>
                      <th className="text-right py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentRoster.map((s) => (
                      <tr key={s.id} className="border-b border-border hover:bg-secondary/50">
                        <td className="py-3 px-4">{s.name}</td>
                        <td className="py-3 px-4">{s.matric}</td>
                        <td className="py-3 px-4 text-right">
                          <input type="number" value={s.grade ?? ''} onChange={(e) => updateGrade(s.id, e.target.value ? Number(e.target.value) : null)} className="w-20 rounded-md border px-2 py-1 text-right" />
                        </td>
                        <td className="py-3 px-4 text-right">
                          <Button size="sm" onClick={() => saveGrade(s)}>Save</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          )}

          {/* Attendance */}
          {activeTab === 'attendance' && (
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Attendance</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {(attendance[selectedCourse] || []).map((a: any) => (
                  <div key={a.date} className="p-4 border rounded">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold">{a.date}</div>
                        <div className="text-sm text-muted-foreground">Present: {a.present} / {a.total}</div>
                      </div>
                      <div>
                        <Badge>{Math.round((a.present / a.total) * 100)}%</Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Materials */}
          {activeTab === 'materials' && (
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Materials</h3>
              <div className="space-y-3">
                <div>
                  <input type="file" id="file2" onChange={handleUpload} className="hidden" />
                  <label htmlFor="file2" className="block">
                    <Button className="w-full flex items-center gap-2">
                      <Upload className="w-4 h-4" /> Upload File
                    </Button>
                  </label>
                </div>
                <div>
                  <h4 className="font-semibold">Recent Uploads</h4>
                  <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                    <li>Lecture1.pdf • Uploaded 2 days ago</li>
                    <li>LabGuide.docx • Uploaded 1 week ago</li>
                  </ul>
                </div>
              </div>
            </Card>
          )}

          {/* Announcements */}
          {activeTab === 'announcements' && (
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Announcements</h3>
              <div className="space-y-3">
                {announcements.map((a) => (
                  <div key={a.id} className="p-3 border rounded">
                    <div className="flex justify-between">
                      <div>
                        <strong>{a.title}</strong>
                        <p className="text-sm text-muted-foreground">{a.body}</p>
                      </div>
                      <div>
                        <Button size="sm">Edit</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Messages */}
          {activeTab === 'messages' && (
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Messages</h3>
              <div className="space-y-3">
                {messages.map((m) => (
                  <div key={m.id} className="p-3 border rounded">
                    <div className="flex justify-between">
                      <div>
                        <strong>{m.from}</strong>
                        <p className="text-sm text-muted-foreground">{m.body}</p>
                      </div>
                      <div>
                        <Button size="sm">Reply</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Analytics placeholder */}
          {activeTab === 'analytics' && (
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Analytics</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded">Student performance charts (placeholder)</div>
                <div className="p-4 border rounded">Attendance trends (placeholder)</div>
              </div>
            </Card>
          )}
        </section>
      </main>
    </div>
  );
}
