'use client'
import { useRouter } from "../../../node_modules/next/navigation"
const HoidanCuto = () => {
    const router = useRouter()

    const handleBtn = () => {
        router.push('/')
    }
    return (
        <>
            Lo con cak facebook
            <div>
                <button onClick={() => handleBtn()}>Back home</button>
            </div>
        </>
    )
}
export default HoidanCuto