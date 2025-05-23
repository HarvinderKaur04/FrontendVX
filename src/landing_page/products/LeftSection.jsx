function LeftSection({
    ImageUrl,
    productName,
    productDesription,
    tryDemo,
    GooglePlay,
    appStore,
    learnMore,
}
) {
    return (
        <div className="container p-5 mb-5">
            <div className="row">
                <div className="col-6">
                    <img src={ImageUrl} />
                </div>
                <div className="col-2"></div>
                <div className="col-4">
                   <h3>{productName}</h3>
                    <p>
                      {productDesription}
                    </p>
                    <div className="mt-4">
                       <a href="#">{learnMore}<i class="fa-solid fa-arrow-right"></i></a> 
                    </div>
                    <div className="mt-4">
                    <img src="media/images/googlePlayBadge.svg"alt="applestore" href={GooglePlay}/> <img src="media/images/appstoreBadge.svg" alt="googlestore" href={appStore} style={{marginLeft:"20px"}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;