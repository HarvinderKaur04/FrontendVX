
function Education() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 mt-5 p-5 ">
                    <img src="media/images/education.svg" alt="" srcset="" />

                </div>
                <div className="col-6 mt-5 p-5 ">
                    <h2 className="fs-2 mt-5">Free and open market education</h2>
                    <p className="fs-5 mt-3">
                        Varsity, the largest online stock market education book in the world <br></br>
                        covering everything from the basics to advanced trading.
                     
                    </p>
                       <a href="http://"style={{textDecoration:"none"}}>Varsity<i class="fa-solid fa-arrow-right"></i></a>
                    <p className="fs-5 mt-3">
                        TradingQ&A, the most active trading and investment community in <br>
                        </br>India for all your market related queries.
                       
                    </p>
                     <a href="http://"style={{textDecoration:"none"}}>TradingQ&A<i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;