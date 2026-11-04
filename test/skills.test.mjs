import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

const root = new URL('..', import.meta.url).pathname
const manifest = JSON.parse(await readFile(join(root, 'manifest.json'), 'utf8'))

test('manifest has four unique skills', () => {
  const names = manifest.map((item) => item.name)
  assert.equal(new Set(names).size, 4)
  assert.deepEqual(names.sort(), ['career', 'interview-prep', 'job-fit', 'resume-tailor'])
})

test('each skill has valid frontmatter', async () => {
  for (const item of manifest) {
    const text = await readFile(join(root, 'skills', item.dir, 'SKILL.md'), 'utf8')
    assert.ok(text.startsWith('---\n'), `${item.name} frontmatter`)
    assert.match(text, new RegExp(`\\nname: ${item.name}\\n`), `${item.name} name`)
    assert.match(text, /\ndescription: .+\n/, `${item.name} description`)
  }
})
