timeline1 = document.getElementById("timeline1");
animtimeline1 = document.getElementById("animtimeline1");



timeline1.addEventListener("mouseover", begin1);
animtimeline1.addEventListener("mouseout", end1);

function begin1() {
    timeline1.classList.add("dontshow");
    animtimeline1.classList.remove("dontshow");
}

function end1() {
    timeline1.classList.remove("dontshow");
    animtimeline1.classList.add("dontshow");
}


timeline2 = document.getElementById("timeline2");
animtimeline2 = document.getElementById("animtimeline2");



timeline2.addEventListener("mouseover", begin2);
animtimeline2.addEventListener("mouseout", end2);

function begin2() {
    timeline2.classList.add("dontshow");
    animtimeline2.classList.remove("dontshow");
}

function end2() {
    timeline2.classList.remove("dontshow");
    animtimeline2.classList.add("dontshow");
}