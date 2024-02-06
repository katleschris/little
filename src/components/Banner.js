import React from 'react';
import ResturantFood from '../icons_assets/ResturantFood.jpg';
import { Link } from 'react-router-dom';


export default function Banner() {

  const bannerStyle = {
    background: '#495E57', // Corrected hex color code
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '10px',
    alignItems: 'center',
    padding: '10px',

    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    h1Style : {
    color: '#F4CE14',
    },
    h3pStyle : {
    color: 'white',
    },
    btnStyle : {
        backgroundColor: '#F4CE14',
        borderRadius: '25%',
        border: 'none',
        padding: '5%',
    }
  }

  return (
    <section className='banner' style={bannerStyle}>
        <div className='banner-text'>
            <h1 style={bannerStyle.h1Style}>Little Lemon</h1>
            <h3 style={bannerStyle.h3pStyle}>Sea Point</h3>
            <p style={bannerStyle.h3pStyle}>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
        <div className='banner-image' style={bannerStyle.imageContainer}>
            <img src={ResturantFood} alt='Restaurant food'
                style={{ width: '80%', height: 'auto' }}
            />
        </div>

        <Link to="/reservation"><button style={bannerStyle.btnStyle}>Reserve a table</button></Link>
    </section>
  );
}


