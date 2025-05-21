
function Hero() {
    return (
        <div className="container p-5 mb-5 ">
            <div className="row text-center">
                <img src="media/images/homeHero.png" alt="Hero Image" srcset="" className="mb-5" />
                <h1 className="mt-5  fw-bold">Invest in everything</h1>
                <p className="fs-4 mt-5 mb-5">
                    Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                </p>

                <button className="btn btn-primary p-2 col-4 mx-auto fs-5">Sign up for free</button>
            </div>
        </div>
    );
}

export default Hero;