import { Helmet } from "react-helmet";
import LayoutWrapper from "../../layout";
import LazyLoaddingWrapper from "../../lazyloading";
import { lazy } from "react";

export default function Projects() {
    const RenderProjects = lazy(() => import('../../component/Projects'))
    return (
        <>
            <Helmet>
                <title>Projects</title>
            </Helmet>

            <LayoutWrapper activePage="Projects">
                <LazyLoaddingWrapper>
                    <RenderProjects />
                </LazyLoaddingWrapper>
            </LayoutWrapper>
        </>
    )
}