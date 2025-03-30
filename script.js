function limitText(tag, limit) {
    let element = document.getElementsByClassName('desc');
    if (element && element.textContent.length > limit) {
        element.textContent = element.textContent.substring(0, limit) + "...";
    }

    limitText('desc', 100);
}