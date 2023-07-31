//= b2b/jquery-3.5.1.min.js
//= b2b/base.min.js
//= b2b/validate.min.js

//= partials/header.js


$(document).ready(function(){
  const sliderBtnLeft = '<svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 11L1 6L6 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const sliderBtnRight = '<svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6 6L1 11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  $('.product__slider').each(function(index, slider){
    index++
    $(this).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: `#slick__nav-${slider.dataset.nav}`,
      prevArrow: '<button title="prev arrow" type="button" class="slick-arrow slick-arrow__prev">' + sliderBtnLeft + '</button>',
      nextArrow: '<button title="next arrow" type="button" class="slick-arrow slick-arrow__next">' + sliderBtnRight + '</button>',
    });

    $(`#slick__nav-${slider.dataset.nav}`).slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: this,
      centerMode: true,
      focusOnSelect: true,
      arrows: false,
    });
  });

  $('.other__slider').each(function(index, slider){
    $(this).slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<button title="prev arrow" type="button" class="slick-arrow slick-arrow__prev"><svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.63159 18.158L1.4737 10.0001L9.63159 1.84217" stroke="#8C7765" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
      nextArrow: '<button title="next arrow" type="button" class="slick-arrow slick-arrow__next"><svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.36841 1.84204L9.5263 9.99994L1.36841 18.1578" stroke="#8C7765" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
  });

  $('.products__slider').each(function(index, slider){
    $(this).slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<button title="prev arrow" type="button" class="slick-arrow slick-arrow__prev"><svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.63159 18.158L1.4737 10.0001L9.63159 1.84217" stroke="#8C7765" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
      nextArrow: '<button title="next arrow" type="button" class="slick-arrow slick-arrow__next"><svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.36841 1.84204L9.5263 9.99994L1.36841 18.1578" stroke="#8C7765" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
  });
});

const catalogNav = document.querySelectorAll('.catalog__nav-item')
const catalogTabs = document.querySelectorAll('.catalog__tab')
catalogNav.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault()
    catalogNav.forEach(el => el.classList.remove('active'))
    catalogTabs.forEach(el => el.classList.remove('active'))
    document.querySelector(`.catalog__tab-${e.target.dataset.tab}`).classList.add('active')
    e.target.classList.add('active')

    $('.product__slider').each(function(index, slider){
      $(this).slick('refresh');
    })
  })
})

const otherNav = document.querySelectorAll('.other__btn')
const otherTabs = document.querySelectorAll('.other__tab')
otherNav.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault()
    otherNav.forEach(el => el.classList.remove('active'))
    otherTabs.forEach(el => el.classList.remove('active'))
    document.querySelector(`.other__tab-${e.target.dataset.tab}`).classList.add('active')
    e.target.classList.add('active')
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

// setTimeout(()=>{
//   document.querySelector('.catalog__tabs').style.minHeight = document.querySelector('.catalog__tab.active').clientHeight+'px'
// }, 500);


/* copyright */
document.getElementById('copyrightYear').innerHTML = new Date().getFullYear();

