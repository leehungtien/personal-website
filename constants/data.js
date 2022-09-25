const userData = {
    urls: {
            linkedin: "https://www.linkedin.com/in/hung-tien-lee/",
            github: "https://github.com/leehungtien",
    },

    // Take note in the difference in format (list in an object) for experience
    experience: [
        {
            title: "Machine Learning Engineer Intern",
            company: "DSO National Laboratories",
            year: "2022",
            desc: `• Scripted generation of synthetic images using Blender software’s Python API
            • Utilized Data Augmentation techniques that improved test accuracy by at least 5%
            • Trained Resnet50 model on generated synthetic data for Image Classification task`,
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
    ]
}

export default userData;