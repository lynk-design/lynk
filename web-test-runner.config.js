import { esbuildPlugin } from '@web/dev-server-esbuild';
import { playwrightLauncher } from '@web/test-runner-playwright';
import { globbySync } from 'globby';

export default {
  rootDir: '.',
  files: 'src/**/*.test.ts',
  concurrency: 1,
  concurrentBrowsers: 1,
  nodeResolve: true,
  testsFinishTimeout: 20000,
  plugins: [
    esbuildPlugin({
      ts: true,
      target: 'auto'
    })
  ],
  browsers: [
    playwrightLauncher({ product: 'chromium' }),
    playwrightLauncher({ product: 'firefox' }),
    playwrightLauncher({ product: 'webkit' })
  ],
  testRunnerHtml: testFramework => `
    <html lang="en-US">
      <head></head>
      <body>
        <script type="module" src="dist/lynk.js"></script>
        <script type="module" src="${testFramework}"></script>
      </body>
    </html>
  `,
  // Create a named group for every test file to enable running single tests.
  // If a test file is `split-panel.test.ts` then you can run `npm run test -- --group split-panel` to run only that file's tests
  groups: globbySync('src/**/*.test.ts').map(path => {
    const groupName = path.match(/^.*\/(?<fileName>.*)\.test\.ts/).groups.fileName;
    return {
      name: groupName,
      files: path
    };
  })
};
