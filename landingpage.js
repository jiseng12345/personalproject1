$(document).ready(function () {
        $("#nav").click(function () {
            $("nav").toggle(500);
            $(".btnnav").toggle(500);
        })
    })

    const cols = document.querySelectorAll('.cols')
    const toggler = document.querySelectorAll('.toggler')

    toggler.forEach(x => x.addEventListener('click', () => {
        toggler.forEach(x => x.classList.remove('active'));
        x.classList.add('active')
        cols.forEach(x => x.classList.add('hidden'))
        cols[x.dataset.index].classList.remove('hidden')
    }))
