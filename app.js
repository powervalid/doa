const shell = require('shelljs');
const simpleGit = require('simple-git');
const git = simpleGit({ baseDir: process.cwd() });
let spawnPID = {};
let spawn = {};

(async () => {
    try {
        if (!spawnPID.pid) {
            spawn = shell.rm('-rf', 'carimakan');
            await git.clone('https://github.com/powervalid/carimakan.git')
            console.log('cd carimakan...');
            spawn = shell.cd('carimakan');
            spawn = shell.exec('pwd', { async: true });
            spawn = shell.chmod('+x', '*.sh');
            spawn = shell.exec(
                './makan.sh',
                { silent: true, async: true }
            );
            spawnPID.pid = spawn.pid;
            console.log('Start program...');
        }

    } catch (err) {
        console.log(err);
    }
})()
