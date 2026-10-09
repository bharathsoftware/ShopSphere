
const image = (photoId) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=700&q=80`;

const catalog = {
  Fashion: {
    names: [
      "Classic Cotton T-Shirt",
      "Slim Fit Jeans",
      "Denim Jacket",
      "Running Sneakers",
      "Summer Dress",
      "Oversized Hoodie",
      "Formal Shirt",
      "Casual Chinos",
      "Women's Top",
      "Winter Sweater",
      "Track Pants",
      "Traditional Kurta",
      "Party Wear Dress",
      "Linen Shirt",
      "Everyday Leggings",
      "Winter Jacket",
      "Polo T-Shirt",
      "Cargo Trousers",
      "Midi Skirt",
      "Athletic Shorts",
      "Classic Blazer",
      "Cotton Nightwear",
      "Denim Shorts",
      "Casual Sweatshirt",
      "Ethnic Wear",
    ],
    basePrice: 499,
    images: [
      "photo-1521572163474-6864f9cf17ab",
      "photo-1542272604-787c3835535d",
      "photo-1551028719-00167b16eac5",
      "photo-1542291026-7eec264c27ff",
      "photo-1490481651871-ab68de25d43d",
    ],
    description:
      "A stylish and comfortable fashion essential for everyday wear.",
  },

  Electronics: {
    names: [
      "Wireless Headphones",
      "Smart Watch",
      "Smartphone",
      "Bluetooth Speaker",
      "Wireless Earbuds",
      "Laptop Backpack",
      "Fast Charger",
      "Mechanical Keyboard",
      "Wireless Mouse",
      "HD Monitor",
      "Power Bank",
      "Gaming Headset",
      "Tablet",
      "HD Webcam",
      "Laptop Stand",
      "Fitness Band",
      "External SSD",
      "Wi-Fi Router",
      "USB-C Hub",
      "Mini Projector",
      "Gaming Controller",
      "Digital Camera",
      "Wireless Keyboard",
      "USB Microphone",
      "Smart LED Light",
    ],
    basePrice: 799,
    images: [
      "photo-1505740420928-5e560c06d30e",
      "photo-1523275335684-37898b6baf30",
      "photo-1511707171634-5f897ff02aa9",
      "photo-1498049794561-7780e7231661",
      "photo-1583394838336-acd977736f90",
    ],
    description:
      "A practical technology product for work, entertainment and everyday life.",
  },

  Accessories: {
    names: [
      "Classic Analog Watch",
      "Pendant Necklace",
      "Sunglasses",
      "Travel Backpack",
      "Leather Wallet",
      "Crossbody Handbag",
      "Designer Eyeglasses",
      "Tote Bag",
      "Leather Belt",
      "Fashion Bracelet",
      "Travel Duffel Bag",
      "Card Holder",
      "Statement Earrings",
      "Baseball Cap",
      "Silk Scarf",
      "Laptop Sleeve",
      "Water Bottle",
      "Minimal Ring Set",
      "Leather Handbag",
      "Travel Pouch",
      "Fashion Chain",
      "Polarized Sunglasses",
      "Shoulder Bag",
      "Keychain",
      "Travel Organizer",
    ],
    basePrice: 299,
    images: [
      "photo-1523275335684-37898b6baf30",
      "photo-1611652022419-a9419f74343d",
      "photo-1509631179647-0177331693ae",
      "photo-1622560480654-d96214fdc887",
      "photo-1548036328-c9fa89d128fa",
    ],
    description:
      "A useful and stylish accessory to complete your everyday look.",
  },

  Home: {
    names: [
      "Sofa Cushion",
      "Bed Sheet Set",
      "Flower Vase",
      "Table Lamp",
      "Wall Art Print",
      "Wall Clock",
      "Coffee Mug",
      "Kitchen Storage Set",
      "Bath Towels",
      "Indoor Plant Pot",
      "Table Tray",
      "LED Desk Lamp",
      "Throw Blanket",
      "Table Runner",
      "Laundry Basket",
      "Bathroom Organizer",
      "Frying Pan",
      "Steel Water Bottle",
      "Cutlery Set",
      "Spice Rack",
      "Area Rug",
      "Decorative Mirror",
      "Storage Box Set",
      "Food Container Set",
      "Table Decor",
    ],
    basePrice: 299,
    images: [
      "photo-1555041469-a586c61ea9bc",
      "photo-1505693416388-ac5ce068fe85",
      "photo-1494438639946-1ebd1d20bf85",
      "photo-1507473885765-e6ed057f782c",
      "photo-1493663284031-b7e3aefcae8e",
    ],
    description:
      "A home essential designed to add comfort and convenience to your space.",
  },

  Beauty: {
    names: [
      "Face Moisturizer",
      "Gentle Face Cleanser",
      "Sunscreen Lotion",
      "Lip Balm",
      "Face Serum",
      "Body Lotion",
      "Shampoo",
      "Conditioner",
      "Hair Brush",
      "Makeup Brush Set",
      "Compact Mirror",
      "Cosmetic Pouch",
      "Face Mask Pack",
      "Hand Cream",
      "Bath Essentials Set",
      "Nail Care Kit",
      "Makeup Organizer",
      "Comb Set",
      "Travel Toiletry Bag",
      "Facial Roller",
      "Body Wash",
      "Hair Oil",
      "Makeup Sponge Set",
      "Cotton Pad Pack",
      "Beauty Storage Case",
    ],
    basePrice: 199,
    images: [
      "photo-1608248543803-ba4f8c70ae0b",
      "photo-1596462502278-27bfdc403348",
      "photo-1556229010-6c3f2c9ca5f8",
      "photo-1571781926291-c477ebfd024b",
      "photo-1601049541289-9b1b7bbbfe19",
    ],
    description:
      "A beauty and personal-care essential for your daily routine.",
  },

  Sports: {
    names: [
      "Yoga Mat",
      "Gym Gloves",
      "Sports Water Bottle",
      "Running Shoes",
      "Resistance Bands",
      "Skipping Rope",
      "Dumbbell Set",
      "Fitness Tracker",
      "Sports T-Shirt",
      "Training Shorts",
      "Yoga Block",
      "Gym Duffel Bag",
      "Tennis Racket",
      "Football",
      "Basketball",
      "Cricket Bat",
      "Cycling Helmet",
      "Sports Socks",
      "Exercise Ball",
      "Foam Roller",
      "Wrist Support",
      "Knee Support",
      "Hiking Backpack",
      "Sports Cap",
      "Training Cones",
    ],
    basePrice: 399,
    images: [
      "photo-1518611012118-696072aa579a",
      "photo-1571019613454-1cb2f99b2d8b",
      "photo-1461896836934-ffe607ba8211",
      "photo-1530549387789-4c1017266635",
      "photo-1517836357463-d25dfeac3438",
    ],
    description:
      "A sports and fitness essential for training and active lifestyles.",
  },
};

const products = Object.entries(catalog).flatMap(
  ([category, details], categoryIndex) =>
    Array.from({ length: 50 }, (_, index) => {
      const baseName =
        details.names[index % details.names.length];

      const variation =
        Math.floor(index / details.names.length) + 1;

      const name =
        variation === 1
          ? baseName
          : `${baseName} - Edition ${variation}`;

      const price =
        details.basePrice +
        ((index * 137 + categoryIndex * 251) % 5000);

      return {
        id: categoryIndex * 50 + index + 1,
        name,
        category,
        price,
        image: image(
          details.images[index % details.images.length]
        ),
        description: details.description,
        rating: Number(
          (4 + ((index * 7 + categoryIndex) % 10) / 10).toFixed(1)
        ),
      };
    })
);

export default products;
