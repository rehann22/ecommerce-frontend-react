//action when user adds to chart
export const addToCart = (prevCart, product) => {
    //check whether the product is already in the cart
    const existingProduct = prevCart.find((item) => item.id === product.id)

    if (existingProduct) {
        return prevCart.map((item) =>
            item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        )
    }

    //if not exist -> add new item with qty 1
    return [...prevCart, { ...product, quantity: 1 }]
}

//increment function
export const increment = (cart, productId) => {
    return cart.map((item) =>
        item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
    )
}

//decrement function
export const decrement = (cart, productId) => {
    return cart
        .map((item) =>
            item.id === productId
                ? { ...item, quantity: item.quantity - 1 }
                : item
        )
        .filter((item) => item.quantity > 0)
}

// ✅ remove item from cart completely
export const removeItem = (cart, productId) => {
    return cart.filter((item) => item.id !== productId)
}


