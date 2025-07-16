import React from 'react'

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <div className='col'>
                    <img src="media/images/homeHero.png" alt="Hero Image" width={1000} height={430} className='mb-5' />
                </div>
                <h1 className='mt-5'> Invest in everything </h1>
                <p className='mt-1 fs-5'>
                    Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                </p>
                <button className='mt-3 p-2 btn btn-primary fs-5 mb-3' style={{width: '20%', margin: '0 auto'}}>
                    Signup Now
                </button>
            </div>
        </div>
     );
}

export default Hero;