function Team() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row p-5 mb-5">
                <div className="col team">
                    <img src="media/images/Nikhil.jpg" style={{ width: "90%" }} className="rounded-circle " alt="" srcset="" />
                    <h3 className="mt-5">Nikhil</h3>
                    <p className="p">Co-founder & CFO </p>
                    <div class="accordion" id="accordionExample">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                Bio
                            </button>
                        </h2>

                        <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Nikhil is an astute and <br></br>experienced investor,<br></br> and he heads financial<br></br> planning at VyaparaX <br></br>An avid reader, <br></br>he always appreciates<br></br> a good game of chess.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col team">
                    <img src="media/images/Kailash.jpg" style={{ width: "90%" }} className="rounded-circle " alt="" srcset="" />
                    <h3 className="mt-5">Dr. Kailash Nadh </h3>
                    <p className="p">Ceo</p>
                    <div class="accordion" id="accordionExample">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                Bio
                            </button>
                        </h2>

                        <div id="collapse2" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col team">
                    <img src="media/images/Venu.jpg" style={{ width: "90%" }} className="rounded-circle " alt="" srcset="" />
                    <h3 className="mt-5">Venu Madhav</h3>
                    <p className="p"> COO </p>
                    <div class="accordion" id="accordionExample">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                Bio
                            </button>
                        </h2>

                        <div id="collapse3" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Venu is the backbone of VyaparaX taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of VyaparaX
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Team;