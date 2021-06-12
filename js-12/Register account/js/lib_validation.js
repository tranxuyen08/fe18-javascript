var validation = function() {
    this.month = 0;
    this.year = 0;
};

validation.prototype.isBlank = function(text) {
    return (text === "");
};
validation.prototype.isMatch = function(text1, text2) {
    return (text1 === text2);
};
validation.prototype.isEmail = function(text) {
    // validate email (lib to copy)
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(text);
};
validation.prototype.isZip = function(text) {
    return /^\d{5}(-\d{4})?$/.test(text);
};
validation.prototype.isPhone = function(text) {
    return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(text);
};
validation.prototype.isCard = function(text) {
    return /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(text);
};
validation.prototype.isDate = function(text) {
    if (! /^[01]\d\/\d{4}$/.test(text)) return false;
    var dateParts = text.split("/");
    this.month = parseInt(dateParts[0]);
    this.year = parseInt(dateParts[1]);
    if (this.month < 1 || this.month > 12) return false;
    return true;
};
validation.prototype.hasExpired = function(text) {
    if (this.isDate(text)) {
        var now = new Date();
        var exp = new Date(this.year, this.month);
        return (now < exp);
    } else {
        return false;
    }
};