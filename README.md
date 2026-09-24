# Bad Boss Business School Budget Review

A static, source-grounded budgeting workspace for the 2026 Bad Boss Business School case. It keeps the original draft visible, gives a human a Part 1 correction register, and blocks Part 2 calculations until a user has entered and approved complete management decisions.

## Local setup

This project has no runtime dependencies and does not require secrets, a database or a server account.

```bash
npm test
npm run build
npm run dev
```

Open `http://127.0.0.1:4173` after `npm run dev`.

## Model boundaries

- Source facts and original budget values are read-only in the Source data view.
- Part 1 is for corrections to existing plans and commitments only. It does not create management actions.
- Part 2 starts empty. A decision affects the preview only after the user supplies action, start month, cost, expected effect, evidence/basis and financial effects, then approves it.
- Incomplete or unapproved decisions are excluded from Part 2 calculations.
- Missing information is shown as a warning rather than silently converted into a fabricated result.
- The application uses browser local storage only. It is not server-persisted.

## Import and export

Use Export JSON in the header to save the local correction and decision register. Use Import JSON to restore a compatible file on another device. Export before clearing browser data.

## Deployment

The generated `dist/` directory is a static site and can be deployed to Vercel with standard static settings. No environment variables are required. This build was intentionally not published or pushed to an external account.

## Source materials

The model is based on the supplied `00`–`07` case documents and the workbook `02 Historical Results and Draft P&L Budget.xlsx`. Source references are shown beside the relevant tables and inputs. The application preserves the distinction between the workbook's original draft, Part 1 corrections, Part 2 user-approved decisions and calculated results.
