function Universe() {
    return (
        <div className="container p-5 mb-5 mt-5">
            <div className="row text-center text-muted mt-5 mb-5">
                <h5 >Want to know more about our technology stack? Check out the <a href="">VyaparaX.tech blog.</a></h5>
            </div>
            <div className="row text-center mt-5 mb-5">
                <h1>The VyaparaX Universe</h1>
                <p className="mt-3">Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className="row mt-5">
                <div className="col mt-5 mb-5  ">
                    <a href="">
                        <img src="media/images/vx.png" alt="" className="universe-img" />
                        <p className="para">
                            Our asset management venture<br></br>
                            that is creating simple and transparent index<br></br>
                            funds to help you save for your goals.<br></br>

                        </p>
                    </a>
                </div>
                <div className="col mt-5 mb-5 ">
                    <a href="">
                        <img src="media/images/sensibullLogo.svg" alt="" className="universe-img" />
                        <p className="para">Options trading platform that lets you<br></br>
                            create strategies, analyze positions, and examine<br></br>
                            data points like open interest, FII/DII, and more.<br></br></p>
                    </a>
                </div>
                <div className="col mt-5 mb-5">
                    <a href="">
                        <img src="media/images/tijori.svg" alt="" className="universe-img" />
                        <p className="para">Options trading platform that lets you<br></br>
                            create strategies, analyze positions, and examine<br></br>
                            data points like open interest, FII/DII, and more.<br></br>
                        </p></a>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col mt-5 mb-5">
                    <img src="media/images/streakLogo.png" alt="" className="universe-img" />
                    <p className="para">Systematic trading plateform<br></br>
                        that allows you to create and backtest<br></br>
                        strategies without coding.<br></br></p>
                </div>
                <div className="col mt-5 mb-5 ">
                    <img src="media/images/smallcaseLogo.png" alt="" className="universe-img" />
                    <p className="para">Thematic investing platform<br></br>
                        that helps you invest in diversified<br></br>
                        baskets of stocks on ETFs.<br></br></p>
                </div>
                <div className="col mt-5 mb-5">
                    <img src="media/images/dittoLogo.png" alt="" className="universe-img" />
                    <p className="para">Personalized advice on life<br></br>
                        and health insurance. No spam<br></br>
                        and no mis-selling.<br></br>
                        <br></br></p>
                </div>

            </div>
            <div className="text-center">
           <button className="btn btn-primary p-2 col-4 mx-auto fs-5">Sign up for free</button>
           </div>
        </div>
    );
}

export default Universe;