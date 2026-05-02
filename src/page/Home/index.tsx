import {Helmet} from "react-helmet"
import LayoutWrapper from "../../layout"
import LazyLoaddingWrapper from "../../lazyloading"
import { lazy } from "react"

export default function Home() {
    const RenderHome = lazy(()=>import('../../component/Home'))
    return(
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <LayoutWrapper activePage="Home">
                <LazyLoaddingWrapper>
                    <RenderHome/>
                </LazyLoaddingWrapper>
            </LayoutWrapper>
        </>
    )
}