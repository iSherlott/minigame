import state from "../../schemas/resources";

function findResourceByMultiplierId(multiplierId: string) {
    return state?.resources.find(resource => resource.multiplierId === multiplierId);
}

export function createResource(imageSrc: string, resourceName: string, resourceId: string, multiplierId: string) {
    const resource = findResourceByMultiplierId(multiplierId);
    const container = document.querySelector(".game-info");
    const resourceDiv = document.createElement("div");

    resourceDiv.classList.add("resource");

    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = resourceName;
    img.classList.add("resource-icon");

    const resourceInfoDiv = document.createElement("div");
    resourceInfoDiv.classList.add("resource-info");

    const nameSpan = document.createElement("span");
    nameSpan.classList.add("resource-name");
    nameSpan.textContent = resourceName;

    const valueSpan = document.createElement("span");
    valueSpan.id = resourceId;
    valueSpan.classList.add("resource-value");
    valueSpan.textContent = resource?.amount.toString() || "0";

    resourceInfoDiv.appendChild(nameSpan);
    resourceInfoDiv.appendChild(valueSpan);

    resourceDiv.appendChild(img);
    resourceDiv.appendChild(resourceInfoDiv);

    container?.appendChild(resourceDiv);
}
