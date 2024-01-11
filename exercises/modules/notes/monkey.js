const monkey = {
    name: "Abu",
    species: "Capuchin",
    hobbies: ["stealing"],
    age: 5
}

const printMonkey = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(monkey)
        }, 2000)
    })
}

const resultMonkey = await printMonkey()

export { resultMonkey }