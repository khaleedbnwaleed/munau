'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Calendar, Upload, Users } from 'lucide-react';

export default function LecturerDashboard() {
  const [courses, setCourses] = useState<{ id: string; title: string }[]>([]);

  const [upcomingClasses] = useState([
    { id: 1, course: 'Nursing Science', date: '2026-02-03', time: '10:00' },
    { id: 2, course: 'HIM', date: '2026-02-07', time: '14:00' },
  ]);

  // persistent selected course
  const [selectedCourse, setSelectedCourse] = useState(() => {
    try {
      if (typeof window !== 'undefined') {
        return localStorage.getItem('lecturer.selectedCourse') || 'C-101';
      }
    } catch (e) {}
    return 'C-101';
  });

  const [studentRoster, setStudentRoster] = useState<any[]>([]);

  // persist selected course only
  useEffect(() => {
    try {
      localStorage.setItem('lecturer.selectedCourse', selectedCourse);
    } catch (e) {}
  }, [selectedCourse]);

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
        console.error('[v0] load roster failed', e);
      }
    }
    load();
  }, [selectedCourse]);

  // guard
  const router = useRouter();
  useEffect(() => {
    const role = typeof window !== 'undefined' ? localStorage.getItem('role') : null;
    if (role !== 'admin' && role !== 'lecturer') {
      router.push('/auth/login');
    }
  }, [router]);

  const updateGrade = (studentId: number, value: number | null) => {
    setStudentRoster((prev) => prev.map((s) => (s.id === studentId ? { ...s, grade: value } : s)));
  };

  const handleCourseChange = (courseId: string) => {
    setSelectedCourse(courseId);
    setStudentRoster(rosters[courseId] || []);
  };

  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const form = new FormData();
      form.append('file', file);
      const res = await fetch('/api/lecturer/upload', { method: 'POST', body: form });
      setUploading(false);
      const json = await res.json();
      if (res.ok) alert(`Uploaded: ${json.url}`);
      else alert('Upload failed');
    } catch (e) {
      setUploading(false);
      alert('Upload failed');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('role');
    router.push('/auth/login');
  };

  const pendingGrades = studentRoster.filter((s) => s.grade == null).length;

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
          <div>
            <Button variant="ghost" onClick={handleLogout}>Logout</Button>
          </div>
        </div>
      </header>

      <main className="p-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <Card className="p-6">
            <p className="text-sm text-muted-foreground mb-2">Assigned Courses</p>
            <p className="text-2xl font-bold text-foreground">{courses.length}</p>
          </Card>
          <Card className="p-6">
            <p className="text-sm text-muted-foreground mb-2">Upcoming Classes</p>
            <p className="text-2xl font-bold text-foreground">{upcomingClasses.length}</p>
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

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <Card className="p-6 md:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Student Roster</h3>
              <select value={selectedCourse} onChange={(e) => handleCourseChange(e.target.value)} className="rounded-md border px-3 py-2">
                {courses.map((c) => (
                  <option key={c.id} value={c.id}>{c.title}</option>
                ))}
              </select>
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
                        <Button size="sm" onClick={async () => {
                        try {
                          const res = await fetch('/api/lecturer/roster', {
                            method: 'PATCH',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ courseId: selectedCourse, studentId: s.id, grade: s.grade })
                          });
                          if (res.ok) {
                            const json = await res.json();
                            alert(`Saved grade for ${s.name}: ${json.data.grade}`);
                          } else {
                            alert('Failed to save grade');
                          }
                        } catch (e) {
                          alert('Failed to save grade');
                        }
                      }}>Save</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Upload Materials</h3>
            <div className="space-y-3">
              <div>
                <input type="file" id="file" onChange={handleUpload} className="hidden" />
                <label htmlFor="file" className="block">
                  <Button className="w-full flex items-center gap-2">
                    <Upload className="w-4 h-4" /> Upload File
                  </Button>
                </label>
              </div>

              <div>
                <h4 className="font-semibold">Upcoming</h4>
                <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                  {upcomingClasses.map((c) => (
                    <li key={c.id}>{c.course} • {c.date} • {c.time}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>

      </main>
    </div>
  );
}
