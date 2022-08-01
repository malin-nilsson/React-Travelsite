import { Link } from 'react-router-dom'

export default function Intro() {
    return (
        <>
            <div className="intro-container">
                <div className="collage">
                    <div className="top-image">
                        <img src="/images/elephants.jpg"
                            alt="Elephants at sunset"
                            className="bottom-image" />
                    </div>
                </div>

                <div className="intro-text">
                    <p className="preamble">
                        Magical memories,
                    </p>
                    <p className="preamble">
                        Curated experiences.
                    </p>

                    <div className="body-text-container">
                        <p className="body-text">Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Veritatis commodi velit
                            accusamus aliquid vitae ad quibusdam illum
                            ducimus, explicabo aut ea impedit doloribus
                            quam nisi?</p>
                        <p className="body-text">Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Veritatis commodi velit
                            accusamus aliquid vitae ad quibusdam illum
                            ducimus.</p>

                        <Link to="/destinations" className="hover-effect">Explore our destinations</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
