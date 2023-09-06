import { updateResourceValue } from "../../utils/updateResourceValue";
import { createComponentsVillage, removeComponentsVillage } from "./createComponentsVillage";
import { showNotification } from "./notification";

export function btnTest() {
    const painel = document.querySelector("#painel") as HTMLElement;

    painel.innerHTML = `
                        <button class="btn_madeira">Add 100 Madeira</button>
                        <button class="btn_argila">Add 100 Argila</button>
                        <button class="btn_ferro">Add 100 Ferro</button>
                        <br /><br />

                        <input type="radio" name="main" class="main_clear" id="main_clear">
                        <label for="main">Clear</label>
                        <input type="radio" name="main" class="main1" id="mainLv1">
                        <label for="main">Main Building lv 1</label>
                        <br /><br />

                        <input type="radio" name="church" class="church_clear" id="church_clear">
                        <label for="clear">Clear</label>
                        <input type="radio" name="church" class="church1" id="churchLv1">
                        <label for="churchLv1">Church Lv1</label>
                        <input type="radio" name="church" class="church2" id="churchLv2">
                        <label for="churchLv2">Church Lv2</label>
                        <input type="radio" name="church" class="church3" id="churchLv3">
                        <label for="churchLv3">Church Lv3</label>
                        `;

    const btn_madeira = painel.querySelector(".btn_madeira") as HTMLElement;
    const btn_argila = painel.querySelector(".btn_argila") as HTMLElement;
    const btn_ferro = painel.querySelector(".btn_ferro") as HTMLElement;

    const resources = [btn_madeira, btn_argila, btn_ferro];

    resources.map((resource: any) => resource.addEventListener("click", () => {
        const resourceType = resource.className.replace("btn_", "")
        const newValue = 100;

        updateResourceValue(resourceType, newValue);
        showNotification("add 100 " + resourceType);
    }))

    const main_clear = painel.querySelector(".main_clear") as HTMLElement;
    const main1 = painel.querySelector(".main1") as HTMLElement;

    const church_clear = painel.querySelector(".church_clear") as HTMLElement;
    const church1 = painel.querySelector(".church1") as HTMLElement;
    const church2 = painel.querySelector(".church2") as HTMLElement;
    const church3 = painel.querySelector(".church3") as HTMLElement;

    main_clear.addEventListener("click", () => {
        removeComponentsVillage();

        showNotification("Edificil principal retirada!!!");
    })

    main1.addEventListener("click", () => {
        removeComponentsVillage();
        createComponentsVillage("mainLv1");

        const main = document.querySelector(".mainLv1") as HTMLElement;

        main.addEventListener("click", () => {
            openMainModal()

            const close = document.querySelector("#closeModal") as HTMLElement;
            close.addEventListener("click", closeMainModal);
        })


        showNotification("Edificil criado lv1 retirada!!!");
    })

    church_clear.addEventListener("click", () => {
        removeComponentsVillage();

        showNotification("Igreja retirada!!!");
    })

    church1.addEventListener("click", () => {
        removeComponentsVillage();
        createComponentsVillage("churchLv1");

        showNotification("Igreja criada lv1!!!");
    })

    church2.addEventListener("click", () => {
        removeComponentsVillage();
        createComponentsVillage("churchLv2");

        showNotification("Igreja criada lv2!!!");
    })

    church3.addEventListener("click", () => {
        removeComponentsVillage();
        createComponentsVillage("churchLv3");

        showNotification("Igreja criada lv3!!!");
    })

    // Função para abrir o modal principal
    function openMainModal() {
        const backgroundModal = document.getElementById("backgroundModal") as HTMLElement;
        const mainModal = document.getElementById("mainModal") as HTMLElement;
        backgroundModal.style.display = "block";
        mainModal.style.display = "block";
    }

    // Função para fechar o modal principal
    function closeMainModal() {
        const backgroundModal = document.getElementById("backgroundModal") as HTMLElement;
        const mainModal = document.getElementById("mainModal") as HTMLElement;
        backgroundModal.style.display = "none";
        mainModal.style.display = "none";
    }
}