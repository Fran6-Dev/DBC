// Service d'envoi du formulaire de contact.
//
// Le site étant une application front-end, cette fonction simule l'envoi
// pour l'instant. Avant la mise en production, remplacez son contenu par
// un appel réel à votre solution d'envoi (API interne, Formspree, EmailJS,
// fonction serverless, etc.), en conservant la même signature.
export async function sendContactRequest(payload) {
  // Protection anti-spam basique : si le champ "honeypot" (invisible pour un
  // humain) est rempli, on considère qu'il s'agit d'un robot et on ignore
  // silencieusement la demande tout en simulant un succès.
  if (payload.honeypot) {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return { ok: true };
  }

  await new Promise((resolve) => setTimeout(resolve, 900));

  // Emplacement prévu pour l'intégration réelle, par exemple :
  // const response = await fetch("/api/contact", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(payload),
  // });
  // if (!response.ok) throw new Error("Échec de l'envoi");

  return { ok: true };
}
