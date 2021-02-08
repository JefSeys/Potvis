var index = 1;

function changeGallery(n){
 showGallery(index+=n)
}

timer = setTimeout(() => showGallery( index += 1), 8000);

function showGallery(n){
    var i;
    var gallery = document.getElementsByClassName("galleryImg");
    if (n > gallery.length) {index = 1}
    if (n < 1) {index = gallery.length}
    for (i = 0; i < gallery.length; i++) {
        gallery[i].style.display = "none";
    }
    gallery[index-1].style.display = "block";

    clearTimeout(timer);
    
    timer = setTimeout(() => showGallery( index += 1), 3000);

    timer;
}


timer;
