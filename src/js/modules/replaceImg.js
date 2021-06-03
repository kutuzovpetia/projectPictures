const replaceImg = () =>{

    const sizeBlockAll = document.querySelectorAll('.sizes-block');

    function hideElem(parent, show = false){
        parent.childNodes.forEach(item=>{
            if(item.tagName === 'P' && !item.classList.contains('sizes-hit') && show === false){
                item.style.display = 'none';
            }
            if(item.tagName === 'P' && show){
                item.style.display = 'block';
            }
        })
    }

    sizeBlockAll.forEach((item, i)=>{
        item.addEventListener('mouseenter', function (){
            this.childNodes[1].setAttribute('src', `assets/img/sizes-${i+1}-1.png`);
            hideElem(this);
        })
    })

    sizeBlockAll.forEach((item, i)=>{
        item.addEventListener('mouseleave', function (){
            this.childNodes[1].setAttribute('src', `assets/img/sizes-${i+1}.png`);
            hideElem(this, true);
        })
    })

}

export default replaceImg;