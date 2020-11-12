function agecal(){
    let age = prompt("what year you were born:).")
    let h1 = document.createElement("h1")
    h1.setAttribute("id","ageInDays")
    var ans;
    if(age === null){
        ans = document.createTextNode("Pls enter Birth year")
    }
    else{
        let res = (2020-age) * 365
        ans = document.createTextNode("Your age " + res + " day")
    }    
    h1.appendChild(ans)
    document.getElementById("result").appendChild(h1)
}

function reset(){
    document.getElementById('ageInDays').remove()
}