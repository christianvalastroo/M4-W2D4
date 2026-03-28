const url = "https://striveschool-api.herokuapp.com/books"

const booksContainer = document.querySelector("#booksContainer")

const getBooks = async () => {
    try {
        const response = await fetch(url)
        const books = await response.json()
        console.log(books)

        books.forEach(book => {
            console.log(book.title)

            const col = document.createElement("div")
            col.classList.add("col-md-3", "mb-4")
            
            const img = document.createElement("img")
            img.src = book.img
            img.alt = "libri"
            img.classList.add("img-fluid")

            const title = document.createElement("p")
            title.textContent = book.title

            const price = document.createElement("p")
            price.textContent = book.price + "€"

            col.append(img, title, price)
            booksContainer.append(col)

})
    } catch (error){
        console.error(error)
    }
} 
getBooks()
