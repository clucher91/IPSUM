`
Problema 1: La siguiente fracción de código presenta un problema de rendimiento, es
necesario optimizarlo mediante las herramientas que Javascript ofrece, ya que este no
está imprimiendo la información obtenida correctamente.
`
const getSomeData = async (url_api) => {
    let res = await fetch(url_api);
    return await res.json();
}

let​ data = getSomeData('http://localhost:8080/api/users')
this​.renderDataAtDom(data)

`
Problema 2: La siguiente fracción de código presenta un problema de rendimiento, ya
que en analizar la información contenida en el arreglo en cuestión, toma más tiempo del
disponible por el usuario.
`

let​ ​ data​ = getSomeData('​http​://​localhost​:8080/​api​/users'​)
for(let​ i = data​.length -1; i >= 0; i--){
    data​.some_attribute​ = ((1/2) * ​data​[i].age​)
}
this​.renderAtDom(data​)

