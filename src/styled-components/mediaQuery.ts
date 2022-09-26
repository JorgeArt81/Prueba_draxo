type Media = 'phones' | 'tablets' | 'desktops' | 'largeDesktops' | 'xxl';
export enum Breackpoints {
    phones = '576px',
    tablets = '768px',
    desktops = '992px',
    largeDesktops = '1200px',
    xxl = '1440px',
    fhd = '1920px',
}

export const customMediaQuery = (property: 'min-width' | 'max-width', breackpoint: Media) => {
    return `@media only screen and (${property}: ${Breackpoints[breackpoint]})`
};
