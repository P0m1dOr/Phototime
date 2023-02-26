let frontselect = document.querySelector('frontselect');
let backselect = document.querySelector('backselect');
let number = document.querySelector('number_of_part-2')
let actdiv = document.querySelector('non-active');


frontselect.onclick = function() {
    if (number === '01') {
        actdiv.classList.add("active");
        
    } else if (number === '02') {
        actdiv.classList.add("active");
    } else if (number === '03') {
        actdiv.classList.add("active");
    } else if (number === '04') {
        actdiv.classList.add("active");
    } else if (number === '05') {
        actdiv.classList.add("active");
    }
}