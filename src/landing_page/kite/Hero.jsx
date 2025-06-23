function Hero() {
  
     return (<>
        <div className="container p-2 mb-5 mt-5">
            <div className="row ">
                <div className="col-6 p-5 mb-5 mt-5">
                    <img src="/media/images/kite-logo.svg" alt="kite"/>
                    <h1>Kite by VyaparaX</h1>
                    <p>
                        Kite is a sleek investment and trading platform built for modern times and sensibilities. Ground breaking innovations presented with excellent usability, investing in the stock markets has never been this easy. Really.
                    
                    </p>
                    <div className="mt-5 mb-5">
                       <a href="https://vyaparaxkite.netlify.app/login" >  
                       <button className="btn btn-primary">Login to Kite</button></a>
                    <a href="https://vyaparaxkite.netlify.app/login" style={{ marginLeft: "30px" }}>Try demo<i class="fa-solid fa-arrow-right"></i></a>
                       
                    </div>
                    <div className="mt-4">
                        <img src="media/images/googlePlayBadge.svg" alt="applestore" href="" /> <img src="media/images/appstoreBadge.svg" alt="googlestore" href="" style={{ marginLeft: "20px" }} />
                    </div>

                </div>

                <div className="col-6 p-2 mb-5 mt-5">
                    <img src="/media/images/kite3-dashboard.png" style={{width:'100%'}} />
                </div>
            </div>
        </div>
       
    </>);
}

export default Hero;