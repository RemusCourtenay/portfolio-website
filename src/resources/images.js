import { experienceNames, techNames } from "./shared";

const backgroundsFolder =   "assets/backgrounds/";
const iconsFolder =         "assets/icons/";
const techsFolder =         "assets/icons/techs/";
const experiencesFolder =   "assets/icons/experiences/";

function buildImagePathData(baseFolderPath, imageNames) {
    const imageData = {};
    for (const imageName in imageNames) {
        imageData[imageName.toUpperCase()] = {
            DEFAULT:    baseFolderPath + "default/" + imageName.toLowerCase() + ".png",
            FOCUS:      baseFolderPath + "focus/" + imageName.toLowerCase() + ".png"
        }
    }
    return imageData;
}

export const backgrounds = {
    CIRCLE_VIEW_BORDER:     backgroundsFolder + "project-circle.png",
    EXPANDED_VIEW_BORDER:   backgroundsFolder + "project-expanded.png",
    PROJECTS:               backgroundsFolder + "projects-shapes.png",
    SKILLS:                 backgroundsFolder + "skills-shapes.png",
    SPLASH:                 backgroundsFolder + "splash-shapes.png"
};

export const icons = {
    LEFT_ARROW: iconsFolder + "arrow-left.png",
    RIGHT_ARROW: iconsFolder + "arrow-right.png",
};

export const techs = buildImagePathData(techsFolder, techNames);
export const experiences = buildImagePathData(experiencesFolder, experienceNames);