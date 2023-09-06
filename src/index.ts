import state from "./schemas/resources";

import { main } from "./components/layouts";
import { saveState } from "./utils/localStorageManager";
import { displayTimestamp } from "./components/shared";

import { btnTest } from "./components/shared/buttonTest";

console.log("Player: ", state);

main();

btnTest()

if (state) saveState(new Date(), state);

function animate() {

    displayTimestamp()

    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
