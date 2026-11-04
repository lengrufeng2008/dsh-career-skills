import { test } from 'node:test'
import assert from 'node:assert/strict'
import { apply } from '../plugin/index.js'

test('provider lists four career skills and loads job-fit', async () => {
  let provider
  const ctx = {
    skills: {
      registerProvider(create) {
        provider = create({ signal: new AbortController().signal, invalidate() {} })
        return () => {}
      },
    },
  }
  apply(ctx)
  assert.ok(provider)
  const list = await provider.list({})
  assert.equal(list.length, 4)
  assert.equal(list[0].name, 'career')
  const candidate = list.find((item) => item.name === 'job-fit')
  const definition = await provider.get(candidate, {})
  assert.match(definition.content, /^# Job fit evaluation/m)
  assert.ok(definition.content.length > 1000)
  assert.equal(definition.provider, 'dsh-career-skills')
})
