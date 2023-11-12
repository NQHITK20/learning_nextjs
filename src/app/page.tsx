import Link from '../../node_modules/next/link'
import x from './styles/app.module.css';
import y from './styles/hoidanit.module.css'

export default function Home() {
  return (
    <main>
      <ul className="list-group">
        <li className={x['red']}><Link href={'/facebook'}><span className={y['red']}>facebook</span></Link></li>
        <li className="list-group-item"><Link href={'/titkok'}>toptop</Link></li>
        <li className="list-group-item"><Link href={'/pornhub'}>pornhub</Link></li>
      </ul>

    </main >
  )
}
