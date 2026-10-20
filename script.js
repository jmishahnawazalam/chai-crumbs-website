
const filterButtons = document.querySelectorAll(".filter");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;

    filterButtons.forEach((item) => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    menuCards.forEach((card) => {
      const showCard =
        category === "all" ||
        card.dataset.category === category;

      card.hidden = !showCard;
    });
  });
});

// Demo WhatsApp number: replace before publishing.
const whatsappNumber = "919205177110";

const message =
  "Hello Chai & Crumbs! I would like to ask about your menu.";

const whatsappLink = document.querySelector("#whatsappLink");

whatsappLink.href =
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
