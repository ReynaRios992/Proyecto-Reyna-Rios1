var members = data.results[0].members

var estadisticas = {
democratas : [],
republicanos : [],
independientes : [],
}

//function Miembros(members) {
    members.forEach(element => {
        if (element.party === "R") {
            estadisticas.republicanos.push(element)
        } else if (element.party === "D") {
            estadisticas.democratas.push(element)
        } else if (element.party === "ID") {
            estadisticas.independientes.push(element)
        }

    })
//}
console.log(estadisticas.democratas.length)
console.log(estadisticas.republicanos.length)
console.log(estadisticas.independientes.length)


