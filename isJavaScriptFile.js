function isJavaScriptFile(fileName) {
    if (typeof fileName !== 'string') {
        return 'Enter a string type value.'
    }
    else {
        const doesEndsWithJS = fileName.endsWith('.js');
        return doesEndsWithJS;
    }
}
console.log(isJavaScriptFile('app.js'));
console.log(isJavaScriptFile('index.html'));
console.log(isJavaScriptFile(1));