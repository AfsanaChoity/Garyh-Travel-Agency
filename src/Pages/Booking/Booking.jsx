import React from 'react'
import BookingPageTopSection from '../../Component/BookingPageTopSection/BookingPageTopSection'
import BookingOverview from '../../Component/BookingOverview/BookingOverview'
import BookingMap from '../../Component/BookingMap/BookingMap'
import BookingAmenities from '../../Component/BookingAmenties/BookingAmenties'
import BookingReviews from '../../Component/BookingReviews/BookingReviews'

export default function Booking() {
  return (
    <div className='container mx-auto px-4 lg:px-10'>
      <BookingPageTopSection></BookingPageTopSection>
      <BookingOverview></BookingOverview>
      <BookingMap></BookingMap>
      <BookingAmenities></BookingAmenities>
      <BookingReviews></BookingReviews>
    </div>
  )
}
