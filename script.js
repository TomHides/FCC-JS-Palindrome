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

    if (isPalindrome(word)) {
        resultDiv.innerHTML = `<span>${word}</span> is a palindrome`
        console.log("co nie działa")
    } else {
        resultDiv.innerHTML = `<span>${word}</span> is not a palindrome`
    }


}








checkBtn.addEventListener("click", eventHandler)