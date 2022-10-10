/* eslint-disable no-console */
const { lstatSync, readdirSync, writeFileSync } = require('fs');
const path = require('path');
const srcPath = path.join(__dirname, '../stories');
const babelParser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const fs = require('fs');
const rimraf = require('rimraf');

console.info('Visual stories 👀');
console.info('  Trying to clean/remove all visual stories. 🗑');
const themes = [
    { value: 'sap_fiori_3', title: 'Quartz Light' },
    // { value: 'sap_fiori_3_dark', title: 'Quartz Dark' },
    // { value: 'sap_fiori_3_hcw', title: 'High Contrast White' },
    { value: 'sap_fiori_3_hcb', title: 'Quartz High Contrast Black' },
    { value: 'sap_horizon', title: 'Morning Horizon (Light)' }
];
rimraf('**/*.visual.js', (rimRafError) => {
    if (rimRafError) {
        console.error('    Unable to clean all visual stories!! ❌', rimRafError);
    } else {
        console.info('    Removed all visual stories. ✅');
    }

    console.info('  Trying to build all visual stories. 🏗');

    const isComponentDirectory = (source) => {
        const ignoredDirectories = ['utils', 'Docs', 'docs', 'BTP Experimental Design'];
        return lstatSync(source).isDirectory() && !ignoredDirectories.some((ignored) => source.includes(ignored));
    };

    try {
        const componentDirs = readdirSync(srcPath)
            .map((name) => path.join(srcPath, name))
            .filter(isComponentDirectory)
            .map((directory) => {
                return {
                    path: `${directory}/`,
                    fileNames: readdirSync(`${directory}/`)
                };
            });

        const getDependentComponents = (storyFile) => {
            return new Promise((resolve, reject) => {
                try {
                    const data = fs.readFileSync(storyFile, { encoding: 'utf8' });
                    try {
                        const ast = babelParser.parse(data, {
                            sourceType: 'module'
                        });
                        traverse(ast, {
                            ObjectProperty: function(astPath) {
                                const identifier = astPath.node.key || {};
                                const value = astPath.node.value || {};
                                if (identifier.name === 'components') {
                                    let depNamesArr = 'empty';
                                    if (value.type === 'ArrayExpression') {
                                        const dependencies = value.elements || [];
                                        depNamesArr = dependencies.map((eachDependency) => {
                                            if (eachDependency.value && eachDependency.value.trim().length) {
                                                return eachDependency.value;
                                            }
                                            return '';
                                        });
                                        resolve(depNamesArr);
                                    }
                                }
                            }
                        });
                    } catch (parseIssue) {
                        console.error(parseIssue);
                        const warningMsg = `ERROR while parsing ${storyFile} in build-visual-stories.js`;
                        console.warn(warningMsg);
                        const usedComponentsJsPath = path.parse(storyFile).dir + '/usedComponents.js';
                        console.info(`Trying to access ${usedComponentsJsPath} to get dependent components list`);
                        try {
                            const { 'default': components } = require(usedComponentsJsPath);
                            if (Array.isArray(components)) {
                                resolve(components);
                            } else {
                                reject(parseIssue);
                            }
                        } catch (e) {
                            reject(parseIssue);
                        }
                    }
                } catch (err) {
                    const errorMSg = `ERROR while reading ${storyFile} in build-visual-stories.js`;
                    // eslint-disable-next-line no-console
                    console.error(errorMSg, err);
                    reject(errorMSg);
                }
            });
        };

        // For every component directory.
        componentDirs.map((directory) => {
            // Loop through its files.
            directory.fileNames.map(async(fileName) => {
                // get only stories.js files
                if (fileName.includes('.stories.js')) {
                    try {
                        // Grab the component name
                        const componentName = fileName.substr(0, fileName.indexOf('.'));
                        const prettyCompName = componentName
                            .split('-')
                            .map((str) => str[0].toUpperCase() + str.substr(1))
                            .join(' ');
                        const visualStoryName = componentName
                            .split('-')
                            .map((str) => str[0].toUpperCase() + str.substr(1))
                            .join('');
                        const dependentCompsArr = await getDependentComponents(`${directory.path}/${fileName}`);
                        const dependentComps =
                            dependentCompsArr && dependentCompsArr.length
                                ? dependentCompsArr.map((name) => `'${name}'`).join(', ')
                                : false;

                        themes.forEach((theme) => {
                            const { value: themeVal, title } = theme;
                            const fileContents = `import { withThemeProvider } from '../../.storybook/custom/decorators/themeProvider.js';
import * as Case from 'case';
import * as stories from './${componentName}.stories.js';

export default {
    title: 'Visual/${title}/${prettyCompName}'${dependentComps ? ',' : ''}
    ${
    dependentComps
        ? `parameters: {
        components: [${dependentComps}],
        theme: '${themeVal}'
    },
    decorators: [
        withThemeProvider
    ]`
        : ''
}
};

const wrappedStory = (storyName, storyFn, direction) =>\`
<h2> \${Case.capital(storyName)} </h2>
<div dir="\${direction}">
    \${storyFn()}
</div>
<br />
<hr />
<br />
<br />\`;

export const ${visualStoryName} = () => {
    let storyNames = Object.keys(stories).filter(story => !['default', 'dev', '__namedExportsOrder'].includes(story));
    const allVisualStories = document.createElement('div');
    allVisualStories.innerHTML = storyNames.map(function(eachStoryName) {
        const eachStory = stories[eachStoryName];

        const eachStoryLTR = wrappedStory(eachStoryName, eachStory, 'ltr');

        if (eachStory && eachStory.parameters && eachStory.parameters.skipRTLSnapshot) return eachStoryLTR;

        const eachStoryRTL = wrappedStory(Case.capital(eachStoryName) + ' (Right to Left)', eachStory, 'rtl');

        return eachStoryLTR + eachStoryRTL;
    }).join('');
    return allVisualStories;
};

`;
                            // write the visual story file into the directory.
                            let visualPath = path.join(directory.path, `${componentName}-${themeVal}.visual.js`);
                            writeFileSync(visualPath, fileContents);
                        });
                    } catch (e) {
                        console.log({ e });
                        console.error(e);
                    }
                }
            });
        });
        console.info('    Built all accessibility tests. ✅');
    } catch (error) {
        console.error('    Failed to build all accessibility tests. ❌', error);
    }
});
