import { routes } from '@/routes';
import { NavBarStyles } from '@/styled-components';
import { NavLink } from 'react-router-dom';
import { Icon } from './icons';

export const Navigation = () => {
    const isActive = (props: { isActive: boolean, isPending: boolean }) => {
        return props.isActive ? 'nav-active navlink' : 'navlink'
    };
    return (
        <NavBarStyles>
            <div className="top-line"></div>
            <div className="links-container">
                <ul>
                    {
                        routes.map(({ to, name, icon }) => {
                            if (to) return (
                                <li key={to}>
                                    <NavLink to={to} className={isActive}>
                                        <div className="line">
                                            <Icon name={icon!} classFill='icon' />
                                        </div>
                                        <div className='name'>{name}</div>
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </NavBarStyles>
    )
}
