import React from 'react'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade w-80 h-50" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner " style={{ maxHeight: "500px" }}>
                    <div className="carousel-item active">
                        <img
                            src="https://source.unsplash.com/random/700x500/?burger"
                            className="d-block w-100  "
                            style={{ filter: "brightness(30%)" }}
                            alt="Food Item 1"
                        />

                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://source.unsplash.com/random/700x500/?pastry"
                            className="d-block w-100 "
                            style={{ filter: "brightness(30%)" }}
                            alt="Food Item 2"
                        />

                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://source.unsplash.com/random/900x700/?barbeque"
                            className="d-block w-100 "
                            style={{ filter: "brightness(30%)" }}
                            alt="Food Item 3"
                        />

                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


        </div>
    )
}
