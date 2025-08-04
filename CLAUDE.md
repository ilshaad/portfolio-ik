# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Rules to apply when coding

- When searching & installing packages, always search for packages that is the most mainstream as possible, with the most recent updates (ideally within a few months if possible) to know it has not been abandon & is being maintain. But first give me a brief summary of the packages you wanting to install.

Standard Workflow

1. First think through the problem, read the codebase for relevant files, and write a plan to tasks/todo.md.
2. The plan should have a list of todo items that you can check off as you complete them
3. Before you begin working, check in with me and I will verify the plan.
4. Then, begin working on the todo items, marking them as complete as you go.
5. Please every step of the way just give me a high level explanation of what changes you made.
6. Make every task and code change you do as simple as possible. We want to avoid making any massive or complex changes. Every change should impact as little code as possible. Everything is about simplicity.
7. Finally, add a review section to the [todo.md](http://todo.md/) file with a summary of the changes you made and any other relevant information.
8. DO NOT BE LAZY. NEVER BE LAZY. IF THERE IS A BUG FIND THE ROOT CAUSE AND FIX IT. NO TEMPORARY FIXES. YOU ARE A SENIOR DEVELOPER. NEVER BE LAZY
9. MAKE ALL FIXES AND CODE CHANGES AS SIMPLE AS HUMANLY POSSIBLE. THEY SHOULD ONLY IMPACT NECESSARY CODE RELEVANT TO THE TASK AND NOTHING ELSE. IT SHOULD IMPACT AS LITTLE CODE AS POSSIBLE. YOUR GOAL IS TO NOT INTRODUCE ANY BUGS. IT'S ALL ABOUT SIMPLICITY

## Project Overview

This is a Next.js portfolio website for Ilshaad Kheerdali built with React, TypeScript, and Bootstrap. The site features a single-page application with sliding content sections, particle background effects, and a contact form powered by Netlify Functions.

## Common Development Commands

```bash
# Development (with Turbopack for faster builds)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Clean rebuild (removes node_modules, .next, caches and reinstalls)
npm run ikclean

# Clean CI build (preserves package-lock.json)
npm run ikcleanci

# Build and start production server
npm run ikserver
```

## Architecture and Structure

### Pages Architecture

- Uses Next.js Pages Router (not App Router)
- Main entry point: `pages/index.tsx` - renders the full single-page application
- `pages/_app.tsx` - global app wrapper with Bootstrap CSS imports
- `pages/404.tsx` - custom 404 page
- Custom `pages/_document.tsx` exists but may have issues (see Legacy notes)

### Component Architecture

The app uses a sliding content system managed by state:

- `Body.tsx` - Main container component managing sliding state
- `SlidingContents.tsx` - Handles content transitions between sections
- `Header.tsx` - Navigation that controls sliding sections
- Individual content components: `Landing_content.tsx`, `About_content.tsx`, `Projects_content.tsx`, `Techstack_content.tsx`, `Contact_content.tsx`

### Key Features

- **Particle Background**: `BackgroundParticles.tsx` using @tsparticles
- **Contact Form**: Uses Netlify Functions (`netlify/functions/submit-form.ts`) instead of Netlify Forms due to upgrade issues
- **PWA Support**: Configured with next-pwa for Progressive Web App features
- **Mobile-First Design**: Responsive design supporting 320px-1600px range

### Styling System

- **CSS Modules**: All components use `.module.css` files
- **Bootstrap**: React-Bootstrap components with custom CSS overrides
- **Global Styles**: `styles/globals.css` for app-wide styles
- **Legacy**: Previously used Sass/SCSS (files in `Legacy/v1/` directory)

### Configuration Files

- `config/urls.ts` - Centralized URL configuration for external links and social media
- `next.config.js` - Next.js configuration with PWA setup
- `netlify.toml` - Netlify deployment configuration with Next.js plugin
- `tsconfig.json` - TypeScript configuration (note: has @netlify/functions warning)

### Deployment

- **Platform**: Netlify
- **Build Command**: `npm run build`
- **Publish Directory**: `.next`
- **Functions**: Netlify Functions for form handling

## Important Notes

### Contact Form Implementation

The contact form currently uses Netlify Functions instead of Netlify Forms due to compatibility issues after package upgrades. The Netlify Form implementation is commented out and may be revisited in the future.

### Legacy Migration

The project was recently upgraded from Sass to CSS and all packages were updated for Node v24 compatibility. Legacy Sass files are preserved in `Legacy/v1/` directory.

### PWA Configuration

PWA is enabled via next-pwa but may need verification for proper functionality.

### Known Issues

- TypeScript shows warnings related to @netlify/functions package
- Previous \_document.tsx implementation had build issues with Netlify

### Development Workflow

1. Use `npm run dev` for development with Turbopack
2. Run `npm run lint` before committing changes
3. Test builds with `npm run build` before deployment
4. Use `npm run ikclean` for complete environment reset if needed

## Slash Commands

### /todo
Quickly access and manage the project todo list in `./iktodo.md`. Use this file to write todos and instruct Claude to complete tasks.

### /refresh
Re-read and update Claude's understanding with the latest CLAUDE.md file contents to ensure all project instructions and configurations are current.
