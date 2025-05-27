function CreateTicket() {
    return (
        <section className="container-fluid" id="supportHero">
            <div className="p-5 mt-5 " id="supportWrapper">
                <h2>Support Portal</h2>
                <a href="#">Ticket tickets</a>
            </div>
            <div className="row p-5 mb-5 " id="supportWrapper">
                <div className="col-8 ">
                    <h3>Search for an answer or browse help topics to create a ticket</h3>
                    <input class="form-control form-control-lg mt-5" type="text" placeholder="Eg:how do i active F&O, why is my order getting rejected....." aria-label="" />
                    <p><a href="Track account opening">Track account opening</a>
                    <a href=""> Track segment activation</a> 
                    <a href="">Intraday margins</a>
                    <a href="">Kite user manual</a></p>
                </div>
                <div className="col-4 ">
                    <h3>Featured</h3>
                    <ol type="1">
                        <li><a href="">Introduction of new F&O contracts on 4 individual securities </a></li>
                        <li> <a href="">Rights Entitlements listing in May 2025</a></li>
                    </ol>
                    <a href=""></a>
                </div>
            </div>

        </section>
    );
}

export default CreateTicket;