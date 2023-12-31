function getProductsByCategory(categoryName) {
    const cells = document.querySelectorAll('.cell')

    cells.forEach(cell => {
        cell.setAttribute('product-category', categoryName)
    })

    const productsContainer = document.querySelector('.products-container')
    const productContainer = document.querySelector('.product-container')

    productsContainer.style.display = 'flex'
    productContainer.style.display = 'none'

    const productImage1 = document.getElementById('product-image1')
    const productImage2 = document.getElementById('product-image2')
    const productImage3 = document.getElementById('product-image3')
    const productImage4 = document.getElementById('product-image4')
    const productImage5 = document.getElementById('product-image5')
    const productImage6 = document.getElementById('product-image6')
    const productImage7 = document.getElementById('product-image7')
    const productImage8 = document.getElementById('product-image8')

    const productName1 = document.getElementById('product-name1')
    const productName2 = document.getElementById('product-name2')
    const productName3 = document.getElementById('product-name3')
    const productName4 = document.getElementById('product-name4')
    const productName5 = document.getElementById('product-name5')
    const productName6 = document.getElementById('product-name6')
    const productName7 = document.getElementById('product-name7')
    const productName8 = document.getElementById('product-name8')

    const productPrice1 = document.getElementById('product-price1')
    const productPrice2 = document.getElementById('product-price2')
    const productPrice3 = document.getElementById('product-price3')
    const productPrice4 = document.getElementById('product-price4')
    const productPrice5 = document.getElementById('product-price5')
    const productPrice6 = document.getElementById('product-price6')
    const productPrice7 = document.getElementById('product-price7')
    const productPrice8 = document.getElementById('product-price8')

    switch (categoryName) {
        case 'clothes':
            productImage1.src = './assets/venesa-long-shirt.jpg'
            productImage2.src = './assets/venesa-long-shirt.jpg'
            productImage3.src = './assets/venesa-long-shirt.jpg'
            productImage4.src = './assets/venesa-long-shirt.jpg'
            productImage5.src = './assets/venesa-long-shirt.jpg'
            productImage6.src = './assets/venesa-long-shirt.jpg'
            productImage7.src = './assets/venesa-long-shirt.jpg'
            productImage8.src = './assets/venesa-long-shirt.jpg'

            productName1.innerHTML = 'Venesa Long Shirt'
            productName2.innerHTML = 'Venesa Long Shirt'
            productName3.innerHTML = 'Venesa Long Shirt'
            productName4.innerHTML = 'Venesa Long Shirt'
            productName5.innerHTML = 'Venesa Long Shirt'
            productName6.innerHTML = 'Venesa Long Shirt'
            productName7.innerHTML = 'Venesa Long Shirt'
            productName8.innerHTML = 'Venesa Long Shirt'

            productPrice1.innerHTML = '320.00'
            productPrice2.innerHTML = '320.00'
            productPrice3.innerHTML = '320.00'
            productPrice4.innerHTML = '320.00'
            productPrice5.innerHTML = '320.00'
            productPrice6.innerHTML = '320.00'
            productPrice7.innerHTML = '320.00'
            productPrice8.innerHTML = '320.00'
            break

        case 'shoes':
            productImage1.src = './assets/suga-leather-shoes.jpg'
            productImage2.src = './assets/suga-leather-shoes.jpg'
            productImage3.src = './assets/suga-leather-shoes.jpg'
            productImage4.src = './assets/suga-leather-shoes.jpg'
            productImage5.src = './assets/suga-leather-shoes.jpg'
            productImage6.src = './assets/suga-leather-shoes.jpg'
            productImage7.src = './assets/suga-leather-shoes.jpg'
            productImage8.src = './assets/suga-leather-shoes.jpg'

            productName1.innerHTML = 'Suga Leather Shoes'
            productName2.innerHTML = 'Suga Leather Shoes'
            productName3.innerHTML = 'Suga Leather Shoes'
            productName4.innerHTML = 'Suga Leather Shoes'
            productName5.innerHTML = 'Suga Leather Shoes'
            productName6.innerHTML = 'Suga Leather Shoes'
            productName7.innerHTML = 'Suga Leather Shoes'
            productName8.innerHTML = 'Suga Leather Shoes'

            productPrice1.innerHTML = '750.00'
            productPrice2.innerHTML = '750.00'
            productPrice3.innerHTML = '750.00'
            productPrice4.innerHTML = '750.00'
            productPrice5.innerHTML = '750.00'
            productPrice6.innerHTML = '750.00'
            productPrice7.innerHTML = '750.00'
            productPrice8.innerHTML = '750.00'
            break

        case 'bags':
            productImage1.src = './assets/mini-leather-bag.jpg'
            productImage2.src = './assets/mini-leather-bag.jpg'
            productImage3.src = './assets/mini-leather-bag.jpg'
            productImage4.src = './assets/mini-leather-bag.jpg'
            productImage5.src = './assets/mini-leather-bag.jpg'
            productImage6.src = './assets/mini-leather-bag.jpg'
            productImage7.src = './assets/mini-leather-bag.jpg'
            productImage8.src = './assets/mini-leather-bag.jpg'

            productName1.innerHTML = 'Mini Leather Bag'
            productName2.innerHTML = 'Mini Leather Bag'
            productName3.innerHTML = 'Mini Leather Bag'
            productName4.innerHTML = 'Mini Leather Bag'
            productName5.innerHTML = 'Mini Leather Bag'
            productName6.innerHTML = 'Mini Leather Bag'
            productName7.innerHTML = 'Mini Leather Bag'
            productName8.innerHTML = 'Mini Leather Bag'

            productPrice1.innerHTML = '540.00'
            productPrice2.innerHTML = '540.00'
            productPrice3.innerHTML = '540.00'
            productPrice4.innerHTML = '540.00'
            productPrice5.innerHTML = '540.00'
            productPrice6.innerHTML = '540.00'
            productPrice7.innerHTML = '540.00'
            productPrice8.innerHTML = '540.00'
            break

        case 'electronics':
            productImage1.src = './assets/vinia-headphone.jpg'
            productImage2.src = './assets/vinia-headphone.jpg'
            productImage3.src = './assets/vinia-headphone.jpg'
            productImage4.src = './assets/vinia-headphone.jpg'
            productImage5.src = './assets/vinia-headphone.jpg'
            productImage6.src = './assets/vinia-headphone.jpg'
            productImage7.src = './assets/vinia-headphone.jpg'
            productImage8.src = './assets/vinia-headphone.jpg'

            productName1.innerHTML = 'Vinia Headphone'
            productName2.innerHTML = 'Vinia Headphone'
            productName3.innerHTML = 'Vinia Headphone'
            productName4.innerHTML = 'Vinia Headphone'
            productName5.innerHTML = 'Vinia Headphone'
            productName6.innerHTML = 'Vinia Headphone'
            productName7.innerHTML = 'Vinia Headphone'
            productName8.innerHTML = 'Vinia Headphone'

            productPrice1.innerHTML = '720.00'
            productPrice2.innerHTML = '720.00'
            productPrice3.innerHTML = '720.00'
            productPrice4.innerHTML = '720.00'
            productPrice5.innerHTML = '720.00'
            productPrice6.innerHTML = '720.00'
            productPrice7.innerHTML = '720.00'
            productPrice8.innerHTML = '720.00'
            break

        case 'watches':
            productImage1.src = './assets/zonio-super-watch.jpg'
            productImage2.src = './assets/zonio-super-watch.jpg'
            productImage3.src = './assets/zonio-super-watch.jpg'
            productImage4.src = './assets/zonio-super-watch.jpg'
            productImage5.src = './assets/zonio-super-watch.jpg'
            productImage6.src = './assets/zonio-super-watch.jpg'
            productImage7.src = './assets/zonio-super-watch.jpg'
            productImage8.src = './assets/zonio-super-watch.jpg'

            productName1.innerHTML = 'Zonio Super Watch'
            productName2.innerHTML = 'Zonio Super Watch'
            productName3.innerHTML = 'Zonio Super Watch'
            productName4.innerHTML = 'Zonio Super Watch'
            productName5.innerHTML = 'Zonio Super Watch'
            productName6.innerHTML = 'Zonio Super Watch'
            productName7.innerHTML = 'Zonio Super Watch'
            productName8.innerHTML = 'Zonio Super Watch'

            productPrice1.innerHTML = '850.00'
            productPrice2.innerHTML = '850.00'
            productPrice3.innerHTML = '850.00'
            productPrice4.innerHTML = '850.00'
            productPrice5.innerHTML = '850.00'
            productPrice6.innerHTML = '850.00'
            productPrice7.innerHTML = '850.00'
            productPrice8.innerHTML = '850.00'
            break

        case 'jewelry':
            productImage1.src = './assets/red-ruby-rings.jpg'
            productImage2.src = './assets/red-ruby-rings.jpg'
            productImage3.src = './assets/red-ruby-rings.jpg'
            productImage4.src = './assets/red-ruby-rings.jpg'
            productImage5.src = './assets/red-ruby-rings.jpg'
            productImage6.src = './assets/red-ruby-rings.jpg'
            productImage7.src = './assets/red-ruby-rings.jpg'
            productImage8.src = './assets/red-ruby-rings.jpg'

            productName1.innerHTML = 'Red Ruby Rings'
            productName2.innerHTML = 'Red Ruby Rings'
            productName3.innerHTML = 'Red Ruby Rings'
            productName4.innerHTML = 'Red Ruby Rings'
            productName5.innerHTML = 'Red Ruby Rings'
            productName6.innerHTML = 'Red Ruby Rings'
            productName7.innerHTML = 'Red Ruby Rings'
            productName8.innerHTML = 'Red Ruby Rings'

            productPrice1.innerHTML = '960.00'
            productPrice2.innerHTML = '960.00'
            productPrice3.innerHTML = '960.00'
            productPrice4.innerHTML = '960.00'
            productPrice5.innerHTML = '960.00'
            productPrice6.innerHTML = '960.00'
            productPrice7.innerHTML = '960.00'
            productPrice8.innerHTML = '960.00'
            break

        case 'kitchen':
            productImage1.src = './assets/slicia-silver-knife.jpg'
            productImage2.src = './assets/slicia-silver-knife.jpg'
            productImage3.src = './assets/slicia-silver-knife.jpg'
            productImage4.src = './assets/slicia-silver-knife.jpg'
            productImage5.src = './assets/slicia-silver-knife.jpg'
            productImage6.src = './assets/slicia-silver-knife.jpg'
            productImage7.src = './assets/slicia-silver-knife.jpg'
            productImage8.src = './assets/slicia-silver-knife.jpg'

            productName1.innerHTML = 'Slicia Silver Knife'
            productName2.innerHTML = 'Slicia Silver Knife'
            productName3.innerHTML = 'Slicia Silver Knife'
            productName4.innerHTML = 'Slicia Silver Knife'
            productName5.innerHTML = 'Slicia Silver Knife'
            productName6.innerHTML = 'Slicia Silver Knife'
            productName7.innerHTML = 'Slicia Silver Knife'
            productName8.innerHTML = 'Slicia Silver Knife'

            productPrice1.innerHTML = '240.00'
            productPrice2.innerHTML = '240.00'
            productPrice3.innerHTML = '240.00'
            productPrice4.innerHTML = '240.00'
            productPrice5.innerHTML = '240.00'
            productPrice6.innerHTML = '240.00'
            productPrice7.innerHTML = '240.00'
            productPrice8.innerHTML = '240.00'
            break

        case 'toys':
            productImage1.src = './assets/batmobile-batman.jpg'
            productImage2.src = './assets/batmobile-batman.jpg'
            productImage3.src = './assets/batmobile-batman.jpg'
            productImage4.src = './assets/batmobile-batman.jpg'
            productImage5.src = './assets/batmobile-batman.jpg'
            productImage6.src = './assets/batmobile-batman.jpg'
            productImage7.src = './assets/batmobile-batman.jpg'
            productImage8.src = './assets/batmobile-batman.jpg'

            productName1.innerHTML = 'Batmobile Batman'
            productName2.innerHTML = 'Batmobile Batman'
            productName3.innerHTML = 'Batmobile Batman'
            productName4.innerHTML = 'Batmobile Batman'
            productName5.innerHTML = 'Batmobile Batman'
            productName6.innerHTML = 'Batmobile Batman'
            productName7.innerHTML = 'Batmobile Batman'
            productName8.innerHTML = 'Batmobile Batman'

            productPrice1.innerHTML = '430.00'
            productPrice2.innerHTML = '430.00'
            productPrice3.innerHTML = '430.00'
            productPrice4.innerHTML = '430.00'
            productPrice5.innerHTML = '430.00'
            productPrice6.innerHTML = '430.00'
            productPrice7.innerHTML = '430.00'
            productPrice8.innerHTML = '430.00'
            break

        default:
            productImage1.src = './assets/venesa-long-shirt.jpg'
            productImage2.src = './assets/venesa-long-shirt.jpg'
            productImage3.src = './assets/venesa-long-shirt.jpg'
            productImage4.src = './assets/venesa-long-shirt.jpg'
            productImage5.src = './assets/venesa-long-shirt.jpg'
            productImage6.src = './assets/venesa-long-shirt.jpg'
            productImage7.src = './assets/venesa-long-shirt.jpg'
            productImage8.src = './assets/venesa-long-shirt.jpg'

            productName1.innerHTML = 'Venesa Long Shirt'
            productName2.innerHTML = 'Venesa Long Shirt'
            productName3.innerHTML = 'Venesa Long Shirt'
            productName4.innerHTML = 'Venesa Long Shirt'
            productName5.innerHTML = 'Venesa Long Shirt'
            productName6.innerHTML = 'Venesa Long Shirt'
            productName7.innerHTML = 'Venesa Long Shirt'
            productName8.innerHTML = 'Venesa Long Shirt'

            productPrice1.innerHTML = '320.00'
            productPrice2.innerHTML = '320.00'
            productPrice3.innerHTML = '320.00'
            productPrice4.innerHTML = '320.00'
            productPrice5.innerHTML = '320.00'
            productPrice6.innerHTML = '320.00'
            productPrice7.innerHTML = '320.00'
            productPrice8.innerHTML = '320.00'
            break
    }
}

function getFullProduct(product) {
    const category = product.getAttribute('product-category')

    const productNumber = product.getAttribute('product-number')

    getProduct(category, productNumber)
}

function increment() {
    let productPrice = document.getElementById('product-price').innerText
    let totalPrice = document.getElementById('total-price').innerText
    let count = document.getElementById('count').innerText

    if (parseInt(count) < 25) {
        count++
        totalPrice = parseFloat(totalPrice) + parseFloat(productPrice)
    }

    document.getElementById('count').innerHTML = count
    document.getElementById('total-price').innerHTML = parseFloat(totalPrice).toFixed(2)
}

function decrement() {
    let productPrice = document.getElementById('product-price').innerText
    let totalPrice = document.getElementById('total-price').innerText
    let count = document.getElementById('count').innerText

    if (parseInt(count) > 1) {
        count--
        totalPrice = parseFloat(totalPrice) - parseFloat(productPrice)
    }

    document.getElementById('count').innerHTML = count
    document.getElementById('total-price').innerHTML = parseFloat(totalPrice).toFixed(2)
}
