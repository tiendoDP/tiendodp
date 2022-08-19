var buyTickets = document.querySelectorAll('.buy-ticket');

var Modal = document.querySelector('.modal');

var closeModal = document.querySelector('.icon');

var contai = document.querySelector('.container-modal');

function openModal () {
    Modal.classList.add('open-modal');
}

for(var buyTicket of buyTickets) {
    buyTicket.addEventListener('click', openModal);
}

closeModal.addEventListener('click', () => {
    Modal.classList.remove('open-modal');
})

Modal.addEventListener('click',() => {
    Modal.classList.remove('open-modal')
})

contai.addEventListener('click', (e) => {
    e.stopPropagation();
})

var icon2 = document.querySelector('.search-icon2');

var getHeader = document.querySelector('#header')
icon2.addEventListener('click', () => {
    getHeader.classList.toggle('height-auto');
})

var hideMenu = document.querySelectorAll('#nav li a[href *="#"]')
console.log(hideMenu)
var select_a = document.querySelector('.select-js')

for(var e of hideMenu) {
    e.onclick = function (event) {
        if(this != select_a){
            getHeader.classList.remove('height-auto');
        }
        else {
            event.preventDefault();
        }
    }
}

// select_a.onclick = function() {
//     getHeader.classList.add('overflow-visible');
// }
// icon2.addEventListener('click', () => {
//     getHeader.classList.remove('height-auto');
// })

