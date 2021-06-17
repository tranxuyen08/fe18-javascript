var createSlideshow = function() {
    var timer, play = true, speed = 2000;
    var nodes = {
        image: null,
        caption: null
    };
    var img = {
        cache: [],
        count: 0
    };

    var stopSlideshow = function() {
        clearInterval(timer);
    };
    var nextImage = function() {
        img.count = ++img.count % img.cache.length;
        var image = img.cache[img.count];
        nodes.image.src = image.src;
        nodes.caption.firstChild.nodeValue = image.title;
    };
    var setPlayText = function(btn) {
        btn.value = play ? "Pause" : "Resume";
    };
    return {
        loadImage: function(slides) {
            var image;
            for (var i=0; i < slides.length; i++) {
                image = new Image();
                image.src = slides[i].href;
                image.title = slides[i].title;
                img.cache.push(image);
            }
            return this;
        },
        startSlideshow: function() {
            if (arguments.length === 2) {
                nodes.image = arguments[0];
                nodes.caption = arguments[1];
            }
            timer = setInterval(nextImage, speed);
            return this;
        },
        pauseToggleHandler: function() {
            var that = this;
            return function() {
                if (play) {
                    stopSlideshow();
                } else {
                    that.startSlideshow();
                }
                play = !play;
                setPlayText(this); 
            };
        },
        fastToggleHandler: function() {
            if (speed >= 500) {
                speed = speed/2;
            }            
            timer = setInterval(nextImage, speed);
            return this;
        },
        slowToggleHandler: function() {
            if (speed >= 500) {
                speed = speed*2;
            }
            timer = setInterval(nextImage, speed);
            return this;
        }
    };
};