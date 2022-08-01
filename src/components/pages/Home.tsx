import Cards from '../Cards'
import Hero from '../Hero'
import Intro from '../Intro'

window.scrollTo(0, 0);

export default function Home() {
    return (
        <>
            <Hero />
            <Intro />
            <Cards />

        </>
    )
}
