export const resources = {
    PERSONAL: {
        FIRST_NAME: "Remus",
        FULL_NAME: "Remus Courtenay",
        CV: {
            FILE_URI: "remus-cv.pdf",
            FILE_NAME: "Remus Courtenay Resume.pdf"
        },
        SPLASH_BLURB: "Graduate Software Engineer from UoA and certified Terraform Cloud Engineer looking for an entry level position. I’m looking forward to putting into practice the skills and theory I’ve learned and starting my career in Software Engineering.",
        SKILLS_BLURB: "As a junior software engineer, I bring a fresh perspective, a hunger for learning, and a strong foundation in the fundamentals of software development. With a solid grasp of various programming languages and frameworks, I am eager to apply my skills to real-world projects.\nMy problem-solving abilities, attention to detail, and adaptability make me an asset in tackling complex challenges and delivering efficient solutions. With a strong focus on collaboration and diversity, I am eager to bring my enthusiasm and dedication to help propel your organization towards success.",
        FACE_IMAGE: "assets/remus-face.png"
    },
    SKILLS: [
        {   
            SKILL_NAME: "Web Dev",
            FOCUS_VALUES: {
                PERSONAL: true,
                EDUCATIONAL: true,
                COMMERCIAL: true
            }
        },
        {   
            SKILL_NAME: "Dev Ops",
            FOCUS_VALUES: {
                PERSONAL: false,
                EDUCATIONAL: true,
                COMMERCIAL: true
            }
        },
        {   
            SKILL_NAME: "Agile",
            FOCUS_VALUES: {
                PERSONAL: true,
                EDUCATIONAL: true,
                COMMERCIAL: true
            }
        },
        {   
            SKILL_NAME: "Backend",
            FOCUS_VALUES: {
                PERSONAL: true,
                EDUCATIONAL: true,
                COMMERCIAL: true
            }
        },
        {   
            SKILL_NAME: "Cloud",
            FOCUS_VALUES: {
                PERSONAL: false,
                EDUCATIONAL: false,
                COMMERCIAL: true
            }
        }
    ],
    TECH: [
        "CSharp",
        "Java",
        "Ruby",
        "React",
        "SQLServer",
        "PostgreSQL",
        "Git",
        "Docker",
        "Terraform",
        "AWS",
        "Azure",
        "UiPath"
    ],
    PROJECTS:[
        {
            Name: "All"
        },
        {
            Name: "Kibo",
            ExpandedViewTitle: "NASA's Kibo\nRobot Challenge",
            ExpandedViewBodyText: "Our team embarked on an incredible journey that led us to the international finals of the esteemed Kibo Robot Programming Challenge, following our remarkable victory in the national round held in New Zealand. This prestigious competition, organized by JAXA (Japanese Aerospace Exploration Agency) in collaboration with NASA's Kibo Robot API, showcased numerous teams with exceptional talent and expertise in robotics and programming.\n\nAs the lead Java programmer within our team of ten, I spearheaded the development of innovative solutions to tackle the diverse challenges presented in the international finals. One of my key responsibilities was implementing advanced techniques for AR code and QR code recognition, enabling our robot to intelligently interact with real-world objects and information. Additionally, I led the design and implementation efforts for our robot's 3D movement and location calculations.\n\nAlthough we didn't secure the top spot, I take immense pride in our accomplishment, knowing that we stood among the elite teams from around the world.",
            CircleViewTitle: "Kibo Robot\nChallenge"
        },
        {
            Name: "AWS",
            ExpandedViewTitle: "AI/MLOps\nat Cognizant",
            ExpandedViewBodyText: "During my internship at Cognizant, I had the opportunity to work on a fascinating project that involved creating Infrastructure-as-Code using Terraform for a machine learning (ML) project hosted on AWS. Utilizing customer data from Cognizant's client Entrada, we successfully deployed a revenue optimization model for their 'Flexi-ticket' product.\n\nTo ensure data security, we implemented a private network with a Virtual Private Cloud (VPC), Network Firewall, and JWT authentication. Throughout the project, we explored the entire ML lifecycle. This involved model development, testing, training, and deployment using AWS SageMaker. To enhance the user experience, I leveraged my skills in web development to create a sleek and interactive web frontend using React, Amplify, and Figma.\n\nThis internship experience provided me with invaluable insights into the practical application of AI and ML in real-world scenarios. I honed my skills in cloud computing, ML operations, and frontend development. It was a rewarding journey that further solidified my passion for AI engineering and showcased my ability to deliver impactful solutions.",
            CircleViewTitle: "AI/MLOps\nat Cognizant"
        },
        {
            Name: "Honours",
            ExpandedViewTitle: "Modelling\nSocial Networks",
            ExpandedViewBodyText: "For the Web Enabled Simulation (WES) project, our aim was to create an open-source replica of Meta's innovative 'WW System' simulation software, to facilitate the study of social networking services. Unlike traditional simulations that rely on creating a model of reality, WES leverages a real-world software platform to simulate the behavior of a user community. In this multi-agent-based approach, each agent acts as a bot, emulating user actions and interactions.\n\nWe developed the program code for this open-source replica in Ruby using the open-source social network Mastodon as our platform. Our goal was to democratize access to the WES system, fostering collaboration and innovation within the research community.\n\nThis project not only honed our skills in software development, particularly in the context of Web-Enabled Simulation, but also deepened our understanding of machine learning applications. Collaborating closely with a partner, we successfully delivered an open-source solution that empowers researchers to study and analyze social network behavior in a controlled and isolated environment.",
            CircleViewTitle: "Agent-Based Modelling"
        }
    ],
    CONTACT:{
        facebook: {
            URL: "https://www.facebook.com/remus.courtenay/"
        },
        linkedin: {
            URL: "https://www.linkedin.com/in/remuscourtenay/"
        },
        github: {
            URL: "https://github.com/RemusCourtenay"
        },
        gmail: {
            URL: "mailto:remuscourtenay@gmail.com" 
        }
    }
}