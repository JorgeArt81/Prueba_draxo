
export async function getData<T>(list: Array<T>[]): Promise<any> {

    let dataList: Array<any> = []

    for (const iterator of list) {
        const object = iterator
        for (const data of object) {
            dataList.push(data)
        }
    }

    return new Promise((resolve) => {
        if (dataList.length > 0) resolve(dataList)
    })
}