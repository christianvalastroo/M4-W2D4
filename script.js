const url = "https://striveschool-api.herokuapp.com/books"

const booksContainer = document.querySelector("booksContainer")

const getBooks = async () => {
    try {
        const response = await fetch(url)
        const books = await response.json()

        console.log(response)

    } catch (error){
        console.error(error)
    }
} 
getBooks()

