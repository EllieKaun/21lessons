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