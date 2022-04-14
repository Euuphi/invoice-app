/*
    --- Media Queries
        1312px - 82em : Laptop

*/

// Object containing all media query sizes
const sizes = {
    laptop: "82em", // 1312px
};

/**
 * Returns an object containing all media query strings from input sizes
 *
 * @param {Object} sizes - Object of screen sizes
 * @return {Object} - Object containing media query string for all input sizes
 */
const createMediaQueries = (sizes) => {
    const mediaQueries = {};

    // Create and return object with all media  query strings
    for (const screenSize in sizes) {
        mediaQueries[screenSize] = `(max-width: ${sizes[screenSize]})`;
    }

    return mediaQueries;
};

const screen = createMediaQueries(sizes);

export default screen;
