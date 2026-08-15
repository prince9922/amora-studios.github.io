AMORA STUDIOS - COMPLETE STATIC WEBSITE

Included pages
--------------
1. index.html
   Home page with:
   - Home / Products / Combo / Category / About Us header
   - Products hover dropdown
   - Category hover dropdown
   - Moving announcement ticker
   - 4-image automatic hero slider
   - 4 products from every product category
   - More option at the end of every category
   - Footer matching the supplied reference

2. category.html
   - URL example: category.html?category=Mugs
   - Shows all products in the selected category
   - Product title, price and details
   - Sorting
   - Category navigation

3. product.html
   - URL example: product.html?id=1
   - Large product image
   - 3-image thumbnail gallery structure
   - Product details and feature list
   - WhatsApp order button
   - Similar products on the right

Folder structure
----------------
amora-studios-complete-static/
  index.html
  category.html
  product.html
  README.txt
  assets/
    css/style.css
    js/app.js
    js/data.js
    images/
      hero/
      products/

How to add/change products
--------------------------
Open:
assets/js/data.js

Every product contains:
id
category
title
price
image
details
features

Replace the SVG image path with your real image path, for example:
image:"assets/images/products/my-mug.jpg"

How routing works
-----------------
Product dropdown:
category.html?category=Mugs
category.html?category=Bottles
etc.

Occasion dropdown currently routes to:
category.html?category=Birthday
category.html?category=Anniversary
etc.

You can change these hrefs later in assets/js/app.js.

Product details:
product.html?id=1
product.html?id=2
etc.

Product gallery
---------------
The product page currently creates three thumbnail slots using the same image.
Later, add image2 and image3 fields to data.js and update initProduct() in app.js
to use those real image paths.

Important
---------
This is a pure static frontend. No backend, database, cart or payment processing
is included yet. It is intentionally structured so APIs can replace the static
data later.

Brand palette is based on the existing Amora Studios design:
Primary: #5C3B2E
Accent: #B5653F
Cream: #FFFAF6
Secondary: #EADBC8


OCCASION / CATEGORY DROPDOWN PAGES
----------------------------------
The Category dropdown now has working product collections for:
- Festival Special
- Birthday
- Anniversary
- Friendship Day
- Valentines Day
- Father's Day
- Mother's Day
- Teacher's Day
- Misc

Each collection contains 4 sample products and is routed by the existing
category.html page.

Examples:
category.html?category=Birthday
category.html?category=Anniversary
category.html?category=Friendship%20Day
category.html?category=Valentines%20Day
category.html?category=Father's%20Day
category.html?category=Mother's%20Day
category.html?category=Teacher's%20Day
category.html?category=Festival%20Special
category.html?category=Misc

To replace occasion products, edit assets/js/data.js and change:
- title
- price
- image
- details
- features
- occasion

The Category dropdown therefore does not need separate HTML files for every
occasion; one reusable category template displays the correct collection.


ABOUT US PAGE
-------------
about.html has been added with the same Amora Studios theme, colors and fonts.

Sections:
- About hero / brand introduction
- Our Story
- The Amora Touch / brand values
- How It Works
- Call to action

The shared header, moving announcement ticker and footer are reused from app.js.


FUNCTIONAL FOOTER PAGES
-----------------------
contact.html, shipping-policy.html, refund-policy.html, terms.html and privacy-policy.html were added. The shared footer links to all of them. Contact links use WhatsApp, Instagram and mailto destinations.
