function ChildPage() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row text-center">
        <div className="col-3">
          <img src="\media\images\kite-logo.svg" alt="Kite" />
          <h4>Kite</h4>
          <p>Trading Plateform</p>
        </div>
        <div className="col-3">
          <img src="\media\images\console.svg" alt="Kite" />
          <h4>Console</h4>
          <p>Backoffice</p>
        </div>
        <div className="col-3">
          <img src="\media\images\kite-connect.svg" alt="Kite" />
          <h4>Kite Connect</h4>
          <p>Trading Apis</p>
        </div>
        <div className="col-3">
          <img src="\media\images\coin.svg" alt="Kite" />
          <h4>Coin</h4>
          <p>Mutual funds</p>
        </div>
      </div>
      {/* ----------------------------- */}
      <hr></hr>
      <div className="row child  mt-4 mb-5 p-2">
        <div className="col-3">
          <h4>Utilities</h4>
       
            <a href="">Calculators</a><br></br>
            <a href="">Brokerage calculator</a><br></br>
            <a href="">Margin calculator</a><br></br>
            <a href="">SIP calculator</a><br></br>
        
        </div>
         <div className="col-3 ">
          <h4>Updates</h4>
         
            <a href="">VX-Connect blog</a><br></br>
            <a href="">Circulars / Bulletin</a><br></br>
            <a href="">IPOs</a><br></br>
            <a href="">Market</a><br></br>
         
        </div>
        <div className="col-3">
          <h4>Education</h4>
           <img src="\media\images\var.png" alt="Varsity" style={{width:'25%'}} />
           <br></br>
           <h5>Varsity</h5>
          
        </div>
        <div className="col-3">
          <h4>Question & Answers</h4>  <br></br>
           <i class="fa-solid fa-circle-question fs-1" ></i>
           <br></br>
                   
        </div>

      </div>
    </div>

  );
}
export default ChildPage;