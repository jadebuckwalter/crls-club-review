function navFunction(elm) {
    var classList = document.getElementsByClassName("navBtn");
    for (i = 0; i < classList.length; i++) {
        classList[i].style.border = "none";
    }
    document.getElementById("tabName").textContent = elm.textContent;
    elm.style.borderBottom = "5px solid #F2F7F2";
}
