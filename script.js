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
            col.setAttribute("class", "col-md-3")
            booksContainer.append(col)
        })

    } catch (error){
        console.error(error)
    }
} 
getBooks()
