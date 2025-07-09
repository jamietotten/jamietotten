# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a simple static portfolio website for Jamie Totten built with vanilla HTML, CSS, and JavaScript. The site consists of:

- **index.html**: Main portfolio page with About, Showcase, and Contact sections
- **style.css**: Styling with CSS custom properties for theming and responsive design
- **script.js**: Minimal JavaScript for email obfuscation
- **README.md**: Empty file (no build documentation)

## Architecture

The project uses a straightforward static site structure:

- Single-page application with smooth scrolling navigation
- CSS custom properties for consistent theming (--primary, --accent, --background, --text)
- Responsive design with mobile-first approach
- Video embedding for project showcase
- Contact information with obfuscated email address

## Development

This is a static site with no build process, package.json, or testing framework. Files can be edited directly and viewed in a browser.

### Local Development
- Open `index.html` directly in a browser
- Use a local HTTP server for development (e.g., `python -m http.server` or Live Server extension)

### File Structure
- All styling is contained in `style.css` 
- JavaScript functionality is minimal and contained in `script.js`
- Content is embedded directly in `index.html`

## Key Design Patterns

- CSS custom properties for consistent theming
- Responsive video container with 16:9 aspect ratio
- Mobile-responsive navigation that stacks vertically
- Clean, minimal design with subtle shadows and rounded corners