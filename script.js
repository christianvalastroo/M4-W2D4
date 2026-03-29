const url = "https://striveschool-api.herokuapp.com/books"

const booksContainer = document.querySelector("#booksContainer")
const cartContainer = document.querySelector("#cartContainer")
const searchInput = document.querySelector("#searchInput")

const cartTotal = document.querySelector("#cartTotal")
let total = 0

// Recupera i libri dall'API e costruisce dinamicamente le card nella pagina.
const getBooks = async () => {
    try {
        const response = await fetch(url)
        const books = await response.json()

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
            price.style.color = "#268040"

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

            // Quando aggiungo un libro, aggiorno card, carrello e totale.
            btnBuy.addEventListener("click", () => {
                const cartItem = document.createElement("div")
                cartItem.classList.add("d-flex", "justify-content-between", "align-items-center", "gap-3", "bg-light", "border", "rounded-3", "px-3", "py-2", "mb-2")

                const cartTitle = document.createElement("span")
                cartTitle.textContent = book.title
                cartTitle.classList.add("fw-medium", "flex-grow-1")

                const rightSide = document.createElement("div")
                rightSide.classList.add("d-flex", "align-items-center", "gap-2", "flex-shrink-0")

                const cartPrice = document.createElement("span")
                cartPrice.textContent = `${book.price}€`
                cartPrice.classList.add("fw-bold", "text-success")

                const removeBtn = document.createElement("button")
                removeBtn.textContent = "Rimuovi"
                removeBtn.classList.add("btn", "btn-sm", "btn-outline-danger")

                rightSide.append(cartPrice, removeBtn)
                cartItem.append(cartTitle, rightSide)
                cartContainer.appendChild(cartItem)

                badge.classList.remove("d-none")
                btnBuy.textContent = "Aggiunto"
                btnBuy.disabled = true

                total += book.price
                cartTotal.textContent = "Totale: " + total.toFixed(2) + "€"
                card.classList.add("border", "border-success", "bg-light")

                // Se rimuovo il libro dal carrello, ripristino anche lo stato della card.
                removeBtn.addEventListener("click", () => {
                    cartItem.remove()

                    card.classList.remove("border", "border-success", "bg-light")
                    badge.classList.add("d-none")

                    btnBuy.textContent = "Aggiungi al carrello"
                    btnBuy.disabled = false

                    total -= book.price
                    cartTotal.textContent = "Totale: " + total.toFixed(2) + "€"

                    if (cartContainer.children.length === 0) {
                        cartTotal.textContent = "Carrello vuoto"
                    }
                })
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

// Filtra le card usando il titolo salvato nell'attributo data-title.
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
