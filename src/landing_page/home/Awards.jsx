import React from 'react'

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 '>
                    <img  className='mt-5' src="media/images/largestBroker.svg" alt="Largest Broker" />
                </div>

                <div className='col-6 p-5 mt-2'>
                    <h1> Largest stock broker in India</h1>
                    <p className='mb-5'> 2+ million Zerodha clients contribute to over 15% of all volumes in India daily by trading and investing in:</p>
                    <div className='row'> 
                        <div className='col-6'>
                            <ul>
                                <li> 
                                    <p>Futures and Options</p>
                                </li>
                                <li> 
                                    <p>Commodity derivatives</p>
                                </li>
                                <li> 
                                    <p>Futures and Options</p>
                                </li>
                            </ul>
                        </div>
                        
                            <div className='col-6'>
                            <ul>
                                <li> 
                                    <p>Stocks and IPOs</p>
                                </li>
                                <li> 
                                    <p>Direct mutual funds</p>
                                </li>
                                <li> 
                                    <p>Bonds and Govt. Securities</p>
                                </li>
                            </ul>


                        </div>
                        <img style={{width:'90%'}} src="media/images/pressLogos.png" alt="Press Logos" />

                    </div>
                </div>
            </div>
        </div>
     );
}

export default Awards;