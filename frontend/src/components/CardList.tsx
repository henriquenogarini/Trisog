import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../styles/Cards.css"

  type CardProps = {
    image: string,
    location: string,
    destiny: string,
    averageReview: number,
    reviewCount: number,
    tourDays: number,
    minPrice: number,
  }

  const Card: React.FC<CardProps> = ({
    image,
    location,
    destiny,
    averageReview,
    reviewCount,
    tourDays,
    minPrice
  }) => {
    return (
      <div className="card">
      <img src={image} alt={`${destiny} image`} className="cardImage" />
      <div className="cardDetails">
        <h2 className="cardLocation">{location}</h2>
        <h3 className="cardDestiny">{destiny}</h3>
        <div className="cardReview">
          <div className="averageReview">
            <img src="/" alt="Star Icon" className="starIcon" />
            <span className="averageReviewValue">{averageReview.toFixed(1)}</span>
          </div>
          <span className="reviewCount">{reviewCount} reviews</span>
          <div className="tourDays">
            <img src="/" alt="Days Icon" className="daysIcon" />
            <span>{tourDays}days</span>
          </div>
        </div>
        <div className="cardFooter">
          <span>Starting From</span>
          <span className="minPrice">${minPrice}</span>
        </div>
      </div>
    </div>
    )
  }

  const CardsList: React.FC = () => {
    const [cards, setCards] = useState<CardProps[]>([])
  
    useEffect(() => {
      const fetchCards = async () => {
        try {
          const response = await axios.get(`${API_URL}/api/cards`)
          setCards(response.data)
        } catch (error) {
          console.error('Error fetching the cards', error)
        }
      }
  
      fetchCards()
    }, [])
  
    return (
      <div className="cardsList">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    )
  }
  
  export default CardsList
