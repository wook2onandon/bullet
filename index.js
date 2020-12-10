
const container = document.querySelector('#main_container')

const createBullet = () => {
  const newBullet = document.createElement('img');
  newBullet.setAttribute('id', 'bullet');
  container.appendChild(newBullet);
}

let curBullet = 390;

const putBullet = () => {
  const bullet = document.querySelector('#bullet')
  curBullet += 140
  bullet.style.left = curBullet + 'px'

  if(curBullet >= 1510) {
    container.removeChild(bullet)
    curBullet = 390;
  }
  console.log(curBullet)
}


const shot = (e) => {
  let count = 0;
  const judgekey = e.keyCode;
  const repeatStart = setInterval(putBullet,1000)
  const repeatEnd = setTimeout(() => {clearInterval(repeatStart)}, 8000)
  if (judgekey === 68) {
    createBullet();
    repeatStart
    repeatEnd
  }
} 

document.addEventListener('keydown', shot);