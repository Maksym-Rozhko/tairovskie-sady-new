document.addEventListener('DOMContentLoaded', () => {
  AOS.init();
  headerScrollFixed();
  burgerMenu();
  initSliders();
  navItemsSlidingUnderline();
  planningChooseSlider();
  proggressCounterStats();
  btnScrollToTop();
  smoothScrollToElem();
  widgetAndPopUpShow();
});

function headerScrollFixed() {
  const headerFixed = document.querySelector('.header__desktop');
  
  window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    scrollY > 100 ? headerFixed.classList.add('header__desktop-active') : headerFixed.classList.remove('header__desktop-active');
  });
};

function burgerMenu() {
  const burgerMenuElem = document.querySelector('.burger-menu');
  const navigationMobileList = document.querySelector('.navigation__mobile');
  const navigationBackground = document.querySelector('.navigation-bg');

  burgerMenuElem.addEventListener('click', () => {
    burgerMenuElem.classList.toggle('burger-menu__active');
    navigationMobileList.classList.toggle('navigation__active');
    navigationBackground.classList.toggle('navigation-bg__active');
  });
};

function initSliders() {
  const mySwiper = new Swiper('.main-slider.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loopFillGroupWithBlank: true,
    allowTouchMove: true,
    navigation: {
      nextEl: '.main-btn__next',
      prevEl: '.main-btn__prev',
    },
  });

  const priceSlider = new Swiper('.price-slider.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 20,

    navigation: {
      nextEl: '.price-btn__next',
      prevEl: '.price-btn__prev',
    },

    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      },
    }
  });

  const advantagesSlider = new Swiper('.gallery-slider.swiper-container', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,

    navigation: {
      nextEl: '.gallery-btn__next',
      prevEl: '.gallery-btn__prev',
    },
  });
};

function navItemsSlidingUnderline() {
  const menu = document.querySelector('.nav-list');
  
  menu.addEventListener('mouseover', e => {
    const target = e.target;
    if (target.classList.contains('nav-list__link')) {
      menu.style.setProperty( 
        '--underline-width', `${target.offsetWidth}px`
      );
      menu.style.setProperty(
        '--underline-offset-x', `${target.offsetLeft}px`
      );
    };
  });
  menu.addEventListener('mouseleave', () =>
    menu.style.setProperty('--underline-width', '0')
  );
};

