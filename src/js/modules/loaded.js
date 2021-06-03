import {getData} from '../services/requests';

const loaded = (selector, trigger) =>{
    // const elemAll = document.querySelectorAll(selector);
    const btn = document.querySelector(trigger);

    btn.addEventListener('click', function (){
        getData('http://localhost:3000/styles')
            .then(res=>{
                createCard(selector, res);
                this.remove();
            })
            .catch(error=>console.log(error));
    })

    function createCard(wrapper, res){
        let wrap = document.querySelector(wrapper);
        res.forEach(item=>{
            wrap.innerHTML += `
            <div class="col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1 animated fadeIn">
                <div class=styles-block>
                    <img src=${item.src} alt>
                    <h4>${item.title}</h4>
                    <a href="#">${item.link}</a>
                </div>
             </div>`
        })
    }
}

export default loaded;