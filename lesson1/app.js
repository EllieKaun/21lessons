// // const string = prompt("tell me your name!")

// // // const regExp = /Y/i
// // const regExp = new RegExp("y", "i")

// // console.log(string.match(regExp))

// // // флаг i не чувствителен к регистру 

// // const letter = "AaaBbbbCccDdd"

// // // console.log(letter.split(""))

// // const regExp = /c/ig

// // console.log(letter.match(regExp))

// // const letter = "11a1s2f2hAX2kjk3g34dsf45g5h7d7f89hd90"

// // const regExp = /[A-Za-z0-9]/g
// // // const regExp = /\w/g

// // // console.log(letter.match(regExp))
// // console.log(letter.replace(regExp, "*"))


// const phoneInput = document.querySelector("#phoneInput")
// const phoneCheck = document.querySelector(".phoneCheck")
// const phoneResult = document.querySelector(".phoneResult")

// const regExp = /^\+996 [5|7|9]\d{2} \d{2}-\d{2}-\d{2}$/

// // @ .info .com .ru

// phoneCheck.addEventListener("click", () => {
//     if(regExp.test(phoneInput.value)){
//         phoneResult.innerText = "ok :)"
//         phoneResult.style.color = "green"
//     } else {
//         phoneResult.innerText = "not ok :("
//         phoneResult.style.color = "red"
//     }
// })


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
    Jhon: {
        age: 25,
        parents: {
            Kelly: {
                age: 45,
                parents: {
                    Jake: {
                        age: 70,
                        parents: {
                    Jake: {
                        age: 70,
                        parents: {
                    Jake: {
                        age: 70,
                        parents: {
                    Jake: {
                        age: 70
                    }
                }
                    }
                }
                    }
                }
                    }
                }
            },
            Tony: {
                age: 50
            }
        }
    },
    Sam: {
        age: 15, 
        parents: {
            Din: {
                age: 35
            }
        }
    },
}
// const key = "Jhon"

// console.log(people[key])

const parentsList = (obj) => {
    if(obj.parents){
        for(let key in obj.parents){
            console.log(key)
            parentsList(obj.parents[key])
        }
    } else {
        console.log("...ops")
    }
}


for(let key in people){
    parentsList(people[key])
}