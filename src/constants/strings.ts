export const HOME_PAGE_STRINGS = {
  header: "Kranthi K Chinnakotla",
  microsoft: {
    jobTitle: "Software Engineer  | Microsoft:",
    skills: [
      "Designed and implemented scalable data pipelines and a data platform supporting digital and email marketing teams, enabling customer-focused analytics and insights.",
      "Developed and maintained features for Outlook on Android, including running A/B experiments, generating scorecards, and analyzing metrics to identify performance and user engagement trends.",
      "Built a Calendar Companion Windows application from scratch, using React for the frontend and C++ for the hosting application, delivering a performant and integrated user experience.",
      "Contributed to feature development for Microsoft’s first‑party AI agent, “Researcher,” focusing on product capabilities and user-centric AI experiences.",
    ],
  },
  hughes: {
    jobTitle: "Software Engineer | Hughes:",
    skills: [
      "Developed a consumer-facing Android application for managing internet service plans and handling payments.",
      "Contributed to an Android app used by field installers to align dish antennas with satellite positioning.",
      "Integrated Android clients with Google Apigee for API management and secure backend communication.",
      "Used Firebase for remote configuration, analytics, and client-side telemetry.",
    ],
  },
  accenture: {
    jobTitle: "Team Lead | Accenture:",
    skills: [
      "Worked as a contractor for Bank of America, developing backend systems for checking and savings accounts.",
      "Implemented critical banking features such as overdraft processing, non-sufficient funds (NSF) fees, and overdraft protection fees, ensuring regulatory compliance and revenue generation.",
    ],
  },
  uncc: {
    jobTitle: "Teaching Assistant | UNC Charlotte:",
    skills: [
      "Teaching assistant for an Android development course.",
      "Answered Android-related technical questions and supported students during class.",
      "Designed and set up in-class Android application assignments.",
      "Evaluated and graded Android programming assignments.",
    ],
  },
};

export const PROJECTS_PAGE_STRINGS = {
  header: "Projects",
  projects: [
    {
      name: "Mobile Payment Solutions – Vulnerabilities in OAuth Implementations",
      description:
        "Mobile payment SDKs such as PayPal, Braintree, and Stripe commonly rely on OAuth so users authenticate with the payment provider instead of sharing passwords directly with a merchant app. The document explains three main authorization “user-agent” options on mobile—embedded WebView, the device’s native browser, or the provider’s installed app—and shows how each creates different security exposure. Key risks include credential theft and permission manipulation in WebView due to weak isolation, and token/authorization-code interception when malicious apps register competing intent filters for OAuth callback handling in browser/app-based flows. The document also illustrates real-world malware patterns (e.g., fake “Flash Player,” “Malicious Selfie App,” “Be News”) that trick users into handing over payment or identity data and recommends practical precautions such as installing only from official stores, avoiding rooting, and reviewing app permissions.",
      technologies: ["Android", "Java", "Kotlin"],
      pdf: "./src/assets/Mobile_Payment_Solutions.pdf",
    },
    {
      name: "Image Classification using Bag of Visual Words",
      description:
        "This project evaluates image classification using the Bag of Visual Words (BoVW) approach by converting visual features into a form compatible with traditional machine‑learning classifiers. Using a curated subset of the Caltech101 dataset, the study compares the effectiveness of K‑Nearest Neighbors (KNN), Naïve Bayes, and Support Vector Machines (SVM) for multi‑class object and scene recognition.A balanced dataset of 30 object categories with 1,800 images (60 training and 30 testing images per category) was selected to reduce class imbalance and computational complexity. Images were preprocessed by converting to grayscale, and local features were extracted primarily using SURF descriptors. These descriptors were clustered via K‑Means to form a visual vocabulary, enabling each image to be represented as a histogram of visual words—the core BoVW representation.The BoVW features were then used to train and evaluate three classifiers. KNN achieved the best overall performance on the full 30‑class problem, followed closely by SVM with a linear kernel, while Naïve Bayes produced slightly lower accuracy. The results highlighted that the data distribution was not sufficiently linear for SVM to consistently outperform KNN. Dimensionality reduction using PCA reduced computation time but degraded accuracy and was therefore excluded from the final pipeline.Further experiments showed that classification accuracy improves significantly when the number of classes is small relative to the number of samples, with evidence of overfitting in low‑class scenarios. The study concludes that while classical BoVW‑based methods can be effective, their performance is strongly constrained by dataset size and balance. The authors identify deep learning with transfer learning (e.g., CNNs using ImageNet features) as a promising direction for future work to achieve substantially higher accuracy.",
      technologies: ["Python", "OpenCV", "Scikit-learn"],
      pdf: "./src/assets/ImageClassification.pdf",
    },
  ],
};
