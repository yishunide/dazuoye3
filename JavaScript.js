
var form = document.getElementById("form");
var name = document.getElementById("name");
var email = document.getElementById("email");
var message = document.getElementById("message");
var submit = document.getElementById("submit");
var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
function showError(input, message) {
    var error = input.nextElementSibling;
    error.textContent = message;
    error.style.display = "block";
}
function hideError(input) {
    var error = input.nextElementSibling;
    error.style.display = "none";
}
function checkEmpty(input) {
    return input.value.trim() === "";
}

function checkEmail(input) {
    return emailReg.test(input.value.trim());
}

function validateForm() {
    var isValid = true;
    for (var i = 0; i < form.elements.length; i++) {
        var input = form.elements[i];
        if (input.type === "text" || input.type === "email") {
            if (checkEmpty(input)) {
                showError(input, "请输入" + input.placeholder);
                isValid = false;
            } else {
                hideError(input);
            }
            if (input.type === "email") {
                if (!checkEmail(input)) {
                    showError(input, "请输入有效的邮箱地址");
                    isValid = false;
                } else {
                    hideError(input);
                }
            }
        }
    }
    return isValid;
}

function submitForm() {
    if (validateForm()) {
        var formData = {};
        for (var i = 0; i < form.elements.length; i++) {
            var input = form.elements[i];
            if (input.type === "text" || input.type === "email" || input.type === "textarea") {
                formData[input.name] = input.value.trim();
            }
        }
        console.log(JSON.stringify(formData));
        alert("提交成功！");
        form.reset();
    }
}
submit.addEventListener("click", submitForm);
