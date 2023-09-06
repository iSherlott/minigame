export function createComponentsVillage(component: string) {
    const villageSection = document.getElementById("overlay-image");

    if (villageSection) {
        villageSection.classList.add(component);
    }
}

export function removeComponentsVillage() {
    const removeComponent = document.getElementById("overlay-image");

    if (removeComponent) {
        removeComponent.classList.remove(removeComponent?.classList[0]);
    }
}