
function init() {
    function rotateImage(files, index) {
        document.getElementById('jumbotron').style.backgroundImage = "url('" + files[index] + "')";
        // console.log(jumbo.style.backgroundImage);
        index++;
        if (index > files.length) { index = 0; }
        setTimeout(function () {
            rotateImage(files, index);
        }, 10000);
    }

    var image, num = 1, filenames = [], imageIndex = 0;

    // create the image list
    while(num <= 60) {
        // add leading zero for small numbers
        if (num < 10) { num = "0" + num; }
        filenames.push('images/pdxcg_' + num + '.jpg');
        num++;
    }
    // setup the rotation
    rotateImage(filenames, imageIndex);
}

document.addEventListener('DOMContentLoaded', init);
