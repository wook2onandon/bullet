
const container = document.querySelector('#main_container')

const createBullet = () => {
  const newBullet = document.createElement('img');
  newBullet.setAttribute('id', 'bullet');
  container.appendChild(newBullet);
  
  return newBullet;
}


const putBullet = (bullet) => {
  let curBullet = 390;
  bullet.style.left = curBullet + 'px'
  const intervalBullet = setInterval(()=>{curBullet += 140;},1000)
  const clearBullet = setTimeout(() => {clearInterval(intervalBullet)}, 8000)
  intervalBullet
  clearBullet
  console.log(curBullet)
  
  return curBullet
}

const deleteBullet = (bullet) => {
  const judgeOfdelete = setInterval(bullet,1000);
  judgeOfdelete
  if(curBullet >= 1510) {
    container.remove(bullet)
  }
}

const shot = (e) => {
  const judgekey = e.keyCode;
  const createNewBullet = createBullet()
  const curPutBullet = putBullet()
  const valuePutbullet = putBullet(createNewBullet)
  const valueDeletebullet = deleteBullet(curPutBullet)

  if (judgekey === 68) {
    valuePutbullet
    valueDeletebullet
  }
} 

document.addEventListener('keydown', shot);