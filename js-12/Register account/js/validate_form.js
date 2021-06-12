var RegisterForm = function() { };
RegisterForm.prototype = new validation();

RegisterForm.prototype.validateField = function(fieldName, text) {
    var field = fields[fieldName];
    if (field.required) {
        if (this.isBlank(text)) {
            throw new Error(field.required);
        }
    }
    if (field.noMatch) {
        if (! this.isMatch(text, $(field.noMatch[1]).value)) {
            throw new Error(field.noMatch[0]);
        }
    }
    if (field.isEmail) {
        if (! this.isEmail(text)) {
            throw new Error(field.isEmail);
        }
    }
    if (field.isZip) {
        if (! this.isZip(text)) {
            throw new Error(field.isZip);
        }
    }
    if (field.isCard) {
        if (! this.isCard(text)) {
            throw new Error(field.isCard);
        }
    }
    if (field.isDate) {
        if (! this.isDate(text)) {
            throw new Error(field.isDate);
        }
    }
    if (field.hasExpired) {
        if (! this.hasExpired(text)) {
            throw new Error(field.hasExpired);
        }
    }
};

RegisterForm.prototype.setError = function(fieldName, message) {
    $(fieldName + "_error").innerHTML = message;
};
RegisterForm.prototype.clearError = function(fieldName, message) {
    $(fieldName + "_error").innerHTML = "";
};
RegisterForm.prototype.resetForm = function() {
    for (var fieldName in fields) {
        this.clearError(fieldName, fields[fieldName].message);
        $(fieldName).value = "";
    }
};
RegisterForm.prototype.validateForm = function() {
    var isOK = true;
    for (var fieldName in fields) {
        this.clearError(fieldName);
        try {
            this.validateField(fieldName, $(fieldName).value);
        } catch (error) {
            isOK = false;
            this.setError(fieldName, error.message);
        }
    }
    return isOK;
};