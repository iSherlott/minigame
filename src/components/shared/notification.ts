export function showNotification(message: string) {
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
