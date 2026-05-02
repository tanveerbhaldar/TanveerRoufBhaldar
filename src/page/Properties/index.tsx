import { Helmet } from "react-helmet";
import LayoutWrapper from "../../layout";
import { lazy } from "react"
import LazyLoaddingWrapper from "../../lazyloading";

export default function Properties() {
    const RenderProperties = lazy(() => import('../../component/Properties'))
    return (
        <>
            <Helmet>
                <title>Properties</title>
            </Helmet>

            <LayoutWrapper activePage="Properties">
                <LazyLoaddingWrapper>
                    <RenderProperties />
                </LazyLoaddingWrapper>
            </LayoutWrapper>
        </>
    )
}