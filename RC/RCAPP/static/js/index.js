const burger_menu = document.getElementById("burger-menu");
const burger_span1 = document.getElementById("burger-span1");
const burger_span2 = document.getElementById("burger-span2");
const burger_span3 = document.getElementById("burger-span3");
const burger_nav = document.getElementById("burger-nav");

let is_open = false;
let is_cooldown = false;

burger_menu.addEventListener("click", function() {
    if (is_cooldown == false) {
        is_cooldown = true;

        if (is_open == false) {
            burger_nav.style.animation = "burger_nav_open ease 1s";
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

                is_open = true;
                is_cooldown = false;
            })
        } else {
            burger_nav.style.animation = "burger_nav_close ease 1s";
            burger_span1.style.animation = "span1_close ease 1s";
            burger_span2.style.animation = "span2_close ease 1s";
            burger_span3.style.animation = "span3_close ease 1s";

            burger_span1.addEventListener("animationend", function() {
                burger_nav.style.animation = '';
                burger_span1.style.animation = '';
                burger_span2.style.animation = '';
                burger_span3.style.animation = '';

                burger_span1.style.top = "0px";
                burger_span1.style.rotate = "0deg";
                burger_span2.style.opacity = "1";
                burger_span3.style.top = "0px";
                burger_span3.style.rotate = "0deg";
            })
        }
    }
})