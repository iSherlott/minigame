/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/layouts/index.ts":
/*!*****************************************!*\
  !*** ./src/components/layouts/index.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./main */ "./src/components/layouts/main.ts"), exports);


/***/ }),

/***/ "./src/components/layouts/main.ts":
/*!****************************************!*\
  !*** ./src/components/layouts/main.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.main = void 0;
const footer_1 = __webpack_require__(/*! ../shared/footer */ "./src/components/shared/footer.ts");
const resources_1 = __webpack_require__(/*! ../shared/resources */ "./src/components/shared/resources.ts");
function main() {
    (0, resources_1.displayGameInfo)();
    (0, footer_1.displayTimestamp)();
}
exports.main = main;


/***/ }),

/***/ "./src/components/shared/buttonTest.ts":
/*!*********************************************!*\
  !*** ./src/components/shared/buttonTest.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.btnTest = void 0;
const updateResourceValue_1 = __webpack_require__(/*! ../../utils/updateResourceValue */ "./src/utils/updateResourceValue.ts");
const createComponentsVillage_1 = __webpack_require__(/*! ./createComponentsVillage */ "./src/components/shared/createComponentsVillage.ts");
const notification_1 = __webpack_require__(/*! ./notification */ "./src/components/shared/notification.ts");
function btnTest() {
    const painel = document.querySelector("#painel");
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
    const btn_madeira = painel.querySelector(".btn_madeira");
    const btn_argila = painel.querySelector(".btn_argila");
    const btn_ferro = painel.querySelector(".btn_ferro");
    const resources = [btn_madeira, btn_argila, btn_ferro];
    resources.map((resource) => resource.addEventListener("click", () => {
        const resourceType = resource.className.replace("btn_", "");
        const newValue = 100;
        (0, updateResourceValue_1.updateResourceValue)(resourceType, newValue);
        (0, notification_1.showNotification)("add 100 " + resourceType);
    }));
    const main_clear = painel.querySelector(".main_clear");
    const main1 = painel.querySelector(".main1");
    const church_clear = painel.querySelector(".church_clear");
    const church1 = painel.querySelector(".church1");
    const church2 = painel.querySelector(".church2");
    const church3 = painel.querySelector(".church3");
    main_clear.addEventListener("click", () => {
        (0, createComponentsVillage_1.removeComponentsVillage)();
        (0, notification_1.showNotification)("Edificil principal retirada!!!");
    });
    main1.addEventListener("click", () => {
        (0, createComponentsVillage_1.removeComponentsVillage)();
        (0, createComponentsVillage_1.createComponentsVillage)("mainLv1");
        const main = document.querySelector(".mainLv1");
        main.addEventListener("click", () => {
            openMainModal();
            const close = document.querySelector("#closeModal");
            close.addEventListener("click", closeMainModal);
        });
        (0, notification_1.showNotification)("Edificil criado lv1 retirada!!!");
    });
    church_clear.addEventListener("click", () => {
        (0, createComponentsVillage_1.removeComponentsVillage)();
        (0, notification_1.showNotification)("Igreja retirada!!!");
    });
    church1.addEventListener("click", () => {
        (0, createComponentsVillage_1.removeComponentsVillage)();
        (0, createComponentsVillage_1.createComponentsVillage)("churchLv1");
        (0, notification_1.showNotification)("Igreja criada lv1!!!");
    });
    church2.addEventListener("click", () => {
        (0, createComponentsVillage_1.removeComponentsVillage)();
        (0, createComponentsVillage_1.createComponentsVillage)("churchLv2");
        (0, notification_1.showNotification)("Igreja criada lv2!!!");
    });
    church3.addEventListener("click", () => {
        (0, createComponentsVillage_1.removeComponentsVillage)();
        (0, createComponentsVillage_1.createComponentsVillage)("churchLv3");
        (0, notification_1.showNotification)("Igreja criada lv3!!!");
    });
    function openMainModal() {
        const backgroundModal = document.getElementById("backgroundModal");
        const mainModal = document.getElementById("mainModal");
        backgroundModal.style.display = "block";
        mainModal.style.display = "block";
    }
    function closeMainModal() {
        const backgroundModal = document.getElementById("backgroundModal");
        const mainModal = document.getElementById("mainModal");
        backgroundModal.style.display = "none";
        mainModal.style.display = "none";
    }
}
exports.btnTest = btnTest;


