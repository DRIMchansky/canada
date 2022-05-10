module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget('./src/styles/')
    eleventyConfig.addWatchTarget('./src/scripts/')

    eleventyConfig.addPassthroughCopy('src/robots.txt')
    eleventyConfig.addPassthroughCopy('src/fonts')

    return {
        dir: {
            input: 'src',
            output: 'dist',
            includes: 'includes',
            layouts: 'layouts',
            data: 'data'
        },
        dataTemplateEngine: 'njk',
        markdownTemplateEngine: false,
        htmlTemplateEngine: 'njk',
        passthroughFileCopy: true,
        templateFormats: ['md', 'njk']
    }
}
