// import inputValidation from './inputValidation';

const forms = () => {

    const forms = document.querySelectorAll('form');
    const inputsAll = document.querySelectorAll('input');
    const upload = document.querySelectorAll('[name=upload]');

    function clearInputs(){
        inputsAll.forEach(item =>{
            item.value = '';
        })
        upload.forEach(item=>{
            item.previousElementSibling.textContent = 'Файл не выбран';
        });
    }

    // inputValidation('input[name=user_phone]');
    // inputValidation('.popup_calc input');

    const message = {
        loading: 'Загрузка...',
        success: 'Успешно отправлено',
        error: 'Что-то пошло не так',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    }

    const path = {
      designer: 'assets/server.php',
        question: 'assets/question.php',
    };

    async function post(url, data){

        const res = await fetch(url,{
            method: "POST",
            body: data,
        })

        return await res.text();
    }

    upload.forEach(item=>{
       item.addEventListener('input', ()=>{
           console.log(item.files[0]);
           let dots;
           const arr = item.files[0].name.split('.');
           arr[0].length > 5 ? dots = '...' : dots ='.';
           const name = arr[0].substring(0, 6) + dots + arr[1];
           item.previousElementSibling.textContent = name;
       });
    });


    forms.forEach(form =>{
        form.addEventListener('submit', (e)=>{
            e.preventDefault();
            const formData = new FormData(form);
            let api;
            form.closest('.popup-design') || form.classList.contains('calc_form') ? api = path.designer : api = path.question;
            console.log(api);

            const messageStatus = document.createElement('div');
            messageStatus.setAttribute('id', 'status');
            form.parentNode.appendChild(messageStatus);
            form.classList.add('animated', 'fadeOutUp');
            setTimeout(()=>{
                form.style.display = 'none';
            }, 400);

            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            messageStatus.appendChild(statusImg);

            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            messageStatus.appendChild(textMessage);


            post(api, formData, form)
                .then((res)=>{
                    console.log(res);
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                    clearInputs();
                }).catch((err)=>{
                statusImg.setAttribute('src', message.fail);
                document.getElementById('status').textContent = message.error;
                console.log(err);
            })

            setTimeout(()=>{
                document.getElementById('status').remove();
                form.style.display = 'block';
                form.classList.remove('fadeOutUp');
                form.classList.add('fadeInUp');
            },3000)
        })
    })

}

export default forms;