/***/ }),

/***/ "./src/components/shared/createComponentsVillage.ts":
/*!**********************************************************!*\
  !*** ./src/components/shared/createComponentsVillage.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.removeComponentsVillage = exports.createComponentsVillage = void 0;
function createComponentsVillage(component) {
    const villageSection = document.getElementById("overlay-image");
    if (villageSection) {
        villageSection.classList.add(component);
    }
}
exports.createComponentsVillage = createComponentsVillage;
function removeComponentsVillage() {
    const removeComponent = document.getElementById("overlay-image");
    if (removeComponent) {
        removeComponent.classList.remove(removeComponent?.classList[0]);
    }
}
exports.removeComponentsVillage = removeComponentsVillage;


/***/ }),

/***/ "./src/components/shared/createResource.ts":
/*!*************************************************!*\
  !*** ./src/components/shared/createResource.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createResource = void 0;
const resources_1 = __importDefault(__webpack_require__(/*! ../../schemas/resources */ "./src/schemas/resources.ts"));
function findResourceByMultiplierId(multiplierId) {
    return resources_1.default?.resources.find(resource => resource.multiplierId === multiplierId);
}
function createResource(imageSrc, resourceName, resourceId, multiplierId) {
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
exports.createResource = createResource;


/***/ }),

/***/ "./src/components/shared/footer.ts":
/*!*****************************************!*\
  !*** ./src/components/shared/footer.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.displayTimestamp = void 0;
function displayTimestamp() {
    const timestampElement = document.querySelector("#timestamp");
    timestampElement.innerText = new Date().toString();
}
exports.displayTimestamp = displayTimestamp;


/***/ }),

/***/ "./src/components/shared/index.ts":
/*!****************************************!*\
  !*** ./src/components/shared/index.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./footer */ "./src/components/shared/footer.ts"), exports);


/***/ }),

/***/ "./src/components/shared/notification.ts":
/*!***********************************************!*\
  !*** ./src/components/shared/notification.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.showNotification = void 0;
function showNotification(message) {
    const notificationContainer = document.getElementById("notificationContainer");
    const notification = document.createElement("div");
    notification.classList.add("notification");
    notification.textContent = message;
    notificationContainer?.appendChild(notification);
    setTimeout(() => {
        notification.classList.add("show");
        setTimeout(() => {
            notification.remove();
        }, 5000);
    }, 0);
}
exports.showNotification = showNotification;


/***/ }),

/***/ "./src/components/shared/resources.ts":
/*!********************************************!*\
  !*** ./src/components/shared/resources.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.displayGameInfo = void 0;
const resources_1 = __importDefault(__webpack_require__(/*! ../../schemas/resources */ "./src/schemas/resources.ts"));
const createResource_1 = __webpack_require__(/*! ./createResource */ "./src/components/shared/createResource.ts");
function displayGameInfo() {
    resources_1.default?.resources.forEach((resource) => (0, createResource_1.createResource)(resource["imageSrc"], resource["name"], resource["id"], resource["multiplierId"]));
}
exports.displayGameInfo = displayGameInfo;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const resources_1 = __importDefault(__webpack_require__(/*! ./schemas/resources */ "./src/schemas/resources.ts"));
const layouts_1 = __webpack_require__(/*! ./components/layouts */ "./src/components/layouts/index.ts");
const localStorageManager_1 = __webpack_require__(/*! ./utils/localStorageManager */ "./src/utils/localStorageManager.ts");
const shared_1 = __webpack_require__(/*! ./components/shared */ "./src/components/shared/index.ts");
const buttonTest_1 = __webpack_require__(/*! ./components/shared/buttonTest */ "./src/components/shared/buttonTest.ts");
console.log("Player: ", resources_1.default);
(0, layouts_1.main)();
(0, buttonTest_1.btnTest)();
if (resources_1.default)
    (0, localStorageManager_1.saveState)(new Date(), resources_1.default);
