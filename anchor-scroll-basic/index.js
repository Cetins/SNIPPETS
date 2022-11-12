const navigationHeight = document.getElementById("nav-bar").offsetHeight;

document.documentElement.style.setProperty('--scroll-padding', navigationHeight - 1 + "px");