# Interview task: KeyField

An order form with a "Generate key" button. The `KeyField` component is imported
from `src/lib`, which stands in for the internal component library published
with semantic versioning.

## Moving it to StackBlitz

1. Open https://stackblitz.com/fork/vitejs-vite-react-ts
2. Replace the contents of `package.json`, `src/main.tsx` and `src/App.tsx` with the files from this folder.
3. Create `src/lib/KeyField.tsx` and `src/lib/README.md`.
4. Wait for the dependencies to install, then click the button in the preview.
5. Save the project (Fork / Save) and put the link into the interview document.

`index.html`, `vite.config.ts` and `tsconfig.json` already exist in the template and need no changes.

## Symptom

After clicking "Generate key" the "Form state" line shows the new value while
the field still shows the old one. Typing into the field works.
