import { NextRequest, NextResponse } from 'next/server'
import { readJsonFile, writeJsonFile } from '@/lib/file-store'

const FILENAME = 'examiner.json'

export async function GET() {
  const data = (await readJsonFile(FILENAME)) || []
  return NextResponse.json({ success: true, data })
}

export async function PATCH(request: NextRequest) {
  const body = await request.json()
  const { id, status } = body
  const list = (await readJsonFile(FILENAME)) || []
  const idx = list.findIndex((i: any) => i.id === id)
  if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  list[idx].status = status
  await writeJsonFile(FILENAME, list)
  return NextResponse.json({ success: true, data: list[idx] })
}
