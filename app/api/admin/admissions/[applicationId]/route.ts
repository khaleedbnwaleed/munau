import { NextRequest, NextResponse } from 'next/server'
import { readJsonFile, writeJsonFile } from '@/lib/file-store'

const FILENAME = 'admissions.json'

export async function GET(request: NextRequest, { params }: { params: { applicationId: string } }) {
  const id = params.applicationId
  const list = (await readJsonFile(FILENAME)) || []
  const item = list.find((i: any) => i.applicationId === id)
  if (!item) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({ success: true, data: item })
}

export async function PATCH(request: NextRequest, { params }: { params: { applicationId: string } }) {
  const id = params.applicationId
  const body = await request.json()
  const list = (await readJsonFile(FILENAME)) || []
  const idx = list.findIndex((i: any) => i.applicationId === id)
  if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  list[idx] = { ...list[idx], ...body }
  await writeJsonFile(FILENAME, list)
  return NextResponse.json({ success: true, data: list[idx] })
}

export async function DELETE(request: NextRequest, { params }: { params: { applicationId: string } }) {
  const id = params.applicationId
  const list = (await readJsonFile(FILENAME)) || []
  const newList = list.filter((i: any) => i.applicationId !== id)
  await writeJsonFile(FILENAME, newList)
  return NextResponse.json({ success: true })
}
