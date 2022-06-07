import React from 'react'
import Cards from '../Cards'
import Hero from '../Hero'
import Intro from '../Intro'

export default function Home() {
    window.scrollTo(0, 0);

    return (
        <>
            <Hero />
            <Intro />
            <Cards />
        </>
    )
}
