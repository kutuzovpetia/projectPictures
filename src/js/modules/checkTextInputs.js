const checkTextInputs = (selector) =>{
    const inputsAll = document.querySelectorAll(selector);

    inputsAll.forEach(item =>{
        item.addEventListener('keypress', (e)=>{
            if(e.key.match(/[^а-яё 0-9]/ig)){
                e.preventDefault();
            }
        })

        item.addEventListener('change', (e)=>{
            const value = e.target.value;
            for (let i = 0; i < value.length; i++){
                if(value[i].match(/[^а-яё 0-9]/ig)){
                    e.target.value = '';
                    return;
                }
            }
        })
    });


}

export default checkTextInputs;