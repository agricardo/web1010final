// no API key required for this API
const API_URL = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?'

var title = document.querySelector('.quote-text')
var author = document.querySelector('.quote-author')
var button = document.querySelector('.button')


function getQuote() {
    $.ajax({
        url: API_URL,
        dataType: 'json',
        success: function(data){
            console.log(data)
            title.textContent = data.quoteText
            author.textContent = data.quoteAuthor
        },
        error(error){
            console.log(error)
        }
    })
}    
//     .done(function (response) {
//         console.log(response);

        
//     })
// }

// getQuote()
button.addEventListener("click", function(event){
    getQuote(title.quoteText)
    getQuote(author.quoteText)
})