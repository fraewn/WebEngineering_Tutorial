import copy from 'rollup-plugin-copy';
import resolve from '@rollup/plugin-node-resolve';

const copyConfig = {
    targets: [
        { src: 'node_modules/@webcomponents', dest: 'build/node_modules' },
        { src: 'images', dest: 'build' },
        { src: 'index.html', dest: 'build' },
        { src: 'components', dest: 'build' },
        { src: 'service-worker.js', dest: 'build' },
        { src: 'manifest.json', dest: 'build' },
    ]
}

const config = {
    input: 'run.js',
    output: {
        dir: 'build',
        format: 'es'
    },
    plugins: [
        copy(copyConfig),
        resolve(),
    ],
    preserveEntrySignatures: false,
};

export default config;