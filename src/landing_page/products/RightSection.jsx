function RightSection(
    {
        ImageUrl,
        productName,
        productDesription,
        learnMore,
       
    }
) {
    return (
        <div className="container p-5 mb-5">
            <div className="row">
                <div className="col-4">
                   <h3>{productName}</h3>
                    <p>
                      {productDesription}
                    </p>
                    <div className="mt-4">
                        <a href="#">{learnMore}<i class="fa-solid fa-arrow-right"></i></a> 
                    </div>
                    
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <img src={ImageUrl} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;