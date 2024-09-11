/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const paths = path.split('/')
    const result = []
    for (const p of paths) {
        switch (p) {
            case '':
            case '.':
                break
            case '..':
                result.pop()
                break
            default:
                result.push(p)
        }
    }

    return '/' + result.join('/')
};