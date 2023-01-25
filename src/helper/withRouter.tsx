import { useNavigate, useParams } from "react-router-dom";

export interface WithRouterProps {
    params: ReturnType<typeof useParams>;
    navigate: ReturnType<typeof useNavigate>;
}

export function withRouter<CProps extends { router: WithRouterProps }>(Component: React.ComponentType<CProps>) {
    function ComponentWithRouterProp(props: Omit<CProps, "router">) {
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...(props as CProps)} router={{ navigate, params }} />;
    }

    return ComponentWithRouterProp;
}

