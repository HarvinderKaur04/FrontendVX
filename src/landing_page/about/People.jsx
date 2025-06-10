function People() {
    return (
        <div className="container">
            <div className="row p-5 mb-5">
                <h1 className="text-center  mb-5">People</h1>
                <div className="col text-center">                   
                    <img src="media/images/har.jpg" style={{width:"60%"}}className="rounded-circle " alt="" srcset="" />
                    <h3 className="mt-5">Harvinder Kaur Zitzer</h3>
                    <p className="p"> Developer </p>
                </div>
                <div className="col">
                    <p className="p">
                        Havinder Kaur is a the Developer  of the  VyaparaX Website.
                        Its is a clone of Zerodha .
                        {/* <p className="p">
                            He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
                            and the Market Data Advisory Committee (MDAC).</p> */}
                        <p className="p">Guideing students and helping in there Projects .</p>
                        <p className="p">
                            Connect on <a href="/">Homepage </a>/<a href="http://"> TradingQnA</a>/<a href="http://"> Twitter</a>
                        </p>


                    </p>
                </div>
            </div>
        </div>
    );
}

export default People;