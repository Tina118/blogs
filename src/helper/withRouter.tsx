import { useNavigate, useParams } from 'react-router-dom'

export interface WithRouterProps {
  params: Record<string, string>
  navigate: ReturnType<typeof useNavigate>
}

//custom router to perform navigation or get params
export function withRouter<CProps extends { router: WithRouterProps }>(
  Component: React.ComponentType<CProps>,
) {
  function ComponentWithRouterProp(props: Omit<CProps, 'router'>) {
    let navigate = useNavigate()
    let params = useParams()
    return <Component {...(props as CProps)} router={{ navigate, params }} />
  }

  return ComponentWithRouterProp
}
