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
                    <h3 className="mt-3 mb-5"> Signup now</h3>
                
                    <form>
                        <div className="input-group flex-nowrap input-group-lg col-4">
                            <span className="input-group-text" id="addon-wrapping">+91</span>
                            <input type="text" className="form-control " placeholder="Enter Mobile No." aria-label="mobileno" aria-describedby="addon-wrapping"/>
                        </div>
                        <br></br>
                        <button className="btn btn-primary fs-5 col-6">Get OTP</button>
                    </form>

                    {/* <form method="post" action="/signup" novalidate class="needs-validation">
                        <div className="input-group flex-nowrap input-group-lg col-4  mb-5">
                             <input name="username" placeHolder="UserName" id="username" type="text" class="form-control " required />
                         
                        </div>
                        <div className="input-group flex-nowrap input-group-lg col-4 mb-5">       
                             <input name="email" placeholder="Email" class="form-control " id="email" type="email" required />
                    
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                    <div class="invalid-feedback">
                                        Invalid Email id
                                    </div>
                                </div>
                              <div className="input-group flex-nowrap input-group-lg col-4 mb-5">     
                                   
                                    <input name="password" placeHolder="Password" class="form-control" id="password" type="password" required minlength="8" maxlength="30" />
                                    <div class="invalid-feedback">
                                        Password must be 8 to 10 characters.
                                    </div>

                             </div>
                              <button className="btn btn-primary fs-5 col-6">Sign Up</button>
                        
                    </form> */}
                    <p>By proceeding, you agree to the VyaparaX terms & privacy policy</p>


                </div>
            </div >
        </div >
    );
}

export default Hero;
