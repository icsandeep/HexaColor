function hexColor(){
    let hexNum = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
    let hexCode = ""
    for(let i = 0; i < 6; i++){
        let randomIndex = Math.floor(Math.random() * hexNum.length);
        hexCode += hexNum[randomIndex]
    }
    document.getElementById("hex-Code").innerHTML = hexCode
    document.getElementsByTagName("body")[0].style.background = "#" + hexCode
}