/* ==========================================================================
   PROJECTS DATA
   ---------------------------------------------------------------------
   Ceci est la seule zone que tu dois éditer pour ajouter / modifier tes
   projets. Chaque objet correspond à une carte de la grille de projets.

   category : "vision"   -> Vision 3D & Imagerie
              "signal"   -> Signal & Biomécanique
              "ml"       -> Deep Learning / IA
              "robotics" -> Robotique

   images   : chemins vers tes visuels (place tes fichiers dans
              assets/img/projects/ et remplace les chemins ci-dessous).
              Le premier élément sert de vignette sur la carte.

   links    : optionnel. { github: "https://...", video: "https://..." }
   ========================================================================== */

const PROJECTS = [
  {
    id: "oct-retina-depth",
    title: "Estimation de profondeur outil–rétine par OCT",
    org: "BruBotics — Research Intern",
    period: "2025 — présent",
    category: "vision",
    tags: ["OCT", "Vision 3D", "Shadow-based depth", "Chirurgie robotisée"],
    problem:
      "En chirurgie oculaire assistée par robot, le chirurgien manque d'un retour fiable et en temps réel sur la distance entre l'instrument et la rétine, ce qui augmente le risque de perforation lors d'interventions à haute précision.",
    solution:
      "Développement d'un pipeline de traitement d'images OCT combinant segmentation des B-scans, détection d'ombre projetée par l'outil et reconstruction 3D, afin d'estimer la profondeur outil–tissu sans capteur additionnel.",
    result:
      "Prototype fonctionnel d'estimation de profondeur intégré aux travaux de recherche de BruBotics sur la chirurgie oculaire robotisée, posant les bases d'un retour de profondeur exploitable en conditions expérimentales.",
    images: [
      "assets/img/projects/oct-retina-1.jpg",
      "assets/img/projects/oct-retina-2.jpg",
    ],
    links: { github: "", video: "" },
  },
  {
    id: "medical-imaging-pipeline",
    title: "Pipeline de reconstruction multimodale — IRM / CT / échographie",
    org: "Medical Imaging — LGBIO2050",
    period: "2025",
    category: "vision",
    tags: ["IRM", "CT", "Transformée de Radon", "MATLAB"],
    problem:
      "Comparer et exploiter correctement des modalités d'imagerie médicale très différentes (IRM, CT, échographie) exige de comprendre leur formation physique du signal avant tout traitement.",
    solution:
      "Implémentation en MATLAB de chaînes de traitement complètes : reconstruction par rétroprojection filtrée à partir de sinogrammes CT, traitement du k-space en IRM, débruitage et recalage d'images.",
    result:
      "Trois rapports techniques évalués, portant sur le débruitage, la segmentation et le recalage d'images médicales, avec une compréhension opérationnelle des compromis résolution / bruit / contraste entre modalités.",
    images: ["assets/img/projects/medical-imaging-1.jpg"],
    links: {},
  },
  {
    id: "computational-geometry",
    title: "Maillage géométrique — Delaunay & diagrammes de Voronoi",
    org: "Computational Geometry — LMECA2170",
    period: "2025",
    category: "vision",
    tags: ["Triangulation de Delaunay", "OpenGL", "Modélisation géométrique"],
    problem:
      "La simulation numérique de dispositifs biomédicaux (implants, structures anatomiques) nécessite des maillages géométriques robustes et adaptés à la géométrie du problème.",
    solution:
      "Implémentation d'algorithmes de triangulation de Delaunay, d'enveloppes convexes 2D/3D et de représentation de surfaces, avec une petite application de visualisation développée en OpenGL.",
    result:
      "Outils de maillage réutilisables pour la modélisation géométrique de structures complexes, en support à des applications de conception assistée par ordinateur en génie biomédical.",
    images: ["assets/img/projects/comp-geometry-1.jpg"],
    links: {},
  },

  {
    id: "gait-event-detection-imu",
    title: "Détection temps réel des événements de marche par IMU — étude comparative",
    org: "Mémoire de Master — EPL, promoteur Pr. Renaud Ronsse",
    period: "2024 — 2025",
    category: "signal",
    tags: ["IMU", "Temps réel", "Filtre de Kalman", "Oscillateur adaptatif", "Revue systématique"],
    problem:
      "Le pilotage de prothèses et de dispositifs de rééducation robotisée dépend d'une détection précise et en temps réel des événements clés de la marche (contact initial, contact final) : une erreur de seulement 50 ms peut désynchroniser l'appareil et réduire son efficacité clinique.",
    solution:
      "Après une revue systématique de la littérature (528 articles PubMed/IEEE/Scopus, 32 retenus, 12 méthodes identifiées), implémentation et comparaison de deux algorithmes temps réel — R-GED (seuil de vitesse angulaire) et Oscillateur Adaptatif — sur des IMU placées au tibia, à la hanche et au pelvis, avec filtrage Butterworth causal + Kalman (paramètres optimisés par MLE et Expectation-Maximization), validés contre une méthode de référence par plaques de force (CdP-slope) sur tapis roulant à 3 et 4 km/h.",
    result:
      "R-GED atteint un taux de détection correcte de 95,9–100% avec une erreur temporelle moyenne de 2 à 4,3 ms (latence sous la milliseconde) ; l'Oscillateur Adaptatif se montre plus robuste et biomécaniquement plus fidèle (position du contact final à 56,8% du cycle vs. cible de 60%), au prix d'une latence légèrement supérieure. Les deux approches sont proposées comme complémentaires, avec une piste d'amélioration par fusion avec un modèle de Markov caché (HMM) pour combiner rapidité et robustesse.",
    images: ["assets/img/projects/gait-imu-1.png", "assets/img/projects/gait-imu-2.png"],
    links: {},
  },
  {
    id: "eeg-vibrotactile",
    title: "Exploration de patterns EEG & traitement vibrotactile",
    org: "Neurotech, Leuven — Research Project Member",
    period: "2024 — 2025",
    category: "signal",
    tags: ["EEG", "Traitement du signal", "Python", "Neurotechnologie"],
    problem:
      "Les signaux EEG et les retours vibrotactiles sont bruités et de haute dimension, rendant difficile l'identification de patterns exploitables pour des applications de neurotechnologie.",
    solution:
      "Construction de pipelines Python pour le prétraitement, le filtrage fréquentiel et l'exploration de patterns EEG, couplés à l'analyse de signaux vibrotactiles pour des scénarios d'interface homme-machine.",
    result:
      "Pipelines d'analyse réutilisables ayant permis d'isoler des patterns EEG pertinents, contribuant aux travaux exploratoires de l'équipe Neurotech sur le retour sensoriel.",
    images: ["assets/img/projects/eeg-1.jpg"],
    links: {},
  },
  {
    id: "bioinstrumentation",
    title: "Analyse de signaux ECG / EEG — chaîne d'acquisition biomédicale",
    org: "Bioinstrumentation — LGBIO2020",
    period: "2026",
    category: "signal",
    tags: ["ECG", "Filtrage", "PCA", "Régression"],
    problem:
      "Extraire une information clinique fiable (diagnostic, décision) à partir de signaux physiologiques bruts nécessite une chaîne complète : acquisition, filtrage, réduction de dimension puis classification.",
    solution:
      "Mise en œuvre d'algorithmes d'analyse mono- et multivariée (PCA, régression linéaire et non-linéaire, classification) appliqués à des signaux biomédicaux réels (ECG, potentiels évoqués).",
    result:
      "Chaîne de traitement validée sur des jeux de données physiologiques, avec une évaluation critique de la robustesse des méthodes de filtrage et de classification retenues.",
    images: ["assets/img/projects/bioinstru-1.jpg"],
    links: {},
  },
  {
    id: "biomechanics-fem",
    title: "Modélisation par éléments finis d'un système musculosquelettique",
    org: "Biomechanics — LGBIO2040",
    period: "2026",
    category: "signal",
    tags: ["Éléments finis", "Biomécanique", "Imagerie"],
    problem:
      "Comprendre la (mal)fonction d'un système biomécanique requiert de relier structure, propriétés mécaniques et comportement fonctionnel observé.",
    solution:
      "Caractérisation expérimentale d'un tissu biomécanique puis construction d'un modèle par éléments finis, à partir d'images segmentées, pour simuler sa réponse mécanique.",
    result:
      "Modèle numérique validé qualitativement par rapport aux observations expérimentales, illustrant l'apport de la simulation à la compréhension de pathologies musculosquelettiques.",
    images: ["assets/img/projects/biomech-1.jpg"],
    links: {},
  },
  {
    id: "system-identification",
    title: "Identification d'un système dynamique en boucle fermée",
    org: "System Identification — LINMA2875",
    period: "2027",
    category: "signal",
    tags: ["Identification", "Analyse fréquentielle", "Validation de modèle"],
    problem:
      "Un système physique réel est rarement connu analytiquement : il faut construire un modèle exploitable directement à partir de mesures entrées-sorties.",
    solution:
      "Application de méthodes paramétriques et non paramétriques (analyse fréquentielle, régression, maximum de vraisemblance) pour identifier un système dynamique en boucle fermée et valider le modèle obtenu.",
    result:
      "Modèle identifié et validé par comparaison à des données de test indépendantes, avec quantification de l'incertitude et discussion de la persistance de l'excitation du signal d'entrée.",
    images: ["assets/img/projects/sysid-1.jpg"],
    links: {},
  },

  {
    id: "ml-classification",
    title: "Comparaison de classificateurs — arbres, SVM, bayésien",
    org: "Machine Learning: Classification — LINFO2262",
    period: "2027",
    category: "ml",
    tags: ["SVM", "Random Forest", "Naïve Bayes", "Évaluation ROC"],
    problem:
      "Choisir le bon algorithme de classification pour un problème donné exige une évaluation rigoureuse et comparative, pas seulement l'application d'un modèle par défaut.",
    solution:
      "Implémentation et comparaison de plusieurs familles de classificateurs (arbres de décision, forêts aléatoires, SVM à marge maximale, classifieur bayésien naïf) avec tests d'hypothèses et analyse ROC.",
    result:
      "Recommandation argumentée de l'algorithme le plus adapté selon la nature des données, appuyée par des comparaisons statistiques rigoureuses des performances.",
    images: ["assets/img/projects/ml-classif-1.png"],
    links: { github: "" },
  },
  {
    id: "ml-regression-dl",
    title: "Réduction de dimension & réseaux profonds pour données biomédicales",
    org: "Machine Learning: Regression & Deep Networks — LELEC2870",
    period: "2026",
    category: "ml",
    tags: ["CNN", "PCA / ICA", "MLP", "Sélection de variables"],
    problem:
      "Les données biomédicales sont souvent de haute dimension et bruitées : les exploiter directement avec des modèles profonds sans réduction ni sélection de variables mène à du surapprentissage.",
    solution:
      "Combinaison de techniques de réduction de dimension (PCA, ICA) et de sélection de variables avec des architectures de régression non-linéaire (MLP, RBFN, CNN) pour la prédiction et la visualisation.",
    result:
      "Pipeline de modélisation robuste avec sélection de modèle justifiée, améliorant la généralisation par rapport à une architecture profonde appliquée brute.",
    images: ["assets/img/projects/ml-regression-1.jpg"],
    links: {},
  },
  {
    id: "bioinformatics",
    title: "Inférence phylogénétique & analyse du transcriptome",
    org: "Bioinformatics — LGBIO2010",
    period: "2025",
    category: "ml",
    tags: ["HMM", "R / Bioconductor", "Phylogénie", "Biomarqueurs"],
    problem:
      "L'exploitation de données biologiques à grande échelle (séquences, expression génique) nécessite des outils bio-informatiques dédiés, souvent absents des boîtes à outils de data science classiques.",
    solution:
      "Développement en R d'algorithmes d'alignement de séquences, de modèles de Markov cachés et de construction d'arbres phylogénétiques, appliqués à l'analyse de l'expression génique et à la sélection de biomarqueurs.",
    result:
      "Pipeline reproductible sur la plateforme Inginious, avec identification de biomarqueurs candidats et arbres phylogénétiques cohérents avec la littérature de référence.",
    images: ["assets/img/projects/bioinfo-1.jpg"],
    links: {},
  },

  {
    id: "surgical-robotics-orsi",
    title: "Immersion en robotique chirurgicale",
    org: "Orsi Academy — Junior Member",
    period: "2024 — 2025",
    category: "robotics",
    tags: ["Chirurgie robotisée", "Évaluation de performance", "System modelling"],
    problem:
      "Le passage de la robotique industrielle à la robotique chirurgicale introduit des contraintes fortes de sécurité, de précision et d'interaction avec un opérateur humain.",
    solution:
      "Exposition pratique aux plateformes de chirurgie robot-assistée : modélisation système, prise en main des contrôleurs et participation à des protocoles d'évaluation de performance.",
    result:
      "Compréhension opérationnelle des contraintes de conception propres à la robotique chirurgicale, directement mobilisée dans les travaux ultérieurs en imagerie et robotique médicale.",
    images: ["assets/img/projects/orsi-1.jpg"],
    links: {},
  },
  {
    id: "mobile-robot-control",
    title: "Planification de trajectoire & contrôle d'un robot mobile",
    org: "Robot Modelling and Control — LELME2732",
    period: "2027",
    category: "robotics",
    tags: ["Cinématique", "Contrôle en boucle fermée", "Localisation"],
    problem:
      "Un robot mobile évoluant en environnement non structuré doit combiner modèle cinématique, planification de trajectoire et localisation pour se déplacer de façon fiable.",
    solution:
      "Dérivation des modèles géométrique, cinématique et dynamique du robot, synthèse d'un contrôleur de trajectoire et implémentation d'un algorithme de localisation, testés sur plateforme réelle.",
    result:
      "Robot mobile capable de suivre une trajectoire planifiée avec correction en boucle fermée, documenté dans un rapport de projet incluant démonstration vidéo.",
    images: ["assets/img/projects/mobile-robot-1.jpg"],
    links: { video: "" },
  },
  {
    id: "biorobotics",
    title: "Réplication d'un robot bio-inspiré à partir de la littérature",
    org: "Biorobotics — LMECA2335",
    period: "2027",
    category: "robotics",
    tags: ["Bio-inspiration", "Interfaces haptiques", "Simulation"],
    problem:
      "Beaucoup de résultats publiés en biorobotique restent difficiles à reproduire et à situer par rapport à l'état de l'art faute d'implémentation ouverte.",
    solution:
      "Analyse critique d'une publication scientifique sur un robot bio-inspiré, reproduction de ses résultats clés en simulation et conception du contrôleur d'une interface haptique associée.",
    result:
      "Résultats de la publication reproduits avec succès en environnement simulé, présentés lors d'une communication orale incluant une évaluation critique des limites du modèle.",
    images: ["assets/img/projects/biorobotics-1.jpg"],
    links: {},
  },
  {
    id: "multibody-dynamics",
    title: "Simulation multicorps d'un mécanisme articulé (ROBOTRAN)",
    org: "Multibody System Dynamics — LMECA2802",
    period: "2027",
    category: "robotics",
    tags: ["ROBOTRAN", "Équations DAE", "Dynamique inverse"],
    problem:
      "La conception de robots ou de véhicules à boucles cinématiques complexes nécessite une génération automatique et fiable des équations dynamiques du système.",
    solution:
      "Modélisation d'un système mécanique articulé avec ROBOTRAN : génération automatique des équations dynamiques, intégration numérique du système DAE et analyse par dynamique inverse.",
    result:
      "Modèle multicorps validé numériquement, utilisé pour analyser le comportement dynamique du mécanisme et documenté dans un rapport de projet technique.",
    images: ["assets/img/projects/multibody-1.jpg"],
    links: {},
  },
  {
    id: "medical-device-design",
    title: "Conception d'un dispositif médico-chirurgical",
    org: "Design of Medical Devices — LMECA2355",
    period: "2026",
    category: "robotics",
    tags: ["Cahier des charges", "Biocompatibilité", "Matrix Requirements"],
    problem:
      "Concevoir un dispositif médical exige d'intégrer simultanément les contraintes cliniques (ergonomie, sécurité), réglementaires (certification) et industrielles (coût, biocompatibilité).",
    solution:
      "Formulation d'un cahier des charges à partir d'une analyse de besoin clinique, état de l'art des dispositifs existants et proposition de solution en collaboration avec cliniciens, géré via Matrix Requirements.",
    result:
      "Proposition de dispositif présentée devant un jury, avec traçabilité complète des exigences cliniques et techniques dans l'outil de gestion des exigences.",
    images: ["assets/img/projects/medical-device-1.jpg"],
    links: {},
  },
];
