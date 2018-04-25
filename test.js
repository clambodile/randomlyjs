const test = require('tape')
const randomly = require('./randomly')

test('return each alternative roughly half the time', function (t) {
  t.plan(2)
  let choices = [0, 0]
  for (let i = 0; i < 100; i++) {
    let choice = randomly(0, 1)
    choices[choice]++
  }
  t.ok(choices[0] > 30, 'first alternative chosen close to half the time')
  t.ok(choices[1] > 30, 'second alternative chosen close to half the time')
})

test('does not return any alternative overwhelmingly often', function (t) {
  let choices = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  t.plan(11)

  for (let i = 0; i < 100; i++) {
    let choice = randomly(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  }

  choices.forEach(choice => {
    t.ok(choice < 20)
  })
})

test('works with callbacks', function (t) {
  t.plan(2)
  let choices = [0, 0]
  let cb1 = () => choices[0]++
  let cb2 = () => choices[1]++

  for (let i = 0; i < 100; i++) {
    randomly(cb1(), cb2())
  }

  choices.forEach(choice => {
    t.ok(choice > 30)
  })
})