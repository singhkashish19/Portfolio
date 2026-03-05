#!/bin/bash
# Quick setup and development commands for the portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Type checking
tsc

# Check for unused imports and fix them (optional)
npm run lint

echo "✓ Portfolio setup complete!"
echo "🚀 Run 'npm run dev' to start the development server"
echo "📦 Run 'npm run build' to create production build"
