import React, { useState } from "react"
import "../styles/SearchBar.css"

const SearchBar: React.FC = () => {

    const [destine, setDestine] = useState<string>("")
    const [typeSelect, setTypeSelect] = useState<string>("")
    const [dataSelect, setDataSelect] = useState<string>("")

    const handleTypeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTypeSelect(e.target.value)
    }

    const handleDataSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDataSelect(e.target.value)
    }

    const handleDestination = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDestine(e.target.value)
    }

  return (
    <div className="searchBarContainer">
        <div className="searchInputs">
            <div>
            <label htmlFor="destination">Destination</label>
            <input 
            type="text" 
            placeholder="Write your destine..."
            onChange={handleDestination}
            className="destiny"
            />
            </div>
            <div>
            <label htmlFor="type">Type</label>
            <select 
             className="options"
             value={typeSelect}
             onChange={handleTypeSelect}
             >
                <option value={1}>Adventure</option>
                <option value={2}>Beaches</option>
                <option value={3}>Boat Tours</option>
                <option value={4}>City Tours</option>
                <option value={5}>Food</option>
                <option value={6}>Hiking</option>
                <option value={7}>Honeymoon</option>
                <option value={8}>Museum Tours</option>
            </select>
            </div>
            <div>
            <label htmlFor="date">When</label>
            <input
             type="date" 
             className="date"
             value={dataSelect}
             onChange={handleDataSelect}
             placeholder={dataSelect}
             />
             </div>
             <div>
            <label htmlFor="destination">Guests</label>
            <select
             className="guests"
             value={1}
             >
             <option>1</option>
             <option>2</option>
             <option>3</option>
             <option>4</option>
             <option>4+</option>
             </select>
             </div>
             <button className="searchButton">Search</button>
        </div>
    </div>
  )
}

export default SearchBar
