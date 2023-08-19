"use client"

import { SearchManufacturer } from "."
import { useState } from "react"

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('')

  return (
    <form action="" className="searchbar" >
        <div className="searchbar__items">
            <SearchManufacturer 
            manufacturer = {manufacturer}
            setManufacturer = {setManufacturer}
            />
        </div>
    </form>
  )
}

export default SearchBar