function planningChooseSlider() {
  const removeActiveBtns = () => sectionsBuildingBnts.forEach(btn => btn.classList.remove('building__btn--active'));
  const sectionsContainerControl1 = document.querySelector('#forBuilding1');
  const sectionsContainerControl2 = document.querySelector('#forBuilding2');
  const swiperContainerAll = document.querySelectorAll('.swiper__container');
  const removeSlidersWrapp = () => swiperContainerAll.forEach(item => item.classList.add('hidden-sections-slides'));
  const sectionsBuildingBnts = document.querySelectorAll('.sections-building__bnt');
  const sectionExploitationText1 = document.querySelector('.exploitation-text_building1');
  const sectionExploitationText2 = document.querySelector('.exploitation-text_building2');
  sectionExploitationText1.textContent = 'сдана' // default text for building 1 - section 1
  sectionExploitationText2.textContent = 'I квартал 2024 года' // default text for building 2 - section 1

  sectionsBuildingBnts.forEach(btn => {
    btn.addEventListener('click', () => {
      removeActiveBtns();
      btn.classList.add('building__btn--active');
      if (btn.id === 'building1') {
        sectionsContainerControl1.classList.remove('hidden-building-control');
        sectionsContainerControl2.classList.add('hidden-building-control');
        removeSlidersWrapp();
        hiddenAllContainerSlides();
        building1Section1.classList.remove('hidden-sections-slides');
        B1Section1Control.classList.remove('hidden-sections-control');
        initSwiper();
      } 
      if (btn.id === 'building2') {
        sectionsContainerControl2.classList.remove('hidden-building-control');
        sectionsContainerControl1.classList.add('hidden-building-control');
        removeSlidersWrapp();
        hiddenAllContainerSlides();
        building2Section1.classList.remove('hidden-sections-slides');
        B2Section1Control.classList.remove('hidden-sections-control');
        initSwiper();
      } 
    });
  });

  function initSwiper() {
    const b1Section1Swiper = new Swiper('.building1_section1.swiper-container', {
      watchSlidesVisibility: true,
      lazy: {
        loadPrevNext: true,
      },
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      allowTouchMove: false,
      pagination: {
        el: '.counter1',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.floors-btn__next1',
        prevEl: '.floors-btn__prev1',
      },
    });
    
    const b1Section2Swiper = new Swiper('.building1_section2.swiper-container', {
      watchSlidesVisibility: true,
      lazy: {
        loadPrevNext: true,
      },
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      allowTouchMove: false,
      pagination: {
        el: '.counter2',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.floors-btn__next2',
        prevEl: '.floors-btn__prev2',
      },
    });
  
    const b1Section3Swiper = new Swiper('.building1_section3.swiper-container', {
      watchSlidesVisibility: true,
      lazy: {
        loadPrevNext: true,
      },
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      allowTouchMove: false,
      pagination: {
        el: '.counter3',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.floors-btn__next3',
        prevEl: '.floors-btn__prev3',
      },
    });
  
    const b1Section4Swiper = new Swiper('.building1_section4.swiper-container', {
      watchSlidesVisibility: true,
      lazy: {
        loadPrevNext: true,
      },
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      allowTouchMove: false,
      pagination: {
        el: '.counter4',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.floors-btn__next4',
        prevEl: '.floors-btn__prev4',
      },
    });
  
    const b1Section5Swiper = new Swiper('.building1_section5.swiper-container', {
      watchSlidesVisibility: true,
      lazy: {
        loadPrevNext: true,
      },
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      allowTouchMove: false,
      pagination: {
        el: '.counter5',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.floors-btn__next5',
        prevEl: '.floors-btn__prev5',
      },
    });
  
    const b1Section6Swiper = new Swiper('.building1_section6.swiper-container', {
      watchSlidesVisibility: true,
      lazy: {
        loadPrevNext: true,
      },
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      allowTouchMove: false,
      pagination: {
        el: '.counter6',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.floors-btn__next6',
        prevEl: '.floors-btn__prev6',
      },
    });
  
    const b2Section1Swiper = new Swiper('.building2_section1.swiper-container', {
      watchSlidesVisibility: true,
      lazy: {
        loadPrevNext: true,
      },
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      allowTouchMove: false,
      pagination: {
        el: '.counter21',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.floors-btn__next21',
        prevEl: '.floors-btn__prev21',
      },
    });
  
    const b2Section2Swiper = new Swiper('.building2_section2.swiper-container', {
      watchSlidesVisibility: true,
      lazy: {
        loadPrevNext: true,
      },
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      allowTouchMove: false,
      pagination: {
        el: '.counter22',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.floors-btn__next22',
        prevEl: '.floors-btn__prev22',
      },
    });
  
    const b2Section3Swiper = new Swiper('.building2_section3.swiper-container', {
      watchSlidesVisibility: true,
      lazy: {
        loadPrevNext: true,
      },
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      allowTouchMove: false,
      pagination: {
        el: '.counter23',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.floors-btn__next23',
        prevEl: '.floors-btn__prev23',
      },
    });
  
    const b2Section4Swiper = new Swiper('.building2_section4.swiper-container', {
      watchSlidesVisibility: true,
      lazy: {
        loadPrevNext: true,
      },
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      allowTouchMove: false,
      pagination: {
        el: '.counter24',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.floors-btn__next24',
        prevEl: '.floors-btn__prev24',
      },
    });
  
    const b2Section5Swiper = new Swiper('.building2_section5.swiper-container', {
      watchSlidesVisibility: true,
      lazy: {
        loadPrevNext: true,
      },
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      allowTouchMove: false,
      pagination: {
        el: '.counter25',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.floors-btn__next25',
        prevEl: '.floors-btn__prev25',
      },
    });
  
    const b2Section6Swiper = new Swiper('.building2_section6.swiper-container', {
      watchSlidesVisibility: true,
      lazy: {
        loadPrevNext: true,
      },
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      allowTouchMove: false,
      pagination: {
        el: '.counter26',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.floors-btn__next26',
        prevEl: '.floors-btn__prev26',
      },
    });
  
    const b2Section7Swiper = new Swiper('.building2_section7.swiper-container', {
      watchSlidesVisibility: true,
      lazy: {
        loadPrevNext: true,
      },
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      allowTouchMove: false,
      pagination: {
        el: '.counter27',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.floors-btn__next27',
        prevEl: '.floors-btn__prev27',
      },
    });

    const b2Section8Swiper = new Swiper('.building2_section8.swiper-container', {
      watchSlidesVisibility: true,
      lazy: {
        loadPrevNext: true,
      },
      initialSlide: 2,
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      allowTouchMove: false,
      pagination: {
        el: '.counter28',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.floors-btn__next28',
        prevEl: '.floors-btn__prev28',
      },
    });

    const b2Section9Swiper = new Swiper('.building2_section9.swiper-container', {
      watchSlidesVisibility: true,
      lazy: {
        loadPrevNext: true,
      },
      initialSlide: 1,
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      allowTouchMove: false,
      pagination: {
        el: '.counter29',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.floors-btn__next29',
        prevEl: '.floors-btn__prev29',
      },
    });
  }  initSwiper();

  //all sections
  //building 1
  const building1Section1 = document.querySelector('.building1_section1');
  const building1Section2 = document.querySelector('.building1_section2');
  const building1Section3 = document.querySelector('.building1_section3');
  const building1Section4 = document.querySelector('.building1_section4');
  const building1Section5 = document.querySelector('.building1_section5');
  const building1Section6 = document.querySelector('.building1_section6');
  //building 2 
  const building2Section1 = document.querySelector('.building2_section1');
  const building2Section2 = document.querySelector('.building2_section2');
  const building2Section3 = document.querySelector('.building2_section3');
  const building2Section4 = document.querySelector('.building2_section4');
  const building2Section5 = document.querySelector('.building2_section5');
  const building2Section6 = document.querySelector('.building2_section6');
  const building2Section7 = document.querySelector('.building2_section7');
  const building2Section8 = document.querySelector('.building2_section8');
  const building2Section9 = document.querySelector('.building2_section9');

  //all controls container
  // building 1
  const B1Section1Control = document.querySelector('#B1Section1Control');
  const B1Section2Control = document.querySelector('#B1Section2Control');
  const B1Section3Control = document.querySelector('#B1Section3Control');
  const B1Section4Control = document.querySelector('#B1Section4Control');
  const B1Section5Control = document.querySelector('#B1Section5Control');
  const B1Section6Control = document.querySelector('#B1Section6Control');
  //building 2
  const B2Section1Control = document.querySelector('#B2Section1Control');
  const B2Section2Control = document.querySelector('#B2Section2Control');
  const B2Section3Control = document.querySelector('#B2Section3Control');
  const B2Section4Control = document.querySelector('#B2Section4Control');
  const B2Section5Control = document.querySelector('#B2Section5Control');
  const B2Section6Control = document.querySelector('#B2Section6Control');
  const B2Section7Control = document.querySelector('#B2Section7Control');
  const B2Section8Control = document.querySelector('#B2Section8Control');
  const B2Section9Control = document.querySelector('#B2Section9Control');

  const hiddenAllContainerSlides = () => {
    //sections
    //building 1
    building1Section1.classList.add('hidden-sections-slides');
    building1Section2.classList.add('hidden-sections-slides');
    building1Section3.classList.add('hidden-sections-slides');
    building1Section4.classList.add('hidden-sections-slides');
    building1Section5.classList.add('hidden-sections-slides');
    building1Section6.classList.add('hidden-sections-slides');
    //building 2
    building2Section1.classList.add('hidden-sections-slides');
    building2Section2.classList.add('hidden-sections-slides');
    building2Section3.classList.add('hidden-sections-slides');
    building2Section4.classList.add('hidden-sections-slides');
    building2Section5.classList.add('hidden-sections-slides');
    building2Section6.classList.add('hidden-sections-slides');
    building2Section7.classList.add('hidden-sections-slides');
    building2Section8.classList.add('hidden-sections-slides');
    building2Section9.classList.add('hidden-sections-slides');
    //controls
    //building 1
    B1Section1Control.classList.add('hidden-sections-control');
    B1Section2Control.classList.add('hidden-sections-control');
    B1Section3Control.classList.add('hidden-sections-control');
    B1Section4Control.classList.add('hidden-sections-control');
    B1Section5Control.classList.add('hidden-sections-control');
    B1Section6Control.classList.add('hidden-sections-control');
    //building 2
    B2Section1Control.classList.add('hidden-sections-control');
    B2Section2Control.classList.add('hidden-sections-control');
    B2Section3Control.classList.add('hidden-sections-control');
    B2Section4Control.classList.add('hidden-sections-control');
    B2Section5Control.classList.add('hidden-sections-control');
    B2Section6Control.classList.add('hidden-sections-control');
    B2Section7Control.classList.add('hidden-sections-control');
    B2Section8Control.classList.add('hidden-sections-control');
    B2Section9Control.classList.add('hidden-sections-control');
  }

  const sectionsLabels = document.querySelectorAll('.sections-ctm-label');
  sectionsLabels.forEach(section => {
    section.addEventListener('click', () => {
      hiddenAllContainerSlides();
      let sectionNumber = section.innerHTML;
      switch(sectionNumber) {
        case '1':
          building1Section1.classList.remove('hidden-sections-slides');
          B1Section1Control.classList.remove('hidden-sections-control');
          sectionExploitationText1.textContent = 'сдана';
          initSwiper();
          break;
        case '2':
          building1Section2.classList.remove('hidden-sections-slides');
          B1Section2Control.classList.remove('hidden-sections-control');
          sectionExploitationText1.textContent = 'сдана';
          initSwiper();
          break;
        case '3':
          building1Section3.classList.remove('hidden-sections-slides');
          B1Section3Control.classList.remove('hidden-sections-control');
          sectionExploitationText1.textContent = 'сдана';
          initSwiper();
          break;
        case '4':
          building1Section4.classList.remove('hidden-sections-slides');
          B1Section4Control.classList.remove('hidden-sections-control');
          sectionExploitationText1.textContent = 'сдача 2 квартал  2021 года';
          initSwiper();
          break;
        case '5':
          building1Section5.classList.remove('hidden-sections-slides');
          B1Section5Control.classList.remove('hidden-sections-control');
          sectionExploitationText1.textContent = 'сдача 2 квартал  2021 года';
          initSwiper();
          break;
        case '6':
          building1Section6.classList.remove('hidden-sections-slides');
          B1Section6Control.classList.remove('hidden-sections-control');
          sectionExploitationText1.textContent = 'сдача 4 квартал  2021 года';
          initSwiper();
          break;
      }
    });
  });

  const sectionsLabels2 = document.querySelectorAll('.sections-ctm-label2');
  sectionsLabels2.forEach(section => {
    section.addEventListener('click', () => {
      hiddenAllContainerSlides();
      let sectionNumber = section.innerHTML;
      switch(sectionNumber) {
        case '1':
          building2Section1.classList.remove('hidden-sections-slides');
          B2Section1Control.classList.remove('hidden-sections-control');
          sectionExploitationText2.textContent = 'I квартал 2024 года';
          initSwiper();
          break;
        case '2':
          building2Section2.classList.remove('hidden-sections-slides');
          B2Section2Control.classList.remove('hidden-sections-control');
          sectionExploitationText2.textContent = 'I квартал 2024 года';
          initSwiper();
          break;
        case '3':
          building2Section3.classList.remove('hidden-sections-slides');
          B2Section3Control.classList.remove('hidden-sections-control');
          sectionExploitationText2.textContent = 'II квартал 2023 года';
          initSwiper();
          break;
        case '4':
          building2Section4.classList.remove('hidden-sections-slides');
          B2Section4Control.classList.remove('hidden-sections-control');
          sectionExploitationText2.textContent = 'II квартал 2023 года';
          initSwiper();
          break;
        case '5':
          building2Section5.classList.remove('hidden-sections-slides');
          B2Section5Control.classList.remove('hidden-sections-control');
          sectionExploitationText2.textContent = 'сентябрь 2022';
          initSwiper();
          break;
        case '6':
          building2Section6.classList.remove('hidden-sections-slides');
          B2Section6Control.classList.remove('hidden-sections-control');
          sectionExploitationText2.textContent = 'июль 2022';
          initSwiper();
          break;
        case '7':
          building2Section7.classList.remove('hidden-sections-slides');
          B2Section7Control.classList.remove('hidden-sections-control');
          sectionExploitationText2.textContent = 'апрель 2022';
          initSwiper();
          break;
        case '8':
          building2Section8.classList.remove('hidden-sections-slides');
          B2Section8Control.classList.remove('hidden-sections-control');
          sectionExploitationText2.textContent = 'IV квартал 2022 года';
          initSwiper();
          break;
        case '9':
          building2Section9.classList.remove('hidden-sections-slides');
          B2Section9Control.classList.remove('hidden-sections-control');
          sectionExploitationText2.textContent = 'IV квартал 2022 года';
          initSwiper();
          break;
      }
    });
  });
}

