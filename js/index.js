console.clear();

// steuert das gesamte Formular an (container in dem es sich befindet "<form>"):
const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  //verhindert ein vorzeitiges Verarbeiten der Daten im Hintergrund:
  event.preventDefault();

  // Objekt wird bereitgestellt, target ist eine Property(Eigenschaft) davon, welche angesteuert wird
  // und eine meta-Ebene tiefer werden die Daten verarbeitet:
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  //Auslesen der Daten als Objekt über die Konsole:
  console.log(data);
  //Alternative mit anderem Scope:
  console.log(data.age);

  //Bonus: Alter + Sliderwert über Konsole auslesen: und in Satz einbauen:
  // The age-badness-sum of "firstName" is "age-badness-sum" :

  //"schräge Anführungszeichen": `` ermöglichen Ansteuern von Variablen durch ${...} innerhalb des Textes:
  console.log(
    `The age-badness-sum of ${data.firstName} is ${data.age + data.badness}`
  );
  //Problem: Addition von 2 Variablen so nicht möglich, da die Ausgelesenen Werte nur hintereinander geschrieben werden!
  //Lösung: parseInt(wert, Basiszahl) zergliedert Werte und ermöglicht ein Verrechnen, Basiszahl sollte immer 10 sein:
  console.log(
    `The age-badness-sum of ${data.firstName} is ${
      parseInt(data.age, 10) + parseInt(data.badness, 10)
    }`
  );
});
