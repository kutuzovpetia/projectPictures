const filters = (portfolioBlock, btns) =>{
    const imgAll = document.querySelectorAll(portfolioBlock);
    const btnsAll = document.querySelectorAll(btns);

    function hideActive(){
        btnsAll.forEach(item=>{
            item.classList.remove('active');
        })
    }

    btnsAll.forEach(btn => {
        btn.addEventListener('click', function (){
            hideActive();
            this.classList.add('active');
            if(btn.classList.contains('grandmother') || btn.classList.contains('granddad')){
                document.querySelector('.portfolio-no').style.display = 'block';
            }else {
                document.querySelector('.portfolio-no').style.display = 'none';
            }
            imgAll.forEach(img=>{
                if(!img.classList.contains(this.classList.toString().split(' ')[0])){
                    img.style.display = 'none';
                    img.classList.remove('fadeIn');
                }
                else {
                    img.style.display = 'block';
                    img.classList.add('animated','fadeIn');
                }
            })
        })
    })

}

export default filters;