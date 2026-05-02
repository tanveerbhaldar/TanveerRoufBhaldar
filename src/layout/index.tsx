import Navbar from "../common/Navbar"

interface Prop {
    activePage?: string,
    children?: React.ReactNode
}

export default function LayoutWrapper({ activePage, children }: Prop) {
    return (
        <div className="w-full">
            <Navbar activePage={activePage} />
            <div className="">
                {children}
            </div>
        </div>
    )
}