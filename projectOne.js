$(document).ready(function () {
        $("#nav").click(function () {
            $("nav").toggle(500)
        })
    })
    let err = `<p class="mt-2 text-red-400 italic text-xl relative z-10">Please add a link!</p>`;
    let links = document.querySelector('.stored-links')

    document.getElementById('form').addEventListener('submit', (e) => {
        let value = document.getElementById('search')
        e.preventDefault()

        if (value.value.trim() === '') {
            value.classList.add('border-4', 'border-red-400')
            document.querySelector('#errmsg').innerHTML = err
        } else {
            value.classList.remove('border-4', 'border-red-400')
            document.querySelector('#errmsg').innerHTML = ''

            const shortened_link = generateLink(value.value)

            const card = `<div class="mb-6 card flex justify-between flex-col md:flex-row bg-white rounded-lg shadow-lg p-6 items-center">
            <p id="user" class="text-md xs:text-xl">${value.value}</p>
            <div class="shortlinks flex flex-col xs:flex-row gap-8 items-center mt-4 md:mt-0">
                <a href="#" class="cyant text-md xs:text-xl">${shortened_link}</a>
                <button id="copy"
                    class="copybtn transition duration-300 hover:bg-green-700 inline-block text-white cyan px-8 py-3 rounded-lg font-bold tracking-wide">Copy</button>
                </div>
             </div>`
            links.innerHTML += card
        }
    })

    function generateLink(text) {
        let randomText = 'abcdefghijklmnoupqrstuwxyz'
        let shortenedText = `https://rel.ink/`
        for (let i = 0; i < 6; i++) {
            shortenedText += randomText.charAt(Math.floor(Math.random() * randomText.length))
        }
        return shortenedText
    }
