fetch('img/logo.svg')
  .then(response => response.text())
  .then(svg => {
    document.getElementById('logo').innerHTML = svg;
});

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    effect: 'creative',
    creativeEffect: {
        prev: {
        shadow: true,
        translate: ['-120%', 0, -500],
        },
        next: {
        shadow: true,
        translate: ['120%', 0, -500],
        },
    },
    speed: 600,

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

let selectedBank = 'sber';
let selectedMetal = 'gold';
let selectedDate = 'minutes';

let metalNames = {
    gold: 'Золото',
    platinum: 'Платина',
    silver: 'Серебро',
    palladium: 'Палладий'
};

  function updateUI() {
    let titleElement = document.querySelector('.charts__title');
    titleElement.textContent = metalNames[selectedMetal];
  
    let quotesTitle = document.querySelector('.charts__quotes-title');
    quotesTitle.textContent = `${metalNames[selectedMetal]}, 1г`;

    let graphBlock = document.querySelector('.charts__graph-block');
    console.log(graphBlock.textContent = `График ${metalNames[selectedMetal]} через ${selectedBank.toUpperCase()}`);
}

document.querySelectorAll('[data-bank]').forEach(button => {
    button.addEventListener('click', () => {
      selectedBank = button.dataset.bank;
      updateUI();
      activeBank();
    });
});

document.querySelectorAll('[data-metal]').forEach(button => {
    button.addEventListener('click', () => {
      selectedMetal = button.dataset.metal;
      updateUI();
      activeMetal();
    });
});

function activeBank() {
    document.querySelectorAll('[data-bank]').forEach(button => {
      if (button.dataset.bank === selectedBank) {
        button.classList.add('header__button--active');
      } 

      else {
        button.classList.remove('header__button--active');
      }
    });
}

function activeMetal() {
    document.querySelectorAll('[data-metal]').forEach(button => {
      if (button.dataset.metal === selectedMetal) {
        button.classList.add('metals__button--active');
      } 
      else {
        button.classList.remove('metals__button--active');
      }
    });
}

updateUI();
activeBank();
activeMetal();

document.querySelectorAll('.lmenu__buy-btn').forEach(button => {
    button.addEventListener('click', function(e) {
      let ripple = document.createElement('span');
      ripple.classList.add('ripple');
      
      let rect = button.getBoundingClientRect();
      let size = Math.max(rect.width, rect.height);
      let x = e.clientX - rect.left - size / 2;
      let y = e.clientY - rect.top - size / 2;
  
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
  
      button.appendChild(ripple);
  
      ripple.addEventListener('animationend', () => {
        ripple.remove();
      });
    });
});

let metalsButtons = document.querySelectorAll('.metals__button');

metalsButtons.forEach(button => {
  button.addEventListener('click', function(e) {
    metalsButtons.forEach(btn => btn.classList.remove('metals__button--active'));

    let ripple = document.createElement('span');
    ripple.classList.add('ripple');

    let rect = button.getBoundingClientRect();
    let size = Math.max(rect.width, rect.height);
    let x = e.clientX - rect.left - size / 2;
    let y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    button.appendChild(ripple);

    ripple.addEventListener('animationend', () => {
      ripple.remove();
      button.classList.add('metals__button--active');
    });
  });
});

document.querySelectorAll('[data-interval]').forEach(button => {
  button.addEventListener('click', () => {
    selectedDate = button.dataset.interval;
    updateUI();
    activeInterval();
  });
});

function activeInterval() {
  document.querySelectorAll('[data-interval]').forEach(button => {
    if (button.dataset.interval === selectedDate) {
      button.classList.add('charts__button--active');
    } else {
      button.classList.remove('charts__button--active');
    }
  });
}

activeInterval();
  
