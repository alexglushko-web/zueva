
window.addEventListener('DOMContentLoaded', ()=> {
    // === HEADER === \\
    let header = document.querySelector('header.header'),
        headerInfo = header.querySelector('.header__info'),
        headerMenu = header.querySelector('.menu'),
        headerBurger = header.querySelector('.header__burger'),
        headerClose = header.querySelector('.menu__close')

    window.addEventListener('scroll', ()=>{
        if (window.pageYOffset > 0){
            header.classList.add('_scroll')
        }
        else{
            header.classList.remove('_scroll')
        }
    })
    headerClose.addEventListener('click', ()=>{
        headerMenu.classList.remove('_active')
        headerBurger.classList.remove('_active')
        headerClose.classList.remove('_active')
    })

    headerBurger.addEventListener('click', ()=>{
        headerMenu.classList.toggle('_active')
        headerBurger.classList.toggle('_active')
        headerClose.classList.toggle('_active')
    })
    if (window.matchMedia('(max-width: 360px)').matches){
        headerInfo.insertAdjacentElement('beforeend', headerBurger)
    }
    // if (window.matchMedia('(min-width: 768.1px)').matches){
    //     document.body.style.paddingTop = header.offsetHeight + 'px'
    // }
    // window.addEventListener('resize', ()=>{
    //     if (window.matchMedia('(min-width: 768.1px)').matches){
    //         document.body.style.paddingTop = header.offsetHeight + 'px'
    //     }
    //     else{
    //         document.body.style.paddingTop = 0
    //     }
    // })

    let containerWidth
    function calcIndent() {
        if (window.matchMedia('(min-width: 768.1px)').matches){
            containerWidth = getComputedStyle(document.body).getPropertyValue('--containerWidth').split('px')[0]*1
            indent = (document.body.offsetWidth - containerWidth)/2
    
            document.body.style.setProperty('--indent', indent+'px')
        }
    }; calcIndent(); window.addEventListener('resize', calcIndent)


    
    // === REVERSE === \\

    let reverse = document.querySelector('.reverse'),
        reverseBtns = reverse.querySelectorAll('.reverse__btn'),
        reverseToggleBtns =  reverse.querySelectorAll('.toggle__btn '),
        reverseHeader = reverse.querySelector('.reverse__header'),
        reverseToggle = reverse.querySelector('.reverse__toggle')


    if (window.matchMedia('(max-width: 768px)').matches){
        // reverseToggle.innerHTML = ''
        reverseToggleBtns[0].addEventListener('click', ()=>{
            $(reverseHeader).slick('slickGoTo', 0);
            reverse.classList.remove('_active')
            // reverseToggleBtns[0].classList.remove('_active')
            // reverseToggleBtns[1].classList.add('_active')
        })
        reverseToggleBtns[1].addEventListener('click', ()=>{
            $(reverseHeader).slick('slickGoTo', 1);
            reverse.classList.add('_active')
            // reverseToggleBtns[0].classList.add('_active')
            // reverseToggleBtns[1].classList.remove('_active')
        })
    }

    $(reverseHeader).slick({
        arrows: false,
        infinite: false,
        responsive: [
          {
            breakpoint: 360,
            settings: {
                arrows : true,
                appendArrows: reverseToggle,
                prevArrow: '<button class="toggle__btn _prev"><i class="icon-arrow-left"></i></button>',
                nextArrow: '<button class="toggle__btn _next _active"><i class="icon-arrow-right"></i></button>',
            }
          },
        ]
    })

    $(reverseHeader).on('beforeChange', (slick, currentSlide)=>{
        if ($(reverseHeader).slick('slickCurrentSlide') == 0){
            reverse.classList.add('_active')
        }
        else{
            reverse.classList.remove('_active')
        }
    });

    if (window.matchMedia('(min-width: 768.1px)').matches){
    
        reverseBtns.forEach(btn => {
            btn.addEventListener('click', ()=>{ reverse.classList.toggle('_active') })
        })
        reverseToggleBtns.forEach(btn => {
            btn.addEventListener('click', ()=>{ reverse.classList.toggle('_active') })
        })
    }

    function linePosition() {
        if (window.matchMedia('(min-width: 768.1px)').matches){
            let lines = document.querySelectorAll('.line')
    
            lines.forEach(line => {
                    lineWidth = (document.body.offsetWidth - containerWidth)/2 + containerWidth
            
                line.style.setProperty('--width', lineWidth+'px')
            })
        }

    }; linePosition()

    window.addEventListener('resize', linePosition)

    // === REWARDS === \\
    let rewards = document.querySelector('.rewards'),
        rewardsContainer = rewards.querySelector('.rewards__container'),
        rewardsPic = rewards.querySelector('.rewards__pic'),
        top = 0,
        start = 0,
        toggle = false;



    (function(e){
        let scroll = document.querySelector('.rewards__list');

        let top = scroll.offsetTop;
        let drag = false;
        let coorY = 0;
        let start


        scroll.addEventListener('mousedown', function(e) {
            drag = true;
            top = scroll.offsetTop;
            coorY = e.pageY - top;
            start = e.pageY
        });
        document.addEventListener('mouseup', function(e) {
            drag = false;
            top = scroll.scrollTop;
        });
        scroll.addEventListener('mousemove', function(e) {
            if (drag) {
                console.log('==============');
                console.log(e.pageY);
                console.log(scroll.scrollTop);
                console.log(coorY);
                console.log('-------');
                // console.log();
                console.log(e.pageY - start);

                scroll.scrollTop += -1*(e.pageY - start)
                // console.log(1*(top + (e.pageY - this.offsetTop - coorY)));
                // this.scrollTop += -1*(top + (e.pageY - this.offsetTop - coorY))
            }
        });
    })();

    if (window.matchMedia('(max-width: 360.1px)').matches){
        rewardsContainer.insertAdjacentElement('beforeend', rewardsPic)
    }

    // rewardsPic.addEventListener('mousedown', ()=>{
    //     start =  event.clientY - this.offsetTop
    //     toggle = true
    // })
    // rewardsPic.addEventListener('mousemove', ()=>{
    //     if (toggle){
    //         // rewardsPic.style.marginTop = event.clientY - start  + 'px'
    //         rewardsPic.style.marginTop = event.clientY + (e.clientY - this.offsetTop - coorY)
    //         // rewardsPic.style.transform = `translateY(${event.offsetY - start  + 'px'})`
    //     }
    //     if (rewardsPic.offsetTop < 1){
    //         rewardsPic.offsetTop = 0
    //         rewardsPic.style.marginTop = 0
    //     }
    // })
    // rewardsPic.addEventListener('mouseup', ()=>{
    //     // console.log('mouseup');
    //     let coor = getComputedStyle(rewardsPic).marginTop
    //     start = coor.split('px')[0]*1
    //     toggle = false
    //     console.log(start);
    // })


    // === ARTICLES === \\
    let articlesList = document.querySelector('.articles__list')

    $(articlesList).slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '32px',
        infinite: false,
        arrows: false,
        mobileFirst: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2
              }
            }
        ]
    })
    
    // === REVIEWS === \\
    let reviews = document.querySelectorAll('.reviews__item')

    reviews.forEach(review => {
        let info = review.querySelector('.reviews__info'),
            farther = review.querySelector('._farther'),
            back = review.querySelector('._back')

        info.addEventListener('scroll', ()=> {
            if (info.scrollTop == 0){
                farther.classList.add('_active')
                back.classList.remove('_active')
                info.parentNode.classList.remove('_end')
            }
            else if (info.scrollTop + info.offsetHeight == info.scrollHeight){
                farther.classList.remove('_active')
                back.classList.add('_active')
                info.parentNode.classList.add('_end')
            }
            else{
                farther.classList.add('_active')
                back.classList.add('_active')
                info.parentNode.classList.add('_end')
            }
        })
        farther.addEventListener('click', ()=>{
            info.scrollTop += 200
        })
        back.addEventListener('click', ()=>{
            info.scrollTop -= 200
        })
    })
    
    // === SLIDERS === \\
    let sliders = document.querySelectorAll('.slider')
    sliders.forEach(slider => {
        let sliderList = slider.querySelector('.slider__list'),
            // sliderRow = slider.querySelector('.slick-list'),
            sliderToggle = slider.querySelector('.toggle'),
            sliderTabs = slider.querySelectorAll('.slider__tab'),
            sliderIndex = 0


        $(sliderList).slick({
            arrows : true,
            appendArrows: sliderToggle,
            prevArrow: '<button class="toggle__btn _prev"><i class="icon-arrow-left"></i></button>',
            nextArrow: '<button class="toggle__btn _next _active"><i class="icon-arrow-right"></i></button>',
            infinite: false
        })


        let sliderRow = slider.querySelector('.slick-track'),
            sliderItems = slider.querySelectorAll('.slick-slide'),
            sliderProgressBar = slider.querySelector('.line__progress > div')

        sliderTabs.forEach(tab => {
            tab.addEventListener('click', ()=>{
                for (let n = 0; n < sliderTabs.length; n++){
                    if (sliderTabs[n] == tab){
                        sliderIndex = n
                        $(sliderList).slick('slickGoTo', sliderIndex);
                    }
                }
            })
        })
        sliderRow.addEventListener('DOMSubtreeModified', progressbar)
        function progressbar() {
            let sliderWidth = sliderRow.offsetWidth,
                sliderLeft = getComputedStyle(sliderRow).transform.split(', ')[4]*(-1)

            
            sliderIndex = $(sliderList).slick('slickCurrentSlide')
            // sliderProgressBar.style.width = (sliderLeft + sliderItems[0].offsetWidth) / sliderWidth * 100 + '%';
            if (sliderProgressBar){
                sliderProgressBar.style.width = (sliderIndex + 1) / sliderItems.length * 100 + '%';
            }

            if (sliderTabs[sliderIndex]){
                sliderTabs.forEach(i => { i.classList.remove('_active') })
                sliderTabs.forEach(i => { i.classList.remove('_after') })
                sliderTabs[$(sliderList).slick('slickCurrentSlide')].classList.add('_active')
            }
        }; progressbar()
    })

    // === TABS === \\
    let tabsItems = document.querySelectorAll('.tabs')
    tabsItems.forEach(tabs => {
        let titles = tabs.querySelectorAll('.tabs__title '),
            items = tabs.querySelectorAll('.tabs__item')

        
        if (window.matchMedia('(min-width: 768.1px)').matches){
            titles.forEach(title => {
                title.addEventListener('click', ()=> {
                    for (let n = 0; n < titles.length; n++){
                        if (title == titles[n]){
                            titles[n].classList.add('_active')
                            items[n].classList.add('_active')
                        }
                        else{
                            titles[n].classList.remove('_active')
                            items[n].classList.remove('_active')
                        }
                    }
                })
            })
        }
        if (window.matchMedia('(max-width: 768px)').matches){
            for (let n = 0; n < titles.length; n++){
                titles[n].classList.add('_active')
                items[n].classList.add('_active')
                items[n].insertAdjacentElement('afterbegin', titles[n])
            }
        }
    })

    // === DROPDOWN === \\
    let dropdowns = document.querySelectorAll('.dropdown') 
    dropdowns.forEach(item => dropdown(item))
        // --Services
        dropdowns.forEach(dropdown => {

            if (dropdown.classList.contains('service')){
                let title = dropdown.querySelector('.dropdown__title span')
                title.addEventListener('click', ()=>{
                    if (dropdown.classList.contains('_open')){
                        title.textContent = 'Закрыть'
                    }
                    else{
                        title.textContent = 'Открыть'
                    }
                })
            }
        })

    // === FUNCTIONS === \\
    function dropdown(dropdown) {
        let title = dropdown.querySelector('.dropdown__title span'),
            items = dropdown.querySelectorAll('.dropdown__item')

        items.forEach(item => {
            title.addEventListener('click', ()=>{
                // title.querySelector('span').textContent = item.textContent
                // items.forEach(i => {  i.classList.remove('_active')  })
                // item.classList.add('_active')
                dropdown.classList.add('_active')
                dropdown.classList.remove('_open')
            })
        })
        document.addEventListener('click', (e) => {
            let withinBoundaries = e.composedPath().includes(dropdown);
                
            if ( !withinBoundaries) {
                dropdown.classList.remove('_open')
            }
        })

        title.addEventListener('click', ()=>{ dropdown.classList.toggle('_open') })
    }
    function checkCheckbox(checkbox) {
        if (!checkbox.checked){
            checkbox.parentNode.classList.add('_error')
            checkbox.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            return false
        } 
        else{
            checkbox.parentNode.classList.remove('_error')
            return true
        }
    }
    function checkEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email.value)){
            email.parentNode.classList.add('_error')
            email.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            return false
        }
        else{
            email.parentNode.classList.remove('_error')
            return true
        }
    }
    function beautifulNumber(value) {
        value += ''
        if (value.length == 4){
            let valueFirst = value.slice(0,1),
                valueLast = value.slice(-3)
            value = valueFirst + '.' + valueLast;
        }
        else if (value.length == 5){
            let valueFirst = value.slice(0,-3),
                valueLast = value.slice(-3)
            value = valueFirst + '.' + valueLast;
        }
        else if (value.length == 6){
            let valueFirst = value.slice(0,-3),
                valueLast = value.slice(-3)
            value = valueFirst + '.' + valueLast;
        }
        else if (value.length == 7){
            let valueFirst = value.slice(0,1),
                valueSecond = value.slice(1, -3),
                valueLast = value.slice(-3)
            value = valueFirst + '.' + valueSecond + '.' + valueLast;
        }
        return value
    }

    // === UP BTN === \\
    let pageHeight = window.screen.height,
        pageWidth = window.screen.width,
        upBtn = document.querySelector('.up')

    // window.addEventListener('scroll', ()=>{
    //     window.pageYOffset > 0 ? header.classList.add('_scroll') : header.classList.remove('_scroll')
    // })

    // upBtn.addEventListener('click', ()=>{ window.scrollTo({ top: 0, behavior: 'smooth' }); })

    
    function mediaQueries() {
        if (window.matchMedia('(min-width: 1366px)').matches){
            
        }
        if (window.matchMedia('(max-width: 768px)').matches){

        }
        if (window.matchMedia('(max-width: 360px)').matches){
            
        }
    };
    mediaQueries()
    
    window.addEventListener('resize', mediaQueries)
})