const inputSlider = document.getElementById("inputslider");
const sliderValue = document.getElementById("slidervalue");
const passbox = document.getElementById("passbox");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generatebtn = document.getElementById("getbtn");

const copyIcon = document.getElementById("copyIcon");
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-={}[]\|;:'.>,</?";


slidervalue.textContent = inputSlider.Value;
inputSlider.addEventListener("input", () => {
    slidervalue.textContent = inputSlider.Value;

})

generatebtn.addEventListener("click", () => {

    passbox.Value = generatpassword();  // call the function
})

function generatpassword() {

    const length = inputSlider.Value;
    let characters = "";
    let password = "";

    characters += lowercaseEl.checked ? lowercaseLetters : "";
    characters += uppercaseEl.checked ? uppercaseLetters : "";
    characters += numberEl.checked ? numbers : "";
    characters += symbolsEl.checked ? symbols : "";
    

    for(let i = 0; i < length; i++){

        password += characters.charAt(Math.floor(Math.random()* characters.length));
        console.log(password);
    }

    return password

}


copyIcon.addEventListener("click",()=>{

    if(passBox.value !="" || passBox.value.length>=10){

        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "check";


        setTimeout(()=>{

            copyIcon.innerHTML = "content_copy";

        },3000);

    }
});






