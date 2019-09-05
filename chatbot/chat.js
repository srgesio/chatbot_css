function scrollDiv() {
    var el;
    if ((el = document.getElementsByClassName('chat-body')) && ('undefined' != typeof el.scrollTop)) {
        el.scrollTop = 0;
        el.scrollTop = 5000;
    }
}