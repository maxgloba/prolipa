(function(){

  const headerScroll = () => {
    if(window.scrollY > 1){
      document.querySelector('.main-header').classList.add('scrolling')
    } else {
      document.querySelector('.main-header').classList.remove('scrolling')
    }
  }
  headerScroll()
  window.addEventListener("scroll", () => headerScroll())

})();