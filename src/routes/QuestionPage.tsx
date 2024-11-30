import React from 'react'
import { useParams } from 'react-router'
import QnAs from '../staticData/questionsAndAnswers'
type Props = {}

const QuestionPage = (props: Props) => {
    const { tower } = useParams()
    const chosenTower = (tower ?? 'applied-ai') as keyof typeof QnAs
    if (tower) {

        return (
            <div>{QnAs[chosenTower].questions[0].question}</div>
        )
    }
}

export default QuestionPage