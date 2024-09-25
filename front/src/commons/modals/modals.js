import "./modals.scss";

export function showErrorModal() {
  const modalElement = document.getElementById("error-modal");
  showModal(modalElement);
}

export function showModal(modalElement) {
  modalElement.showModal();

  // Add closing modal listeners
  const closeListener = modalElement.addEventListener("click", (event) => {
    // Close the modal on click on : an element that has the 'data-close-modal' attribute OR on click on the modal background
    const clickedElement = event.target;
    if ("closeModal" in clickedElement.dataset || clickedElement === modalElement) {
      modalElement.close();
      modalElement.removeEventListener("click", closeListener);
    }
  });
}

export function closeModal(modalElement) {
  modalElement.close();
}
