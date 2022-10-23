const userData = {
    urls: {
            linkedin: "https://www.linkedin.com/in/hung-tien-lee/",
            github: "https://github.com/leehungtien",
    },

    progLangs: [
      'Python', 'C', 'C++', 'JavaScript', 'TypeScript'
    ],

    webTech: [
        'Angular', 'Next.js', 'Tailwind CSS'
    ],

    ML: [
        'PyTorch', 'scikit-learn', 'NumPy', 'pandas'
    ],

    // Take note in the difference in format (list in an object)

    experience: [
        {
            title: "Machine Learning Engineer Intern",
            company: "DSO National Laboratories",
            year: "2022",
            desc: `•	Implementing model for few-shot-learning classification task in area of limited real data
            •	Scripted generation of synthetic images using Blender software’s Python API
            •	Utilized Data Augmentation techniques and Transfer Learning`,
        },
        {
            title: "Software Engineer Intern",
            company: "Continental",
            year: "2022",
            desc: `• Spearheaded project that upgraded team’s Googletest framework based on Continental’s guidelines
            • Developed Standard Operating Procedure (SOP) on upgrading process for team’s future reference
            • Basic debugging of batch and shell script files
            • Debugged automated test cases using Robot framework for Ethernet development`,
        },
        {
            title: "Software Engineer Intern",
            company: "Standardly Pte Ltd",
            year: "2021",
            desc: `• Developed 10+ user features including user log-in and sign-up 
            • Utilized REST APIs to create services through Angular’s HttpClient
            • Handled data fetched from servers using RXJS operators`,
        },
        {
            title: "Software Engineer Intern",
            company: "Sopra Steria Asia",
            year: "2021",
            desc: `• Redesigned code base using Angular framework to develop discrete, modular site structures with a 
            focus on reusability of code to increase web page functionality
            • Improved predecessors code base to allow content in web page to always recenter despite a 
            dynamically changing window size
            • Conducted testing by mocking up API response through Swagger`,
        },
    ]
}

export default userData;