function Hero() {
    return (
        <div className="container mt-5">
            <div className="row text-center mt-6 mb-5">
                <h1>
                    Charges
                </h1>
                <p>
                    List of all charges and taxes
                </p>
            </div>
            <div className="row mt-5 mb-5 p-5 text-center">
                <div className="col">
                    <img src="media\images\pricing0.svg" alt="" srcset="" class="rounded" />
                    <h3>Free equity delivery</h3>
                    <p className="mx-auto">
                        All equity delivery investments (NSE, BSE),<br></br>
                        are absolutely free — ₹ 0 brokerage.<br></br>
                        opening</p>
                </div>
                <div className="col" >
                    <img src="media\images\other-trades.svg" class="rounded " alt="" srcset="" />

                    <h3>Intraday and F&O trades</h3>
                    <p className="mx-auto">
                        Flat ₹ 20 or 0.03% (whichever is lower) per <br></br>
                        executed order on intraday trades<br></br>
                        across direct mutual funds<br></br>
                        equity, currency, and commodity trades.<br></br>
                        Flat ₹20 on all option trades.<br></br>
                    </p>
                </div>
                <div className="col" >
                    <img src="media\images\pricing0.svg" class="rounded " alt="" srcset="" />
                    <h3>Free direct MF</h3>
                    <p className="mx-auto">
                        All direct mutual fund investments<br></br>
                        are absolutely free — ₹ 0 commissions<br></br>
                        & DP charges.<br></br></p>
                </div>
            </div>
            {/* ====================Navbar=============== */}
            <div className="row mt-5 mb-5 text-center">
                <nav class="tabs">
                    <a class="tab tab-equity sel" href="#tab-equity" data-id="equity">Equity</a>
                    <a class="tab tab-currency" href="#tab-currency" data-id="currency">Currency</a>
                    <a class="tab tab-commodity" href="#tab-commodity" data-id="commodity">Commodity</a>
                </nav>
                {/* ====================Table=============== */}
                <div className="section" id="equity" style={{display:"block"}}>
                    <table class="table table-striped" >
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>John</td>
                                <td>Doe</td>
                                <td>@social</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    {/* ==============Table Two========= */}
                     <div className="section" id="currency"  style={{display:"none"}}>
                        <table class="table table-striped"  >
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Marfdsdsfsk</td>
                                <td>Ottsfsfsdo</td>
                                <td>@mfsfsdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>John</td>
                                <td>Doe</td>
                                <td>@social</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    );
}

export default Hero;