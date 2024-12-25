const burger_menu = document.getElementById("burger-menu");
const burger_span1 = document.getElementById("burger-span1");
const burger_span2 = document.getElementById("burger-span2");
const burger_span3 = document.getElementById("burger-span3");
const burger_nav = document.getElementById("burger-nav");

burger_menu.addEventListener("click", function() {
    burger_nav.style.animation = "burger_nav ease 1s";
    burger_span1.style.animation = "span1_open ease 1s";
    burger_span2.style.animation = "span2_open ease 1s";
    burger_span3.style.animation = "span3_open ease 1s";

    burger_span1.addEventListener("animationend", function() {
        burger_nav.style.animation = '';
        burger_span1.style.animation = '';
        burger_span2.style.animation = '';
        burger_span3.style.animation = '';

        burger_span1.style.top = "10px";
        burger_span1.style.rotate = "45deg";
        burger_span2.style.opacity = "0";
        burger_span3.style.top = "-10px";
        burger_span3.style.rotate = "-45deg";
    })
})