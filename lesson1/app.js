// // const string = prompt("tell me your name")

// // // const regExp = /[aA]/
// // // const regExp = /a/i

// // const regExp = new RegExp("a", "i")

// // // console.log(new Date())

// // console.log(string.match(regExp))


// // const letter = "AaaaBbbbCcccDDdd"

// // console.log(letter.split(""))

// // const regExp = /c/ig

// // console.log(letter.match(regExp))

// // const numbers = "123aF12d33g24h23j54j90j3sd4js58"

// // // const regExp = /[0-9А-Я]/ig
// // const regExp = /\w/g

// // console.log(numbers.replace(regExp, "*"))


// const phoneInput = document.querySelector("#phoneInput")
// const phoneCheck = document.querySelector(".phoneCheck")
// const phoneResult = document.querySelector(".phoneResult")

// const regExp = /^\+996 [5|7|9]\d{2} \d{2}-\d{2}-\d{2}$/

// phoneCheck.addEventListener("click", ()=>{
//     if(regExp.test(phoneInput.value)){
//         phoneResult.innerText = "ok :)"
//         phoneResult.style.color = "green"
//     } else {
//         phoneResult.innerText = "not ok :("
//         phoneResult.style.color = "red"
//     }
// })

// // if(!NaN){
// //     console.log("true")
// // }else {
// //     console.log("false")
// // }

// // @ .ru .com .info 25
// // 4-20 

// let num = 0

// const count = () => {
//     num++
//     console.log(num)
//     if(num <= 1000){
//         count()
//     }
// }

// count()

const people = {
    John: {
        age: 25,
        parents: {
            Tony: {
                age: 50
            },
            Kelly: {
                age: 45
            }
        }
    },
    Sam: {
        age: 15,
        parents: {
            Din: {
                age: 35,
                parents: {
                    Jake: {
                        age: 60,
                        parents: {
                            Jake: {
                                age: 60,
                                    parents: {
                                        Jake: {
                                            age: 60,
                        
                                            }
                                        }
                                }
                }
                    }
                }
            }
        }
    }
}

// const key = "John"

// console.log(people[key])

const parentsList = (obj) => {
    if(obj.parents){
        for(let key in obj.parents){
            console.log(key)
            parentsList(obj.parents[key])
        }
    } else {
        console.log('...ops')
    }
}

for(let key in people){
    parentsList(people[key])
}