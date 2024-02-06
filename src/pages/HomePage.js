import React, { useState } from 'react';
import Banner from '../components/Banner'
import Menu from '../components/Menu'

export default function HomePage() {
  const categories = ['Category1', 'Category2', 'Category3']

  return (
    <main>
      <Banner />
      <Menu categories={categories}/>
    </main>

  )
}
