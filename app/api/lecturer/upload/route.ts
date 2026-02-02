import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const form = await request.formData()
    const file = form.get('file') as any
    const name = file?.name || `upload-${Date.now()}`
    // For demo: return a mock upload URL; in production, integrate with S3/Cloud Storage
    const url = `/uploads/${Date.now()}-${name}`
    return NextResponse.json({ success: true, url }, { status: 201 })
  } catch (e) {
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}
