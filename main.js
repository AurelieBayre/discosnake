window.onload=function(){
  const easy = document.getElementById("easy")
  const medium = document.getElementById("medium")
  const difficult = document.getElementById("difficult")
  const insane = document.getElementById("insane")

  
  canvas = document.getElementById("gameBoard")
  ctx = canvas.getContext("2d")
  document.addEventListener("keydown", keyPush)
  setInterval(play, 100)
}
px = py = 10
gs = tc = 20
ax= ay = 15
xv = yv = 0
trail = []
tail = 5

const randomColor = () => {
  const num = Math.floor(Math.random()*10)
  switch(num){
    case 0:
    return "turquoise"
    case 1:
    return "coral"
    case 2:
    return "greenyellow"
    case 3:
    return "lightpink"
    case 4:
    return "mediumorchid"
    case 5:
    return "slategrey"
    case 6:
    return "tomato"
    case 7:
    return "steelblue"
    case 8:
    return "plum"
    case 9:
    return "mediumvioletred"
    
  }
}

function play(){
  px += xv
  py += yv

  if (px < 0){
    px = tc - 1
  }
  if (px > tc - 1){
    px = 0
  }
  if (py < 0) {
    py = tc - 1
  }
  if (py > tc-1) {
    py = 0
  }

//the board:
  ctx.fillStyle="black"
  ctx.fillRect(0, 0, canvas.width, canvas.height)

//the snake:
  ctx.fillStyle=randomColor()
  for (let i = 0; i < trail.length; i ++){
    ctx.fillRect(trail[i].x*gs, trail[i].y*gs, gs-2, gs-2)
    if (trail[i].x === px && trail[i].y===py){
      tail = 5
    }
  }
  
  trail.push({
    x: px,
    y: py
    })
  while(trail.length>tail) {
    trail.shift()
  }

  if (ax===px && ay === py) {
    tail ++
    ax = Math.floor(Math.random()*tc)
    ay = Math.floor(Math.random()*tc)

  }
//the apple:
  ctx.fillStyle="red"
  ctx.fillRect(ax*gs, ay*gs, gs-2, gs-2)
}

function keyPush(e) {
  switch(e.keyCode){
    case 37:
      xv=-1
      yv=0
      break
    case 38:
      xv=0
      yv=-1
      break
    case 39:
      xv=1
      yv=0
      break
    case 40:
      xv=0
      yv=1
      break
  }
}