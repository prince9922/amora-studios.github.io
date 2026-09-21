# Amora Studios — Latest Static Store Features

This build extends the Phase 1 + Phase 2 static storefront.

## Commerce
- Persistent cart with `localStorage`
- Wishlist with `localStorage`
- Product search
- Recently viewed products
- Quick Add to Cart
- WhatsApp checkout
- ₹99 shipping below ₹499; free shipping at/above ₹499
- Prepaid orders only

## Personalization
- All products treated as personalized/photo-based
- Upload 1–6 photos
- Browser-side image compression and preview
- Name/names, quote/text and special instructions
- Lightweight photo data stored with cart item for preview
- Photos can be attached manually in WhatsApp after checkout

## Reviews
- Sample ratings and reviews on every product
- Mixed star ratings, names, locations and review lengths
- Product-specific review wording
- Marked as sample reviews until a real review backend is connected

## Themes
- Light/dark mode
- Theme preference persists with `localStorage`

## Events
The old empty Category dropdown is now **Events**.

Events include:
- Birthday
- Anniversary
- Friendship
- Special Day
- Gratitude Day
- Mother's Day
- Father's Day
- Valentine's Day
- Wedding
- Farewell

Each event contains a mixed selection of the existing real Amora products (no generated/broken product images are required).

## Amora Assistant
A static, product-aware shopping chatbot is included.

It can:
- Recommend products from the real catalogue
- Filter by event, product category and budget
- Understand common Hindi/Hinglish phrases
- Explain customization and photo requirements
- Explain shipping/delivery
- Explain prepaid payment rules
- Link to the refund policy
- Show cart/wishlist status
- Add recommended products to cart
- Open product pages
- Open WhatsApp support

It does **not** require an AI API key. It is a client-side assistant. A future secure API/backend can replace its response engine without replacing the UI.

## Product page bug fix
The main product image container now has a fixed aspect ratio and no longer stretches vertically when the personalization/photo upload section grows.

## Frame information
- A4: 21 × 29.7 cm
- A5: 14.8 × 21 cm
- A6: 10.5 × 14.8 cm
- 4×4 inch: 10.16 × 10.16 cm
- Frame colours: Black and White

## Delivery information used by the site
- Preparation: approximately 24 hours
- Normal delivery: approximately 5–6 days across India
- Delhi NCR same-day delivery: applicable Porter charge paid by customer
- Free shipping: ₹499+
- Shipping below ₹499: ₹99
- COD: not available
- Prepaid: UPI, online payment and credit/debit card


## Latest patch
- Dark mode contrast fixed for hero, footer and home CTA.
- Product page left media area now includes rating/preparation/delivery information and recently viewed/similar products to avoid unused space.
- Customer feedback ratings are limited to 3–5 stars; "sample reviews" wording removed from the UI.
