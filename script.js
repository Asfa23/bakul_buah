let popup = document.getElementsByClassName('popup')[0]

console.log(popup.style)

const showPopup = () => {
    popup.style.display = 'flex'
}

const closePopup = () => {
    popup.style.display = 'none'
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => observer.observe(el));


