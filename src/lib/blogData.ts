export type BlogPost = {
    slug: string;
    title: string;
    excerpt: string;
    content: string; // HTML content
    date: string;
    author: string;
    category: string;
    image: string;
    readTime: string;
    tags: string[];
};

export const blogPosts: BlogPost[] = [
    {
        slug: "les-nouvelles-reglementations-securite-privee-2024",
        title: "Nouvelles Réglementations Sécurité Privée 2024 : Ce qui change",
        excerpt: "Le secteur de la sécurité privée en France connaît des évolutions majeures en 2024. Le point sur les nouvelles obligations du CNAPS et les impacts pour les entreprises.",
        date: "2024-04-12",
        author: "Jean Dupont",
        category: "Réglementation",
        image: "/images/blog-bordeaux.png",
        readTime: "5 min",
        tags: ["CNAPS", "Législation", "Formation", "Sécurité", "Conformité"],
        content: `
            <p class="lead">L'année 2024 marque un tournant pour la sécurité privée en France. Avec les Jeux Olympiques en ligne de mire et une volonté accrue de professionnaliser le secteur, le cadre législatif se durcit.</p>
            
            <h2>Renforcement des critères d'agrément CNAPS</h2>
            <p>Le Conseil National des Activités Privées de Sécurité (CNAPS) a mis à jour ses critères pour l'obtention et le renouvellement des cartes professionnelles. Désormais, une enquête de moralité plus stricte est systématiquement menée, incluant une vérification approfondie des antécédents judiciaires.</p>
            
            <h2>La formation continue obligatoire (MAC)</h2>
            <p>Le Maintien et l'Actualisation des Compétences (MAC) devient plus exigeant. Pour les agents de sécurité, le module "terrorisme" a été renforcé, et de nouvelles heures de formation sur la gestion des conflits sont désormais obligatoires tous les 5 ans.</p>
            
            <blockquote>
                "Ces nouvelles mesures visent à garantir un niveau de sécurité optimal pour les donneurs d'ordre et à valoriser le métier d'agent de sécurité." - Direction du CNAPS
            </blockquote>

            <h2>Impact pour les entreprises clientes</h2>
            <p>Pour les entreprises faisant appel à des sociétés de sécurité privée, cela signifie :</p>
            <ul>
                <li>Une garantie de personnel mieux formé et plus fiable.</li>
                <li>Une nécessité de vérifier la conformité de leurs prestataires (nous sommes 100% conformes chez Security Plus).</li>
                <li>Une potentielle légère hausse des coûts horaires, reflétant la montée en compétence du secteur.</li>
            </ul>

            <h2>Conclusion</h2>
            <p>Se mettre en conformité n'est pas une option. Chez Security Plus, nous anticipons ces changements depuis des mois pour vous garantir une prestation sans interruption et de haute qualité.</p>
        `
    },
    {
        slug: "comment-securiser-un-evenement-grand-public",
        title: "Comment sécuriser un événement grand public en 5 étapes clés",
        excerpt: "Organiser un événement réussi nécessite une gestion des risques irréprochable. Découvrez notre guide pour une sécurité événementielle sans faille.",
        date: "2024-03-28",
        author: "Sophie Martin",
        category: "Événementiel",
        image: "/images/blog-event.png",
        readTime: "7 min",
        tags: ["Événementiel", "Contrôle d'accès", "Gestion de foule", "Sécurité", "Planification"],
        content: `
            <p class="lead">Concert, festival, foire ou braderie : tout rassemblement public implique des risques spécifiques. Une bonne sécurisation ne s'improvise pas, elle se planifie.</p>

            <h2>1. L'analyse des risques en amont</h2>
            <p>Avant même de parler d'agents, il faut analyser le site. Y a-t-il des goulots d'étranglement ? Quels sont les accès secours ? Quel est le profil du public attendu ? Cette étape définit tout le dispositif.</p>

            <h2>2. Le filtrage et le contrôle d'accès</h2>
            <p>C'est la première ligne de défense. L'inspection visuelle des sacs et la palpation de sécurité (par des agents agréés) sont indispensables pour empêcher l'introduction d'objets dangereux ou illicites.</p>

            <h2>3. La gestion des flux de foule</h2>
            <p>Une foule statique est gérable, une foule en mouvement est un fluide puissant. Nos agents sont formés pour canaliser les flux, éviter les mouvements de panique et gérer les files d'attente de manière apaisée.</p>

            <h2>4. La sécurité incendie et secours</h2>
            <p>Au-delà de la sûreté, la sécurité civile est primordiale. La présence d'agents SSIAP pour vérifier les installations temporaires et guider les secours en cas de malaise est souvent une obligation légale.</p>

            <h2>5. La communication et la coordination</h2>
            <p>Un PC Sécurité centralisé, relié par radio à tous les agents et en contact avec les forces de l'ordre, permet une réactivité à la seconde en cas d'incident.</p>

            <p>Vous organisez un événement prochainement ? N'attendez pas la dernière minute pour concevoir votre dispositif de sécurité.</p>
        `
    },
    {
        slug: "videoprotection-et-rgpd-bonnes-pratiques",
        title: "Vidéoprotection et RGPD : Les bonnes pratiques en entreprise",
        excerpt: "Installer des caméras ne s'improvise pas. Respect de la vie privée, durée de conservation des images, droits des salariés... Tout ce qu'il faut savoir.",
        date: "2024-02-15",
        author: "Marc Leroy",
        category: "Technologie",
        image: "/images/blog-cctv.png",
        readTime: "6 min",
        tags: ["RGPD", "Vidéoprotection", "Législation", "Technologie", "Entreprise"],
        content: `
            <p class="lead">La vidéoprotection est un outil dissuasif puissant, mais son usage est strictement encadré par la loi et le RGPD. Une mauvaise installation peut coûter cher en sanctions.</p>

            <h2>Le principe de proportionnalité</h2>
            <p>Vous ne pouvez pas filmer tout, tout le temps. Les caméras doivent filmer les accès, les stocks, les caisses, mais <strong>jamais</strong> les zones de pause, les toilettes, ou le poste de travail d'un employé en permanence (sauf cas particulier justifié).</p>

            <h2>L'information des personnes</h2>
            <p>C'est une obligation légale : des panneaux visibles doivent informer le public et les salariés de l'existence du dispositif, de son but, de la durée de conservation des images, et du contact pour exercer ses droits.</p>

            <h2>Durée de conservation des images</h2>
            <p>En règle générale, les images ne doivent pas être conservées plus de 30 jours. Au-delà, elles doivent être automatiquement effacées, sauf si une procédure judiciaire est en cours.</p>

            <h2>Accès aux images</h2>
            <p>Tout le monde ne peut pas voir les images. L'accès doit être restreint aux responsables de la sécurité ou à la direction. Un registre des accès est recommandé.</p>

            <p>Chez Security Plus, nos agents sont formés pour exploiter ces systèmes de vidéoprotection dans le strict respect du cadre légal, assurant ainsi une surveillance efficace sans compromettre votre conformité.</p>
        `
    },
    {
        slug: "role-agent-ssiap-entreprise",
        title: "Le rôle crucial de l'agent SSIAP en entreprise",
        excerpt: "Au-delà de la simple surveillance, l'agent de sécurité incendie (SSIAP) est un maillon essentiel de la prévention des risques au travail. Zoom sur ses missions.",
        date: "2024-01-10",
        author: "Julie Bernard",
        category: "Sécurité Incendie",
        image: "/images/blog-fire-safety.png",
        readTime: "4 min",
        tags: ["SSIAP", "Incendie", "Sécurité", "Prévention", "Secours"],
        content: `
            <p class="lead">Le SSIAP (Service de Sécurité Incendie et d'Assistance à Personnes) est souvent perçu comme une contrainte réglementaire, alors qu'il est un pilier de la continuité d'activité.</p>

            <h2>Prévenir plutôt que guérir</h2>
            <p>La mission principale de l'agent SSIAP n'est pas d'éteindre le feu, mais d'éviter qu'il ne démarre. Ses rondes quotidiennes permettent de détecter une prise surchargée, une issue de secours encombrée ou un équipement défaillant.</p>

            <h2>L'intervention précoce</h2>
            <p>En cas de départ de feu, les premières minutes sont décisives. L'agent SSIAP est formé pour intervenir immédiatement avec les moyens appropriés (extincteurs, RIA) et limiter les dégâts avant l'arrivée des pompiers.</p>

            <h2>L'évacuation</h2>
            <p>C'est la mission la plus critique. En cas d'alarme, l'agent SSIAP gère l'évacuation méthodique du bâtiment, vérifie que personne ne reste en arrière (serre-file) et évite la panique.</p>

            <h2>La tenue du registre de sécurité</h2>
            <p>L'agent s'assure que toutes les vérifications périodiques sont faites et notées. En cas de contrôle ou d'accident, ce document est la preuve juridique de votre bonne gestion.</p>
        `
    },
    {
        slug: "prevenir-cambriolages-locaux-professionnels",
        title: "Prévenir les cambriolages dans les locaux professionnels",
        excerpt: "Les vols en entreprise sont en hausse. Découvrez les stratégies de dissuasion les plus efficaces : alarme, ronde aléatoire, télésurveillance.",
        date: "2023-12-05",
        author: "Thomas Durand",
        category: "Prévention",
        image: "/images/blog-burglary.png",
        readTime: "6 min",
        tags: ["Cambriolage", "Prévention", "Alarme", "Surveillance", "Conseils"],
        content: `
            <p class="lead">Le cambriolage d'entreprise a un double coût : le vol du matériel, mais aussi l'arrêt de l'activité et le traumatisme des équipes. Mieux vaut prévenir.</p>

            <h2>1. La dissuasion visuelle</h2>
            <p>Un site bien éclairé, des panneaux "Site sous vidéoprotection" bien visibles et une clôture en bon état découragent 80% des opportunistes. Ne négligez pas l'aspect extérieur.</p>

            <h2>2. La protection mécanique</h2>
            <p>Avant l'électronique, pensez au physique. Serrures multipoints, barreaux aux fenêtres du rez-de-chaussée, rideaux métalliques... Retardez l'effraction autant que possible.</p>

            <h2>3. La détection et l'alarme</h2>
            <p>Une alarme reliée à un centre de télésurveillance est indispensable. Mais attention, une alarme qui sonne dans le vide ne sert à rien. Le temps de réaction est la clé.</p>

            <h2>4. Les rondes de sécurité (Levée de doute)</h2>
            <p>La meilleure protection reste la visite physique régulière ou aléatoire d'un agent de sécurité mobile. Cela casse la routine et permet de vérifier que tout est en ordre, même sans alarme.</p>

            <h2>5. La protection des données</h2>
            <p>N'oubliez pas que le vol de données (serveurs, PC portables) est souvent plus dommageable que le vol de stock. Sécurisez vos salles serveurs comme des coffres-forts.</p>
        `
    }
];
