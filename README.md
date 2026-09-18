# Kreston Infra

Marketing website for Kreston Infra Projects, a civil and infrastructure construction company headquartered in Hyderabad and operating across Telangana.

The site presents Kreston's construction services, project disciplines, delivery capabilities, company information, and contact details in a responsive Next.js experience.

## Tech stack

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS
- Lucide React for interface icons
- Next Image for optimized local imagery

## Getting started

### Prerequisites

- Node.js 20 or newer
- npm

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

### Check the project

Run the TypeScript check with:

```bash
npm run check
```

Create a production build with:

```bash
npm run build
```

Start the production server after building:

```bash
npm run start
```

## Available routes

| Route | Purpose |
| --- | --- |
| `/` | Homepage and company overview |
| `/about` | Company profile and approach |
| `/services` | Civil, infrastructure, residential, fabrication, construction, and plumbing services |
| `/projects` | Project disciplines and portfolio presentation |
| `/capabilities` | Delivery capabilities and operating principles |
| `/contact` | Contact details and enquiry form |

## Project structure

```text
app/                 Next.js routes, layouts, metadata, and global styles
components/          Shared site components such as the header, footer, hero, and CTA sections
lib/data.ts           Services, capabilities, contact details, and navigation data
public/images/        Local site imagery used by the pages
```

Most repeated website content is defined in [lib/data.ts](lib/data.ts). Update that file when changing services, capabilities, navigation labels, or contact information. Add or replace local images in `public/images/` and reference them with paths beginning with `/images/`.

## Deployment

The application can be deployed to any platform that supports Next.js. For a standard Node.js deployment:

```bash
npm install
npm run build
npm run start
```

Set the production domain and any platform-specific configuration in the hosting provider. The site currently does not require environment variables for its static content or contact form presentation.

## Maintenance notes

- Keep page metadata and sitemap entries in sync when adding or renaming routes.
- Use descriptive `alt` text for new images.
- Run `npm run check` and `npm run build` before publishing changes.