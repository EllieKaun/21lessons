const tabs = document.querySelectorAll(".tabheader__item")
const tabsParent = document.querySelector(".tabheader__items")
const tabsContent = document.querySelectorAll(".tabcontent")


const hideTabContent = () => {
    tabsContent.forEach((item) => {
        item.style.display = "none"
    })
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active")
    })
}


const showTabContent = (i = 3) => {
    tabsContent[i].style.display = "block"
    tabs[i].classList.add("tabheader__item_active")
}

hideTabContent()
showTabContent()

tabsParent.addEventListener("click", (e)=>{
    const target = e.target

    if(target.classList.contains("tabheader__item")){
        tabs.forEach((item, i) => {
            if(target === item) {
                hideTabContent()
                showTabContent(i)
            }
        })
    }
})

const modalTrigger = document.querySelector(".btn_white")
const modal = document.querySelector(".modal")
const modalCloseBtn = document.querySelector(".modal__close")

const openModal = () => {
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow = "hidden"
}

modalTrigger.addEventListener("click", openModal)

const closeModal = () => {
    modal.classList.add("hide")
    modal.classList.remove("show")
    document.body.style.overflow = ""
}

modalCloseBtn.addEventListener("click", closeModal)

modal.addEventListener("click", (e)=>{
    if(e.target.classList.contains("modal")){
        closeModal()
    }
})

const forms = document.querySelectorAll("form")


const postData = (url, data) => {
    const req = fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: data
    })
    return req
}

const messages = {
    load: "Идет загрузка...",
    succes: "Спасибо, скоро свяжемся!!!",
    fail: "Что-то пошло не так :("
}

const bindPostData = (form) => {
    form.addEventListener("submit", (e)=>{
        e.preventDefault()

        const messageBlock = document.createElement("div")
        messageBlock.textContent = messages.load

        form.append(messageBlock)

        const formData = new FormData(form)
        
        const object = {}
        
        formData.forEach((item, name) => {
            object[name] = item
        })

        console.log(object)

        const json = JSON.stringify(object)

        postData("server.php", json)
        .then((response) => response.status)
        .then((data) => data === 200 ? 
        messageBlock.textContent = messages.succes 
        : messageBlock.textContent = messages.fail)
        .catch(() => console.error("error"))
    })
}

forms.forEach((item) => {
    bindPostData(item)
})


//  menu

class Menu {
    constructor(img, alt, title, descrption, price) {
        this.img = img
        this.alt = alt
        this.title = title
        this.descrption = descrption
        this.price = price
    }

    render() {
        const wrapper = document.querySelector("#cardWrapper")
        const elem = document.createElement("div")

        elem.innerHTML = `
         <div class="menu__item">
				<img src="${this.img}" alt="${this.alt}">

				<h3 class="menu__item-subtitle">${this.title}</h3>

				<div class="menu__item-descr">
                ${this.descrption}
				</div>

				<div class="menu__item-divider"></div>

				<div class="menu__item-price">
					<div class="menu__item-cost">Цена:</div>
					<div class="menu__item-total"><span>${this.price}</span> сом/день</div>
				</div>
		</div>
        `

        wrapper.append(elem)
    }
}


const getMenu = async (url) => {
    const res = await fetch(url)
    console.log(res)
    
    return await res.json()
}

getMenu("db.json").then((data) => {
    data.menu.forEach(({img, alt, title, descrption, price}) => {
        new Menu(img, alt, title, descrption, price).render()
    })
})


// timer 

const deadline = "2023-5-20"

console.log(new Date(deadline) - new Date)

const getTime = (deadline) => { 
    const t = new Date(deadline) - new Date()
        days = Math.floor(t / (1000 * 60 * 60 * 24))
        hours = Math.floor(t / (1000 * 60 * 60) % 24)
        minutes = Math.floor(t / (1000 * 60) % 60)
        seconds = Math.floor((t / 1000) % 60)

        return {
            total: t, 
            days: days,
            hours: hours, 
            minutes: minutes, 
            seconds: seconds
        }
}


const setClock = (element, deadline) => {
    const elem = document.querySelector(element)
    const days = elem.querySelector("#days")
    const hours = elem.querySelector("#hours")
    const minutes = elem.querySelector("#minutes")
    const seconds = elem.querySelector("#seconds")


    const makeZero = (num) => {
        if(num > 0 && num < 10){
            return `0${num}`
        }else{
            return num
        }
    }

    const updateClock = () => {
        const t = getTime(deadline)
        days.innerHTML = makeZero(t.days)
        hours.innerHTML = makeZero(t.hours)
        minutes.innerHTML = makeZero(t.minutes)
        seconds.innerHTML = makeZero(t.seconds)
    }

    setInterval(updateClock, 1000)
}

setClock(".timer", deadline)