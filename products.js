function getProduct (category, productNumber) {
    const productImage = document.getElementById('product-full-image')
    const productsContainer = document.querySelector('.products-container')
    const productContainer = document.querySelector('.product-container')

    productsContainer.style.display = 'none'
    productContainer.style.display = 'flex'

    switch (category) {
        case 'clothes':
            productImage.src = './assets/venesa-long-shirt-full.jpg'
            break
    }
}
