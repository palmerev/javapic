function createImageNodes() {
    var item, image, pic = 1, nodeList = [];
    // create image filenames
    while (pic <= 60) {
        // append leading zero for 1 - 9
        if(pic < 10) { pic = '0' + pic; }
        item = document.createElement('li');
        image = document.createElement('img');
        image.src = 'images/pdxcg_' + pic + '.jpg';
        item.appendChild(image);
        nodeList.push(item);
        pic++;
    }
    return nodeList;
}

function showLightbox(event) {
    if (!event.target.src) { return; } // not an image
    var image, box = document.getElementById('image_show');
    image = box.getElementsByTagName('img')[0];
    image.src = event.target.src;
    box.className = 'display_img';
}

function hideLightbox(event) {
    event.target.className = 'display_none';
}

function init() {
    var tagline = document.getElementsByClassName('tagline')[0],
        username = window.sessionStorage.getItem('username'),
        gallery = document.getElementById('gallery'),
        lightbox = document.getElementById('image_show'),
        listImageNodes;

    gallery.addEventListener('click', showLightbox);
    lightbox.addEventListener('click', hideLightbox);
    // add the stored username to the tagline
    if (username) {
        tagline.textContent += ", " + username;
    }

    listImageNodes = createImageNodes();
    for (var i = 0; i < listImageNodes.length; i++) {
        gallery.appendChild(listImageNodes[i]);
    }
}

document.addEventListener('DOMContentLoaded', init);
