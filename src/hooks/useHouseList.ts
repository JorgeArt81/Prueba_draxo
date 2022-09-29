import { useEffect, useState } from 'react';

import { getHouses } from '@/services/modern-house';
import { House, ModernHouserResponse } from '@/models';
import { getData } from '@/utilities';


export const useHouseList = () => {
    const [houseList, sethouseList] = useState<Partial<ModernHouserResponse>>({});
    const [listValues, setListValues] = useState([])

    useEffect(() => {
        getHouses().then(data => {
            if (data) sethouseList(data)
        })
    }, [])

    useEffect(() => {
        getData(Object.values(houseList))
            .then(list => {
                if (list) setListValues(list)
            })
    }, [houseList])

    const data = Object.entries(houseList).map((resp) => resp);
    const orderData = data.sort((a, b) => {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        // a must be equal to b
        return 0;
    })
    

    return {
        orderData,
        listValues
    }
}
