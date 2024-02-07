import React from 'react'
import Reservation from '../components/Calendar'
import Table from '../components/Table'

export default function BookingPage() {
  return (
    <>
    <h1>Reservations</h1>
    <Reservation />
    <Table />
    <button>Continue</button>
    </>
  )
}
