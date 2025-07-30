function radiochange() {

    if (document.getElementById("option-1").checked == true) {
         alert('You select online payment mode')
        }
    if (document.getElementById("option-2").checked == true) {
        alert('Total payment : '+localStorage.getItem('total'))
        }
    if (document.getElementById("option-3").checked == true) {
        alert('You select cash on delivery mode')
        }
}