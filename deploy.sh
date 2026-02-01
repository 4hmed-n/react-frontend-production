#!/bin/bash

echo "╔════════════════════════════════════════════════════════════════════════════╗"
echo "║                    PORTFOLIO DEPLOYMENT - VERCEL                           ║"
echo "╚════════════════════════════════════════════════════════════════════════════╝"
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
    echo "✅ Vercel CLI installed!"
    echo ""
fi

echo "📦 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🚀 Ready to deploy!"
    echo ""
    echo "To deploy, run ONE of these commands:"
    echo ""
    echo "  1. For first-time deployment:"
    echo "     vercel login"
    echo "     vercel --prod"
    echo ""
    echo "  2. If already logged in:"
    echo "     vercel --prod"
    echo ""
    echo "  3. Or use Vercel Dashboard:"
    echo "     - Push to GitHub: git push origin main"
    echo "     - Go to: https://vercel.com/new"
    echo "     - Import: 4hmed-n/react-frontend-production"
    echo ""
else
    echo "❌ Build failed. Check errors above."
    exit 1
fi
