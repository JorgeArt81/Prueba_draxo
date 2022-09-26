import { routes } from '@/routes';
import { PageInfoStyled } from '@/styled-components';
import { useLocation } from 'react-router-dom';

interface Props {
    className?: string;
}
export const PageInfo = ({ className }: Props) => {
    const { pathname } = useLocation();
    const routeName = (routes.find(route => route.to === pathname))
    return (
        <PageInfoStyled className={className}>
            <h1 className='page-name'>{routeName?.name || 'Draxo Page'}</h1>
            <p className='page-info'>{'Lista de casas en San Francisco'}</p>
        </PageInfoStyled>
    )
}
