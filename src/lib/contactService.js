// Service d'envoi du formulaire de contact.
//
// Envoi réel via Web3Forms (https://web3forms.com) : aucun serveur à gérer
// côté DBC, les soumissions sont transmises par email à l'adresse associée
// à cette clé (contact.dbc.pro@gmail.com). Pour changer l'email de
// réception ou régénérer la clé, voir le compte Web3Forms de la cliente.
const WEB3FORMS_ACCESS_KEY = "8e72ee1e-f2fe-4dd3-a78f-28d6d24a35cc";

export async function sendContactRequest(payload) {
  // Protection anti-spam basique : si le champ "honeypot" (invisible pour un
  // humain) est rempli, on considère qu'il s'agit d'un robot et on ignore
  // silencieusement la demande tout en simulant un succès.
  if (payload.honeypot) {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return { ok: true };
  }

  const { honeypot: _honeypot, ...fields } = payload;

  const subject = payload.source
    ? "Nouvelle demande d'audit gratuit : Business Booster 90"
    : "Nouveau message depuis le formulaire de contact du site DBC";

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject,
      from_name: "Site DBC",
      ...fields,
    }),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok || !data.success) {
    throw new Error(data.message || "Échec de l'envoi");
  }

  return { ok: true };
}
