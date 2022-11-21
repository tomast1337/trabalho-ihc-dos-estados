const estados = {
    "Selecione um estado": "",
    "AC": "Acre",
    "AL": "Alagoas",
    "AP": "Amapá",
    "AM": "Amazonas",
    "BA": "Bahia",
    "CE": "Ceará",
    "DF": "Distrito Federal",
    "ES": "Espírito Santo",
    "GO": "Goiás",
    "MA": "Maranhão",
    "MT": "Mato Grosso",
    "MS": "Mato Grosso do Sul",
    "MG": "Minas Gerais",
    "PA": "Pará",
    "PB": "Paraíba",
    "PR": "Paraná",
    "PE": "Pernambuco",
    "PI": "Piauí",
    "RJ": "Rio de Janeiro",
    "RN": "Rio Grande do Norte",
    "RS": "Rio Grande do Sul",
    "RO": "Rondônia",
    "RR": "Roraima",
    "SC": "Santa Catarina",
    "SP": "São Paulo",
    "SE": "Sergipe",
    "TO": "Tocantins"
}

const estadosSelect = document.getElementById('estados');
const estadosKeys = Object.keys(estados);

// on page load
document.addEventListener('DOMContentLoaded', () => {
    estadosKeys.forEach((estado) => {
        const option = document.createElement('option');
        option.value = estado;
        option.innerText = estado;
        estadosSelect.appendChild(option);
    });
});

const nomeEstado = document.getElementById('nome');

nomeEstado.value = "";

// event listener para o select 
estadosSelect.addEventListener('change', function (event) {
    // set nome innerText to the selected option
    if (event.target.value === "Selecione um estado") {
        nomeEstado.value = "";
    } else {
        nomeEstado.value = `${event.target.value} - ${estados[event.target.value]}`;
        console.log(estados[event.target.value]);
    }
});
