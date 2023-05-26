import { experienceNames, techNames } from "./shared";

const backgroundsFolder: string =   "assets/backgrounds/";
const iconsFolder: string =         "assets/icons/";
const techsFolder: string =         "assets/icons/techs/";
const experiencesFolder: string =   "assets/icons/experiences/";


type iconTypes = "DEFAULT" | "FOCUS";
type iconPaths = Record<iconTypes, string>

function buildImagePathData(baseFolderPath: string, imageNames: Array<string>): Map<string, iconPaths> {
    const imageData: Map<string, iconPaths> = new Map<string, iconPaths>();

    for (const imageName in imageNames) {
        const imagePath: iconPaths = {
            DEFAULT:    baseFolderPath + "default/" + imageName.toLowerCase() + ".png",
            FOCUS:      baseFolderPath + "focus/" + imageName.toLowerCase() + ".png"
        };

        imageData.set(imageName.toUpperCase(), imagePath);
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