function temperatureCoverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById('output').innerHTML = (valNum -32)/18;
}