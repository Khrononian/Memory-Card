import React, { useState, useEffect } from 'react'
import './Assets/Card.css'
import ScoreBoard from './ScoreBoard'
import FogCrawler from './CardImages/FogCrawler.avif'
import Mothman from './CardImages/Mothman.avif'
import Behemoth from './CardImages/Behemoth.avif'
import SuperMutant from './CardImages/SuperMutant.avif'
import Deathclaw from './CardImages/Deathclaw.avif'
import YaoGuai from './CardImages/YaoGual.avif'
import MirelurkQueen from './CardImages/MirelurkQueen.avif'
import GulperDevourer from './CardImages/Gulper Devourer.avif'
import LibertyPrime from './CardImages/LibertyPrime.avif'
import CaptainZao from './CardImages/CaptainZao.avif'
import Swan from './CardImages/Swan.avif'
import Allen from './CardImages/Allen.avif'

const Card = () => {
    const [images, setImages] = useState([
        {
            src: FogCrawler,
            info: 'Fog Crawler',
            id: 1
        }, {
            src: Mothman,
            info: 'Mothman',
            id: 2
        }, {
            src: Behemoth,
            info: 'Behemoth',
            id: 3
        }, {
            src: SuperMutant,
            info: 'Super Mutant',
            id: 4
        }, {
            src: Deathclaw,
            info: 'Deathclaw',
            id: 5
        }, {
            src: YaoGuai,
            info: 'Yao Guai',
            id: 6
        }, {
            src: MirelurkQueen,
            info: 'Mirelurk Queen',
            id: 7
        }, {
            src: GulperDevourer,
            info: 'Gulper Devourer',
            id: 8
        }, {
            src: LibertyPrime,
            info: 'Liberty Prime',
            id: 9
        }, {
            src: CaptainZao,
            info: 'Captain Zao',
            id: 10
        }, {
            src: Swan,
            info: 'Swan',
            id: 11
        }, {
            src: Allen,
            info: 'Allen',
            id: 12
        }
    ])
    const [score, setScore] = useState([])
    const [bestScore, setBestScore] = useState(0)

    useEffect(() => {
        if (score.length >= bestScore) setBestScore(prevBestScore => prevBestScore = score.length)
        console.log('Test', score)
        // if (score.length === 12) setScore(prevScore => score.length = prevScore.splice(0, 11)) 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [score])

    const getRandomImage = event => {
        let imagesCopy = [...images]

        for (let i = imagesCopy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = imagesCopy[i];

            imagesCopy[i] = imagesCopy[j]
            imagesCopy[j] = temp
        }

        setImages([...imagesCopy])
        console.log(event, event.nativeEvent, event.target.querySelector('p'))
        if (score.indexOf(event.target.querySelector('p').innerText) === -1) {
            setScore(prevScore => prevScore.concat(event.target.querySelector('p').innerText))
        } else {
            console.log('RESET')
            setScore(prevScore => prevScore.splice(0, score.length))
        }
    }

    return (
        <div>
            <ScoreBoard 
                score={score} 
                bestScore={bestScore}
            />
            <div className='cards'>
                {images.map((image) => { 
                    return (
                        <div key={image.id}>
                            <button className='card' onClick={getRandomImage}>
                                <img src={image.src} alt={image.info} />
                                <p>{image.info}</p>
                            </button>
                        </div>
                    )})}
            </div>
        </div>
    )
}

export default Card