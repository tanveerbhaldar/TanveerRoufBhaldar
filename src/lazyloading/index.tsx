import { Suspense } from "react"

interface Prop {
    children?:React.ReactNode
}

export default function LazyLoaddingWrapper({children}:Prop) {
    return <Suspense fallback={null}>{children}</Suspense>
}
