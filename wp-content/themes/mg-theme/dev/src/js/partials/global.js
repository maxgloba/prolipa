document.getElementById('copyrightYear').innerHTML = new Date().getFullYear();

setTimeout(()=>{
  const dataTel = document.querySelectorAll('[data-tel]')
  dataTel.forEach(tel => {
    tel.href = `tel:+${tel.dataset.tel.replace(/[^\dA-Z]/g, '').replace(/[\s]/g, '')}`
  })
}, 50);

const formPhones = document.querySelectorAll('input[name="phone"]')
formPhones.forEach(el => {
  el.addEventListener('input', e => {
    // +7 (___) ___-__-__
    let arr = ['+', '7']
    let number = e.target.value.replace("+7", "")
    let phoneArr = number.replace(/[^\dA-Z]/g, '').replace(/[\s]/g, '').split('')
    console.dir(phoneArr)
    arr.push(...phoneArr)
    if (arr.length > 0) arr.splice(2, 0, ' (');
    if (arr.length > 6) arr.splice(6, 0, ') ');
    if (arr.length > 10) arr.splice(10, 0, '-');
    if (arr.length > 13) arr.splice(13, 0, '-');
    e.target.value = arr.toString().replace(/[,]/g, '');
  })
})

const disableScroll = () => {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  window.onscroll = function() {
    window.scrollTo(scrollLeft, scrollTop);
  }
}

const enableScroll = () => {
  window.onscroll = function() {}
}

const modalOpen = document.querySelectorAll('.modalOpen')
modalOpen.forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault()
    disableScroll()
    document.querySelector('.modal').classList.add('active')
  })
})

const modalClose = document.querySelectorAll('.modalClose')
modalClose.forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault()
    enableScroll()
    document.querySelector('.modal').classList.remove('active')
  })
})

const qualityFunc = () => {
  const qualityImg = document.querySelector('.quality__item-img img')
  if(qualityImg.clientHeight === 0){
    setTimeout(qualityFunc(), 500);
  }
  if(window.innerWidth > 575 && window.innerWidth < 800){
    document.querySelector('.quality__brown').style.marginTop = `-${qualityImg.clientHeight}px`
  } else {
    document.querySelector('.quality__brown').style.marginTop = `0`
  }
}

setTimeout(()=>{
  qualityFunc()
}, 50);
window.addEventListener('resize', () => {
  qualityFunc()
}, true);