import { IconLayer } from './layer';
import { IconLocation } from './location';
import { IconTextLeft } from './textLeft';

interface Icons {
    location: JSX.Element;
    layer: JSX.Element;
    textLeft: JSX.Element;

}
export type Icon = keyof Icons;

interface Props {
    name: Icon;
    classFill?: string;
}



export const Icon = ({ name, classFill = '' }: Props) => {

    const icons: Icons = {
        location: <IconLocation classFill={classFill} />,
        layer: <IconLayer classFill={classFill} />,
        textLeft: <IconTextLeft classFill={classFill} />,
    }
    return (!!name)
        ? icons[name]
        : icons['location'];
}
