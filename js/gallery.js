function createImageNodes() {
    var item, image, pic = '1', nodeList = [];
    // create image filenames
    while (Number(pic) <= 60) {
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

function init() {
    var tagline = document.getElementsByClassName('tagline')[0],
        username = window.sessionStorage.getItem('username'),
        gallery = document.getElementById('gallery'),
        listImageNodes;

    // add the stored username to the tagline
    tagline.textContent += ", " + username;

    listImageNodes = createImageNodes();
    for (var i = 0; i < listImageNodes.length; i++) {
        gallery.appendChild(listImageNodes[i]);
    }
}

document.addEventListener('DOMContentLoaded', init);
