const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// Select tab content items

function handleSelectItem(e) {
  handleRemoveBorder();
  handleHide();
  // Add border to current tab
  this.classList.add("tab-border");
  // Grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // Add show class
  tabContentItem.classList.add("show");
}

function handleRemoveBorder() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}

function handleHide() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}

// Listen for Tab clicks
tabItems.forEach((item) => item.addEventListener("click", handleSelectItem));
