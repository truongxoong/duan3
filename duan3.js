let prevBanner = document.querySelector('.banner_prev')
let nextBanner = document.querySelector('.banner_next')
let bannerImgs = document.querySelectorAll('.banner_img img')
let bannerShow = document.querySelectorAll('.banner_img')
let a = 0
let searchTop = document.querySelector('.top .cart .fa-magnifying-glass')
let searchDow = document.querySelector('.searchTop')
let searchExit = document.querySelector('.searchTop .fa-circle-xmark')

searchTop.addEventListener('click', function() {
    searchDow.style.top = '0%'
})
searchExit.addEventListener('click', function() {
    searchDow.style.top = '-22%'
})

// tìm kiếm
nextBanner.addEventListener('click', function() {
    bannerShow[a].classList.remove('show')
    a = (a + 1) % bannerShow.length
    bannerShow[a].classList.add('show')
})
prevBanner.addEventListener('click', function() {
    bannerShow[a].classList.remove('show')
    a = ((a - 1) + bannerShow.length) % bannerShow.length
    bannerShow[a].classList.add('show')
})
// banner
let cartTop = document.querySelector('.top .cart .cart_top i')
let cartPay = document.querySelector('.cart_payment ')
let exitCart = document.querySelector('.cart_payment .heard i')
// show cart
function showCart(element) {
    element.style.transform = 'translateX(0%)'
}
cartTop.addEventListener('click', e => {
    showCart(cartPay)
})
// exit cart
exitCart.addEventListener('click', e => {
    cartPay.style.transform = 'translateX(100%)'
})
// cart payment
let addCart = document.querySelectorAll('.add_cart .swiper_icon .fa-cart-plus')

addCart.forEach(function(ele, index) {
    ele.addEventListener('click', e => {
        let products = e.target.parentElement.parentElement
        let prdImg = products.querySelector('img').src
        let prdPrice = products.querySelector('.swiper_icon span').innerHTML
        addPrd(prdImg, prdPrice)
        showCart(cartPay)
        totalPrice()
        deleteProduct()
        changeValue()
    })
})

// add product
function addPrd(prdImg, prdPrice) {
    let trCart = document.createElement('tr')
    trCart.innerHTML = '<td><img src="'+prdImg+'" alt=""></td><td><p><span class = "pri">'+prdPrice+'</span>$</p></td><td><input type="number" value="1" min="1"></td><td><span class = "delete">Xóa</span></td>'
    let tbodyCart = document.querySelector('table tbody')
    tbodyCart.appendChild(trCart)
}
// price
function totalPrice() {
    let totalPrice = 0
    let totalValue = 0
    let trPri = document.querySelectorAll('tbody tr')
    trPri.forEach(function(ele) {
        let pri = ele.querySelector('.pri').innerHTML
        let val = ele.querySelector('input').value
        totalPrice += pri * val
        totalValue += val * 1
    })
    let total = document.querySelector('.cart_price span')
    total.innerHTML = totalPrice 
    let valueTop = document.querySelector('.top .cart .cart_number')
    valueTop.innerHTML = totalValue
}
// delete product
function deleteProduct() {
    let dele = document.querySelectorAll('tbody tr')
    dele.forEach(function(e) {
        let de = e.querySelector('.delete')
        de.addEventListener('click', function(ele) {
            ele.target.parentElement.parentElement.remove()
            totalPrice()
        })
    })
}
// change Value (thay đổi sl sản phầm thì price sẽ thay đổi)
function changeValue() {
    let changeVal = document.querySelectorAll('tbody tr')
    changeVal.forEach(function(e) {
        let valueIn = e.querySelector('input')
        valueIn.addEventListener('change', function(){
            totalPrice()
        })
    })
}

// ----------------------------------------------xem nhanh
let exitShow = document.querySelector('.showProduct .fa-circle-xmark')
let showPro = document.querySelector('.showProduct')
let btnProducts = document.querySelectorAll('.add_cart .swiper-slide .btn')
let imgShow = document.querySelector('.showProduct img')
let priceShow = document.querySelector('.showProduct .showRight h5 span')

exitShow.addEventListener('click', function() {
    showPro.style.transform = 'scale(0)'
})

btnProducts.forEach(function(pr) {
    pr.addEventListener('click', function(e) {
        showPro.style.transform = 'scale(1)'
        let listImg = e.target.parentElement
        let img = listImg.querySelector('img')
        imgShow.src = img.src
        let price = listImg.querySelector('.swiper_icon span')
        priceShow.innerHTML = price.innerHTML
    })
})