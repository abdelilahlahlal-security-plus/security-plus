import { PageHeader } from "@/components/layout/PageHeader";

export default function MentionsLegalesPage() {
    return (
        <>
            <PageHeader
                title="Mentions Légales"
                description="Informations légales relatives à la société Security Plus et à l'utilisation du site internet."
            />

            <section className="py-20 bg-white dark:bg-neutral-950 transition-colors">
                <div className="container-custom prose prose-blue dark:prose-invert max-w-4xl mx-auto">
                    <h2>1. Présentation du site</h2>
                    <p>
                        En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site security-plus.fr l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
                    </p>
                    <p>
                        <strong>Propriétaire</strong> : SECURITY PLUS – SARL au capital de [Montant] € – [Adresse de la société]<br />
                        <strong>SIRET</strong> : [Numéro SIRET]<br />
                        <strong>Responsable publication</strong> : [Nom du responsable]<br />
                        <strong>Webmaster</strong> : [Nom de l'agence/développeur]<br />
                        <strong>Hébergeur</strong> : Vercel Inc. – 340 S Lemon Ave #1192, Walnut, CA 91789, USA
                    </p>

                    <h2>2. Conditions générales d'utilisation</h2>
                    <p>
                        L'utilisation du site security-plus.fr implique l'acceptation pleine et entière des conditions générales d'utilisation ci-après décrites. Ces conditions d'utilisation sont susceptibles d'être modifiées ou complétées à tout moment.
                    </p>

                    <h2>3. Description des services fournis</h2>
                    <p>
                        Le site security-plus.fr a pour objet de fournir une information concernant l'ensemble des activités de la société. SECURITY PLUS s'efforce de fournir sur le site des informations aussi précises que possible.
                    </p>

                    <h2>4. Propriété intellectuelle</h2>
                    <p>
                        SECURITY PLUS est propriétaire des droits de propriété intellectuelle ou détient les droits d'usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels.
                    </p>

                    <h2>5. Droit applicable et attribution de juridiction</h2>
                    <p>
                        Tout litige en relation avec l'utilisation du site security-plus.fr est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Bordeaux.
                    </p>

                    <h2>6. Agrément CNAPS</h2>
                    <p>
                        Numéro d'agrément CNAPS : AUT-033-2116-09-26-2017-0620770.<br />
                        <em>L'obtention d'un agrément ne confère aucun caractère officiel à l'entreprise ou aux personnes qui en bénéficient. Il n'engage en aucun cas la responsabilité des pouvoirs publics.</em>
                    </p>
                </div>
            </section>
        </>
    );
}
