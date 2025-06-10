import OpenAccount from "../OpenAccount";
import Directmutal from "./Directmutal";
import Fixedincome from "./Fixedincome";
import Future from "./Future";
import Hero from "./Hero";
import Ipo from "./Ipo";
import Stock from "./Stock";

function Investment() {
    return ( <>
       <Hero/>
       <Stock/>
       <Directmutal/>
       <Future/>
       <Ipo/>
       <Fixedincome/>
       <OpenAccount/>
       

    </> );
}

export default Investment;