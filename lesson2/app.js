// // setTimeout(() => {
// //     console.log("a")
// // }, 1000)
// // console.log("1")
// // console.log("2")
// // console.log("3")
// // console.log("4")
// // console.log("5")


// // setTimeout(() => {
// //     console.log("0")
// // }, 0)
// // setTimeout(() => {
// //     console.log("1")
// // }, 1000)
// // setTimeout(() => {
// //     console.log("2")
// // }, 2000)
// // setTimeout(() => {
// //     console.log("3")
// // }, 3000)

// // console.log("a")
// // console.log("b")
// // console.log("c")

// // setTimeout(() => {
// //     console.log("b")
// // }, 1000)

// // setTimeout(() => {
// //     console.log("a")
// // }, 1000)


// // const interval = setInterval(() => {
// //     console.log("interval")
// // }, 1000)

// // const btn = document.querySelector("button")

// // btn.addEventListener("click", ()=>{
// //     clearInterval(interval)
// // })

// // setTimeout(() => {clearInterval(interval)}, 5000)

// const box = document.querySelector(".box")

// let positionX = 0
// let positionY = 0

// const handleBoxMove = () => {
//     if(positionX <= 440) {
//         positionX += 16
//         box.style.left = `${positionX}px`
//         setTimeout(handleBoxMove, 100)
//     } else if(positionY <= 440) {
//         positionY += 16
//         box.style.top = `${positionY}px`
//         setTimeout(handleBoxMove, 100)
//     }
// }

// handleBoxMove()

// const alertDoHomework = (subject = "math", callback) => {
//     alert(`Starting my ${subject} homework `)
//     callback()
// }

// const alertFinished = () => {
//     alert("DONE!!!")
// }

// alertDoHomework(undefined, alertFinished)


// const timeout  = (callback, time) => {}

// timeout(() => {}, 123)

// addEventListener("click", ()=>{})

// const arr = ["Январь","Февраль","Апрель","Март"]

// arr.map((item) => {
//     item = `${item} месяц`

//     const block = document.createElement("div")
//     block.style.width = "200px"
//     block.style.height = "50px"
//     block.style.backgroundColor = "green"
//     block.style.margin = "20px"

//     block.innerHTML = item
//     const wrapper = document.querySelector(".wrapper")

//     wrapper.append(block)
// })


// const fruits = ["apple", "banana", "watermelon", "peach"]

// const result = fruits.filter((item) => {
//     return item.length > 5
// })

// console.log(result)
// console.log(fruits)

// const arr = [1, 2, 3, 4, 5, 6, 7]
// console.log(arr)
// console.log(arr.unshift())
// console.log(arr)

// const arr = [3, 6, 9, 12, 15]

// const result = arr.reduce((prev, curr) => {
//     console.log(prev, "prev", curr, "curr")
//     return prev + curr
// }, 10)

// console.log(result)

// const string = "Привет как дела"

// console.log(string.split(" ").join("AAAAAA"))