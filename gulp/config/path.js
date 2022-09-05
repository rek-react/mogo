const sourceFolder = './src'
const buildFolder = './build'

export const path = {
    src: {
        html: `${sourceFolder}/*.html`,
        scripts: `${sourceFolder}/assets/scripts/{App,script}.js`,
        styles: `${sourceFolder}/assets/styles/style.scss`,
        images: `${sourceFolder}/assets/images/**/*.{jpeg,jpg,png,gif,svg,ico}`,
    },
    build: {
        html: `${buildFolder}/`,
        scripts: `${buildFolder}/assets/scripts/`,
        styles: `${buildFolder}/assets/styles/`,
        images: `${buildFolder}/assets/images/`,
        fonts: `${buildFolder}/assets/fonts/`
    },
    watch: {
        html: `${sourceFolder}/**/*.html`,
        scripts: `${sourceFolder}/assets/scripts/**/*.js`,
        styles: `${sourceFolder}/assets/styles/**/*.scss`,
        images: `${sourceFolder}/assets/images/**/*.{jpeg,jpg,png,gif,svg}`,
    },
    scrFolder: sourceFolder,
    reset: buildFolder,
}