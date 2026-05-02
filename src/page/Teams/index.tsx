import { Helmet } from "react-helmet";
import LayoutWrapper from "../../layout";
import LazyLoaddingWrapper from "../../lazyloading";
import { lazy } from "react";

export default function Teams() {
    const RenderTeam = lazy(()=>import('../../component/Team'))
    return(
        <>
            <Helmet>
                <title>Teams Members</title>
            </Helmet>

            <LayoutWrapper activePage="Team">
                <LazyLoaddingWrapper>
                    <RenderTeam/>
                </LazyLoaddingWrapper>
            </LayoutWrapper>
        </>
    )
}