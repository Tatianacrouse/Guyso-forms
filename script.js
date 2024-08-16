// Vérification du formulaire
// Mes notes que je n'oubbli pas
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Empêche le rechargement de la page

  // Vérification des champs obligatoires
  const nom = document.getElementById('nom').value;
  const prenom = document.getElementById('prenom').value;
  const pays = document.getElementById('pays').value;
  const ville = document.getElementById('ville').value;
  const email = document.getElementById('email').value;
  const montant = document.getElementById('montant').value;
  const gain = document.getElementById('gain').value;

  // Vérification des champs obligatoires
  if (nom === '') {
    document.getElementById('nomError').textContent = 'Nom est requis';
    document.getElementById('nomError').style.display = 'block';
  } else {
    document.getElementById('nomError').style.display = 'none';
  }

  if (prenom === '') {
    document.getElementById('prenomError').textContent = 'Prénom est requis';
    document.getElementById('prenomError').style.display = 'block';
  } else {
    document.getElementById('prenomError').style.display = 'none';
  }

  if (pays === '') {
    document.getElementById('paysError').textContent = 'Pays est requis';
    document.getElementById('paysError').style.display = 'block';
  } else {
    document.getElementById('paysError').style.display = 'none';
  }

  if (ville === '') {
    document.getElementById('villeError').textContent = 'Ville est requise';
    document.getElementById('villeError').style.display = 'block';
  } else {
    document.getElementById('villeError').style.display = 'none';
  }

  if (email === '') {
    document.getElementById('emailError').textContent = 'Email est requis';
    document.getElementById('emailError').style.display = 'block';
  } else {
    document.getElementById('emailError').style.display = 'none';
  }

  if (montant === '') {
    document.getElementById('montantError').textContent = 'Montant est requis';
    document.getElementById('montantError').style.display = 'block';
  } else {
    document.getElementById('montantError').style.display = 'none';
  }

  // Vérification de l'adresse email
  if (!validateEmail(email)) {
    document.getElementById('emailError').textContent = 'Veuillez entrer une adresse email valide.';
    document.getElementById('emailError').style.display = 'block';
    return;
  } else {
    document.getElementById('emailError').style.display = 'none';
  }

  // Soumission du formulaire
  form.submit();
});

// Fonction de validation de l'adresse email
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
emailjs.send('service_akxgt0n', 'template_hn4gplz', data)
    .then((response) => {
        // ...
    })
    .catch((error) => {
        // ...
    });

