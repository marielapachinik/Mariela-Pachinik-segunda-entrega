const products = [
    {
        id: '1',
        name: 'La Comunidad del Anillo',
        price: 5000,
        category: 'Tolkien',
        img: 'https://images.cdn3.buscalibre.com/fit-in/360x360/54/49/5449ba87a3e457a22dd6d0972b5c261e.jpg',
        stock: 25,
        description: 'Primera parte de El Señor de los Anillos'
    },
    {
        id: '2',
        name: 'Las Dos Torres',
        price: 5000,
        category: 'Tolkien',
        img: 'https://images.cdn1.buscalibre.com/fit-in/360x360/0d/21/0d217a72d37e3365ff753908d0ba34ad.jpg',
        stock: 25,
        description: 'Segunda parte de El Señor de los Anillos'
    },
    {
        id: '3',
        name: 'El Retorno del Rey',
        price: 5000,
        category: 'Tolkien',
        img: 'https://images.cdn1.buscalibre.com/fit-in/360x360/f3/f5/f3f58ff205291a6e8558c93952ce9e6e.jpg',
        stock: 25,
        description: 'Tercera parte de El Señor de los Anillos'
    }
]

export const getProducts = () => {
    return new Promise((resolve)=> {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve)=> {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productId) => {
    return new Promise((resolve)=> {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}


