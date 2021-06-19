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
  getSpeed: function () {
    return this.speed;
  },
  setSpeed: function (newSpeed) {
    if (newSpeed >= 200) {
      this.speed = newSpeed;
    }
    return this.speed;
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
    a.innerHTML = this.play ? 'Pause' : 'Resume';
    return this;
  },
  togglePlay: function (e) {
    if (slideshow.play) {
      slideshow.stopSlideshow();
    } else {
      slideshow.startSlideshow();
    }
    slideshow.play = !slideshow.play; //toggle flag
    slideshow.setPlayText(this); // reset play text
    evt.preventDefault(e);
  },
  changeSpeed: function (e) {
    evt.preventDefault(e);
    var stime = prompt(
      `Thời gian slideshow hiện tại ${slideshow.getSpeed()} milliseconds\nMời bạn nhập thời gian mới (200->10000) milliseconds:`,
      2000
    );
    var regexTest = /^\d{3,5}$/;
    if (regexTest.test(stime) && stime >= 200 && stime <= 10000) {
      slideshow.setSpeed(parseInt(stime));
      if (slideshow.play) {
        slideshow.stopSlideshow().startSlideshow();
      }
    } else {
      if (stime !== null) {
        alert('Thời gian phải từ 0.2s đến 10s');
      }
    }
  },
};
