#!/bin/bash

echo "📁 Creating folder structure..."

# Create directories
mkdir -p src/{components,hooks,contexts,types,utils,styles,assets}
mkdir -p src/components/{layout,sections,ui,common}
mkdir -p src/assets/{images,fonts}
mkdir -p public

echo "✅ Folder structure created!"
