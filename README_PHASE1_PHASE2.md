# Amora Studios — Static Phase 1 + Phase 2

This package preserves the original static website and adds:

## Phase 1
- localStorage cart with quantities and persistence
- wishlist
- product search
- quick Add to Cart
- category price/availability filters
- recently viewed tracking
- WhatsApp cart checkout with customer details
- shipping calculation (₹50 under ₹499; free at/above ₹499)
- product badges / optional MRP support
- Gift Finder navigation and lightweight recommendation flow

## Phase 2
- product personalization form
- name/text/instructions
- browser-side photo upload and compressed preview
- quantity control
- personalized cart entries
- personalization details included in WhatsApp order message

## Static limitations
Cart/wishlist/customer details are browser-local. There is no secure order database, authentication, payment processing, inventory synchronization, or permanent review system. These should move to the planned Node.js/Fastify/Prisma/MySQL backend later.

## Running
Open `index.html` for normal browsing. For best service-worker/PWA behavior, serve the folder through a static HTTP server (for example GitHub Pages or a local server).
