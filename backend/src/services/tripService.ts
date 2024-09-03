import prismaClient from "../database/prismaClient";

export const fetchTrips = async () => {
  const trips = await prismaClient.trip.findMany({
    include: {
      comments: true,
    },
  })

  return trips.map(trip => {
    const totalReviews = trip.comments.length
    const averageReview = totalReviews > 0
      ? trip.comments.reduce((acc, comment) => acc + (comment.note_services + comment.note_prices + comment.note_locations + comment.note_food + comment.note_amenities + comment.note_comfort) / 6,0) / totalReviews
      : 0

    return {
      image: trip.image,
      location: trip.location,
      destiny: trip.destine,
      averageReview,
      reviewCount: totalReviews,
      tourDays: trip.days,
      minPrice: trip.price,
    }
  })
}

export default { fetchTrips }