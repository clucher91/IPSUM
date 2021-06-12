`Problema 1: La siguiente fracción de código requiere identificar si el usuario es admin,
utilice ES6​ para dicho fin.`

const ​data​ = getSomeData('http://localhost:8080/api/users'​)

data.filter(opt => opt.role == 'admin').map(opt => opt)


`
Problema 2: La siguiente fracción de código no compila por que no puede identificar el
operador this​ de la clase contenedora. Utilice ​ES6​ para solucionar dicho problema.
`

class​ MyComponent {
    public​ data: ​Array​<Object​>;
    public​ some_attribute:string​;
    
    async​ constructor​() {
        let​ info = ​await​ ​this​.getSomeData('http://localhost:8080/api/users'​)
        check​(info)
    }
    
     check = function​ (data) {
        this.some_attribute = data.some_attribute
    }
}
`
Problema 3: La siguiente fracción de código contiene dos arreglos que es necesario unir,
además de dos objetos con el mismo fin. Utilice ​ ES6​ para dicho fin.

`
let array_one = [1,2,3,4];
let array_two = [5,6,7,8];
let joined_array = [...array_one, ...array_two];
console.log(joined_array);

var object_one = { attr: 1, attr_two: 2 };
var object_two = { attr_three: 3, attr_four: 4};
var joined_object = {...object_one, ...object_two}
console.log(joined_object)


`
Problema 4: Utilice las ​ Array Functions de Javascript, incluidas en ​ ES6​ . En primer lugar,
para iterar el arreglo, y agregar un atributo a cada uno de los objetos contenidos en el,
luego para filtrar por aquellos que cumplan con la condición de tener el atributo
show_info​ en falso.
`

let array_from_api_users = [
    {
        name: 'Postulante 1',
        main_tech: ['JS', 'JAVA'],
        show_info: false
    },
    {
        name: 'Postulante 2',
        main_tech: ['JS', 'JAVA', 'Python'],
        show_info: true
    }
]

const users = (arr) => {
    return arr.map(obj=> ({ ...obj, newProperty: 'IPSUM' }))
}

let usersFiltered = users(array_from_api_users).filter(opt => opt.show_info);

console.log(usersFiltered);
