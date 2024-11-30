import ReactConfetti from 'react-confetti'
import { Link } from 'react-router'


const CorrectAnswer = () => {
    return (
        <div className='mt-auto'>
            <ReactConfetti numberOfPieces={700} />
            <Link to={'/'} className=''>
                <span className='text-4xl font-bold text-green-700 underline hover:no-underline'>Back to Tower Selection</span>
            </Link>

        </div>
    )
}

export default CorrectAnswer