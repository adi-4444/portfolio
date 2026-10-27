# Adi Narayana Reddy — Portfolio

A responsive Software Developer portfolio built with React 19, Vite 8, plain CSS, and React Icons. The design uses native system typography and light/dark themes, an experience-first layout, a compact early-project archive, and an interactive portfolio terminal.

## Development

```sh
npm ci
npm run dev
```

`npm start` is also available as an alias. The development server opens at `http://localhost:5173`. If that port is occupied, Vite prints the next available port in the terminal.

## Production

```sh
npm run build
```

Deploy the generated `dist/` directory to a static host. Preview the production build locally with `npm run preview`.

For a subdirectory deployment, build with a matching base path, for example `npm run build -- --base=/portfolio/`.

Use Node.js 20.19+ or 22.12+ (Node.js 24 is supported).

## Cloudflare Pages

Use the repository root and these build settings:

| Setting | Value |
| --- | --- |
| Production branch | `master` |
| Framework preset | React (Vite) |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | Leave blank (repository root) |

Node.js 22.23.4 and npm 10.9.9 are compatible with this project. After pushing a change, deploy the latest commit rather than retrying an older Create React App deployment. The build log should run `vite build`.

See [Cloudflare’s build configuration documentation](https://developers.cloudflare.com/pages/configuration/build-configuration/).

## Updating content

- Edit `src/data/profile.js` to update experience, technical skills, AI tools, terminal responses, and the contact email.
- Edit `src/data/projects.json` to change project titles, descriptions, technology tags, categories, and links. The first four projects are featured by default.
- Put project screenshots in `public/projects/` and reference their paths in the project data. Images are optimized WebP files and load lazily.
- Edit the components in `src/components/` for the introduction, biography, toolkit, résumé, social links, and contact address.
- Update the page title and social metadata in `index.html`.
- Visual tokens and typography live in `src/index.css`; layouts and responsive styles live in `src/App.css`.

Contact links open the visitor’s email app. The copy action uses the Clipboard API, with feedback when clipboard access is unavailable. No contact form service or backend is required.

The page includes keyboard focus styles, a skip link, a collapsible mobile navigation, project filters, and reduced-motion support. Typography uses the operating system’s native sans-serif fonts and Menlo/SF Mono for the terminal. Light mode is the default; the theme toggle remembers an explicit choice in local storage.

The macOS zsh-style terminal starts with a prompt. Type `select` to open a bullet menu, use arrow keys and Enter to select a section, or enter `about`, `experience`, `stack`, `ai`, `projects`, or `contact` directly. Slash-prefixed forms such as `/about` and `/experience` work too, including Tab completion. The prompt uses `adi@macbook`. Responses stream into the terminal; reduced-motion mode shows them immediately.

Use Backspace on an empty prompt, Escape, or the back button to return to the main menu. The terminal also supports `whoami`, `help`, `clear`, `back`, shell command history outside the menu, Tab completion, Ctrl+C to interrupt streaming, and Cmd/Ctrl+K to focus the prompt. It is a local portfolio interface, not a connection to the host’s shell.

Experience entries include expandable responsibility details. The approach section is separate from a compact AI capability and four-tool strip.
