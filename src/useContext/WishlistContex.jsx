import React, { createContext, useState } from 'react'
import useLocalStorage from '../hook/useLocalStorage'

export const WishlistContex = createContext()
function WishlistProvider({ children }) {
    const [wishlist, setWishlist] = useLocalStorage("wishlist", [])

    function addWishlist(item) {
        const index = wishlist.findIndex((x) => x._id === item._id);
        if (index === -1) {
            setWishlist([...wishlist, item])
        }
        remoweWishlist()
    }
    function remoweWishlist(item) {
        setWishlist(wishlist.filter((x) => x._id !== item._id))
    }
    function isWishlist(item) {
        return wishlist.findIndex((x) => x._id === item._id) === -1 ? false : true
    }


    return (
        <WishlistContex.Provider value={{ wishlist, addWishlist,remoweWishlist,isWishlist}}>
            {children}
        </WishlistContex.Provider>
    )
}

export default WishlistProvider