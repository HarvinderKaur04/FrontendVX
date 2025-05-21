
function Pricing() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4 mt-5 p-5">
                    <h2>Unbeatable pricing</h2>
                    <p className="mt-3 mb-3 text-muted fs-5">
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a className="fs-5" href="http://" style={{ textDecoration: "none" }}>See pricing<i class="fa-solid fa-arrow-right mx-2"></i></a>
                </div>
                <div className="col-2"></div>
                <div className="col-6 mt-5">
                    <div className="row">
                        <div className="col">
                            <img src="media\images\pricing0.svg" alt="" srcset="" class="rounded" />
                            <p className="mx-auto" style={{lineHeight:"16px"}}>Free account<br></br>
                                opening</p>
                        </div>
                        <div className="col " >
                            <img src="media\images\pricing0.svg" class="rounded " alt="" srcset="" />
                            <p className="mx-auto">Free equity delivery and<br></br>direct mutual funds</p>
                        </div>
                        <div className="col " >
                            <img src="media\images\other-trades.svg" class="rounded " alt="" srcset="" />
                            <p className="mx-auto">Intraday and <br></br>F&O</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Pricing;