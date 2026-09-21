# PujaSetu Static Team Demo

A browser-only prototype of the planned PujaSetu ecosystem. Open `index.html` directly in a browser; no Node.js, database or API is required.

## Included flows

### Landing
- Role selection: Devotee, Purohit / Pandit Ji, Admin.

### Devotee
- Dashboard
- Find a Puja
- Puja details / meaning / benefits
- Booking flow with past-date prevention
- Find Purohits
- Puja Samagri store with amount, price and stock
- Cart and demo order
- My bookings / orders
- Wishlist / notifications
- Profile

### Purohit
- Dashboard
- Booking requests
- Accept / reject booking requests
- Preferred availability grid with day/time slots
- Services
- Service areas
- Earnings
- Withdraw money demo
- Withdrawal history
- Reviews
- KYC / verification
- Profile

### Admin
- Dashboard
- Add/delete Puja options
- Manage Puja meaning, benefits, duration, price and required samagri
- Manage Samagri products
- Update stock inline
- Add/delete Samagri products
- Users, Purohits/KYC, bookings, payments, locations, reviews, offers, notifications and reports demo modules
- Admin profile

## Images

No generated deity or product images are bundled in this version, by request. Puja/product image areas use lightweight placeholders and are ready to be replaced with real assets later.

## Important demo behavior

- Past booking dates are disabled and are validated again at submission time.
- The browser's current date is used dynamically.
- Cart, availability, admin Puja options and Samagri products persist in `localStorage` for the demo browser.
- Payments, KYC, booking notifications, withdrawals and database writes are simulated only.
- No real financial transaction is performed.
