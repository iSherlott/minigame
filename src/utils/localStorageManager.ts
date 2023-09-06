import State from "../interfaces/iState";

function isDifferent(horaA: Date, horaB: Date): Boolean {
    try {
        if ((horaA.getTime() - horaB.getTime()) < 0) return false;

        return true;
    } catch (error) {
        return false;
    }
}

export function updateLocalStorage(state: State) {
    const stateBase64 = btoa(JSON.stringify(state));
    localStorage.setItem("gameState", stateBase64);
}

export function loadStateFromLocalStorage() {
    try {
        const stateBase64 = localStorage.getItem("gameState");
        if (stateBase64) {
            const decodedState = JSON.parse(atob(stateBase64));
            return decodedState;
        }
        return null;
    } catch (error) {
        return null;
    }
}

export function saveState(currentTime: Date, state: State) {
    if (isDifferent(currentTime, state["startTime"])) updateLocalStorage(state);
}