import { Outlet, useParams } from 'react-router'
import QnAs from '../staticData/questionsAndAnswers'
import TowerPill from '../components/TowerPill'
import { useEffect, useState } from 'react'

const QuestionPage = () => {
    const { tower } = useParams()
    const chosenTower = (tower ?? 'applied-ai') as keyof typeof QnAs
    const [randomNumber, setRandomNumber] = useState(0)
    useEffect(() => {
        setRandomNumber(Math.floor(Math.random() * QnAs[chosenTower].questions.length)
        )
    }, [chosenTower])


    if (tower) {
        console.log(randomNumber)
        return (
            <div className='bg-orange-500 h-full flex flex-col items-center p-10 gap-20'>
                <span className='text-3xl text-center font-bold'>{QnAs[chosenTower].questions[randomNumber].question}</span>
                <div className='flex flex-col gap-5 w-full overflow-auto p-3'>
                    {QnAs[chosenTower].questions[randomNumber].choices.map((choice, index) => {
                        const href = index === QnAs[chosenTower].questions[randomNumber].answerIndex ? 'correct' : 'false'
                        return (<TowerPill href={href} towerName={choice} />)
                    })}
                </div>
                <Outlet />
            </div>
        )
    }
}

export default QuestionPage