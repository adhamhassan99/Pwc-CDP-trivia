import { Link } from 'react-router'


const FalseAnswer = () => {
    return (
        <div className='mt-auto'>
            <Link to={'/'}>
                <span className='font-bold text-6xl text-red-600'>Better Luck Next Time</span>
            </Link>
        </div>
    )
}

export default FalseAnswer