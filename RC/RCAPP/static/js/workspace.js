const navbar = document.getElementById("navbar");
const burgermenu = document.getElementById("burgermenu");
const span1 = document.getElementById("span1");
const span2 = document.getElementById("span2");
const span3 = document.getElementById("span3");
const navbar2 = document.getElementById("navbar-main-part");

let is_ready = true;

let open = false;

burgermenu.addEventListener("click", function() {

    if (is_ready == true) {
        is_ready = false;

        if (open == false) {
            span1.style.animation = "span1_open ease 1s";
            span2.style.animation = "span2_open ease 1s";
            span3.style.animation = "span3_open ease 1s";
            navbar.style.animation = "navbar_open ease 1s";
            navbar2.style.display = "block";
            navbar2.style.animation = "navbar2_open ease 1s"

            navbar.addEventListener("animationend", function() {
                navbar.style.width = "100%";
            })

            span1.addEventListener("animationend", function() {
                span1.style.animation = '';
                span2.style.animation = '';
                span3.style.animation = '';
                navbar2.style.animation = '';
                span1.style.top = "20px";
                span2.style.opacity = "0";
                span3.style.top = '-20px';
                span1.style.rotate = "45deg";
                span3.style.rotate = "-45deg";
                navbar2.style.display = "block";
                is_ready = true;
                open = true;
            })
        } else {
            span1.style.animation = "span1_close ease 1s";
            span2.style.animation = "span2_close ease 1s";
            span3.style.animation = "span3_close ease 1s";
            navbar.style.animation = "navbar_close ease 1s";
            navbar2.style.display = "block";
            navbar2.style.animation = "navbar2_close ease 1s"

            navbar.addEventListener("animationend", function() {
                navbar.style.width = '';
            })

            span1.addEventListener("animationend", function() {
                span1.style.animation = '';
                span2.style.animation = '';
                span3.style.animation = '';
                navbar2.style.animation = '';
                span1.style.top = "0px";
                span2.style.opacity = "1";
                span3.style.top = '0px';
                span1.style.rotate = "0deg";
                span3.style.rotate = "0deg";
                navbar2.style.display = '';
                is_ready = true;
                open = false;
            })
        }
    }
})




const notify_div = document.getElementById("notify_div");
const notify_text = document.getElementById("notify_text");
const notify_icon = document.getElementById("notify_icon");

function notification(text) {
    notify_text.value = text;

    notify_div.style.display = "block";
    notify_div.style.animation = "notify_div_animation_open 1s ease";

    notify_div.addEventListener("animationend", function() {
        notify_div.style.animation = '';

        setInterval(() => {
            notify_div.style.animation = "notify_div_animation_close 1s ease";

            notify_div.addEventListener("animationend", function() {
                notify_div.style.animation = '';
                notify_div.style.display = '';
            })
        }, 3500);
    })
}

notify_icon.addEventListener("click", function() {
    console.log("s")
    notify_div.style.animation = '';
    notify_div.style.animation = "notify_div_animation_close ease 1s";

    notify_div.addEventListener("animationend", function() {
        notify_div.style.animation = '';
        notify_div.style.display = '';
    })
})