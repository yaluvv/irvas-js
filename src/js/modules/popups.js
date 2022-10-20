const popups = () => {

    function bindModal(selectorBtn, selectorModal, selectorClose) {
        const btns = document.querySelectorAll(selectorBtn)
        const modal = document.querySelector(selectorModal)
        const close = document.querySelector(selectorClose)

        btns.forEach(btn => {
            btn.addEventListener('click', (event) => {
                if (event.target) {
                    event.preventDefault()
                }
                modal.style.display = 'block'
                document.body.classList.add('modal-open')
            })
        })

        close.addEventListener('click', () => {
            modal.style.display = 'none'
            document.body.classList.remove('modal-open')
        })

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none'
                document.body.classList.remove('modal-open')
            }
        })
    }

    function showModalByTime(selectorModal, time) {
        const modal = document.querySelector(selectorModal)

        setTimeout(() => {
            modal.style.display = 'block'
        }, time)
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close')
    bindModal('.phone_link', '.popup', '.popup_close')
    showModalByTime('.popup', 60000)
}

export default popups;