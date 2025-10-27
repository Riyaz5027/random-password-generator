let characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "?", "{", "}", "-", "+", "=", "[", "]", "|", "~", "`", "@"]


function getValues() {
    let password = ""

    for (let i = 0; i < 17; i++) {
        password += characters[Math.floor(Math.random() * characters.length)]
    }
    console.log(password)
    return password
}

function generatePassword() {
    document.getElementById("b1").textContent = getValues()
    document.getElementById("b2").textContent = getValues()
    document.getElementById("b3").textContent = getValues()
    document.getElementById("b4").textContent = getValues()

}