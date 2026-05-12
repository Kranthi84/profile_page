export const strings = {
  logo: "Kranthi Chinnakotla",

  nav: {
    intro: "Intro",
    work: "Work",
    tech: "Tech",
    reach: "Reach",
  },

  hero: {
    sectionLabel: "Selected Works",
  },

  projects: [
    {
      index: "01",
      category: "Architecture",
      title:
        "Mobile Payment Solutions – Vulnerabilities in OAuth Implementations",
      description:
        'Mobile payment SDKs such as PayPal, Braintree, and Stripe commonly rely on OAuth so users authenticate with the payment provider instead of sharing passwords directly with a merchant app. The document explains three main authorization "user-agent" options on mobile—embedded WebView, the device\'s native browser, or the provider\'s installed app—and shows how each creates different security exposure. Key risks include credential theft and permission manipulation in WebView due to weak isolation, and token/authorization-code interception when malicious apps register competing intent filters for OAuth callback handling in browser/app-based flows. The document also illustrates real-world malware patterns (e.g., fake "Flash Player," "Malicious Selfie App," "Be News") that trick users into handing over payment or identity data and recommends practical precautions such as installing only from official stores, avoiding rooting, and reviewing app permissions.',
      tags: ["Android", "Java", "Kotlin"],
      cta: "Download Project",
      downloadPath: "/src/assets/Mobile_Payment_Solutions.pdf",
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDfCeMHPTSvKNvuvTBfudS1_QWS0MZ-xE1OAvyWWZE1YDGq8rTB8B2clJ9S2FTyeFattqACLux1dGBb4wkODz4zsdY_lx-gusWImkgHzMOeVUnB-CuT_qMiBMr3YmCqRel2eQ4tBetPOMdfa-_Nm9E7TDP3QNC_4oeGzzEVDYHKOC3PE3lEbDiaQBxXmdah5KOhi0PUpdoGoWp-P_P0ESSia3gO_vbaUTK-R9AoFFK8u5EJrfbRSZicJ-cfqDoO3GZlwmRr3nxqdiI",
      imageAlt: "AI-Powered Task Manager project",
      imageDataAlt:
        "Abstract layered dark geometric structures suggesting modular architecture and machine learning data pipelines",
    },
    {
      index: "02",
      category: "Infrastructure",
      title: "Image Classification using Bag of Visual Words",
      description:
        "This project evaluates image classification using the Bag of Visual Words (BoVW) approach by converting visual features into a form compatible with traditional machine‑learning classifiers. Using a curated subset of the Caltech101 dataset, the study compares the effectiveness of K‑Nearest Neighbors (KNN), Naïve Bayes, and Support Vector Machines (SVM) for multi‑class object and scene recognition.A balanced dataset of 30 object categories with 1,800 images (60 training and 30 testing images per category) was selected to reduce class imbalance and computational complexity. Images were preprocessed by converting to grayscale, and local features were extracted primarily using SURF descriptors. These descriptors were clustered via K‑Means to form a visual vocabulary, enabling each image to be represented as a histogram of visual words—the core BoVW representation.The BoVW features were then used to train and evaluate three classifiers. KNN achieved the best overall performance on the full 30‑class problem, followed closely by SVM with a linear kernel, while Naïve Bayes produced slightly lower accuracy. The results highlighted that the data distribution was not sufficiently linear for SVM to consistently outperform KNN. Dimensionality reduction using PCA reduced computation time but degraded accuracy and was therefore excluded from the final pipeline.Further experiments showed that classification accuracy improves significantly when the number of classes is small relative to the number of samples, with evidence of overfitting in low‑class scenarios. The study concludes that while classical BoVW‑based methods can be effective, their performance is strongly constrained by dataset size and balance. The authors identify deep learning with transfer learning (e.g., CNNs using ImageNet features) as a promising direction for future work to achieve substantially higher accuracy.",
      tags: ["Python", "OpenCV", "Scikit-learn"],
      cta: "Download Project",
      downloadPath: "/src/assets/ImageClassification.pdf",
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC-taycOwNvF7kBIUkFM2KKLPUCOrc8peO1BC134ZdkkMUjqqfPNFlZqS5DZ6hvP23JlWD1GVjjuEAq9Uo4SFLSb_oRtW9Nt76ZrHrPq_V98FsVo6ZjTff-Rt1I9rcus_2MRDc3Z-ocJn25HZdhZvO83Zh15jmZucBZF_uLDGPJglScoXaYUsUg0fhEZJILUePtamJyVqS8OV5ibVNkwkVLxmO5wd16csgTe-HBaF7CZZB3sPELuN655M0_c8pmTHOyU3szRExBJyY",
      imageAlt: "Quantum Ledger Nexus project",
      imageDataAlt:
        "Deep space particle field with glowing nodes representing decentralized ledger network topology",
    },
  ],
};
