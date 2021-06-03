const calc = (size, material, options, promocod, result) =>{

    const sizeBlock = document.querySelector(size);
    const materialBlock = document.querySelector(material);
    const optionsBlock = document.querySelector(options);
    const promocodBlock = document.querySelector(promocod);
    const resultBlock = document.querySelector(result);

    let sum = 0;

    const calcFunc = () =>{
      sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

      if(sizeBlock.value == '' || materialBlock.value == ''){
            resultBlock.textContent = 'Пожалуйста выберите размер и материал картины';
      }else if(promocodBlock.value === 'IWANTPOPART'){
          resultBlock.textContent = Math.round(sum * 0.7);
      }else{
          resultBlock.textContent = sum;
      }
    };

    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promocodBlock.addEventListener('input', calcFunc);
}

export default calc;