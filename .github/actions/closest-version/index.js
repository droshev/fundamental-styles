const { execSync } = require('child_process');
const core = require('@actions/core');
const semver = require('semver');

const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('./package.json', { encoding: 'utf-8' }));
const includePrereleases = core.getInput('includePrereleases') === 'false' ? false : !!core.getInput('includePrereleases');

const run = async() => {
    const x = execSync('git for-each-ref --format \'%(refname:short)\' origin refs/tags');
    const availableVersions = x.toString()
        .split('\n')
        .map(v => semver.clean(v.replace(/'/g, '')))
        .filter(v => {
            if (!semver.valid(v)) {
                return false;
            }
            return includePrereleases ? true : !semver.prerelease(v);
        })
        .sort(semver.compare)
        .reverse();
    const firstLess = availableVersions.findIndex(v => semver.gt(packageJson.version, v));
    const lessThanVersions = availableVersions.slice(firstLess, availableVersions.length);
    core.setOutput('closestVersion', lessThanVersions[0]);
};

run();
