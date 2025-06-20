function Investment() {
    return (<>
        <div className="container mt-5">
            <div className="row mb-5 mt-5">
                <div className="row text-center mt-6 mb-5">
                    <h1>Investment options with Zerodha demat account</h1>
                </div>
            </div>         
            <div className="row mb-5 mt-5">
            <div className="col-6">
                <div className="investoptions">
                    <img src="media/images/stocks-acop.svg" alt="stock" />
                    <div >
                        <h3>Stocks</h3>
                        <p className="text-grey acop-steps-text">
                            Invest in all exchange<br></br>
                            listed securities</p>
                    </div>
                </div>
                <div className="investoptions">
                    <img src="media/images/mf-acop.svg" alt="" srcset="" />
                    <div>
                        <h3>Mutual funds</h3>
                        <p className="text-grey acop-steps-text">
                            Invest in commission<br></br>
                            free direct mutual funds</p>
                    </div>
                </div>

            </div>
             <div className="col-6">
                <div className="investoptions">
                    <img src="media/images/ipo-acop.svg" alt="" srcset="" />
                    <div>
                        <h3>IPO</h3>
                        <p className="text-grey acop-steps-text">
                            Apply to the latest<br></br>
                             IPOs instantly via UPI</p>
                    </div>
                </div>
                <div className="investoptions">
                    <img src="media/images/fo-acop.svg" alt="" srcset="" />
                    <div >
                        <h3>Futures &amp; options</h3>
                        <p className="text-grey acop-steps-text">
                            Hedge and mitigate market<br></br>
                             risk through simplified <br></br>
                             F&amp;O trading</p>
                    </div>
                </div>
            </div>
            </div>


        



     
        <div className="row text-center mt-6 mb-5">
           <a href="/investment"> <button className="btn btn-primary d-grid  col-3 mx-auto ">Explore Investment</button></a>
        </div>
    </div>
       
    </>);
}

export default Investment;