const { execSync } = require('child_process');

const name = process.argv[2];
const mode = process.argv[3] ?? 'run';

if (!mode || !name) {
    console.error("Please provide both a mode (either 'test' or 'run') and a script name.");
    process.exit(1);
}

let filePath;
let filePathForPerformance;

if (mode === 'test') {
    filePath = `./tests/${name}/${name}.test.ts`;
    filePathForPerformance = `./tests/${name}/${name}.performance.ts`;
} else if (mode === 'run') {
    filePath = `./src/${name}/${name}.index.ts`;
} else {
    console.error("Invalid mode. Use 'test' to run tests or 'run' to run a script.");
    process.exit(1);
}

try {
    if (mode === 'test') {
        execSync(`npx jest ${filePath}`, { stdio: 'inherit' });
        execSync(`ts-node ${filePathForPerformance}`, { stdio: 'inherit' });
    } else if (mode === 'run') {
        execSync(`npx ts-node ${filePath}`, { stdio: 'inherit' });
    }
} catch (error) {
    console.error(`Failed to run the ${mode} for: ${filePath}`);
    process.exit(1);
}
