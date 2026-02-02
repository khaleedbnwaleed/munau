import fs from 'fs/promises'
import path from 'path'

const dataDir = path.join(process.cwd(), 'data')

export async function readJsonFile(filename: string) {
  const p = path.join(dataDir, filename)
  try {
    const raw = await fs.readFile(p, 'utf8')
    return JSON.parse(raw)
  } catch (e) {
    return null
  }
}

export async function writeJsonFile(filename: string, data: any) {
  const p = path.join(dataDir, filename)
  await fs.mkdir(path.dirname(p), { recursive: true })
  await fs.writeFile(p, JSON.stringify(data, null, 2), 'utf8')
}
