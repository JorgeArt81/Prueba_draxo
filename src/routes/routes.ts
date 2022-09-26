import { Routes } from '@/models';
import { AboutPage, HouseListPage, ShowMapPage } from '@/pages';


export const routes: Routes = [
    {
        to: '/mapa',
        path: 'mapa',
        name: 'Ver Mapa',
        Component: ShowMapPage,
        icon: 'location',
    },
    {
        to: '/casas',
        path: 'casas',
        name: 'Lista de Casas',
        Component: HouseListPage,
        icon: 'layer',
    },
    {
        to: '/acerca-de',
        path: 'acerca-de',
        name: 'Acerca De',
        Component: AboutPage,
        icon: 'textLeft',
    },
]