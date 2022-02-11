//document.getElementById("senate-data").innerHTML = JSON.stringify(data,null,2);
var senadores = data.results[0].members;
function tabla(senadores) {
    var tabla_container = document.getElementById("tabla_container")
    console.log(tabla_container)
    
    var table = document.createElement("table")
    var thead = document.createElement("thead")
    var thName = document.createElement("th")
    var thParty = document.createElement("th")
    var thState = document.createElement("th")
    var thYears = document.createElement("th")
    var thVotes = document.createElement("th")

   
    thName.textContent="Name"
    thParty.textContent="Party"
    thState.textContent="State"
    thYears.textContent="Years in Office"
    thVotes.textContent="%Votes w/ Party"

    tabla_container.appendChild(table)

    thead.appendChild(thName)
    thead.appendChild(thParty)
    thead.appendChild(thState)
    thead.appendChild(thYears)
    thead.appendChild(thVotes)
    table.appendChild(thead)

    for (let i = 0; i < senadores.length; i++) {
        var tr = document.createElement("tr")
        var tdFirst_name = document.createElement("td")
        var tdparty = document.createElement("td")
        var tdstate = document.createElement("td")
        var tdseniority = document.createElement("td")
        var tdvotes = document.createElement("td")

        tdFirst_name.textContent =` ${senadores[i].first_name} ${senadores[i].middle_name || ''} ${senadores[i].last_name} `
        tdparty.textContent = senadores[i].party
        tdstate.textContent = senadores[i].state
        tdseniority.textContent = senadores[i].seniority
        tdvotes.textContent = senadores[i].votes_with_party_pct
        
        tr.appendChild(tdFirst_name)
        tr.appendChild(tdparty)
        tr.appendChild(tdstate)
        tr.appendChild(tdseniority)
        tr.appendChild(tdvotes)
        table.appendChild(tr)

    }
   




}
tabla(senadores);

var R = [];
var D = [];
var ID = [];

function filtrarSenadores(senadores) {
    senadores.forEach(element => {
        if (element.party == "R") {
            R.push(element)
        }
        else if (element.party == "D") {
            D.push(element)
        }
        else if (element.party == "ID") {
            ID.push(element)
        }
    }
)}
filtrarSenadores(senadores)

var partyR = document.getElementById("partyR")
var partyD = document.getElementById("partyD")
var partyID = document.getElementById("partyID")

function aniadirSenadores(party){
    console.log(R)
if(party === "R"){
tabla(R)
}else if(party === "D"){
    tabla(D)
}else if(party === "ID"){
    tabla(ID)
}
}

partyR.addEventListener('change', function(){
    partyD.checked = false
    partyID.checked = false
    var tabla_container = document.getElementById("tabla_container")
    tabla_container.removeChild(tabla_container.firstChild)
    aniadirSenadores("R")
})
partyD.addEventListener('change', function(){
    partyR.checked = false
    partyID.checked = false
    var tabla_container = document.getElementById("tabla_container")
    tabla_container.removeChild(tabla_container.firstChild)
    aniadirSenadores("D")
})
partyID.addEventListener('change', function(){
    partyR.checked = false
    partyD.checked = false
    var tabla_container = document.getElementById("tabla_container")
    tabla_container.removeChild(tabla_container.firstChild)
    aniadirSenadores("ID")
})

var  estados = {}
senadores.forEach(function(element){
    if(estados[element.state] === undefined){
        estados[element.state]= []
        
    }else{
        var arreglo = estados[element.state]
        arreglo.push(element)
        estados[element.state] = arreglo
    }
  
    
})
console.log("los estados son", estados)

var select = document.getElementById("select")


select.addEventListener("change", function(){
    var index = select.options.selectedIndex
    console.log(select.options[index].value)
    var tabla_container = document.getElementById("tabla_container")
    tabla_container.removeChild(tabla_container.firstChild)
    tabla(estados[select.options[index].value])
})