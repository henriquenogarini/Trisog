import React, { useState } from "react"
import "../styles/SearchBar.css"

const SearchBar: React.FC = () => {

    const [destiny, setDestiny] = useState<string>("")
    const [typeSelect, setTypeSelect] = useState<string>("")
    const [dataSelect, setDataSelect] = useState<string>("")
    const [guests, setGuests] = useState<string>("")

    const handleDestination = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDestiny(e.target.value)
    }
    
    const handleTypeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTypeSelect(e.target.value)
    }

    const handleDataSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDataSelect(e.target.value)
    }

    const handleGuestsAmount = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setGuests(e.target.value)
    }

  return (
    <div className="searchBarContainer">
        <div className="searchInputs">
            <div>
            <label htmlFor="destination">Destination</label>
            <input 
            type="text" 
            placeholder="Write your destiny..."
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
            <label htmlFor="guestsn">Guests</label>
            <select
             className="guests"
             value={guests}
             onChange={handleGuestsAmount}
             >
             <option value={1}>1</option>
             <option value={2}>2</option>
             <option value={3}>3</option>
             <option value={4}>4</option>
             <option value={5}>4+</option>
             </select>
             </div>
             <button className="searchButton">Search</button>
        </div>
    </div>
  )
}

export default SearchBar
