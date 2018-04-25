const randomly = function(...args) {
  const arity = args.length
  const probability = 1 / arity
  const choice = Math.floor(Math.random() * arity)
  return args[choice]
}

module.exports = randomly