const $form = document.querySelector("#contact");
const $buttonMailto = document.querySelector("#mail-prueba");

$form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);

  $buttonMailto.setAttribute(
    "href",
    `mailto:${form.get("mail")}?subject=${form.get("name")}${form.get(
      "mail"
    )}&body=${form.get("message")}`
  );

  $buttonMailto.click();
}
