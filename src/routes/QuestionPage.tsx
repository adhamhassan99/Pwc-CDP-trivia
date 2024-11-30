import { Outlet, useParams } from 'react-router'
import QnAs from '../staticData/questionsAndAnswers'
import TowerPill from '../components/TowerPill'

const QuestionPage = () => {
    const { tower } = useParams()
    const chosenTower = (tower ?? 'applied-ai') as keyof typeof QnAs
    if (tower) {
        const randomIndex = Math.floor(Math.random() * QnAs[chosenTower].questions.length)
        console.log(randomIndex)
        return (
            <div className='bg-orange-500 h-full flex flex-col items-center p-10 gap-20'>
                <span className='text-3xl text-center font-bold'>{QnAs[chosenTower].questions[randomIndex].question}</span>
                {randomIndex}
                <div className='flex flex-col gap-5 w-full'>
                    {QnAs[chosenTower].questions[randomIndex].choices.map((choice, index) => {
                        const href = index === QnAs[chosenTower].questions[randomIndex].answerIndex ? 'correct' : 'false'
                        return (<TowerPill href={href} towerName={choice} />)
                    })}
                </div>
                {/* <Outlet /> */}
            </div>
        )
    }
}

export default QuestionPage