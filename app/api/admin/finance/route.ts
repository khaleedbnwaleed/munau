import { NextRequest, NextResponse } from 'next/server'
import { readJsonFile, writeJsonFile } from '@/lib/file-store'

const FILENAME = 'finance.json'

export async function GET() {
  const data = (await readJsonFile(FILENAME)) || []
  // also return simple aggregates
  const totalOutstanding = data.reduce((s: number, i: any) => s + (i.outstanding || 0), 0)
  const totalDue = data.reduce((s: number, i: any) => s + (i.amount || 0), 0)
  return NextResponse.json({ success: true, data, summary: { totalOutstanding, totalDue } })
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, paidAmount } = body
    const list = (await readJsonFile(FILENAME)) || []
    const idx = list.findIndex((i: any) => i.id === id)
    if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    const item = list[idx]
    item.paid = (item.paid || 0) + (paidAmount || 0)
    item.outstanding = Math.max(0, item.amount - item.paid)
    item.status = item.outstanding === 0 ? 'paid' : (item.paid > 0 ? 'partial' : 'pending')
    list[idx] = item
    await writeJsonFile(FILENAME, list)
    return NextResponse.json({ success: true, data: item })
  } catch (e) {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 })
  }
}
