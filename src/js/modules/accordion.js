const accordion = () =>{

    const accordeonHeaders = document.querySelectorAll('.accordion-heading');

    function hideBlock(){
        accordeonHeaders.forEach(item=>{
            item.classList.remove('active-style');
            item.nextElementSibling.classList.remove('active-content');
            item.nextElementSibling.style.maxHeight = '0px';
        })
    }

    accordeonHeaders.forEach(item=>{
        item.addEventListener('click', function (){
            hideBlock();
            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active-content');

            if(this.classList.contains('active-style')){
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
            }else {
                this.nextElementSibling.style.maxHeight = '0px';
            }
        })
    })
}

export default accordion;