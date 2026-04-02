const detailsContainer = document.querySelector("#detailsContainer")

const params = new URLSearchParams(window.location.search)
const id = params.get(`id`)

const getBookDetails = async () => {
    try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/books/${id}`)
        const book = await response.json()

        const col = document.createElement("div")
        col.classList.add("col-12", "col-md-8", "col-lg-6")

        const card = document.createElement("div")
        card.classList.add("card", "shadow-sm")

        const img = document.createElement("img")
        img.src = book.img
        img.alt = book.title
        img.classList.add("card-img-top")

        const cardBody = document.createElement("div")
        cardBody.classList.add("card-body")

        const title = document.createElement("h2")
        title.textContent = book.title
        title.classList.add("card-title", "mb-3")

        const price = document.createElement("p")
        price.textContent = `Prezzo: ${book.price}€`
        price.classList.add("fw-bold", "text-success")

        const category = document.createElement("p")
        category.textContent = `Categoria: ${book.category}`

        cardBody.append(title, price, category)
        card.append(img, cardBody)
        col.append(card)
        detailsContainer.append(col)

    } catch (error) {
        console.error(error)
        detailsContainer.innerHTML = `<p class="text-danger">Errore nel caricamento del libro.</p>`
    }
}

getBookDetails()