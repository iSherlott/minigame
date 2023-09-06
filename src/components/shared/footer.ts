export function displayTimestamp() {
    const timestampElement = document.querySelector("#timestamp") as HTMLElement;
    timestampElement.innerText = new Date().toString();
}
