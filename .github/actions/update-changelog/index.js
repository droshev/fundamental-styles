const conventionalChangelog = require('conventional-changelog');
const fs = require('fs');
const run = async() => {
    const changelog = await conventionalChangelog({
        preset: 'angular',
        releaseCount: 0,
        prerelease: 'rc',
        releaseRules: [
            {
                type: 'docs',
                release: 'patch'
            }
        ]
    });
    changelog.pipe(fs.createWriteStream('CHANGELOG.md'));
};

run();
