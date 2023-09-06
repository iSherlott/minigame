import State from "../interfaces/iState";

import { loadStateFromLocalStorage } from "../utils/localStorageManager";

let state: State | null = loadStateFromLocalStorage();

const currentTime = new Date();

if (!state) state = {
    startTime: currentTime,
    village: {
        church: 0
    },
    resources: [
        {
            name: "Madeira",
            id: "madeira",
            imageSrc: "./assets/img/madeira-icon.png",
            multiplierId: "madeiraMultiplier",
            amount: 0,
            amountPerSecond: 1,
        },
        {
            name: "Argila",
            id: "argila",
            imageSrc: "./assets/img/argila-icon.png",
            multiplierId: "argilaMultiplier",
            amount: 0,
            amountPerSecond: 1,
        },
        {
            name: "Ferro",
            id: "ferro",
            imageSrc: "./assets/img/ferro-icon.png",
            multiplierId: "ferroMultiplier",
            amount: 0,
            amountPerSecond: 1,
        },
    ],
};

export default state;