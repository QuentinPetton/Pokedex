import "./toasts.scss";

export function displaySuccessToast(message) {
  const toastElement = document.getElementById("toast");
  toastElement.classList.add("success");
  toastElement.classList.remove("hidden");
  toastElement.textContent = message;

  setTimeout(() => {
    toastElement.classList.add("hidden");
  }, 3000);
}
