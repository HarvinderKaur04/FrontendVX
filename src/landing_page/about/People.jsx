function People() {
    return (
        <div className="container">
            <div className="row p-5 mb-5">
                <h1 className="text-center  mb-5">People</h1>
                <div className="col text-center">                   
                    <img src="media/images/nithinKamath.jpg" style={{width:"60%"}}className="rounded-circle " alt="" srcset="" />
                    <h3 className="mt-5">Nithin Kamath</h3>
                    <p className="p"> Founder, CEO </p>
                </div>
                <div className="col">
                    <p className="p">
                        Nithin bootstrapped and founded Vyapara in 2010 to overcome
                        the hurdles he faced during his decade long stint as a trader.
                        Today, Vyapara has changed the landscape of the Indian broking industry.
                        <p className="p">
                            He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
                            and the Market Data Advisory Committee (MDAC).</p>
                        <p className="p">Playing basketball is his zen.</p>
                        <p className="p">
                            Connect on <a href="http://">Homepage </a>/<a href="http://"> TradingQnA</a>/<a href="http://"> Twitter</a>
                        </p>


                    </p>
                </div>
            </div>
        </div>
    );
}

export default People;