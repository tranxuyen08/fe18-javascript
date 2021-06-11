var slideshow = {
    timer: null,
    nodes: {
        image: null,
        caption: null,
    },
    images: {
        cache: [],
        counter: 0,
    },
    play: true,
    speed: 2000,
    loadImages: function (slides) {
        var image;
        for (var i in slides) {
            // preload images, copy title and save in array
            image = new Image();
            image.src = slides[i].href;
            image.title = slides[i].title;
            this.images.cache.push(image);
        }
        return this;
    },
    startSlideshow: function () {
        if (arguments.length === 2) {
            this.nodes.image = arguments[0];
            this.nodes.caption = arguments[1];
        }
        this.timer = setInterval(this.displayNextImage.bind(this), this.speed);
        return this;
    },
    stopSlideshow: function () {
        clearInterval(this.timer);
        return this;
    },
    displayNextImage: function () {
        this.images.counter = ++this.images.counter % this.images.cache.length;
        var image = this.images.cache[this.images.counter];
        this.nodes.image.src = image.src;
        this.nodes.caption.firstChild.nodeValue = image.title;
    },
    setPlayText: function (a) {
        a.innerHTML = this.play ? "Pause" : "Resume";
        return this;
    },
    togglePlay: function (e) {
        if (slideshow.play) {
            e.target.classList.add('pause');
            slideshow.stopSlideshow();
        } else {
            e.target.classList.remove('pause');
            slideshow.startSlideshow();
        }
        slideshow.play = !slideshow.play; //toggle flag
        slideshow.setPlayText(this); // reset play text
        evt.preventDefault(e);
    },
    changeSpeed: function (e) {
        evt.preventDefault(e);
        var speed = prompt(`Current speed is ${slideshow.speed} milliseconds\nPlease enter new speed milliseconds:`, 2000);
        if (/^\d{3,5}$/.test(speed) && speed >= 300 && speed <= 15000) {
            slideshow.speed = parseInt(speed);
            if (slideshow.play) {
                slideshow.stopSlideshow().startSlideshow();
            }
        } else {
            if (speed !== null) {
                alert('Speed limit from 0.3s to 15s');
            }
        }
    }
};
