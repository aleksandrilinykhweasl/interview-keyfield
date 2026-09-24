# Interview task: KeyField

An order form with a "Generate key" button. The `KeyField` component is imported
from `src/lib`, which stands in for the internal component library published
with semantic versioning.

## Open in StackBlitz

https://stackblitz.com/github/aleksandrilinykhweasl/interview-keyfield

StackBlitz clones this repository, installs the dependencies and starts the dev
server. Nothing is saved back: every visit starts from the current `main`.

## Run locally

```bash
npm install
npm run dev
```

## Symptom

After clicking "Generate key" the "Form state" line shows the new value while
the field still shows the old one. Typing into the field works.
