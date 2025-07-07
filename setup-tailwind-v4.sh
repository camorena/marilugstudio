#!/bin/bash

echo "🔧 Setting up Tailwind CSS v4..."

# Install Tailwind CSS v4 with the new PostCSS plugin
echo "📦 Installing Tailwind CSS v4..."
npm uninstall tailwindcss postcss autoprefixer
npm install -D tailwindcss@next @tailwindcss/postcss@next postcss@^8.4.31

# Update postcss.config.js for v4
cat > postcss.config.js << 'POSTCSS'
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
POSTCSS

# Create app.css with v4 imports
cat > src/styles/app.css << 'APPCSS'
@import "tailwindcss";

/* Custom styles */
@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

/* Component styles using Tailwind v4 syntax */
.btn-primary {
  @apply px-8 py-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors;
}

.btn-secondary {
  @apply px-8 py-4 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors;
}

.section-padding {
  @apply py-20;
}

.container-custom {
  @apply container mx-auto px-4;
}

.gradient-text {
  @apply bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent;
}

.card {
  @apply bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow;
}

.input-field {
  @apply w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600;
}
APPCSS

# Update main.tsx to import the new CSS file
sed -i '' 's/import .\/styles\/index.css/import .\/styles\/app.css/g' src/main.tsx 2>/dev/null || sed -i 's/import .\/styles\/index.css/import .\/styles\/app.css/g' src/main.tsx

echo "✅ Tailwind CSS v4 configured successfully!"
echo ""
echo "Now restart your development server:"
echo "  npm run dev"
