import { NextRequest, NextResponse } from 'next/server'
import { readJsonFile, writeJsonFile } from '@/lib/file-store'

const FILENAME = 'admin.json'

export async function GET() {
  const data = (await readJsonFile(FILENAME)) || []
  return NextResponse.json({ success: true, data })
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const list = (await readJsonFile(FILENAME)) || []
  const id = list.length ? Math.max(...list.map((x: any) => x.id)) + 1 : 1
  const item = { id, ...body }
  list.push(item)
  await writeJsonFile(FILENAME, list)
  return NextResponse.json({ success: true, data: item }, { status: 201 })
}
