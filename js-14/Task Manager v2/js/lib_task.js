var Task = function(task) {
    this.text = task;
};
// Ham kiem tra input la rong hay ko
Task.prototype.isValid = function() {
    if (this.text == "") {
        return false;
    } else {
        return true;
    }
};
// Ham viet hoa chu cai dau tien cua text nhap vao
Task.prototype.toString = function() {
    var first = this.text.substring(0,1);
    return first.toUpperCase() + this.text.substring(1);
};