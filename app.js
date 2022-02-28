function isolateCode() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('active');



        function activeTab(index) {

            tabContent.forEach((section) => {
                section.classList.remove('active');
            });


            tabContent[index].classList.add('active');
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            })
        })

    }
};

isolateCode();





function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'active'
    if(accordionList.length){
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);


    function activeAccordion(event) {
        //  console.log(event.currentTarget);
        this.classList.toggle(activeClass);
        this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
        item.addEventListener('click', activeAccordion);
    });
 }

}

initAccordion();


function initScrollSuave(){
const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');


function e(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href)
    const topo = section.offtsetTop;


    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    })

    // window.scrollTo({
    //     top: 1000,
    //     behavior: 'smooth',
    // });

}





linksInternos.forEach((links) => {
    links.addEventListener('click', e)
})


}

initScrollSuave(); 








function animationScroll() {
    const sections = document.querySelectorAll('.js-scroll');
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = (sectionTop - windowMetade);
            // console.log(sectionTop)
            if (sectionTop < 0) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        })
    }


    window.addEventListener('scroll', animaScroll)

}
animationScroll();





