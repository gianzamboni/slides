import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup((monaco) => {
  const testUtils = `
declare type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
declare type Expect<T extends true> = T;
`;

  // Provide global types for all Monaco TypeScript models
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
  );

  // Ignore "unused" diagnostics in the editor
  monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
    noUnusedLocals: false,
    noUnusedParameters: false,
  });
  monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
    diagnosticCodesToIgnore: [2737, 6133, 6192, 6196],
  });

  return {
    editorOptions: {
      renderWhitespace: "none",
      lineNumbers: "on",
      renderLineHighlight: "none",
    }
  }
})