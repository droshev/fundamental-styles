const recommendedVersion = require('conventional-recommended-bump');
const semver = require('semver');
const fs = require('fs');
const core = require('@actions/core');
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const prereleaseType = core.getInput('prereleaseType');
const releaseType = core.getInput('releaseType');
const writeFile = Boolean(core.getInput('writeFile'));
const currentVersion = packageJson.version;

const bumpedVersionType = () => {
    return new Promise((resolve, reject) => {
        recommendedVersion({
            path: './package.json',
            preset: 'angular',
            tagPrefix: 'v'
        }, (err, release) => {
            if (err) {
                return reject(err);
            }
            release.releaseType = releaseType === 'prerelease' ? `pre${release.releaseType}` : release.releaseType;
            return resolve(release);
        });
    });
};

const run = async() => {
    const release = await bumpedVersionType();
    core.info(`${release.reason}, therefore release type should be ${release.releaseType}`);

    const prerelease = release.releaseType === 'prerelease';
    const newVersion = semver.valid(release.releaseType) || semver.inc(currentVersion, release.releaseType, prerelease, prereleaseType === 'rc' ? 'rc' : 'nightly');
    core.info(`new version is ${newVersion}`);
    if (writeFile) {
        packageJson.version = newVersion;
        fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));
    }
    core.setOutput('newVersion', newVersion);
};

run();
