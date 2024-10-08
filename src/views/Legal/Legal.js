import React from "react";
import { Helmet } from "react-helmet";

export default function Legal() {
  return (
    <>
      <div>
        <Helmet>
          <title>Mentions légales | TMF Compta</title>
        </Helmet>
      </div>
      <div className="generic-banner generic-banner-compta">
        <div className="text-box center-xy">
          <h1 className="title-xl text-bold text-white-b300">
            Mentions légales
          </h1>
        </div>
      </div>
      <div className="section">
        <div
          className="container"
          style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
        >
          <h2>1. Informations légales</h2>
          <ul className="p-m block">
            <li>Nom de la société : TMF Compta SNC</li>
            <li>Forme juridique : Société en nom</li>
            <li>
              Siège social : Sterrebeekstraat 154A, 1930 Zaventem (Belgique)
            </li>
            <li>Numéro d’entreprise : BE0505985850 (BCE)</li>
            <li>Directeur de la publication : Marius Trufin</li>
            <li>E-mail de contact : info@tmfcompta.be</li>
          </ul>
          <h2>2. Hébergement</h2>
          <ul className="p-m block">
            <li>Le site est hébergé par : IONOS</li>
          </ul>
          <h2>3. Propriété intellectuelle</h2>
          <p>
            Le contenu du site, y compris mais non limité aux textes, images,
            graphismes, logos, vidéos, ainsi que le design et la structure du
            site, sont la propriété exclusive de TMF Compta SNC, sauf mention
            contraire (notamment les images libres de droits utilisées sur le
            site). Toute reproduction, représentation, modification,
            publication, adaptation de tout ou partie des éléments du site, quel
            que soit le moyen ou le procédé utilisé, est interdite, sauf
            autorisation écrite préalable de TMF Compta SNC.
          </p>
          <h2>4. Données personnelles</h2>
          <p>
            Le site TMF Compta SNC collecte des données personnelles via son
            formulaire de contact. Les données collectées incluent :
          </p>
          <ul className="p-m block">
            <li>Nom</li>
            <li>Prénom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone</li>
            <li>Société</li>
            <li>Message</li>
          </ul>
          <p>
            Ces données sont utilisées uniquement pour répondre aux demandes des
            utilisateurs. Elles sont transmises via un canal sécurisé aux
            personnes en charge du traitement des demandes au sein de TMF Compta
            SNC. Les informations fournies via le formulaire de contact sont
            conservées pendant une durée maximale d’un mois après la soumission
            du formulaire. Le site utilise également Google Analytics pour
            collecter des données analytiques de manière anonyme afin
            d’améliorer les services et le contenu du site. Les informations
            recueillies incluent des données relatives à la navigation (adresse
            IP, temps de visite, pages consultées).
          </p>
          <h2>5. Cookies</h2>
          <p>
            Le site utilise des cookies pour des finalités analytiques via
            Google Analytics. Ces cookies permettent d’analyser le trafic et les
            comportements des utilisateurs sur le site afin d’en améliorer
            l’expérience.
          </p>
          <h2>6. Liens hypertextes</h2>
          <p>
            Le site contient des liens hypertextes pointant vers d'autres sites,
            notamment vers le site du créateur du site web : Kago Group SRL. TMF
            Compta SNC n’exerce aucun contrôle sur ces sites et ne peut être
            tenu responsable du contenu publié sur ceux-ci.
          </p>
          <h2>7. Droit applicable</h2>
          <p>
            Les présentes mentions légales sont régies par les lois en vigueur
            en Belgique. En cas de litige, et à défaut de résolution amiable,
            les tribunaux compétents seront ceux de l'arrondissement judiciaire
            dont dépend le siège social de TMF Compta SNC.
          </p>
        </div>
      </div>
    </>
  );
}
