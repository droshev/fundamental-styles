const core = require('@actions/core');
const npmPublish = require('@jsdevtools/npm-publish');
const { resolve } = require('path');

const packagePaths = core.getInput('packagePaths').split(',').map(path => resolve(__dirname, `../../../${path}/package.json`));
const isPrerelease = core.getInput('isPrerelease');
const npmToken = core.getInput('token');

const run = async() => {
    for (const packagePath of packagePaths) {
        const result = await npmPublish({
            package: packagePath,
            token: npmToken,
            tag: isPrerelease ? 'prerelease' : 'latest',
            dryRun: true
        });
        core.info(`Published ${result.package}@${result.version}`);
    }
};

run();
