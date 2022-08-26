import { Navigate, Outlet } from 'react-router-dom';
import { useLogin } from '../../utils/useLogin'

type Props = {
    children?: JSX.Element | JSX.Element[],
}

// ricevo le props
export const Protected = (props: Props) => {
    const { isLogged } = useLogin();

    if (isLogged === false) {
        return (<Navigate to='/' replace />);
    }

    return (
        <>
            {props.children ? props.children : <Outlet />}
        </>
    )

};
