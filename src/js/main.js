import modals from "./modules/modal";
import slider from "./modules/slider";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import loaded from "./modules/loaded";
import calc from "./modules/calc";
import filters from "./modules/filters";
import replaceImg from "./modules/replaceImg";
import accordion from "./modules/accordion";
import burger from "./modules/burger";
import scrolling from "./modules/scrolling";
import drop from "./modules/drop";

window.addEventListener('DOMContentLoaded', ()=>{
    modals();
    slider('.feedback-slider-item','horizontal', '.main-prev-btn', '.main-next-btn');
    slider('.main-slider-item', 'vertica');
    forms();
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('.input-text');

    loaded('.styles .row', '.styles > .container > button');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');

    filters('.portfolio-block', '.portfolio-menu li');
    replaceImg();
    accordion();
    burger('.burger-menu', '.burger');
    scrolling('.pageup');
    drop();
})