function proggressCounterStats() {
  const counter = document.querySelectorAll('.counter-digits');
  const counterNumbers = (() => {
    let limit = 0; 
    window.addEventListener('DOMContentLoaded', () => {  
      if ( limit === counter.length ) return;

      for(let i = 0; i < counter.length; i++) {
        let pos = counter[i].getBoundingClientRect().top; 
        let win = window.innerHeight - 40; 
        if ( pos < win && counter[i].dataset.stop === '0' ) {
          counter[i].dataset.stop = 1; 
          let x = 0;
          limit++; 
          let int = setInterval(() => {
            x = x + Math.ceil( counter[i].dataset.to / 40 ); 
            counter[i].innerText = x;
            if( x > counter[i].dataset.to ) {
              counter[i].innerText = counter[i].dataset.to;
              clearInterval(int);
            }
          }, 60);
        }
      }
    });
  })();
}

function btnScrollToTop() {
  const btnScrollUp = document.querySelector('.scroll-top');
  const topElem = document.querySelector('.main'); 
  
  btnScrollUp.addEventListener('click', () => {
    topElem.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

function smoothScrollToElem() {
  const anchorsLink = document.querySelectorAll('a.nav-list__link');
  const scrollToTop = document.querySelectorAll('a.header__logo');
  const scrollToPageElem = document.querySelectorAll('a.main-button');
  const burgerMenuElem = document.querySelector('.burger-menu');
  const navigationMobileList = document.querySelector('.navigation__mobile');
  const navigationBackground = document.querySelector('.navigation-bg');

  const removeBurgerOverflow = () => {
    burgerMenuElem.classList.toggle('burger-menu__active');
    navigationMobileList.classList.toggle('navigation__active');
    navigationBackground.classList.toggle('navigation-bg__active');
  };

  const smoothScroll = (anchors) => {
    for (let anchor of anchors) {
      const blockID = anchor.getAttribute('href');
      anchor.addEventListener('click', (e) => {
        e.preventDefault();

        if(innerWidth <= 812 && burgerMenuElem.classList.contains('burger-menu__active')) {
          setTimeout(() => {
            removeBurgerOverflow();
          }, 500);
        }

        document.querySelector(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        if (anchor.classList.value === 'nav-list__link' || anchor.classList.value !== 'nav-list__link') {
          for (let anchor of anchors) {
            anchor.classList.remove('active-nav-link');
          }
          anchor.classList.add('active-nav-link');
        }
      });
    };
  };

  smoothScroll(scrollToTop);
  smoothScroll(anchorsLink);
  smoothScroll(scrollToPageElem);
}

function widgetAndPopUpShow() {
  const btnPopUpCloseElem = document.querySelectorAll('.pop-up__close');
  const popUpOverflow = document.querySelector('.pop-up__overflow');
  const popUpOverflow2 = document.querySelector('.pop-up__overflow2');
  const orderCallElems = document.querySelectorAll('.callback-form');

  const disableScroll = () => {
    const widthScroll = window.innerWidth - document.body.offsetWidth;
    document.body.dbScrollY = window.scrollY;
    document.body.style.cssText = `
        position: fixed;
        top: ${-window.scrollY}px;
        left: 0;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        padding-right: ${widthScroll}px;
    `;
  };
  
  const enableScroll = () => {
    document.body.style.cssText = '';
    window.scroll({
        top: document.body.dbScrollY
    });
  };

  const openPopUp = () => {
    popUpOverflow.classList.add('pop-up__active');
    document.addEventListener('keydown', escapeHandler);
    disableScroll();
  };

  const openPopUpOrder = () => {
    popUpOverflow2.classList.add('pop-up__active');
    document.addEventListener('keydown', escapeHandler);
    disableScroll();
  };
    
  const closePopUp = () => {
    popUpOverflow.classList.remove('pop-up__active');
    popUpOverflow2.classList.remove('pop-up__active');
    popUpThanks.classList.remove('pop-up__active');
    document.removeEventListener('keydown', escapeHandler);
    enableScroll();
  };

  const escapeHandler = e => {
    e.code === 'Escape' ? closePopUp() : false;
    enableScroll();
  }

  setTimeout(() => {
    openPopUp();
  }, 30000);

  btnPopUpCloseElem.forEach(btn => btn.addEventListener('click', () => closePopUp()));

  const checkPopUpActive = (popUpElem, e) => {
    const target = e.target;
    target.classList.contains('pop-up__close') || target === popUpElem ? closePopUp() : false;
  };

  popUpOverflow.addEventListener('click', e => checkPopUpActive(popUpOverflow, e));

  popUpOverflow2.addEventListener('click', e => checkPopUpActive(popUpOverflow2, e));

  popUpThanks.addEventListener('click', e => checkPopUpActive(popUpThanks, e));

  orderCallElems.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      openPopUpOrder();
    });
  });
}



  const popUpThanks = document.querySelector('.pop-up__thanks');
  const popUpOverflow = document.querySelector('.pop-up__overflow');
  const popUpOverflow2 = document.querySelector('.pop-up__overflow2');

  const showPopUpThanks = () => {
    popUpThanks.classList.add('pop-up__active');
  };

  const clearInputs = () => {
    const allInputs = document.querySelectorAll('.input-clear');
    allInputs.forEach(input => input.value = '');
  };

  const closePopUp = () => {
    popUpOverflow.classList.remove('pop-up__active');
    popUpOverflow2.classList.remove('pop-up__active');
    popUpThanks.classList.remove('pop-up__active');
  };
  
  jQuery(".main-screen__form").on("submit", function(e) {
    e.preventDefault();

        if(window.smetrics){
          var smform = this;
          if(smform.smIsJs){
              if(!document.smetrics_sended){
                  document.smetrics_sended = true;
                  setTimeout(function(){
                      delete document.smetrics_sended;
                  }, 8000);
                      window.smetrics.dataCollection(smform);
              }
          }
        } else {
            console.log('~700');
        }

    jQuery.ajax({
        type: "POST",
        url: "phpTelegram/form-telegram.php",
        data: jQuery(this).serialize(),
        success: function(response) {
          setTimeout(() => {
              clearInputs();
              showPopUpThanks();
          }, 500);
        },
        error: function(response) {
            console.log('Eror');
        }
    });
    return false;
  });

  jQuery(".form-banner").on("submit", function(e) {
    e.preventDefault();

      if(window.smetrics){
        var smform = this;
        if(smform.smIsJs){
            if(!document.smetrics_sended){
                document.smetrics_sended = true;
                setTimeout(function(){
                    delete document.smetrics_sended;
                }, 8000);
                    window.smetrics.dataCollection(smform);
            }
        }
      } else {
          console.log('~700');
      }

    jQuery.ajax({
        type: "POST",
        url: "phpTelegram/form-telegram.php",
        data: jQuery(this).serialize(),
        success: function(response) {
          setTimeout(() => {
              clearInputs();
              showPopUpThanks();
          }, 500);
        },
        error: function(response) {
            console.log('Eror');
        }
    });
    return false;
  });

  jQuery(".form-bottom").on("submit", function(e) {
    e.preventDefault();

      if(window.smetrics){
        var smform = this;
        if(smform.smIsJs){
            if(!document.smetrics_sended){
                document.smetrics_sended = true;
                setTimeout(function(){
                    delete document.smetrics_sended;
                }, 8000);
                    window.smetrics.dataCollection(smform);
            }
        }
      } else {
          console.log('~700');
      }

    jQuery.ajax({
        type: "POST",
        url: "phpTelegram/form-telegram.php",
        data: jQuery(this).serialize(),
        success: function(response) {
          setTimeout(() => {
              clearInputs();
              showPopUpThanks();
          }, 500);
        },
        error: function(response) {
            console.log('Eror');
        }
    });
    return false;
  });

  jQuery(".pop-up__form").on("submit", function(e) {
    e.preventDefault();

      if(window.smetrics){
        var smform = this;
        if(smform.smIsJs){
            if(!document.smetrics_sended){
                document.smetrics_sended = true;
                setTimeout(function(){
                    delete document.smetrics_sended;
                }, 8000);
                    window.smetrics.dataCollection(smform);
            }
        }
      } else {
          console.log('~700');
      }

    jQuery.ajax({
        type: "POST",
        url: "phpTelegram/form-telegram.php",
        data: jQuery(this).serialize(),
        success: function(response) {
          dataLayer.push({'event': 'send_form'});
          setTimeout(() => {
              clearInputs();
              closePopUp();
          }, 500);
          setTimeout(() => {
              showPopUpThanks();
          }, 1000);
          
        },
        error: function(response) {
            console.log('Eror');
        }
    });
    return false;
  });

  jQuery(function(){
    jQuery(".form-input--mask").mask("+38(999) 999-9999");
  });
  

