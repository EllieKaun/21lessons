// const obj = {
//     name: "Alex",
//     age: 21
// }

// console.log(obj)

// const data = JSON.stringify(obj)

// console.log(data, "stringify")

// console.log(JSON.parse(data), "parse")

// const arr = [1, 2, 3, 4, 5, 6]

// console.log(JSON.parse(JSON.stringify(arr)))

// const btn = document.querySelector("button")

// btn.addEventListener("click", () => {
//     const request = new XMLHttpRequest() //создание запроса
//     request.open("GET", "https://www.wildberries.ru/webapi/stats/events") //объявление метода запроса и пути запроса
//     request.setRequestHeader("Content-type", "application/json") //добавление заголовка
//     request.send() //отправка запроса

//     request.addEventListener("load", ()=>{ //ожидание ответа 
//         const data = JSON.parse(request.response) //проеобразование в объект
//         console.log(data) //ответ
//         // document.querySelector(".name").innerHTML = data.name
//         // document.querySelector(".age").innerHTML = data.age
//     })
// })


// str num bool undef null - primitive

// arr obj - obj 

// const num = 5

// const num2 = num + 10

// console.log(num)
// console.log(num2)

// const obj = {
//     name: "John",
//     id: 1
// }

// obj.age = 34

// const obj2 = { ...obj }

// // cosnt obj2 = {
//     //name: "John", 
//     //id: 1 
// // }

// obj2.name = "Alex"

// obj2.checked = true

// console.log(obj)
// console.log(obj2)

// const myFunc = (arg1, ...arg2) => {
//     console.log(arg1)
//     console.log(arg2)
// }

// myFunc("1", "2", "3", "4", "5", "6")

// const [one, ...two] = ["1", "2", "3", "4"]

// console.log(one)
// console.log(two)

// const [one, two, three, four] = "wer qwe erty tyu".split(" ")

// console.log(one)
// console.log(two)
// console.log(three)
// console.log(four)

const wrapper = document.querySelector(".wrapper")

const colors = ["green", "red", "blue", "yellow"]

const req = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "https://pokeapi.co/api/v2/pokemon")
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.addEventListener("load", () => {
        const data = JSON.parse(request.response)
        console.log(data.results)

        data.results.map((item, i) => {
            console.log(item)
            const block = document.createElement("div")
            block.style.height = "150px"
            block.style.width = "150px"
            block.style.marginTop = "10px"
            block.style.border = "1px solid"
            block.style.backgroundColor = colors[i]

            block.innerHTML = item.name

            wrapper.append(block)
        })
    })
}

req()