"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { LogOut, GraduationCap, Users, FileText, CreditCard, TrendingUp, Menu, X } from "lucide-react";

const studentData = [
  { month: "Jan", students: 150 },
  { month: "Feb", students: 165 },
  { month: "Mar", students: 180 },
  { month: "Apr", students: 195 },
  { month: "May", students: 210 },
  { month: "Jun", students: 225 },
];

const admissionData = [
  { name: "Approved", value: 120, color: "#10b981" },
  { name: "Pending", value: 45, color: "#f59e0b" },
  { name: "Rejected", value: 15, color: "#ef4444" },
];

const defaultRecent = [
  { id: 1, name: "Alice Johnson", program: "Nursing", status: "pending" },
  { id: 2, name: "Bob Smith", program: "Medical Lab Science", status: "approved" },
  { id: 3, name: "Carol White", program: "Health Records", status: "pending" },
  { id: 4, name: "David Brown", program: "Nursing", status: "rejected" },
];

export default function AdminDashboard() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [recentApplications, setRecentApplications] = useState(defaultRecent);
  const [activeTab, setActiveTab] = useState<"overview" | "students" | "admissions" | "finance" | "reports" | "settings">("overview");
  const [students, setStudents] = useState<any[]>([]);
  const [invoices, setInvoices] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/admin/applications");
        if (res.ok) {
          const json = await res.json();
          setRecentApplications(json.data || defaultRecent);
        }
      } catch (e) {
        // ignore
      }
    }
    load();
  }, []);

  useEffect(() => {
    setStudents([
      { id: 1, name: "Alice Johnson", matric: "M-1001", program: "Nursing" },
      { id: 2, name: "Bob Smith", matric: "M-1002", program: "MLS" },
    ]);
    setInvoices([
      { id: 1, student: "Alice Johnson", amount: 50000, status: "unpaid" },
      { id: 2, student: "Bob Smith", amount: 75000, status: "paid" },
    ]);
  }, []);

  useEffect(() => {
    const role = typeof window !== "undefined" ? localStorage.getItem("role") : null;
    if (role !== "admin") router.push("/auth/login");
  }, [router]);

  const handleApprove = async (id: number) => {
    try {
      const res = await fetch(`/api/admin/applications/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "approved" }),
      });
      if (res.ok) {
        const json = await res.json();
        setRecentApplications((p) => p.map((x) => (x.id === id ? json.data : x)));
      }
    } catch (e) {}
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this application?")) return;
    try {
      const res = await fetch(`/api/admin/applications/${id}`, { method: "DELETE" });
      if (res.ok) setRecentApplications((p) => p.filter((x) => x.id !== id));
    } catch (e) {}
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    router.push("/");
  };

  const menuItems = [
    { icon: GraduationCap, label: "Dashboard", href: "/admin/dashboard" },
    { icon: Users, label: "Students", href: "/admin/students" },
    { icon: FileText, label: "Admissions", href: "/admin/admissions" },
    { icon: CreditCard, label: "Finance", href: "/admin/finance" },
  ];

  const tabs = [
    { key: "overview", label: "Overview" },
    { key: "students", label: "Students" },
    { key: "admissions", label: "Admissions" },
    { key: "finance", label: "Finance" },
    { key: "reports", label: "Reports" },
    { key: "settings", label: "Settings" },
  ];

  const tabClass = (key: string) => (activeTab === key ? "px-4 py-2 rounded bg-primary text-primary-foreground" : "px-4 py-2 rounded bg-white border");

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b border-border sticky top-0 z-40">
        <div className="flex items-center justify-between h-16 px-6">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden">
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <Link href="/admin/dashboard" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Munau College Logo" width={40} height={40} className="rounded-lg" />
              <span className="font-bold text-foreground hidden sm:inline">Admin Panel</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={handleLogout} className="p-2 hover:bg-destructive/10 rounded-lg transition text-destructive" title="Logout">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {sidebarOpen && (
          <aside className="w-64 bg-white border-r border-border min-h-screen overflow-y-auto">
            <div className="p-6">
              <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase">Management</h3>
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <Link key={item.href} href={item.href} className="flex items-center gap-3 px-4 py-3 rounded-lg transition text-foreground hover:bg-secondary/50">
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </aside>
        )}

        <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
          <div className="mb-6">
            <div className="flex items-center gap-3">
              {tabs.map((t) => (
                <button key={t.key} onClick={() => setActiveTab(t.key as any)} className={tabClass(t.key)}>
                  {t.label}
                </button>
              ))}
            </div>
            <div className="mt-3">
              <h1 className="text-3xl font-bold text-foreground mb-2">{activeTab === 'overview' ? 'Administration Dashboard' : activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
              <p className="text-muted-foreground">{activeTab === 'overview' ? 'System overview and management tools' : 'Manage ' + activeTab}</p>
            </div>
          </div>

          {activeTab === 'overview' && (
            <div>
              <div className="grid md:grid-cols-4 gap-4 mb-8">
                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Total Students</p>
                      <p className="text-3xl font-bold text-foreground">225</p>
                      <p className="text-xs text-green-600 mt-2">+15 this month</p>
                    </div>
                    <Users className="w-12 h-12 text-primary/20" />
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Pending Applications</p>
                      <p className="text-3xl font-bold text-foreground">{recentApplications.filter((r) => r.status === 'pending').length}</p>
                      <p className="text-xs text-orange-600 mt-2">Need review</p>
                    </div>
                    <FileText className="w-12 h-12 text-primary/20" />
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Outstanding Fees</p>
                      <p className="text-3xl font-bold text-destructive">₦2.5M</p>
                      <p className="text-xs text-red-600 mt-2">Action required</p>
                    </div>
                    <CreditCard className="w-12 h-12 text-destructive/20" />
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Collection Rate</p>
                      <p className="text-3xl font-bold text-green-600">89%</p>
                      <p className="text-xs text-green-600 mt-2">Excellent</p>
                    </div>
                    <TrendingUp className="w-12 h-12 text-green-600/20" />
                  </div>
                </Card>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 mb-8">
                <Card className="lg:col-span-2 p-6">
                  <h2 className="text-xl font-bold mb-6 text-foreground">Student Enrollment Trend</h2>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={studentData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                      <XAxis dataKey="month" stroke="var(--color-muted-foreground)" />
                      <YAxis stroke="var(--color-muted-foreground)" />
                      <Tooltip />
                      <Line type="monotone" dataKey="students" stroke="var(--color-primary)" strokeWidth={2} dot={{ fill: 'var(--color-primary)' }} />
                    </LineChart>
                  </ResponsiveContainer>
                </Card>

                <Card className="p-6">
                  <h2 className="text-xl font-bold mb-6 text-foreground">Admission Status</h2>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie data={admissionData} cx="50%" cy="50%" labelLine={false} label={({ name, value }) => `${name} ${value}`} outerRadius={80} dataKey="value">
                        {admissionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </Card>
              </div>

              <Card className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-foreground">Recent Applications</h2>
                  <Link href="/admin/admissions">
                    <Button variant="outline" size="sm">View All</Button>
                  </Link>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 text-foreground font-semibold">Applicant Name</th>
                        <th className="text-left py-3 px-4 text-foreground font-semibold">Program</th>
                        <th className="text-center py-3 px-4 text-foreground font-semibold">Status</th>
                        <th className="text-right py-3 px-4 text-foreground font-semibold">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentApplications.map((app) => (
                        <tr key={app.id} className="border-b border-border hover:bg-secondary/50">
                          <td className="py-4 px-4 text-foreground">{app.name}</td>
                          <td className="py-4 px-4 text-muted-foreground">{app.program}</td>
                          <td className="py-4 px-4 text-center">
                            <Badge variant={app.status === 'approved' ? 'default' : app.status === 'pending' ? 'secondary' : 'destructive'}>{app.status}</Badge>
                          </td>
                          <td className="py-4 px-4 text-right">
                            <div className="flex gap-2 justify-end">
                              {app.status === 'pending' && <Button size="sm" onClick={() => handleApprove(app.id)}>Approve</Button>}
                              <Button size="sm" onClick={() => alert('View (mock)')}>View</Button>
                              <Button size="sm" variant="destructive" onClick={() => handleDelete(app.id)}>Delete</Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          )}

          {activeTab === 'students' && (
            <Card className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-foreground">Students</h2>
                <Button onClick={() => alert('Add student (mock)')}>Add Student</Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4">Name</th>
                      <th className="text-left py-3 px-4">Matric</th>
                      <th className="text-left py-3 px-4">Program</th>
                      <th className="text-right py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((s) => (
                      <tr key={s.id} className="border-b border-border hover:bg-secondary/50">
                        <td className="py-4 px-4">{s.name}</td>
                        <td className="py-4 px-4">{s.matric}</td>
                        <td className="py-4 px-4">{s.program}</td>
                        <td className="py-4 px-4 text-right">
                          <div className="flex gap-2 justify-end">
                            <Button size="sm" onClick={() => alert('View student (mock)')}>View</Button>
                            <Button size="sm" variant="destructive" onClick={() => alert('Remove student (mock)')}>Remove</Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          )}

          {activeTab === 'admissions' && (
            <Card className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-foreground">Admissions</h2>
                <Button onClick={() => alert('Import applicants (mock)')}>Import</Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4">Applicant</th>
                      <th className="text-left py-3 px-4">Program</th>
                      <th className="text-center py-3 px-4">Status</th>
                      <th className="text-right py-3 px-4">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentApplications.map((app) => (
                      <tr key={app.id} className="border-b border-border hover:bg-secondary/50">
                        <td className="py-4 px-4">{app.name}</td>
                        <td className="py-4 px-4">{app.program}</td>
                        <td className="py-4 px-4 text-center"><Badge variant={app.status === 'approved' ? 'default' : app.status === 'pending' ? 'secondary' : 'destructive'}>{app.status}</Badge></td>
                        <td className="py-4 px-4 text-right">
                          <div className="flex gap-2 justify-end">
                            {app.status === 'pending' && <Button size="sm" onClick={() => handleApprove(app.id)}>Approve</Button>}
                            <Button size="sm" onClick={() => alert('View applicant (mock)')}>View</Button>
                            <Button size="sm" variant="destructive" onClick={() => handleDelete(app.id)}>Delete</Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          )}

          {activeTab === 'finance' && (
            <Card className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-foreground">Finance</h2>
                <Button onClick={() => alert('Create invoice (mock)')}>Create Invoice</Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4">Student</th>
                      <th className="text-left py-3 px-4">Amount</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-right py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoices.map((inv) => (
                      <tr key={inv.id} className="border-b border-border hover:bg-secondary/50">
                        <td className="py-4 px-4">{inv.student}</td>
                        <td className="py-4 px-4">₦{inv.amount.toLocaleString()}</td>
                        <td className="py-4 px-4">{inv.status}</td>
                        <td className="py-4 px-4 text-right">
                          <div className="flex gap-2 justify-end">
                            <Button size="sm">View</Button>
                            <Button size="sm" variant="destructive">Cancel</Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          )}

          {activeTab === 'reports' && (
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Reports</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Button onClick={() => alert('Generate enrollment report (mock)')}>Enrollment</Button>
                <Button onClick={() => alert('Generate finance report (mock)')}>Finance</Button>
                <Button onClick={() => alert('Generate admissions report (mock)')}>Admissions</Button>
              </div>
            </Card>
          )}

          {activeTab === 'settings' && (
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Settings</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">Site Title</div>
                    <div className="text-sm text-muted-foreground">Munau College of Health Sciences and Technology</div>
                  </div>
                  <Button size="sm" onClick={() => alert('Edit site title (mock)')}>Edit</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">Academic Session</div>
                    <div className="text-sm text-muted-foreground">2025/2026</div>
                  </div>
                  <Button size="sm">Change</Button>
                </div>
              </div>
            </Card>
          )}
        </main>
      </div>
    </div>
  );
}
