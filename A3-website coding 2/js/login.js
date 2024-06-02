let inputs = document.getElementsByTagName('input')
console.log(inputs)
function sub(emailAdress, password) {
    if (emailAdress, password) {
        if (emailAdress == '@student.unimelb.edu.au') {
            window.location.href = ('../html/homepage.html')
        } else {
            alert('Wrong password,please re-enter')
        }
    } else {
        alert('The account and password do not match or do not exist')
    }
}
function go() {

    sub(inputs[0].value, inputs[1].value)
}
