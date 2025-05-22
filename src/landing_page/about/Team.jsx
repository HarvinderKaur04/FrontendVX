function Team() {
    return (
        <div className="container">
            <div className="row p-5 mb-5">
                <div className="col team">
                    <img src="media/images/nithinKamath.jpg" style={{ width: "90%" }} className="rounded-circle " alt="" srcset="" />
                    <h3 className="mt-5">Nithin Kamath</h3>
                    <p className="p"> Founder, CEO </p>
                    <div class="accordion" id="accordionExample">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                Bio
                            </button>
                        </h2>

                        <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Nikhil is an astute and <br></br>experienced investor,<br></br> and he heads financial<br></br> planning at Zerodha. <br></br>An avid reader, <br></br>he always appreciates<br></br> a good game of chess.
                            </div>
                        </div>



                    </div>

                </div>
                <div className="col team">
                    <img src="media/images/nithinKamath.jpg" style={{ width: "90%" }} className="rounded-circle " alt="" srcset="" />
                    <h3 className="mt-5">Nithin Kamath</h3>
                    <p className="p"> Founder, CEO </p>
                </div>
                <div className="col team">
                    <img src="media/images/nithinKamath.jpg" style={{ width: "90%" }} className="rounded-circle " alt="" srcset="" />
                    <h3 className="mt-5">Nithin Kamath</h3>
                    <p className="p"> Founder, CEO </p>
                </div>

            </div>
            <div className="row p-5 mb-5">
                <div className="col team">
                    <img src="media/images/nithinKamath.jpg" style={{ width: "90%" }} className="rounded-circle " alt="" srcset="" />
                    <h3 className="mt-5">Nithin Kamath</h3>
                    <p className="p"> Founder, CEO </p>
                </div>
                <div className="col team">
                    <img src="media/images/nithinKamath.jpg" style={{ width: "90%" }} className="rounded-circle " alt="" srcset="" />
                    <h3 className="mt-5">Nithin Kamath</h3>
                    <p className="p"> Founder, CEO </p>
                </div>
                <div className="col team">
                    <img src="media/images/nithinKamath.jpg" style={{ width: "90%" }} className="rounded-circle " alt="" srcset="" />
                    <h3 className="mt-5">Nithin Kamath</h3>
                    <p className="p"> Founder, CEO </p>
                </div>

            </div>
        </div>
    );
}

export default Team;