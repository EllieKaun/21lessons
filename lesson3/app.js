// // // // console.log(b)
// // // // const b = 1

// // // function varTest() {
// // //     var x = 1
// // //     console.log(x, "a")
// // //     // if(true){
// // //     //     var x = 2 //та же самая переменная
// // //     //     console.log(x, "b")
// // //     // }
// // //     function two() {
// // //         var x = 2 //другая переменная
// // //         console.log(x, "b")
// // //         return x
// // //     }
// // //     two()
// // //     console.log(x, "c")
// // // }

// // // varTest()

// // const letTest = () => {
// //     let x = 1
// //     if(true){
// //         let x = 2
// //     }
// //     console.log(x)
// // }

// // letTest()
// // const arr = [1, 2, 3, 5]
// // console.log(arr)

// const wrapper = document.querySelector(".wrapper")
// const btns = document.querySelectorAll("button")

// wrapper.addEventListener("click", ()=>{
//     alert("click!")
// })

// console.log(btns)

// btns.forEach((item) => {
//     item.addEventListener("click", (event) => {
//         console.log(event.target)
//         // if(event.target.classList.contains("red")){
//         //     event.target.classList.remove("red")
//         // }else{
//         //     event.target.classList.add("red")
//         // }
//         event.target.classList.toggle("red")
//     })
// })

// // const newBtn = document.createElement("button")
// // newBtn.innerHTML = "7"

// // wrapper.append(newBtn)

// // wrapper.addEventListener("click", (e)=>{
// //     // console.dir(e.target)
// //     if(e.target.tagName === "BUTTON"){
// //         e.target.classList.toggle("red")
// //     }
// // })

// const form = document.querySelector("form")
// const div = document.querySelector("div")
// const p = document.querySelector("p")

// form.addEventListener("click", ()=> {
//     alert("form")
// })
// div.addEventListener("click", ()=> {
//     alert("div")
// })
// p.addEventListener("click", ()=> {
//     alert("p")
// })
