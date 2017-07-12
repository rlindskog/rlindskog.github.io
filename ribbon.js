document.addEventListener('touchmove', function (e) {
  e.preventDefault()
})
let c = document.getElementById('ribbon')
let x = c.getContext('2d')
let pr = window.devicePixelRatio || 1
let w = window.innerWidth
let h = window.innerHeight
let f = 90
let q
let m = Math
let r = 0
let u = m.PI * 2
let v = m.cos
let z = m.random

c.width = w * pr
c.height = h * pr
x.scale(pr, pr)
x.globalAlpha = 0.6
function i () {
  x.clearRect(0, 0, w, h)
  q = [{ x: 0, y: h * 0.7 + f }, { x: 0, y: h * 0.7 - f }]
  while (q[1].x < w + f) d(q[0], q[1])
}
function d (i, j) {
  x.beginPath()
  x.moveTo(i.x, i.y)
  x.lineTo(j.x, j.y)
  let k = j.x + (z() * 2 - 0.25) * f
  let n = y(j.y)
  x.lineTo(k, n)
  x.closePath()
  r -= u / -50
  x.fillStyle = '#' + (v(r) * 127 + 128 << 16 | v(r + u / 3) * 127 + 128 << 8 | v(r + u / 3 * 2) * 127 + 128).toString(16)
  x.fill()
  q[0] = q[1]
  q[1] = {x: k, y: n}
}
function y (p) {
  let t = p + (z() * 2 - 1.1) * f
  return (t > h || t < 0) ? y(p) : t
}
document.onclick = i
document.ontouchstart = i
i()
// credit: Evan You
