let imageShow = document.querySelector('.womenDetail .showImg img')
let imgLists = document.querySelectorAll('.womenDetail .listImg .img')
let x = 0
let prevDetail = document.querySelector('.womenDetail .showImg .fa-angle-left')
let nextDetail = document.querySelector('.womenDetail .showImg .fa-angle-right')
function updateActive(index) {
    imgLists.forEach(e => {
        e.classList.remove('active')
    })
    x = index
    imgLists[x].classList.add('active')
    let img = imgLists[x].querySelector('img')
    imageShow.src = img.src
}

imgLists.forEach(function(e, index) {
    e.addEventListener('click', function() {
        updateActive(index)
    })
})
prevDetail.addEventListener('click', function() {
    x = ((x -1) + imgLists.length) % imgLists.length
    updateActive(x)
})
nextDetail.addEventListener('click', function() {
    x = (x +1) % imgLists.length
    updateActive(x)
})