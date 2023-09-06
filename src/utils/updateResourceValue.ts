import state from "../schemas/resources";

import { updateLocalStorage } from "./localStorageManager";
import { updateHTMLValue } from "./updateHTMLValue";

export function updateResourceValue(resourceType: string, newValue: number) {
    if (state) {
        const resource = state.resources.find(resource => resource.id === resourceType);
        if (resource) resource.amount += newValue;

        updateLocalStorage(state);
        updateHTMLValue(resourceType);
    }
}