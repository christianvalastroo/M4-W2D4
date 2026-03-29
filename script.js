const url = "https://striveschool-api.herokuapp.com/books"

const booksContainer = document.querySelector("#booksContainer")
const cartContainer = document.querySelector("#cartContainer")
const searchInput = document.querySelector("#searchInput")

const getBooks = async () => {
    try {
        const response = await fetch(url)
        const books = await response.json()
        console.log(books)

        books.forEach(book => {
            const col = document.createElement("div")
            col.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3", "mb-4")
            col.setAttribute("data-title", book.title.toLowerCase())

            const card = document.createElement("div")
            card.classList.add("card", "h-100", "shadow-sm")

            const img = document.createElement("img")
            img.src = book.img
            img.alt = book.title
            img.classList.add("card-img-top")

            const cardBody = document.createElement("div")
            cardBody.classList.add("card-body", "d-flex", "flex-column")

            const title = document.createElement("h5")
            title.classList.add("card-title")
            title.textContent = book.title.slice(0, 30)

            const price = document.createElement("p")
            price.classList.add("card-text", "fw-bold")
            price.textContent = book.price + "€"

            const badge = document.createElement("span")
            badge.textContent = "Aggiunto"
            badge.classList.add("badge", "bg-success", "mb-2", "d-none")

            const btnDiscard = document.createElement("button")
            btnDiscard.textContent = "Scarta"
            btnDiscard.classList.add("btn", "btn-danger", "w-100", "mb-2")

            btnDiscard.addEventListener("click", () => {
                col.remove()
            })

            const btnBuy = document.createElement("button")
            btnBuy.textContent = "Aggiungi al carrello"
            btnBuy.classList.add("btn", "btn-success", "w-100")

            btnBuy.addEventListener("click", () => {
                const cartItem = document.createElement("p")
                cartItem.textContent = `${book.title} - ${book.price}€`
                cartContainer.appendChild(cartItem)

                card.classList.add("border", "border-success", "bg-light")
                badge.classList.remove("d-none")

                btnBuy.textContent = "Aggiunto"
                btnBuy.disabled = true
            })

            cardBody.append(badge, title, price, btnDiscard, btnBuy)
            card.append(img, cardBody)
            col.append(card)
            booksContainer.append(col)
        })
    } catch (error) {
        console.error(error)
    }
}

searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.toLowerCase().trim()

    const allCards = document.querySelectorAll("#booksContainer > div")

    allCards.forEach(card => {
        const bookTitle = card.getAttribute("data-title")

        if (bookTitle.includes(searchValue)) {
            card.classList.remove("d-none")
        } else {
            card.classList.add("d-none")
        }
    })
})
getBooks()