function animate() {
    (0, shared_1.displayTimestamp)();
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);


/***/ }),

/***/ "./src/schemas/resources.ts":
/*!**********************************!*\
  !*** ./src/schemas/resources.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const localStorageManager_1 = __webpack_require__(/*! ../utils/localStorageManager */ "./src/utils/localStorageManager.ts");
let state = (0, localStorageManager_1.loadStateFromLocalStorage)();
const currentTime = new Date();
if (!state)
    state = {
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
exports["default"] = state;


/***/ }),

/***/ "./src/utils/localStorageManager.ts":
/*!******************************************!*\
  !*** ./src/utils/localStorageManager.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.saveState = exports.loadStateFromLocalStorage = exports.updateLocalStorage = void 0;
function isDifferent(horaA, horaB) {
    try {
        if ((horaA.getTime() - horaB.getTime()) < 0)
            return false;
        return true;
    }
    catch (error) {
        return false;
    }
}
function updateLocalStorage(state) {
    const stateBase64 = btoa(JSON.stringify(state));
    localStorage.setItem("gameState", stateBase64);
}
exports.updateLocalStorage = updateLocalStorage;
function loadStateFromLocalStorage() {
    try {
        const stateBase64 = localStorage.getItem("gameState");
        if (stateBase64) {
            const decodedState = JSON.parse(atob(stateBase64));
            return decodedState;
        }
        return null;
    }
    catch (error) {
        return null;
    }
}
exports.loadStateFromLocalStorage = loadStateFromLocalStorage;
function saveState(currentTime, state) {
    if (isDifferent(currentTime, state["startTime"]))
        updateLocalStorage(state);
}
exports.saveState = saveState;


/***/ }),

/***/ "./src/utils/updateHTMLValue.ts":
/*!**************************************!*\
  !*** ./src/utils/updateHTMLValue.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateHTMLValue = void 0;
const resources_1 = __importDefault(__webpack_require__(/*! ../schemas/resources */ "./src/schemas/resources.ts"));
function updateHTMLValue(resourceType) {
    if (resources_1.default) {
        const resource = resources_1.default.resources.find(resource => resource.id === resourceType);
        if (resource) {
            const element = document.querySelector(`#${resourceType}`);
            if (element) {
                element.textContent = resource.amount.toString();
            }
        }
    }
}
exports.updateHTMLValue = updateHTMLValue;


/***/ }),

/***/ "./src/utils/updateResourceValue.ts":
/*!******************************************!*\
  !*** ./src/utils/updateResourceValue.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateResourceValue = void 0;
const resources_1 = __importDefault(__webpack_require__(/*! ../schemas/resources */ "./src/schemas/resources.ts"));
const localStorageManager_1 = __webpack_require__(/*! ./localStorageManager */ "./src/utils/localStorageManager.ts");
const updateHTMLValue_1 = __webpack_require__(/*! ./updateHTMLValue */ "./src/utils/updateHTMLValue.ts");
function updateResourceValue(resourceType, newValue) {
    if (resources_1.default) {
        const resource = resources_1.default.resources.find(resource => resource.id === resourceType);
        if (resource)
            resource.amount += newValue;
        (0, localStorageManager_1.updateLocalStorage)(resources_1.default);
        (0, updateHTMLValue_1.updateHTMLValue)(resourceType);
    }
}
exports.updateResourceValue = updateResourceValue;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map