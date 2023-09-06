import state from "../schemas/resources";

export function updateHTMLValue(resourceType: string) {
    if (state) {
        const resource = state.resources.find(resource => resource.id === resourceType);
        if (resource) {
            const element = document.querySelector(`#${resourceType}`) as HTMLElement;
            if (element) {
                element.textContent = resource.amount.toString();
            }
        }
    }
}
