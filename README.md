# Tailwind Voting UI

A browser-based voting interface for the **Africa Plan Foundation HOH Election**. Voters pick a candidate, live tallies update in the footer, and a results modal announces the winner.

Built as a Tailwind CSS classwork project with TypeScript handling the vote counting logic.

## Features

- Dark, responsive layout styled with Tailwind CSS
- Voter and candidate dropdowns (20 registered voters, 2 candidates)
- Instant vote confirmation after submit
- Live vote counts for **Augustine** and **Kosisochukwu**
- Results modal that names the current winner
- Type-safe election logic in TypeScript, compiled to `election.js`

## Tech stack

- HTML
- [Tailwind CSS](https://tailwindcss.com/) (CDN in the page, CLI available locally)
- TypeScript
- Vanilla JavaScript (ES modules)

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- A local static file server (because `election.js` loads as an ES module)

### Install

```bash
git clone https://github.com/Omajesty/Tailwind-Voting-UI.git
cd Tailwind-Voting-UI
npm install
```

### Run the app

Open `index.html` through a local server, not as a `file://` URL.

If you have Python installed:

```bash
python -m http.server 5500
```

Then visit [http://localhost:5500](http://localhost:5500).

Alternatively, use the Live Server extension in VS Code / Cursor.

### Compile TypeScript

Edit `election.ts`, then compile:

```bash
npx tsc
```

This writes `election.js`, which `index.html` loads.

### Optional: rebuild Tailwind CSS

The live page currently uses the Tailwind CDN. If you want a compiled stylesheet from `src/input.css`:

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

## How it works

1. Choose a voter name and a candidate.
2. Submit the form. The vote is added to an in-memory poll and the footer counters update.
3. Open **Check Result** to see the candidate with the most votes.

Votes live only in the current browser session. Refreshing the page resets the tally.

## Project structure

```
.
├── index.html       # Voting UI
├── election.ts      # Vote counting and DOM bindings (source)
├── election.js      # Compiled JavaScript used by the browser
├── tsconfig.json    # TypeScript compiler options
├── src/
│   ├── input.css    # Tailwind entry file
│   └── output.css   # Compiled CSS (optional)
└── img/
    └── left-bg.jpg  # Hero image
```

## License

ISC
