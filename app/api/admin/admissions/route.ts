import { NextRequest, NextResponse } from 'next/server'
import { readJsonFile, writeJsonFile } from '@/lib/file-store'

const FILENAME = 'admissions.json'

export async function GET() {
  const data = (await readJsonFile(FILENAME)) || []
  return NextResponse.json({ success: true, data })
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const list = (await readJsonFile(FILENAME)) || []
  // simple applicationId generator
  const applicationId = `APP-${Date.now()}-${Math.floor(Math.random()*9999).toString().padStart(4,'0')}`
  const item = { applicationId, ...body }
  list.push(item)
  await writeJsonFile(FILENAME, list)
  return NextResponse.json({ success: true, data: item }, { status: 201 })
}
