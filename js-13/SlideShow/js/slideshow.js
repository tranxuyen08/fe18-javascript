"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

window.onload = function() {
    var listNode = $("image_list");
    var captionNode = $("caption");
    var imageNode = $("image");

    var links = listNode.getElementsByTagName("a");

    var i, linkNode, image;
    var imageCache = [];
    for (i=0; i < links.length; i++) {
        linkNode = links[i];

        image = new Image();
        image.src = linkNode.getAttribute("href");
        image.alt = linkNode.getAttribute("title");
        imageCache[imageCache.length] = image;
    }
    var count = 0;
    var timer = setInterval (
        function() {
            count = (count + 1) % imageCache.length;
            image = imageCache[count];
            imageNode.src = image.src;
            captionNode.firstChild.nodeValue = image.alt;
        }, 3000);
};