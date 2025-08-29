
const products = [
  // Nike Products
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

  // Adidas Products
  {
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    title: "Adidas Ultraboost 22",
    reviews: "4.9 ★ (2.3k)",
    prevPrice: "$180",
    newPrice: "$150",
    company: "Adidas",
    color: "Black/White",
    category: "Running Shoes"
  },
  {
    img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    title: "Adidas Stan Smith",
    reviews: "4.7 ★ (1.9k)",
    prevPrice: "$100",
    newPrice: "$85",
    company: "Adidas",
    color: "White/Green",
    category: "Sneakers"
  },
  {
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    title: "Adidas Superstar",
    reviews: "4.6 ★ (1.7k)",
    prevPrice: "$110",
    newPrice: "$95",
    company: "Adidas",
    color: "White/Black",
    category: "Sneakers"
  },
  {
    img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop",
    title: "Adidas Gazelle",
    reviews: "4.5 ★ (1.4k)",
    prevPrice: "$95",
    newPrice: "$80",
    company: "Adidas",
    color: "Blue/White",
    category: "Sneakers"
  },
  {
    img: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400&h=400&fit=crop",
    title: "Adidas Continental 80",
    reviews: "4.4 ★ (1.2k)",
    prevPrice: "$90",
    newPrice: "$75",
    company: "Adidas",
    color: "White/Red",
    category: "Sneakers"
  },

  // Puma Products
  {
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    title: "Puma RS-X",
    reviews: "4.6 ★ (1.6k)",
    prevPrice: "$110",
    newPrice: "$95",
    company: "Puma",
    color: "White/Blue",
    category: "Sneakers"
  },
  {
    img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    title: "Puma Suede Classic",
    reviews: "4.5 ★ (1.3k)",
    prevPrice: "$85",
    newPrice: "$70",
    company: "Puma",
    color: "Black/White",
    category: "Sneakers"
  },
  {
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    title: "Puma Cali Sport",
    reviews: "4.4 ★ (1.1k)",
    prevPrice: "$95",
    newPrice: "$80",
    company: "Puma",
    color: "White/Pink",
    category: "Sneakers"
  },
  {
    img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop",
    title: "Puma Future Rider",
    reviews: "4.3 ★ (900)",
    prevPrice: "$100",
    newPrice: "$85",
    company: "Puma",
    color: "White/Green",
    category: "Sneakers"
  },
  {
    img: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400&h=400&fit=crop",
    title: "Puma Smash",
    reviews: "4.2 ★ (800)",
    prevPrice: "$75",
    newPrice: "$65",
    company: "Puma",
    color: "White/Red",
    category: "Sneakers"
  },

  // Vans Products
  {
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    title: "Vans Old Skool",
    reviews: "4.7 ★ (1.8k)",
    prevPrice: "$70",
    newPrice: "$60",
    company: "Vans",
    color: "Black/White",
    category: "Skate Shoes"
  },
  {
    img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    title: "Vans Authentic",
    reviews: "4.6 ★ (1.5k)",
    prevPrice: "$65",
    newPrice: "$55",
    company: "Vans",
    color: "White/Blue",
    category: "Skate Shoes"
  },
  {
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    title: "Vans Sk8-Hi",
    reviews: "4.5 ★ (1.3k)",
    prevPrice: "$75",
    newPrice: "$65",
    company: "Vans",
    color: "Black/Red",
    category: "Skate Shoes"
  },
  {
    img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop",
    title: "Vans Era",
    reviews: "4.4 ★ (1.1k)",
    prevPrice: "$60",
    newPrice: "$50",
    company: "Vans",
    color: "White/Green",
    category: "Skate Shoes"
  },
  {
    img: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400&h=400&fit=crop",
    title: "Vans ComfyCush",
    reviews: "4.3 ★ (900)",
    prevPrice: "$80",
    newPrice: "$70",
    company: "Vans",
    color: "White/Black",
    category: "Skate Shoes"
  },

  // Converse Products
  {
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    title: "Converse Chuck Taylor",
    reviews: "4.8 ★ (2.0k)",
    prevPrice: "$65",
    newPrice: "$55",
    company: "Converse",
    color: "White/Black",
    category: "Sneakers"
  },
  {
    img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    title: "Converse One Star",
    reviews: "4.6 ★ (1.4k)",
    prevPrice: "$70",
    newPrice: "$60",
    company: "Converse",
    color: "White/Blue",
    category: "Sneakers"
  },
  {
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    title: "Converse Jack Purcell",
    reviews: "4.5 ★ (1.2k)",
    prevPrice: "$75",
    newPrice: "$65",
    company: "Converse",
    color: "White/Red",
    category: "Sneakers"
  },

  // New Balance Products
  {
    img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop",
    title: "New Balance 574",
    reviews: "4.7 ★ (1.6k)",
    prevPrice: "$100",
    newPrice: "$85",
    company: "New Balance",
    color: "Gray/White",
    category: "Sneakers"
  },
  {
    img: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400&h=400&fit=crop",
    title: "New Balance 990",
    reviews: "4.8 ★ (1.8k)",
    prevPrice: "$180",
    newPrice: "$150",
    company: "New Balance",
    color: "Gray/Black",
    category: "Sneakers"
  },
  {
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    title: "New Balance 327",
    reviews: "4.6 ★ (1.3k)",
    prevPrice: "$90",
    newPrice: "$75",
    company: "New Balance",
    color: "White/Blue",
    category: "Sneakers"
  },

  // Additional Nike Products
  {
    img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    title: "Nike Air Max 270",
    reviews: "4.7 ★ (1.7k)",
    prevPrice: "$150",
    newPrice: "$125",
    company: "Nike",
    color: "Black/Red",
    category: "Running Shoes"
  },
  {
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    title: "Nike React Vision",
    reviews: "4.5 ★ (1.2k)",
    prevPrice: "$130",
    newPrice: "$110",
    company: "Nike",
    color: "White/Black",
    category: "Running Shoes"
  },
  {
    img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop",
    title: "Nike SB Dunk",
    reviews: "4.8 ★ (2.2k)",
    prevPrice: "$120",
    newPrice: "$100",
    company: "Nike",
    color: "Green/White",
    category: "Skate Shoes"
  }
];

export default products;
