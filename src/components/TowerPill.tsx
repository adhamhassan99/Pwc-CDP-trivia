import { Link } from 'react-router'

type Props = {
    href: string
    towerName: string
}

const TowerPill = ({ href, towerName }: Props) => {
    return (
        <Link to={href} className="w-full bg-yellow-400 rounded-full">
            <div className='bg-black py-4 w-full flex items-center justify-center rounded-full hover:translate-x-2 hover:-translate-y-2 transition-all text-yellow-400 text-2xl font-bold -tracking-tighter'>{towerName}</div>
        </Link>

    )
}

export default TowerPill