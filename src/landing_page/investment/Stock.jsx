function Stock() {
    return (  <>
   <div className="container p-5 mb-5">
            <div className="row">
                <div className="col-6">
                    <img src="/media/images/investments-stocks.png" />
                </div>
                <div className="col-2"></div>
                <div className="col-4">
                    <h1>Stock</h1>
                    <p>
                        Trade stocks for delivery or intraday on over 5000 stocks listed on National Stock Exchange (NSE) and Bombay Stock exchange (BSE)
                    </p>
                    <p>Available on</p>
            <div className="row ">
                <div className="col-6 stock">                   
                       <a href="">Kite<i class="fa-solid fa-arrow-right"></i></a><br></br>
                       <a href="">Console<i class="fa-solid fa-arrow-right"></i></a><br></br>
                       <a href="">SmallCase<i class="fa-solid fa-arrow-right"></i></a><br></br>
                    </div>
                    <div className="col-6  stock">
                        <a href="">StockReports<i class="fa-solid fa-arrow-right"></i></a><br></br>
                       <a href="">Streak<i class="fa-solid fa-arrow-right"></i></a><br></br>
                       <a href="">Market Overview<i class="fa-solid fa-arrow-right"></i></a><br></br>
                    </div>
                </div>
                    
                </div>
            </div>
        </div>
    </>  );
}

export default Stock;