# Password Generator App

Password generator app is A Next.js + TypeScript project for generating secure passwords. Includes reusable UI components, custom hooks, and styled-components theming.

## Installation

Use the node package manager [npm](https://www.npmjs.com/) to install Password Generator.

```bash
npm install
```

## Usage

```bash
npm run dev
```

## Project Structure
```text
├─ app/            # Next.js routing & main layout
├─ assets/         # SVG icons and static resources
├─ components/
│  ├─ core/        # Reusable layout helpers (Box, Spacer)
│  ├─ layout/      # Page structures (Header, Generator, Content)
│  └─ ui/          # UI primitives (Button, Checkbox, Input, Typography)
├─ hooks/          # Custom hooks (e.g., useClipboard)
├─ public/         # Public assets (images)
├─ styles/         # Global styling, theme, design variables
├─ types/          # TypeScript declarations
├─ utils/          # Utility functions (e.g., passwordUtils)
└─ views/          # Feature-focused page components
```

## Key Features

•	Generator: Creates random passwords using chosen character sets.\
•	Clipboard Hook: Copies text programmatically, with a quick success message.\
•	Responsive UI: Styled-components breakpoints ensure mobile-friendly layouts.

## License

[MIT](https://choosealicense.com/licenses/mit/)
