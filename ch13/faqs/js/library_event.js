Node.prototype.addEventListener = Node.prototype.addEventListener || function (event, callback) {
    this.attachEvent(`on${event}`, callback);
}
Node.prototype.removeEventListener = Node.prototype.removeEventListener || function (event, callback) {
    this.detachEvent(`on${event}`, callback);
}
Event.prototype.preventDefault = Event.prototype.preventDefault || function () {
    this.returnValue = false;
}