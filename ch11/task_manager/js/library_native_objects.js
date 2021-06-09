String.prototype.capitalize =
    String.prototype.capitalize ||
    function () {
        var firstLetter = this.substring(0, 1);
        return firstLetter.toUpperCase() + this.substring(1);
    };
String.prototype.empty =
    String.prototype.empty ||
    function () {
        if (this.length === 0) {
            return true;
        }
        return false;
    };
