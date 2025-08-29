
const products = [
  // Using accessible public shoe images
  {
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    title: "Nike Air Force 1 '07",
    reviews: "4.8 ★ (2.1k)",
    prevPrice: "$120",
    newPrice: "$99",
    company: "Nike",
    color: "White",
    category: "Sneakers"
  },
  {
    img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    title: "Nike Air Force 1 '07 Texture",
    reviews: "4.7 ★ (1.8k)",
    prevPrice: "$125",
    newPrice: "$105",
    company: "Nike",
    color: "White/Gray",
    category: "Sneakers"
  },
  {
    img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop",
    title: "Nike Air Force 1 Retro",
    reviews: "4.6 ★ (1.5k)",
    prevPrice: "$130",
    newPrice: "$115",
    company: "Nike",
    color: "Floaters White",
    category: "Sneakers"
  },
  {
    img: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400&h=400&fit=crop",
    title: "Nike Air Force 1 Mid",
    reviews: "4.5 ★ (1k)",
    prevPrice: "$135",
    newPrice: "$120",
    company: "Nike",
    color: "White/Black",
    category: "Sneakers"
  },
  {
    img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    title: "Nike Air Force 1 '07 LX",
    reviews: "4.4 ★ (950)",
    prevPrice: "$140",
    newPrice: "$125",
    company: "Nike",
    color: "White/Gold",
    category: "Sneakers"
  },

  // Running shoes
  {
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    title: "Nike Air Zoom Runner",
    reviews: "4.5 ★ (1.3k)",
    prevPrice: "$100",
    newPrice: "$85",
    company: "Nike",
    color: "Black/White",
    category: "Running Shoes"
  },
  {
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    title: "Nike Air Max Run",
    reviews: "4.6 ★ (1.1k)",
    prevPrice: "$110",
    newPrice: "$90",
    company: "Nike",
    color: "Black/Grey",
    category: "Running Shoes"
  },
  {
    img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    title: "Nike React Runner",
    reviews: "4.7 ★ (900)",
    prevPrice: "$115",
    newPrice: "$95",
    company: "Nike",
    color: "Black/Red",
    category: "Running Shoes"
  },
  {
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    title: "Nike Pegasus Shield",
    reviews: "4.5 ★ (800)",
    prevPrice: "$120",
    newPrice: "$100",
    company: "Nike",
    color: "Black/Yellow",
    category: "Running Shoes"
  },
  {
    img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop",
    title: "Nike Zoom Vomero 5",
    reviews: "4.6 ★ (700)",
    prevPrice: "$130",
    newPrice: "$115",
    company: "Nike",
    color: "Black/Blue",
    category: "Running Shoes"
  },

  // Skate and casual shoes
  {
    img: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400&h=400&fit=crop",
    title: "Nike Blazer Mid",
    reviews: "4.4 ★ (650)",
    prevPrice: "$110",
    newPrice: "$95",
    company: "Nike",
    color: "Black/White",
    category: "Skate Shoes"
  },
  {
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    title: "Nike Air Monarch IV",
    reviews: "4.2 ★ (600)",
    prevPrice: "$85",
    newPrice: "$70",
    company: "Nike",
    color: "Black/Gray",
    category: "Casual Shoes"
  },
  {
    img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    title: "Nike Tailwind 79",
    reviews: "4.3 ★ (550)",
    prevPrice: "$120",
    newPrice: "$105",
    company: "Nike",
    color: "Black/White",
    category: "Retro Running"
  },
  {
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    title: "Nike Zoom Vomero 5",
    reviews: "4.5 ★ (500)",
    prevPrice: "$125",
    newPrice: "$110",
    company: "Nike",
    color: "Black/Red",
    category: "Running Shoes"
  },
  {
    img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop",
    title: "Nike Air Ship",
    reviews: "4.1 ★ (450)",
    prevPrice: "$150",
    newPrice: "$130",
    company: "Nike",
    color: "Black/White",
    category: "Basketball Shoes"
  },

  // More sneakers
  {
    img: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400&h=400&fit=crop",
    title: "Nike Dunk Low",
    reviews: "4.6 ★ (1.4k)",
    prevPrice: "$110",
    newPrice: "$95",
    company: "Nike",
    color: "White/Blue",
    category: "Sneakers"
  },
  {
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    title: "Nike Air Monarch IV",
    reviews: "4.3 ★ (800)",
    prevPrice: "$90",
    newPrice: "$75",
    company: "Nike",
    color: "White/Blue",
    category: "Casual Shoes"
  },
  {
    img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    title: "Nike Blazer Low",
    reviews: "4.5 ★ (700)",
    prevPrice: "$100",
    newPrice: "$85",
    company: "Nike",
    color: "White/Blue",
    category: "Skate Shoes"
  },
  {
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    title: "Nike Air Tailwind",
    reviews: "4.4 ★ (650)",
    prevPrice: "$95",
    newPrice: "$80",
    company: "Nike",
    color: "White/Blue",
    category: "Retro Running"
  },
  {
    img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop",
    title: "Nike Dunk High",
    reviews: "4.7 ★ (900)",
    prevPrice: "$115",
    newPrice: "$100",
    company: "Nike",
    color: "White/Blue",
    category: "Sneakers"
  },

  // Additional sneakers
  {
    img: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400&h=400&fit=crop",
    title: "Nike Air Force 1 '82",
    reviews: "4.8 ★ (1.9k)",
    prevPrice: "$130",
    newPrice: "$110",
    company: "Nike",
    color: "White",
    category: "Sneakers"
  },
  {
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    title: "Nike Air Force 1 Lux",
    reviews: "4.7 ★ (1.6k)",
    prevPrice: "$140",
    newPrice: "$120",
    company: "Nike",
    color: "White/Silver",
    category: "Sneakers"
  },
  {
    img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    title: "Nike Air Force 1 Retro QS",
    reviews: "4.5 ★ (1.3k)",
    prevPrice: "$135",
    newPrice: "$115",
    company: "Nike",
    color: "White/Gum",
    category: "Sneakers"
  },
  {
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    title: "Nike Air Force 1 Shadow",
    reviews: "4.6 ★ (1k)",
    prevPrice: "$125",
    newPrice: "$105",
    company: "Nike",
    color: "White/Pink",
    category: "Sneakers"
  },
  {
    img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop",
    title: "Nike Air Force 1 '07 SE",
    reviews: "4.7 ★ (950)",
    prevPrice: "$145",
    newPrice: "$125",
    company: "Nike",
    color: "White/Volt",
    category: "Sneakers"
  }
];

export default products;
