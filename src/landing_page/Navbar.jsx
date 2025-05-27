import {Link} from 'react-router-dom';
function Navbar() {
    return (
        
            <nav class="navbar navbar-expand-lg sticky-top bg-body-tertiary justify-content-end border-bottom">
                <div class="container pt-2 pb-2 ">
                    <Link class="navbar-brand" to="/"><img src="media/images/vx.png" alt="Home" srcset="" style={{ width:"20%" }} /></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <form class="d-flex" >
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0  ">
                            <li class="nav-item ">
                                <Link class="nav-link active" aria-current="page" to="/signup">Signup</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/product">Product</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/pricing">Pricing</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/support">Support</Link>
                            </li>
                               <li class="nav-item me-0">
                                <Link class="nav-link active" to="#"><i class="fa-solid fa-bars "></i></Link>
                            </li>


                        </ul>
                        </form>

                    </div>
                </div>
            </nav>

        
    );
}

export default Navbar;