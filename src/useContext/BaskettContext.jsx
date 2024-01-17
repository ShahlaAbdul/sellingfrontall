import React, { createContext, useState } from 'react'
import useLocalStorage from '../hook/useLocalStorage';
// import useLocalStorage from '../hook/useLocalStorage';

export const BaskettContext = createContext()

function BasketProvider({ children }) {
    const [basket, setBasket] = useLocalStorage("basket", [])

    function addBasket(item) {
        const index = basket.findIndex((x) => x._id === item._id)
        if (index === -1) {
            return setBasket([...basket, { item, count: 1 }]);
        } else {
            basket[index].count++;
            setBasket([...basket]);
        }}
    function remoweBasket(item) {
        setBasket(basket.filter((x) => x._id !== item._id))
    }
    function increaseCount(item) {
        const index = basket.findIndex((x) => x._id === item._id)
        basket[index].count++;
        setBasket([...basket])
    }
    function decreaseCount(item) {
        const index = basket.findIndex((x) => x._id === item._id);
        if (basket[index].count> 1) {
        basket[index].count--;

            setBasket([...basket])
        }

    }
    return (
        <BaskettContext.Provider value={{ basket, addBasket, remoweBasket, increaseCount, decreaseCount }}>
            {children}
        </BaskettContext.Provider>
    )
}

export default BasketProvider