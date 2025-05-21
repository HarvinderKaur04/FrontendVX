
function Awards() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 ">
                    <img src="/media/images/largestBroker.svg" alt="award" srcset="" />
                </div>
                <div className="col-6 ">
                    <h1 className="mt-1">Largest Stock broker in India</h1>
                    <p className="mt-3">2+ million VyparaX clients contribute to over 15% of all retail order<br></br>
                        volumes in India daily by trading and investing in:</p>
                    <div className="row mt-4 mb-3">
                        <div className="col-6 pd-5">
                            <ul >
                                <li><p>Futures and Options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>

                        <div className="col-6 pd-5">
                            <ul>
                                <li><p>Stock & IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govt Funds</p></li>
                            </ul>
                        </div>

                    </div>
                    <img src="/media/images/pressLogos.png" alt="" srcset="" />
                </div>
            </div>
        </div>

    )
}

export default Awards;