const $form = document.querySelector("#contact");
const $buttonMailto = document.querySelector("#mail-prueba");

$form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);

  $buttonMailto.setAttribute(
    "href",
    `mailito:brian9282@hotmail.com?subject=${form.get("name")}${form.get(
      "mail"
    )}&body=${form.get("messege")}`
  );

  $buttonMailto.click();
}
