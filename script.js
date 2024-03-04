const checkBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");
const input = document.getElementById("text-input");


const isPalindrome = (word) => {
    const pattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]+/g
    const plainText = word
        .replace(pattern, "")
        .toLowerCase();
    return plainText === plainText.split("").reverse().join("")
}

const renderResponse = (word) => {

}


const eventHandler = () => {

    if (input.value === "") {
        alert("Please input a value")
        return;
    }

    const word = input.value;

}








checkBtn.addEventListener("click", eventHandler)