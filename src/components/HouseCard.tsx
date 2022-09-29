import { HouseCardStyled } from '../styled-components/HouseCard.styled';

interface Props {
    address: string;
    name: string;
    number: string;
    name_translations: string;
    url: string;
    building_end_date: string;
    building_start_date: string;
    handledClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

}
export const HouseCard = ({ address, url, name_translations, number, name, building_start_date, building_end_date, handledClick }: Props) => {

    return (
        <HouseCardStyled>
            <img src={url} alt={name_translations} />
            <div className='description'>
                <b>{`No.${number}, ${name} ${building_start_date}-${building_end_date}`}</b>
                <p>{address}</p>
            </div>
            <button className='card-button' onClick={handledClick}>Ver</button>
        </HouseCardStyled>

    )
}
