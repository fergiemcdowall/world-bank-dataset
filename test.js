const test = require('tape')
const assert = require('assert');
var wbd

test('can require', t => {
  t.plan(1)
  try {
    wbd = require('./index.js')
    t.ok('required')
  } catch (e) {
    t.error(e)
  }
})

test('total docs is correct', t => {
  t.plan(1)
  t.equals(wbd.length, 500)
})
