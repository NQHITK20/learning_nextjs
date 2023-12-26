'use client'
import { useRouter } from "../../../node_modules/next/navigation"
import Button from "../../../node_modules/@restart/ui/esm/Button"
const HoidanCuto = () => {
    const router = useRouter()

    const handleBtn = () => {
        router.push('/')
    }
    return (
        <>
            Lo con cak facebook
            <div>
                <Button>Fuckk</Button>
                <button onClick={() => handleBtn()}>Back home</button>
            </div>
        </>
    )
}
export default HoidanCuto