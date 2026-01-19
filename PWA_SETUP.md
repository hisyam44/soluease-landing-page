# PWA Setup Guide

Your Soluease application is now configured as a Progressive Web App (PWA). Here's what has been set up:

## What's Been Added

### 1. **PWA Configuration**

- **Vite PWA Plugin**: Automatically generates service workers and handles caching strategies
- **Service Worker**: Custom service worker with intelligent caching strategies
- **Manifest File**: Defines app metadata, icons, and shortcuts

### 2. **Files Created**

- `public/manifest.json` - PWA manifest with app metadata
- `public/service-worker.js` - Custom service worker for offline support
- `src/service-worker-register.ts` - Service worker registration module

### 3. **Files Modified**

- `vite.config.ts` - Added PWA plugin configuration
- `index.tsx` - Added service worker registration
- `index.html` - Added PWA meta tags for iOS and Android

## PWA Features

✅ **Offline Support** - App works offline with cached assets  
✅ **Installable** - Users can install as native app on mobile/desktop  
✅ **Auto-Update** - Service worker automatically updates cached assets  
✅ **Fast Loading** - Cache-first strategy for static assets  
✅ **Network-First API** - Fresh data when online, cached fallback when offline  
✅ **App Shortcuts** - Quick access to Portfolio and Privacy Policy  
✅ **Adaptive Icons** - Proper icon rendering on different devices

## Next Steps: Add Icons & Screenshots

You need to add the following image files to the `public/` directory:

### Required Icons

- `icon-192x192.png` - Square icon (192×192px)
- `icon-512x512.png` - Square icon (512×512px)
- `icon-192x192-maskable.png` - Maskable icon (192×192px) for adaptive icons
- `icon-512x512-maskable.png` - Maskable icon (512×512px) for adaptive icons
- `icon-96x96.png` - Icon for app shortcuts

### Optional Screenshots

- `screenshot-540x720.png` - Mobile screenshot (540×720px)
- `screenshot-1280x720.png` - Desktop screenshot (1280×720px)

**Icon Tips:**

- Use PNG format with transparent background
- Maskable icons should have the important content in the center (within a 80% safe zone)
- All icons should be square

## Testing the PWA

### In Development

```bash
npm run build
npm run preview
```

Then open the app and:

1. Look for the "Install" button in your browser
2. Check DevTools → Application → Service Workers to see registration

### On Mobile

1. Open the app in Chrome/Safari on Android/iOS
2. Tap "Add to Home Screen" or "Install App"
3. The app will appear as a native application

## Caching Strategy

- **Static Assets**: Cache-first (CSS, JS, HTML, fonts)
- **API Calls**: Network-first (fresh data when online)
- **Google Fonts**: Cached for 365 days
- **Old Caches**: Automatically cleaned up on update

## Troubleshooting

If the service worker doesn't register:

1. Check browser console for errors
2. Ensure HTTPS is used in production
3. Check DevTools → Application → Service Workers
4. Clear browser cache and reload

For more info, visit: https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/
