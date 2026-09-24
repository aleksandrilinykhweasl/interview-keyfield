# Interview task: KeyField

A form with a key field and a "Generate key" button. The `KeyField` component
comes from the internal component library
[`@aleksandr.ilinykh.weasl/interview-ui`](https://github.com/aleksandrilinykhweasl/interview-ui),
which lives in its own repository and is published to npm with semantic
versioning.

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

The field starts with ORD-000001. After clicking "Generate key" the field still
shows ORD-000001 instead of the new key.
