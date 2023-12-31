function getProduct(category, productNumber) {
    const productsContainer = document.querySelector('.products-container')
    const productContainer = document.querySelector('.product-container')
    const productImage = document.getElementById('product-full-image')
    const productName = document.getElementById('product-name')
    const productPrice = document.getElementById('product-price')
    const totalPrice = document.getElementById('total-price')
    const productDescription = document.getElementById('product-description')

    productsContainer.style.display = 'none'
    productContainer.style.display = 'flex'

    switch (category) {
        case 'clothes':
            productImage.src = './assets/venesa-long-shirt-full.jpg'
            productName.innerHTML = 'Venesa Long Shirt'
            productPrice.innerHTML = '320.00'
            productDescription.innerHTML = "Introducing the Venesa Long Shirt, a perfect blend of elegance and comfort. This\
            timeless piece features a soothing grey - blue hue, enhancing your style with a touch of sophistication. Crafted with meticulous detail,\
            the shirt's elongated design adds a contemporary flair, making it an ideal choice for both casual and formal occasions."
            totalPrice.innerHTML = '320.00'
            break

        case 'shoes':
            productImage.src = './assets/suga-leather-shoes-full.jpg'
            productName.innerHTML = 'Suga Leather Shoes'
            productPrice.innerHTML = '750.00'
            productDescription.innerHTML = "Introducing Suga Leather Shoes, an epitome of style and comfort. Crafted with precision,\
            these exquisite brown shoes seamlessly blend sophistication with versatility. The rich, supple leather enhances both\
            durability and aesthetic appeal, making them a timeless choice for any occasion. Step into elegance with Suga Leather Shoes."
            totalPrice.innerHTML = '750.00'
            break

        case 'bags':
            productImage.src = './assets/mini-leather-bag-full.jpg'
            productName.innerHTML = 'Mini Leather Bag'
            productPrice.innerHTML = '540.00'
            productDescription.innerHTML = "Elevate your style with our Mini Leather Bag in sleek black. Compact yet chic, this bag effortlessly\
            combines fashion and functionality. Crafted with fine leather, it boasts durability and a timeless aesthetic. Perfect for on-the-go\
            essentials, this mini bag is a sophisticated accessory that complements any outfit with flair."
            totalPrice.innerHTML = '540.00'
            break

        case 'electronics':
            productImage.src = './assets/vinia-heaphone-full.jpg'
            productName.innerHTML = 'Vinia Headphone'
            productPrice.innerHTML = '720.00'
            productDescription.innerHTML = "Immerse yourself in a world of crystal-clear sound with Vinia Headphones in elegant black. These premium\
            headphones deliver an unparalleled audio experience, marrying style and superior technology. The sleek design and comfortable fit make them\
            the perfect companion for music enthusiasts who appreciate both aesthetics and exceptional sound quality."
            totalPrice.innerHTML = '720.00'
            break

        case 'watches':
            productImage.src = './assets/zonio-super-watch-full.jpg'
            productName.innerHTML = 'Zonio Super Watch'
            productPrice.innerHTML = '850.00'
            productDescription.innerHTML = "Experience unparalleled sophistication with the Zonio Super Watch in radiant silver. Meticulously crafted\
            for precision and style, this timepiece seamlessly blends innovation and elegance.Boasting advanced features and a sleek design, it is\
            the epitome of modern luxury.Elevate your wristwear game with the Zonio Super Watch, a statement in silver brilliance."
            totalPrice.innerHTML = '850.00'
            break

        case 'jewelry':
            productImage.src = './assets/red-ruby-rings-full.jpg'
            productName.innerHTML = 'Red Ruby Rings'
            productPrice.innerHTML = '850.00'
            productDescription.innerHTML = "Dazzle in the enchanting allure of Red Ruby Rings, delicately adorned with a hint of pink radiance.\
            Each ring is a testament to timeless elegance, featuring vibrant red rubies set in a lustrous pink-hued frame. Elevate your style\
            with these exquisite rings that capture the essence of romance and sophistication."
            totalPrice.innerHTML = '850.00'
            break

        case 'kitchen':
            productImage.src = './assets/slicia-super-knife-full.jpg'
            productName.innerHTML = 'Slicia Silver Knife'
            productPrice.innerHTML = '240.00'
            productDescription.innerHTML = "Introducing the Slicia Silver Knife, a culinary masterpiece that combines form and function.\
            Crafted with precision in lustrous silver, this knife is the epitome of kitchen elegance.Its razor - sharp blade effortlessly\
            glides through ingredients, ensuring precision and style in every culinary endeavor.Elevate your cooking experience with Slicia."
            totalPrice.innerHTML = '240.00'
            break

        case 'toys':
            productImage.src = './assets/batmobile-batman-full.jpg'
            productName.innerHTML = 'Batmobile Batman'
            productPrice.innerHTML = '430.00'
            productDescription.innerHTML = "Unleash the thrill of Gotham with the Batmobile Batman Toy Car. This meticulously detailed miniature\
            brings the iconic crime-fighting vehicle to life, complete with sleek black design and intricate features. Perfect for fans of\
            the Dark Knight, this toy car delivers endless adventures and imaginative play for aspiring heroes."
            totalPrice.innerHTML = '430.00'
            break
    }
}
