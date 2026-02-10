import { PageHeader } from "@/components/layout/PageHeader";

export default function PolitiqueConfidentialitePage() {
    return (
        <>
            <PageHeader
                title="Politique de Confidentialité"
                description="Nous accordons une importance capitale à la protection de vos données personnelles et au respect de votre vie privée."
            />

            <section className="py-20 bg-white dark:bg-neutral-950 transition-colors">
                <div className="container-custom prose prose-blue dark:prose-invert max-w-4xl mx-auto">
                    <h2>1. Collecte de l'information</h2>
                    <p>
                        Nous recueillons des informations lorsque vous remplissez un formulaire sur notre site (Demande de devis, Contact, Recrutement). Les informations recueillies incluent votre nom, votre adresse e-mail, votre numéro de téléphone et toute autre information facultative que vous nous soumettez.
                    </p>

                    <h2>2. Utilisation des informations</h2>
                    <p>
                        Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :
                    </p>
                    <ul>
                        <li>Traiter vos demandes de devis et vous contacter</li>
                        <li>Améliorer le service client et vos besoins de prise en charge</li>
                        <li>Vous contacter par e-mail ou téléphone</li>
                        <li>Gérer un concours, une promotion ou une enquête</li>
                    </ul>

                    <h2>3. Confidentialité des données</h2>
                    <p>
                        Nous sommes les seuls propriétaires des informations collectées sur ce site. Vos informations personnelles ne seront pas vendues, échangées, transférées, ou données à une autre société pour n'importe quelle raison, sans votre consentement, en dehors de ce qui est nécessaire pour répondre à une demande.
                    </p>

                    <h2>4. Protection des informations</h2>
                    <p>
                        Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne (Protocole SSL).
                    </p>

                    <h2>5. Droit d'accès et de retrait</h2>
                    <p>
                        Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Vous pouvez exercer ce droit en nous contactant via l'adresse : contact@security-plus.fr.
                    </p>

                    <h2>6. Cookies</h2>
                    <p>
                        Nos cookies améliorent l'accès à notre site et identifient les visiteurs réguliers. En outre, nos cookies améliorent l'expérience d'utilisateur grâce au suivi et au ciblage de ses intérêts. Cependant, cette utilisation des cookies n'est en aucune façon liée à des informations personnelles identifiables sur notre site.
                    </p>
                </div>
            </section>
        </>
    );
}
