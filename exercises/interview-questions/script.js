const users = [
    {
        id: 1,
        name: "Jack",
        isActive: true,
        age: 20,
    },
    {
        id: 2,
        name: "John",
        isActive: true,
        age: 18,
    },
    {
        id: 3,
        name: "Mike",
        isActive: false,
        age: 30,
    },
]

const names = users.filter(user => user.isActive).map(user => user.name)
// console.log(names)

const sortByAge = users.sort((a,b) => a.age - b.age)
console.log(sortByAge)