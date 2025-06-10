function ChargesTables() {
    return (<>
        <div className="container mt-5">
            <div className="row  mt-5 mb-5">
                <h3 className="mt-2 mb-2">Charges for account opening</h3>
                <table class="table  table-borderless table-striped border">
                    <thead>
                        <tr>
                            <th>Type of account</th>
                            <th>Charges</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>                            
                            <td>Online account</td>
                            <td><span className="spanFree">Free</span></td>
                       
                        </tr>
                        <tr>
                            
                            <td>Offline account</td>
                            <td><span className="spanFree">Free</span></td>
                        </tr>
                        <tr>
                        
                            <td>NRI account (offline only)</td>
                            <td>$ 500</td>
                        </tr>
                        <tr>
                            <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                            <td>$500</td>
                        </tr>
                        <tr>
                        
                        </tr>
                    </tbody>
                </table>
            </div>
             <div className="row  mt-5 mb-5">
                <h3 className="mt-2 mb-2">Charges for optional value added services</h3>
                <table class="table t table-borderless table-striped border">
                    <thead>
                        <tr>
                            <th>Service</th>
                            <th>Billing Frequency</th>
                            <th>Charges</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tickertape</td>
                            <td>Monthly / Annual</td>
                            <td>Free: 0 | Pro: 249/2399</td>
                        </tr>
                        <tr>                            
                           
                            <td>Smallcase</td>
                            <td>Per transaction</td>
                            <td>Buy & Invest More: 100 | SIP: 10</td>
                       
                        </tr>
                        <tr>
                            
                            <td>Kite Connect</td>
                            <td>Monthly</td>
                            <td>Connect: 500 | Historical: 500</td>
                        </tr>
                        
                        <tr>
                        
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>);
}

export default ChargesTables;