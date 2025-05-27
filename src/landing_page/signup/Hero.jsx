function Hero() {
    return (
        <div className="container p-5 mt-5 mb-5">
            <div className="row text-center">
                <h1 className="fw-bold ">Open a free demat & trading account online</h1>
                <p className="fs-4 mt-2 text-muted">
                    Start investing brokerage free and join a community of 1.5+ crore investors and traders
                </p >

            </div>
            <div className="row mb-5 mt-5">
                <div className="col-6">
                    <img src="/media/images/signup.svg" alt="" srcset="" />
                </div>
                <div className="col-6">
                    <h3 className="mt-3"> Signup now</h3>
                    <h4 className="text-muted mb-5">Or track your existing application</h4>
                    <form>
                        <div class="input-group flex-nowrap input-group-lg">
                            <span class="input-group-text" id="addon-wrapping">+91</span>
                            <input type="text" class="form-control" placeholder="Enter Mobile No." aria-label="Username" aria-describedby="addon-wrapping"/>
                        </div>
                        <br></br>
                        <button className="btn btn-primary fs-5">Get OTP</button>
                    </form>
                    
                    <p>By proceeding, you agree to the Zerodha terms & privacy policy</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
