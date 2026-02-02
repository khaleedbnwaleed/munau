import { NextRequest, NextResponse } from 'next/server'
import { readJsonFile, writeJsonFile } from '@/lib/file-store'

const FILENAME = 'lecturer.json'

export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const courseId = url.searchParams.get('courseId')
  const data = (await readJsonFile(FILENAME)) || { courses: [], rosters: {} }
  const courses = data.courses || []
  const roster = courseId ? data.rosters[courseId] || [] : []
  return NextResponse.json({ success: true, courses, roster })
}

export async function PATCH(request: NextRequest) {
  const body = await request.json()
  const { courseId, studentId, grade } = body
  const data = (await readJsonFile(FILENAME)) || { courses: [], rosters: {} }
  if (!data.rosters || !data.rosters[courseId]) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  const roster = data.rosters[courseId]
  const idx = roster.findIndex((s: any) => s.id === studentId)
  if (idx === -1) return NextResponse.json({ error: 'Student not found' }, { status: 404 })
  roster[idx].grade = grade
  await writeJsonFile(FILENAME, data)
  return NextResponse.json({ success: true, data: roster[idx] })
}
