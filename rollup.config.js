export default {
    entry: 'index.js',
    format: 'iife',
    globals: {
        jquery: '$'
    },
    external: ['jquery'],
    dest: 'build/script.js'
}