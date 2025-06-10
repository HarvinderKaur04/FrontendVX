import { Link } from 'react-router-dom';
function OpenAccount() {
    return (  
          <div className="container p-5 mb-5 ">
            <div className="row text-center">
                
                <h1 className="mt-5  fw-bold">Open a VyaparaX account</h1>
                <p className="fs-4 mt-5 mb-5">
                   Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
                </p>
                <Link className="nav-link active" aria-current="page" to="/signup">
                <button className="btn btn-primary p-2 col-4 mx-auto fs-5">Sign up for free</button></Link>
            </div>
        </div>
    );
}

export default OpenAccount;