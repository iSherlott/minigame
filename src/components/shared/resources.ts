import state from "../../schemas/resources";

import { createResource } from "./createResource";

export function displayGameInfo() {
    state?.resources.forEach((resource) => createResource(
        resource["imageSrc"], resource["name"], resource["id"], resource["multiplierId"]
    ))
}