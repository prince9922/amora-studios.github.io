const AMORA = {
  whatsapp: "918004666834",
  categories: [
    { name: "Mugs", slug: "Mugs" },
    { name: "Bottles", slug: "Bottles" },
    { name: "Cushions", slug: "Cushions" },
    { name: "Keyrings", slug: "Keyrings" },
    { name: "Frames", slug: "Frames" },
    { name: "Magnets", slug: "Magnets" },
    { name: "Tshirts", slug: "Tshirts" }
  ],
  eventCategories: [
    { name: "Birthday", slug: "Birthday" },
    { name: "Anniversary", slug: "Anniversary" },
    { name: "Friendship", slug: "Friendship" },
    { name: "Special Day", slug: "Special Day" },
    { name: "Gratitude Day", slug: "Gratitude Day" },
    { name: "Mother's Day", slug: "Mother's Day" },
    { name: "Father's Day", slug: "Father's Day" },
    { name: "Valentine's Day", slug: "Valentine's Day" },
    { name: "Wedding", slug: "Wedding" },
    { name: "Farewell", slug: "Farewell" }
  ],
  occasionCategories: [
    "Birthday", "Anniversary", "Friendship", "Special Day", "Gratitude Day",
    "Mother's Day", "Father's Day", "Valentine's Day", "Wedding", "Farewell"
  ],
  eventProductIds: {
    "Birthday": [5,425,110,111,109,424],
    "Anniversary": [112, 11,13,22, 7, 114, 113, 18, 115, 23],
    "Friendship": [120,121,123,122, 16, 17, 19, 20, 25, 32],
    "Special Day": [2, 3, 9, 12, 16, 21, 24, 25, 28, 30],
    "Gratitude Day": [2, 9, 10, 12, 21, 24, 28, 30],
    "Mother's Day": [2, 3, 13, 16, 21, 23, 25],
    "Father's Day": [124,125,6, 9, 12, 19, 21, 28, 30],
    "Valentine's Day": [116,118,117,119, 11, 13, 18, 20, 23],
    "Wedding": [1, 4, 11, 13, 22, 23, 29],
    "Farewell": [3, 9, 12, 17, 21, 28, 30, 32]
  },
  products: [
    // MUGS
    {id:1, category:"Mugs", title:"Personalized Couple Mug", price:299, image:"assets/images/products/mug-01.png", details:"Create a beautiful personalized mug with your favourite photo or message.", features:["11 oz ceramic mug","High-quality sublimation print","Personalized with photo/text","Perfect for gifting"], gallery:["assets/images/products/mug-01.png","assets/images/products/Mugdimension.png","assets/images/products/placeorder.png"]},
    {id:2, category:"Mugs", title:"Best Mom Ever Mug", price:299, image:"assets/images/products/mug-02.png", details:"A thoughtful personalized mug for the most special mom.", features:["11 oz ceramic mug","Glossy finish","Custom name/photo option","Gift-ready packaging"], gallery:["assets/images/products/mug-02.png","assets/images/products/Mugdimension.png","assets/images/products/placeorder.png"]},
    {id:3, category:"Mugs", title:"Personalized Photo Mug", price:299, image:"assets/images/products/mug-03.png", details:"Turn your favourite memory into an everyday keepsake.", features:["11 oz ceramic mug","HD photo printing","Custom text available","Easy to clean"], gallery:["assets/images/products/mug-03.png","assets/images/products/Mugdimension.png","assets/images/products/placeorder.png"]},
      
    {id:4, category:"Mugs", title:"Mr. & Mrs. Mug Set", price:549, image:"assets/images/products/mug-04.png", details:"A coordinated mug set made for couples and anniversaries.", features:["Set of 2 mugs","Personalized design","Premium print quality","Ideal anniversary gift"], gallery:["assets/images/products/mug-04.png","assets/images/products/Mugdimension.png","assets/images/products/placeorder.png"]},
      
    {id:5, category:"Mugs", title:"Birthday Special Magic Mug", price:349, image:"assets/images/products/mug-05.png", details:"Add a personal message to make their birthday extra memorable.", features:["11 oz ceramic mug","Birthday theme","Name/photo personalization","Secure packaging"], gallery:["assets/images/products/mug-05.png","assets/images/products/magicmug.png","assets/images/products/placeorder.png"]},
      
    {id:6, category:"Mugs", title:"Custom Name Magic Mug", price:349, image:"assets/images/products/mug-06.png", details:"A clean, elegant mug personalized with a name and message.", features:["11 oz ceramic mug","Custom name","Long-lasting print","Everyday use"], gallery:["assets/images/products/mug-06.png","assets/images/products/magicmug.png","assets/images/products/placeorder.png"]},
    {id:7, category:"Mugs", title:"Forever Together Magic Mug", price:349, image:"assets/images/products/mug-07.png", details:"A romantic personalized design for couples and loved ones.", features:["11 oz ceramic mug","Couple theme","Photo + text","Gift-ready"], gallery:["assets/images/products/mug-07.png","assets/images/products/magicmug.png","assets/images/products/placeorder.png"]},
    {id:8, category:"Mugs", title:"Minimal Personalized Magic Mug", price:349, image:"assets/images/products/mug-08.png", details:"Minimal design with your name, date or short message.", features:["11 oz ceramic mug","Minimal design","Custom text","Premium finish"], gallery:["assets/images/products/mug-08.png","assets/images/products/magicmug.png","assets/images/products/placeorder.png"]},
      
      {id:109, category:"Mugs", title:"Birthday Special Personalized White Mug", price:299, image:"assets/images/products/Birthday-mug02.png", details:"Minimal design with your name, date or short message.", features:["11 oz ceramic mug","Minimal design","Custom text","Premium finish"], gallery:["assets/images/products/Birthday-mug02.png","assets/images/products/Mugdimension.png","assets/images/products/placeorder.png"]},
      
      {id:110, category:"Mugs", title:"Birthday Special Personalized White Mug", price:299, image:"assets/images/products/Birthday-mug03.png", details:"Minimal design with your name, date or short message.", features:["11 oz ceramic mug","Minimal design","Custom text","Premium finish"], gallery:["assets/images/products/Birthday-mug03.png","assets/images/products/Birthday-mug03.png","assets/images/products/placeorder.png"]},
      
      {id:111, category:"Mugs", title:"Birthday Special Personalized Magic Mug", price:399, image:"assets/images/products/Birthday-mug4.png", details:"Minimal design with your name, date or short message.", features:["11 oz ceramic mug","Minimal design","Custom text","Premium finish"], gallery:["assets/images/products/Birthday-mug4.png","assets/images/products/Birthday-mug03.png","assets/images/products/placeorder.png"]},
      
      
      {id:112, category:"Mugs", title:"Anniversory Special Personalized Magic Mug", price:399, image:"assets/images/products/anniversory-01.png", details:"Minimal design with your name, date or short message.", features:["11 oz ceramic mug","Minimal design","Custom text","Premium finish"], gallery:["assets/images/products/anniversory-01.png","assets/images/products/Mugdimension.png","assets/images/products/placeorder.png"]},
      
      {id:113, category:"Mugs", title:"Anniversory Special Personalized Magic Mug", price:399, image:"assets/images/products/anniversory-02.png", details:"Minimal design with your name, date or short message.", features:["11 oz ceramic mug","Minimal design","Custom text","Premium finish"], gallery:["assets/images/products/anniversory-02.png","assets/images/products/Mugdimension.png","assets/images/products/placeorder.png"]},

      
      {id:114, category:"Mugs", title:"Anniversory Special Personalized White Mug", price:299, image:"assets/images/products/anniversory-03.png", details:"Minimal design with your name, date or short message.", features:["11 oz ceramic mug","Minimal design","Custom text","Premium finish"], gallery:["assets/images/products/anniversory-03.png","assets/images/products/Mugdimension.png","assets/images/products/placeorder.png"]},
      
      {id:115, category:"Mugs", title:"Anniversory Special Personalized White Mug", price:299, image:"assets/images/products/anniversory-04.png", details:"Minimal design with your name, date or short message.", features:["11 oz ceramic mug","Minimal design","Custom text","Premium finish"], gallery:["assets/images/products/anniversory-04.png","assets/images/products/Mugdimension.png","assets/images/products/placeorder.png"]},
      
      
      {id:116, category:"Mugs", title:"Valentines Special Personalized Magic Mug | Pair of Two Magic Mugs", price:599, image:"assets/images/products/coupleMagic-01.png", details:"Minimal design with your name, date or short message.", features:["11 oz ceramic mug","Minimal design","Custom text","Premium finish"], gallery:["assets/images/products/coupleMagic-01.png","assets/images/products/Mugdimension.png","assets/images/products/placeorder.png"]},
      
      {id:117, category:"Mugs", title:"Anniversory Special Personalized Magic Mug | Pair of Two Magic Mugs", price:599, image:"assets/images/products/coupleMagic-02.png", details:"Minimal design with your name, date or short message.", features:["11 oz ceramic mug","Minimal design","Custom text","Premium finish"], gallery:["assets/images/products/coupleMagic-02.png","assets/images/products/Mugdimension.png","assets/images/products/placeorder.png"]},

      
      {id:118, category:"Mugs", title:"Anniversory Special Personalized White Mug | Pair of Two White Mugs", price:499, image:"assets/images/products/couplePlain-01.png", details:"Minimal design with your name, date or short message.", features:["11 oz ceramic mug","Minimal design","Custom text","Premium finish"], gallery:["assets/images/products/couplePlain-01.png","assets/images/products/Mugdimension.png","assets/images/products/placeorder.png"]},
      
      {id:119, category:"Mugs", title:"Anniversory Special Personalized White Mug | Pair of Two White Mugs", price:499, image:"assets/images/products/couplePlain-02.png", details:"Minimal design with your name, date or short message.", features:["11 oz ceramic mug","Minimal design","Custom text","Premium finish"], gallery:["assets/images/products/couplePlain-02.png","assets/images/products/Mugdimension.png","assets/images/products/placeorder.png"]},
      
      {id:120, category:"Mugs", title:"Friendship Special Personalized Magic Mug ", price:399, image:"assets/images/products/FDmagic-001.png", details:"Minimal design with your name, date or short message.", features:["11 oz ceramic mug","Minimal design","Custom text","Premium finish"], gallery:["assets/images/products/FDmagic-001.png","assets/images/products/Mugdimension.png","assets/images/products/placeorder.png"]},
      
      {id:121, category:"Mugs", title:"Friendship Special Personalized Magic Mug ", price:399, image:"assets/images/products/FDmagic-002.png", details:"Minimal design with your name, date or short message.", features:["11 oz ceramic mug","Minimal design","Custom text","Premium finish"], gallery:["assets/images/products/FDmagic-002.png","assets/images/products/Mugdimension.png","assets/images/products/placeorder.png"]},

      
      {id:122, category:"Mugs", title:"Friendship Special Personalized White Mug ", price:299, image:"assets/images/products/FDwhite-001.png", details:"Minimal design with your name, date or short message.", features:["11 oz ceramic mug","Minimal design","Custom text","Premium finish"], gallery:["assets/images/products/FDwhite-001.png","assets/images/products/Mugdimension.png","assets/images/products/placeorder.png"]},
      
      {id:123, category:"Mugs", title:"Friendship Special Personalized White Mug ", price:299, image:"assets/images/products/FDwhite-002.png", details:"Minimal design with your name, date or short message.", features:["11 oz ceramic mug","Minimal design","Custom text","Premium finish"], gallery:["assets/images/products/FDwhite-002.png","assets/images/products/Mugdimension.png","assets/images/products/placeorder.png"]},
      
      {id:124, category:"Mugs", title:"Father's Day Special Personalized White Mug ", price:299, image:"assets/images/products/FatherDaywhite-01.png", details:"Minimal design with your name, date or short message.", features:["11 oz ceramic mug","Minimal design","Custom text","Premium finish"], gallery:["assets/images/products/FatherDaywhite-01.png","assets/images/products/Mugdimension.png","assets/images/products/placeorder.png"]},
      
      {id:125, category:"Mugs", title:"Father's Day Special Personalized Magic Mug ", price:399, image:"assets/images/products/FatherDaymagic-01.png", details:"Minimal design with your name, date or short message.", features:["11 oz ceramic mug","Minimal design","Custom text","Premium finish"], gallery:["assets/images/products/FatherDaymagic-01.png","assets/images/products/Mugdimension.png","assets/images/products/placeorder.png"]},
      
      
      
      
    // BOTTLES 200+
    {id:9, category:"Bottles", title:"Personalized Photo Bottle", price:299, image:"assets/images/products/bottle-01.png", details:"Carry your favourite memory wherever you go.", features:["500 ml bottle","Personalized photo","Premium print","Secure packaging"], gallery:["assets/images/products/bottle-01.png","assets/images/products/Bottledimension.png","assets/images/products/placeorder.png"]},
    {id:10, category:"Bottles", title:"Name & Quote Bottle", price:299, image:"assets/images/products/bottle-02.png", details:"A stylish bottle with your name and favourite quote.", features:["500 ml bottle","Custom name","Quote personalization","Reusable"], gallery:["assets/images/products/bottle-02.png","assets/images/products/Bottledimension.png","assets/images/products/placeorder.png"]},
    {id:11, category:"Bottles", title:"Couple Bottle", price:599, image:"assets/images/products/bottle-03.png", details:"A personalized couple gift made for everyday use.", features:["500 ml bottle","Couple photo","HD print","Gift-ready"], gallery:["assets/images/products/bottle-03.png","assets/images/products/Bottledimension.png","assets/images/products/placeorder.png"]},
    {id:12, category:"Bottles", title:"Motivation Bottle", price:299, image:"assets/images/products/bottle-04.png", details:"A personalized bottle to keep motivation close.", features:["500 ml bottle","Custom motivational design","Premium print","Reusable"], gallery:["assets/images/products/bottle-04.png","assets/images/products/Bottledimension.png","assets/images/products/placeorder.png"]},

    // CUSHIONS 300+
    {id:13, category:"Cushions", title:"Personalized Couple Cushion", price:399, image:"assets/images/products/cushion-01.png", details:"Soft personalized cushion featuring your favourite memory.", features:["12 x 12 inch","Photo printing","Soft filling","Perfect for gifting"], gallery:["assets/images/products/cushion-01.png","assets/images/products/cushion.png","assets/images/products/placeorder.png"]},
    {id:14, category:"Cushions", title:"Heart Photo Cushion", price:399, image:"assets/images/products/cushion-02.png", details:"A heart-themed cushion designed for romantic gifting.", features:["12 x 12 inch","Heart design","Custom photo","Soft finish"], gallery:["assets/images/products/cushion-02.png","assets/images/products/cushion.png","assets/images/products/placeorder.png"]},
    {id:15, category:"Cushions", title:"Family Cushion", price:399, image:"assets/images/products/cushion-03.png", details:"Keep your family memories close with a personalized cushion.", features:["12 x 12 inch","Family photo","HD print","Soft filling"], gallery:["assets/images/products/cushion-03.png","assets/images/products/cushion.png","assets/images/products/placeorder.png"]},
    {id:16, category:"Cushions", title:"Name Cushion", price:399, image:"assets/images/products/cushion-04.png", details:"A simple personalized cushion with names and dates.", features:["12 x 12 inch","Custom names","Date personalization","Gift-ready"], gallery:["assets/images/products/cushion-04.png","assets/images/products/cushion.png","assets/images/products/placeorder.png"]},

    // KEYRINGS 400+
    {id:17, category:"Keyrings", title:"Photo Keyring", price:149, image:"assets/images/products/keyring-01.png", details:"A compact personalized photo keepsake you can carry anywhere.", features:["Photo insert","Lightweight","Durable finish","Gift-ready"], gallery:["assets/images/products/keyring-01.png","assets/images/products/circularkeychain.png","assets/images/products/placeorder.png"]},
    {id:18, category:"Keyrings", title:"Couple Keyring", price:149, image:"assets/images/products/keyring-02.png", details:"A personalized keyring made for couples.", features:["Couple design","Custom photo","Compact size","Premium finish"], gallery:["assets/images/products/keyring-02.png","assets/images/products/squareKeychain.png","assets/images/products/placeorder.png"]},
    {id:19, category:"Keyrings", title:"Name Keyring", price:149, image:"assets/images/products/keyring-03.png", details:"Personalize your everyday keys with a name or message.", features:["Custom name","Durable material","Lightweight","Easy to carry"], gallery:["assets/images/products/keyring-03.png","assets/images/products/squareKeychain.png","assets/images/products/placeorder.png"]},
    {id:20, category:"Keyrings", title:"Heart Keyring", price:149, image:"assets/images/products/keyring-04.png", details:"A heart-shaped keepsake for someone special.", features:["Heart design","Photo/text","Compact size","Gift-ready"], gallery:["assets/images/products/keyring-04.png","assets/images/products/heartkeychain.png","assets/images/products/placeorder.png"]},
      
          {id:421, category:"Keyrings", title:"Birthday Keyring", price:149, image:"assets/images/products/bd-circle-001.png", details:"Birthday Special keepsake for someone special.", features:["Circular design","Photo/text","Compact size","Gift-ready"], gallery:["assets/images/products/bd-circle-001.png","assets/images/products/heartkeychain.png","assets/images/products/placeorder.png"]},
      
          {id:422, category:"Keyrings", title:"Birthday Square Keyring", price:149, image:"assets/images/products/bd-sq-001.png", details:"A square-shaped keepsake for someone special.", features:["Heart design","Photo/text","Compact size","Gift-ready"], gallery:["assets/images/products/bd-sq-001.png","assets/images/products/heartkeychain.png","assets/images/products/placeorder.png"]},
      
          {id:423, category:"Keyrings", title:"Birthday Special Keyring", price:149, image:"assets/images/products/bd-rect-001.png", details:"A rectangle-shaped keepsake for someone special.", features:["Heart design","Photo/text","Compact size","Gift-ready"], gallery:["assets/images/products/bd-rect-001.png","assets/images/products/heartkeychain.png","assets/images/products/placeorder.png"]},
      {id:424, category:"Keyrings", title:"Birthday Special Keyring", price:149, image:"assets/images/products/bd-sq-002.png", details:"A square-shaped keepsake for someone special.", features:["Heart design","Photo/text","Compact size","Gift-ready"], gallery:["assets/images/products/bd-sq-002.png","assets/images/products/heartkeychain.png","assets/images/products/placeorder.png"]},
      
      {id:425, category:"Keyrings", title:"Birthday Special Keyring", price:149, image:"assets/images/products/bd-rect-001.png", details:"A circular-shaped keepsake for someone special.", features:["Heart design","Photo/text","Compact size","Gift-ready"], gallery:["assets/images/products/bd-circle-002.png","assets/images/products/heartkeychain.png","assets/images/products/placeorder.png"]},
      

    // FRAMES  500+
      {id:526, category:"Frames", title:"Square Photo Frame 4X4 Inch", price:149, image:"assets/images/products/miniframe-02.png", details:"A clean frame for a single meaningful photograph.", features:["Minimal design","Photo print","Premium finish","Easy display"], gallery:["assets/images/products/miniframe-02.png","assets/images/products/rawframe.png","assets/images/products/dimensionsframe.png"]},
      
    {id:521, category:"Frames", title:"A4 Personalized Photo Frame", price:299, image:"assets/images/products/frame-01.png", details:"Turn your favourite photo into an elegant display piece.", features:["A4 size","Personalized photo","Premium frame","Secure packaging"], gallery:["assets/images/products/frame-01.png","assets/images/products/frame.png","assets/images/products/placeorder.png"]},
    {id:522, category:"Frames", title:"Wooden Couple Frame", price:349, image:"assets/images/products/frame-02.png", details:"A warm wooden frame designed for couple memories.", features:["Wooden frame","Couple photo","Custom text","Tabletop display"], gallery:["assets/images/products/frame-02.png","assets/images/products/frame.png","assets/images/products/placeorder.png"]},
    {id:523, category:"Frames", title:"Memory Collage Frame", price:399, image:"assets/images/products/frame-03.png", details:"Bring multiple memories together in one beautiful frame.", features:["Photo collage","Premium finish","Custom layout","Gift-ready"], gallery:["assets/images/products/frame-03.png","assets/images/products/frame.png","assets/images/products/placeorder.png"]},
    {id:524, category:"Frames", title:"Minimal Photo Frame", price:399, image:"assets/images/products/frame-04.png", details:"A clean frame for a single meaningful photograph.", features:["Minimal design","Photo print","Premium finish","Easy display"], gallery:["assets/images/products/frame-04.png","assets/images/products/frame.png","assets/images/products/placeorder.png"]},
      
      {id:525, category:"Frames", title:"Vertical Photo Frame 12X4 Inch", price:199, image:"assets/images/products/PhotoFrame-001.png", details:"A clean frame for a single meaningful photograph.", features:["Minimal design","Photo print","Premium finish","Easy display"], gallery:["assets/images/products/PhotoFrame-001.png","assets/images/products/frame.png","assets/images/products/placeorder.png"]},
      
      {id:518, category:"Frames", title:"Vertical Photo Frame 12X4 Inch", price:199, image:"assets/images/products/PhotoFrame-002.png", details:"A clean frame for a single meaningful photograph.", features:["Minimal design","Photo print","Premium finish","Easy display"], gallery:["assets/images/products/PhotoFrame-002.png","assets/images/products/frame.png","assets/images/products/placeorder.png"]},
      
      {id:519, category:"Frames", title:"Square Photo Frame 4X4 Inch", price:149, image:"assets/images/products/miniframe-01.png", details:"A clean frame for a single meaningful photograph.", features:["Minimal design","Photo print","Premium finish","Easy display"], gallery:["assets/images/products/miniframe-01.png","assets/images/products/rawframe.png","assets/images/products/dimensionsframe.png"]},
      
      
      
     

      
      
      
      
      
    // MAGNETS 600+
    {id:25, category:"Magnets", title:"Photo Fridge Magnet", price:149, image:"assets/images/products/magnet-01.png", details:"Turn your favourite picture into a charming fridge magnet.", features:["Photo print","Magnetic backing","Compact size","Gift-friendly"], gallery:["assets/images/products/magnet-01.png","assets/images/products/squaremagnet.png","assets/images/products/placeorder.png"]},
    {id:26, category:"Magnets", title:"Couple Magnet", price:179, image:"assets/images/products/magnet-02.png", details:"A personalized couple photo magnet for everyday memories.", features:["Couple photo","Magnetic backing","HD print","Durable finish"], gallery:["assets/images/products/magnet-02.png","assets/images/products/vertical.png","assets/images/products/placeorder.png"]},
    {id:27, category:"Magnets", title:"Calendar Photo Magnet", price:179, image:"assets/images/products/magnet-03.png", details:"A personalized calendar magnet with your favourite photo.", features:["Calendar design","Photo personalization","Magnetic backing","Gift-ready"], gallery:["assets/images/products/magnet-03.png","assets/images/products/vertical.png","assets/images/products/placeorder.png"]},
    {id:28, category:"Magnets", title:"Custom Name Magnet", price:149, image:"assets/images/products/magnet-04.png", details:"Add a name, date or short message to a personalized magnet.", features:["Custom text","Magnetic backing","Premium print","Compact"], gallery:["assets/images/products/magnet-04.png","assets/images/products/horizontal.png","assets/images/products/placeorder.png"]},

    // TSHIRTS 700+
    {id:29, category:"Tshirts", title:"Personalized Couple T-Shirt", price:399, image:"assets/images/products/tshirt-01.png", details:"Custom printed t-shirt designed around your special memory.", features:["Cotton blend","Custom print","Multiple sizes","Gift-ready"], gallery:["assets/images/products/tshirt-01.png","assets/images/products/tshirt-01-2.png","assets/images/products/placeorder.png"]},
    {id:30, category:"Tshirts", title:"Custom Name T-Shirt", price:349, image:"assets/images/products/tshirt-02.png", details:"A simple personalized t-shirt with your name or text.", features:["Multiple sizes","Custom name","Premium print","Comfort fit"], gallery:["assets/images/products/tshirt-02.png","assets/images/products/tshirt-02-2.png","assets/images/products/placeorder.png"]},
    {id:31, category:"Tshirts", title:"Birthday T-Shirt", price:399, image:"assets/images/products/tshirt-03.png", details:"A fun personalized t-shirt for birthday celebrations.", features:["Birthday theme","Custom text","Multiple sizes","Durable print"], gallery:["assets/images/products/tshirt-03.png","assets/images/products/tshirt-03-2.png","assets/images/products/placeorder.png"]},
    {id:32, category:"Tshirts", title:"Best Friend T-Shirt", price:399, image:"assets/images/products/tshirt-04.png", details:"Celebrate friendship with a custom printed design.", features:["Friendship theme","Custom design","Multiple sizes","Comfort fit"], gallery:["assets/images/products/tshirt-04.png","assets/images/products/tshirt-04-2.png","assets/images/products/placeorder.png"]},
      
  ]
};
