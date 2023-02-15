
let row = document.querySelector(".row")
const btn = document.querySelector(".search-btn")
const input = document.querySelector(".input")
let error = document.querySelector(".error")

btn.addEventListener('click', () => {
    search()
})


input.addEventListener('keypress', (e) => {
    enterBtn(e)
})

function search() {
    row.innerHTML = ''
    fetch(`https://dog.ceo/api/breed/${input.value.toLowerCase()}/images`)
.then(res => res.json())
        .then(data => {
            console.log(data.message.slice(0, 10))
            data.message.length
                ? data.message.slice(0, 10).map(el => {
                    row.innerHTML += `<div class=" col +-3" >
<img src="${el}" alt="" class="image my-4 px-4" style="width: 350px;height: 400px; margin-right: 20px">
</div>`
                }) : error.innerHTML += 'error'
        })
}

function enterBtn(e) {
    if (e.key === 'Enter') {
        search()
    }
}
