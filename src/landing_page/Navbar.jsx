import { Link } from 'react-router-dom';
import ChildPage from './ChildPage';
import { useState } from 'react';


function Navbar() {
    const [showItem, setShowItem] = useState(false);
    return (

        <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary justify-content-end border-bottom">
            <div className="container pt-2 pb-2 ">
                <Link className="navbar-brand" to="/"><img src="media/images/vx.png" alt="Home" style={{ width: "30%" }} /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex" >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item ">
                                <Link className="nav-link " aria-current="page" to="/signup">Signup</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  " to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/product">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/pricing">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/support">Support</Link>
                            </li>
                               <li className="nav-item position-relative">
                                <button
                                    type="button"
                                    className="btn"
                                    onClick={() => setShowItem(!showItem)}
                               
                                >
                                    <i className="fa-solid fa-bars"></i>
                                </button>
                                {showItem && <Item />}
                            </li>






                        </ul>
                    </form>

                </div>
            </div>
        </nav >


    );
}

export default Navbar;

function Item() {
    return (
        <div
            className="position-absolute Left-100 end-0 mt-3 p-2 bg-white shadow rounded border"
            style={{ zIndex: 999, width: '1000px', height:'500px' }}
        >
            <ChildPage />
        </div>
    );
}
