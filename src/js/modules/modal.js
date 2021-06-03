const modals = () => {
    let btnPressed = false;

    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false){

        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelectorAll(closeSelector);
        // const modalAll = document.querySelectorAll('[data-modal]');
        const scroll = calcScroll();

        function closeModalAll(elem){
            document.querySelectorAll('[data-modal]').forEach(item =>{
                item.style.display = 'none';
                item.classList.add('animated', 'fadeIn')
            })
        }

        trigger.forEach((item, i) => {
            item.addEventListener('click', function (e){
                if (e.target){
                    e.preventDefault();
                }

                btnPressed = true;
                closeModalAll();
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = scroll +'px';
                if(destroy){
                  this.remove();
                }
            })
        })

        close.forEach((item)=>{
               item.addEventListener('click', ()=>{
                   modal.style.display = 'none';
                   document.body.style.overflow = '';
                   document.body.style.marginRight = '0px';
               })
        })

        modal.addEventListener('click', (e)=>{
            if(e.target === modal){
                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = '0px';
                // document.body.classList.remove('')
            }
        })
    }

    function showModalByTime(selectorModal, time){
        setTimeout(()=>{
            let display;
            document.querySelectorAll('[data-modal]').forEach(item=>{
                if(getComputedStyle(item).display !== 'none'){
                    display = 'block';
                }
            })

            if(!display){
                document.querySelector(selectorModal).style.display = 'block';
                document.body.style.overflow = 'hidden';
                const scroll = calcScroll();
                document.body.style.marginRight = scroll +'px';
            }
        }, time)
    }

    function calcScroll(){
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;
    }

    function openByScroll(selector){
        window.addEventListener('scroll', ()=>{
            if(!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight)){
                 document.querySelector(selector).click();
            }
        })
    }

    bindModal('.button-design', '.popup-design', '.popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-close', true);
    openByScroll('.fixed-gift');
    // showModalByTime('.popup-consultation', 2000);


};

export default modals;