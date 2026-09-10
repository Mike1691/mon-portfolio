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

    title: "Tool-to-retina depth estimation using OCT",
    org: "BruBotics — Research Intern",

    period: "2025 — present",

    category: "vision",

    tags: ["OCT", "3D Vision", "Shadow-based depth", "Robotic Surgery"],
    problem:

    "In robot-assisted eye surgery, surgeons lack reliable, real-time feedback on the distance between the instrument and the retina, increasing the risk of perforation during high-precision procedures.",
    solution:

    "Development of an OCT image processing pipeline combining B-scan segmentation, tool shadow detection, and 3D reconstruction to estimate tool-to-tissue depth without an additional sensor.",

    result:

    "Functional depth estimation prototype integrated into BruBotics' research on robotic eye surgery, laying the groundwork for usable depth feedback in experimental conditions.", 
    pictures: [ 
    "assets/img/projects/oct-retina-1.jpg", 
    "assets/img/projects/oct-retina-2.jpg",
    ],
    links: { github: "", video: "" },
  },
  {
    id: "medical-imaging-pipeline",

    title: "Multimodal Reconstruction Pipeline — MRI / CT / Ultrasound",

    org: "Medical Imaging — LGBIO2050",

    period: "2024",

    category: "vision",

    tags: ["MRI", "CT", "Radon Transform", "MATLAB"],

    problem:

    "Compare and correctly utilize very different medical imaging modalities (MRI, CT, ultrasound) requires understanding their physical signal formation before any processing.",

    solution:

    "MATLAB implementation of complete processing chains: filtered backprojection reconstruction from CT sinograms, k-space processing in MRI, image denoising and registration.",

    result:

    "Three evaluated technical reports, covering denoising, segmentation, and registration of medical images, with an operational understanding of the resolution/noise/contrast trade-offs between modalities.",
    images: ["assets/img/projects/medical-imaging-1.jpg"], 
    links: {},
  },
  {
    id: "computational-geometry",

    title: "Geometric Meshing — Delaunay & Voronoi Diagrams",

    org: "Computational Geometry — LMECA2170",

    period: "2024",

    category: "vision",

    tags: ["Delaunay Triangulation", "OpenGL", "Geometric Modeling"],
    problem:

    "Numerical simulation of biomedical devices (implants, anatomical structures) requires robust geometric meshes adapted to the geometry of the problem.",
    solution:

    "Implementation of Delaunay triangulation algorithms, 2D/3D convex hulls, and surface representation, with a small visualization application developed in OpenGL.",
    result:

    "Reusable meshing tools for the geometric modeling of complex structures, supporting computer-aided design applications in biomedical engineering.",
    images: ["assets/img/projects/comp-geometry-1.jpg"], 
    links: {},
  },

  {
    id: "gait-event-detection-imu",

    title: "Real-time detection of gait events by IMU — comparative study",
    org: "Master's thesis — EPL, supervisor Prof. Renaud Ronsse",
    period: "2024 — 2025",
    category: "signal",

    tags: ["IMU", "Real-time", "Kalman filter", "Adaptive oscillator", "Systematic review"],
    problem:

    "The control of prostheses and robotic rehabilitation devices depends on precise, real-time detection of key gait events (initial contact, final contact): an error of just 50 ms can desynchronize the device and reduce its clinical effectiveness.",
    solution:

    "After a systematic literature review (528 PubMed/IEEE/Scopus articles, 32 selected, 12 methods identified), implementation and comparison of two real-time algorithms — R-GED (angular velocity threshold) and Adaptive Oscillator — on IMUs placed on the tibia, hip, and pelvis, with causal Butterworth + Kalman filtering (parameters optimized by MLE and Expectation-Maximization), validated against a reference method using force plates (CdP-slope) on a treadmill at 3 and 4 km/h.",

    result:

    "R-GED achieves a correct detection rate of 95.9–100% with an average temporal error of 2 to 4.3 ms (latency under one millisecond); the Adaptive Oscillator proves more robust and biomechanically more accurate (final contact position at 56.8% of the cycle vs. target of 60%), at the cost of a slightly higher latency. The two approaches are proposed as complementary, with a potential for improvement through fusion with a Hidden Markov Model (HMM) to combine speed and robustness.",

    images: ["assets/img/projects/gait-imu-1.png", "assets/img/projects/gait-imu-2.png"], 
    links: {},
  },
  {
    id: "eeg-vibrotactile",

    title: "EEG Pattern Exploration & Vibrotactile Processing",
    org: "Neurotech, Leuven — Research Project Member",
    period: "2024 — 2025",
    category: "signal",

    tags: ["EEG", "Signal Processing", "Python", "Neurotechnology"],
    problem:

    "EEG signals and vibrotactile feedback are noisy and high-dimensional, making it difficult to identify usable patterns for neurotechnology applications.",
    solution:

    "Construction of Python pipelines for EEG preprocessing, frequency filtering, and pattern exploration, coupled with vibrotactile signal analysis for human-machine interface scenarios.",
    result:

    "Reusable analysis pipelines that enabled the isolation of relevant EEG patterns, contributing to the Neurotech team's exploratory work on sensory feedback.",
    images: ["assets/img/projects/eeg-1.jpg"], 
    links: {},
  },
  {
    id: "bioinstrumentation",

    title: "ECG/EEG Signal Analysis — Biomedical Acquisition Chain",

    org: "Bioinstrumentation — LGBIO2020",

    period: "2024",

    category: "signal",

    tags: ["ECG", "Filtering", "PCA", "Regression"],

    problem:

    "Extracting reliable clinical information (diagnosis, decision) from raw physiological signals requires a complete chain: acquisition, filtering, dimensionality reduction, and then classification.",

    solution:

    "Implementation of mono- and multivariate analysis algorithms (PCA, linear and non-linear regression, classification) applied to real biomedical signals (ECG, evoked potentials).",

    result:

    "Processing chain validated on physiological datasets, with a critical evaluation of the robustness of the selected filtering and classification methods.",
    images: ["assets/img/projects/bioinstru-1.jpg"], 
    links: {},
  },
  {
    id: "biomechanics-fem",

    title: "Finite Element Modeling of a Musculoskeletal System",
    org: "Biomechanics — LGBIO2040",
    period: "2025",
    category: "signal",
    tags: ["Finite Elements", "Biomechanics", "Imaging"],
    problem: "Understanding the (mal)function of a biomechanical system requires linking structure, mechanical properties, and observed functional behavior.",
    solution: "Experimental characterization of a biomechanical tissue followed by the construction of a finite element model, from segmented images, to simulate its mechanical response.",
    result: "Numerical model qualitatively validated against experimental observations, illustrating the contribution of simulation to the understanding of musculoskeletal pathologies.",
    images: ["assets/img/projects/biomech-1.jpg"],
    links: {},
  },
  {
    id: "system-identification",

    title: "Identification of a Closed-Loop Dynamic System",

    org: "System Identification — LINMA2875",

    period: "2025",

    category: "signal",

    tags: ["Identification", "Frequency Analysis", "Model Validation"],

    problem:

    "A real physical system is rarely known analytically: a usable model must be built directly from input-output measurements.",

    solution:

    "Application of parametric and nonparametric methods (frequency analysis, regression, maximum likelihood) to identify a closed-loop dynamic system and validate the resulting model.",

    result:

    "Model identified and validated by comparison with independent test data, with quantification of uncertainty and discussion of the persistence of the input signal excitation.",

    images: ["assets/img/projects/sysid-1.jpg"],

    links: {},
  },

  {
    id: "ml-classification",

    title: "Comparison of Classifiers — Trees, SVM, Bayesian",

    org: "Machine Learning: Classification — LINFO2262",

    period: "2026",

    category: "ml",

    tags: ["SVM", "Random Forest", "Naïve Bayes", "ROC Evaluation"],
    problem:

    "Choosing the right classification algorithm for a given problem requires rigorous comparative evaluation, not just the application of a default model.",
    solution:

    "Implementation and comparison of several classifier families (decision trees, random forests, maximum margin SVM, naive Bayesian classifier) ​​with hypothesis testing and ROC analysis.",
    result:

    "A well-reasoned recommendation of the most suitable algorithm according to the nature of the data, supported by rigorous statistical performance comparisons.",
    images: ["assets/img/projects/ml-classif-1.png"],
    links: { github: "" },
  },
  {
    id: "ml-regression-dl",

    title: "Dimensionality Reduction & Deep Networks for Biomedical Data",
    org: "Machine Learning: Regression & Deep Networks — LELEC2870",
    period: "2024",
    category: "ml",
    tags: ["CNN", "PCA / ICA", "MLP", "Variable Selection"],
    problem:

    "Biomedical data are often high-dimensional and noisy: directly exploiting them with deep models without reduction or variable selection leads to overfitting.",
    solution:

    "Combining dimensionality reduction techniques (PCA, ICA) and variable selection with nonlinear regression architectures (MLP, RBFN, CNN) for prediction and visualization.",
    result:

    "Robust modeling pipeline with justified model selection, improving generalization compared to a raw applied deep architecture.",
    images: ["assets/img/projects/ml-regression-1.jpg"],
    links: {},
  },
  {
    id: "bioinformatics",

    title: "Phylogenetic Inference & Transcriptome Analysis",

    org: "Bioinformatics — LGBIO2010",

    period: "2025",

    category: "ml",

    tags: ["HMM", "R / Bioconductor", "Phylogeny", "Biomarkers"],

    problem:

    "Large-scale exploitation of biological data (sequences, gene expression) requires dedicated bioinformatics tools, often lacking in standard data science toolkits.",

    solution:

    "Development in R of sequence alignment algorithms, hidden Markov models, and phylogenetic tree construction, applied to gene expression analysis and biomarker selection.",

    result:

    "Reproducible pipeline on the Inginious platform, with identification of candidate biomarkers and phylogenetic trees consistent with the reference literature.",

    images: ["assets/img/projects/bioinfo-1.jpg"],
    links: {},
  },

  {
    id: "surgical-robotics-orsi",

    title: "Immersion in Surgical Robotics",
    org: "Orsi Academy — Junior Member",
    period: "2024 — 2025",
    category: "robotics",

    tags: ["Robotic Surgery", "Performance Evaluation", "System Modelling"],
    problem:

    "The transition from industrial robotics to surgical robotics introduces significant constraints in terms of safety, precision, and interaction with a human operator.",
    solution:

    "Hands-on exposure to robot-assisted surgery platforms: system modeling, familiarization with controllers, and participation in performance evaluation protocols.",
    result:

    "Operational understanding of the design constraints specific to surgical robotics, directly applicable to subsequent work in medical imaging and robotics.",
    images: ["assets/img/projects/orsi-1.jpg"],
    links: {},
  },
  {
    id: "mobile-robot-control",

    title: "Trajectory Planning & Control of a Mobile Robot",

    org: "Robot Modelling and Control — LELME2732",

    period: "2025",

    category: "robotics",

    tags: ["Kinematics", "Closed-Loop Control", "Localization"],

    problem:

    "A mobile robot operating in an unstructured environment must combine kinematic modeling, trajectory planning, and localization to move reliably.",

    solution:

    "Derivation of the robot's geometric, kinematic, and dynamic models, synthesis of a trajectory controller, and implementation of a localization algorithm, tested on a real-world platform.",

    result:

    "Mobile robot capable of following a planned trajectory with closed-loop correction, documented in a project report including a video demonstration.",

    images: ["assets/img/projects/mobile-robot-1.jpg"],
    links: { video: "" },
  },
  {
    id: "biorobotics",

    title: "Replication of a bio-inspired robot from the literature",

    org: "Biorobotics — LMECA2335",

    period: "2024",

    category: "robotics",

    tags: ["Bio-inspiration", "Haptic interfaces", "Simulation"],

    problem: "Many published results in biorobotics remain difficult to reproduce and situate within the state of the art due to a lack of open implementation.",

    solution:  "Critical analysis of a scientific publication on a bio-inspired robot, reproduction of its key results in simulation, and design of the controller for an associated haptic interface.",

    result: "Results of the publication successfully reproduced in a simulated environment, presented in an oral communication including a critical evaluation of the model's limitations.",

    images: ["assets/img/projects/biorobotics-1.jpg"],
    links: {},
  },
  {
    id: "multibody-dynamics",

    title: "Multibody Simulation of an Articulated Mechanism (ROBOTRAN)",
    org: "Multibody System Dynamics — LMECA2802",

    period: "2024",

    category: "robotics",

    tags: ["ROBOTRAN", "DAE Equations", "Inverse Dynamics"],

    problem:  "The design of robots or vehicles with complex kinematic loops requires the automatic and reliable generation of the system's dynamic equations.",

    solution: "Modeling of an articulated mechanical system with ROBOTRAN: automatic generation of dynamic equations, numerical integration of the DAE system, and inverse dynamics analysis.",

    result:  "Numerically validated multibody model, used to analyze the dynamic behavior of the mechanism and documented in a technical project report.",

    images: ["assets/img/projects/multibody-1.jpg"],
    links: {},
  },
  {
    id: "medical-device-design",

    title: "Design of a Medical-Surgical Device",

    org: "Design of Medical Devices — LMECA2355",

    period: "2024",

    category: "robotics",

    tags: ["Specifications", "Biocompatibility", "Matrix Requirements"],
    problem: "Designing a medical device requires simultaneously integrating clinical (ergonomics, safety), regulatory (certification), and industrial (cost, biocompatibility) constraints.",

    Solution: "Formulation of specifications based on a clinical needs analysis, a review of existing devices, and a proposed solution in collaboration with clinicians, managed via Matrix Requirements.",

    Result: "Device proposal presented to a jury, with complete traceability of clinical and technical requirements in the requirements management tool.",

    Images: ["assets/img/projects/medical-device-1.jpg"],
    links: {},
  },
];
