import {lazy} from "react";

export const MainPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    resolve(import('./MainPage'))
}));

// export const MainPageAsync = lazy(() => new Promise(resolve => {
//     //@ts-ignore
//     setTimeout(() => resolve(import('./MainPage')), 1500)
// }));