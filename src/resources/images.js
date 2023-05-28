import { experienceNames, projectNames, techNames } from "./shared";

const imagesFolder =        "assets/";
const backgroundsFolder =   imagesFolder + "backgrounds/";

const iconsFolder =         imagesFolder + "icons/";
const techsFolder =         iconsFolder + "techs/";
const experiencesFolder =   iconsFolder +"experiences/";

const projectsFolder            = imagesFolder + "projects/";
const projectsLargeFolder       = projectsFolder + "1145/";
const projectsSmallFolder       = projectsFolder + "557/";
const projectsLargeCircleFolder = projectsLargeFolder + "circular/dark/";
const projectsSmallCircleFolder = projectsSmallFolder + "circular/";



function buildProjectImagePathData(largeCircleFolder, smallCircleFolder, projectNames) {
    const projectData = {};

    for (const projectName of projectNames) {
        const projectPath = {
            EXPANDED: largeCircleFolder + projectName.toLowerCase() + ".png",
            CIRCLE: smallCircleFolder + projectName.toLowerCase() + ".png"
        }
        projectData[projectName.toUpperCase()] = projectPath;
    }
    return projectData;
}


function buildFocusImagePathData(baseFolderPath, imageNames) {
    const imageData = {};

    for (const imageName of imageNames) {
        const imagePath = {
            DEFAULT:    baseFolderPath + "default/" + imageName.toLowerCase() + ".png",
            FOCUS:      baseFolderPath + "focus/" + imageName.toLowerCase() + ".png"
        };

        imageData[imageName.toUpperCase()] = imagePath;
    }
    return imageData;
}

export const layout = {
    TECH_DIVIDER: imagesFolder + "tech-divider.png" 
}

export const backgrounds = {
    CIRCLE_VIEW_BORDER:     backgroundsFolder + "project-circle.png",
    EXPANDED_VIEW_BORDER:   backgroundsFolder + "project-expanded.png",
    PROJECTS:               backgroundsFolder + "projects-shapes.png",
    SKILLS:                 backgroundsFolder + "skills-shapes.png",
    SPLASH:                 backgroundsFolder + "splash-shapes.png",
    FOOTER:                 backgroundsFolder + "footer-shapes.png"
};

export const icons = {
    LEFT_ARROW: iconsFolder + "arrow-left.png",
    RIGHT_ARROW: iconsFolder + "arrow-right.png",
};

// Placeholder
export const footerIcons = {}

export const projectImages = buildProjectImagePathData(projectsLargeCircleFolder, projectsSmallCircleFolder, projectNames)
export const techs = buildFocusImagePathData(techsFolder, techNames);
export const experiences = buildFocusImagePathData(experiencesFolder, experienceNames);