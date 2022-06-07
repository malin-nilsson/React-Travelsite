import React from 'react'

export default function Cards() {
    return (
        <>
            <section className="cards-container">
                <div className="cards">
                    <div className="cards-item adventure">
                        <div className="cards-text">Adventure</div>
                    </div>

                    <div className="cards-item culinary">
                        <div className="cards-text">Culinary</div>
                    </div>

                    <div className="cards-item voyage">
                        <div className="cards-text">Voyage</div>
                    </div>

                    <div className="cards-item yoga">
                        <div className="cards-text">Speciality</div>
                    </div>

                </div>
                <div className="cards">
                    <div className="cards-item family">
                        <div className="cards-text">Family</div>
                    </div>
                    <div className="cards-item luxe">
                        <div className="cards-text">Ultraluxe</div>
                    </div>

                    <div className="cards-item celebration">
                        <div className="cards-text">Celebration</div>
                    </div>
                    <div className="cards-item all">
                        <div className="cards-text">View all</div>
                    </div>

                </div>
            </section>
        </>
    )
}
