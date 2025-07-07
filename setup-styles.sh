#!/bin/bash
# logo-setup.sh - Script to set up logo files for Marilu G Studio

echo "🎨 Setting up logo files for Marilu G Studio..."

# Check if logos directory exists in public
if [ -d "public/logos" ]; then
    echo "✓ Found logos directory at public/logos"
    
    # Check for logo files
    if [ -f "public/logos/logo-light.png" ] && [ -f "public/logos/logo-dark.png" ]; then
        echo "✓ Logo files found!"
        
        # Copy to public root for compatibility
        cp public/logos/logo-light.png public/
        cp public/logos/logo-dark.png public/
        echo "✓ Copied logos to public root directory"
    else
        echo "⚠️  Logo files not found in public/logos/"
        echo "   Please ensure you have:"
        echo "   - public/logos/logo-light.png (for dark backgrounds)"
        echo "   - public/logos/logo-dark.png (for light backgrounds)"
    fi
else
    echo "❌ logos directory not found!"
    echo "   Creating directory structure..."
    mkdir -p public/logos
    echo "✓ Created public/logos directory"
    echo "   Please add your logo files:"
    echo "   - public/logos/logo-light.png (for dark backgrounds)"
    echo "   - public/logos/logo-dark.png (for light backgrounds)"
fi

# Create placeholder logos if needed (optional)
read -p "Would you like to create placeholder logos? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    # You'll need ImageMagick installed for this
    if command -v convert &> /dev/null; then
        # Create light logo placeholder
        convert -size 200x60 xc:transparent \
                -font Arial -pointsize 20 -fill white \
                -gravity center -annotate +0+0 'MARILU G STUDIO' \
                public/logos/logo-light-placeholder.png
        
        # Create dark logo placeholder
        convert -size 200x60 xc:transparent \
                -font Arial -pointsize 20 -fill '#1E1E1E' \
                -gravity center -annotate +0+0 'MARILU G STUDIO' \
                public/logos/logo-dark-placeholder.png
                
        echo "✓ Created placeholder logos in public/logos/"
        echo "  Rename them to logo-light.png and logo-dark.png when ready"
    else
        echo "⚠️  ImageMagick not installed. Skipping placeholder creation."
        echo "   Install with: brew install imagemagick (Mac) or apt-get install imagemagick (Linux)"
    fi
fi

echo "
📋 Logo Requirements:
- Format: PNG with transparent background
- Recommended height: 60-80px
- Width: Auto (maintain aspect ratio)
- logo-light.png: Light/white logo for dark backgrounds
- logo-dark.png: Dark logo for light backgrounds

🚀 Next steps:
1. Add your logo files to public/logos/
2. Restart the development server: npm run dev
3. The logos will automatically appear in Header and Footer

Done! 🎉
"