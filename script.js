const formulaire = document.getElementById("invocation");
const resultat = document.getElementById("resultat");
const message = document.getElementById("message");
const boutonRecommencer = document.getElementById("recommencer");

formulaire.addEventListener("submit", (event) => {
  event.preventDefault();

  const prenom = document.getElementById("prenom").value;
  const creature = document.getElementById("creature").value;

  message.textContent = `${prenom}, ${creature} a entendu ton appel et te suivra tout le Bloc 1 !`;

  formulaire.classList.add("cache");
  resultat.classList.remove("cache");
});

boutonRecommencer.addEventListener("click", () => {

  formulaire.classList.remove("cache");

  resultat.classList.add("cache");

  formulaire.reset();

});