export interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
  photo_url?: string;
}

export const events: Event[] = [
  {
    id: 1,
    title: "Entrepreneurs Talk with Aidyn Rakhimbayev",
    description: "Aidyn Rakhimbayev is a well respected entrepreneur in the field of construction, founder of BI Group.",
    image: "/events/aidyn.jpg",
    photo_url: "https://photos.google.com/share/AF1QipOdbVHVQB2LBdaG5E49NDVNRDOPFObxZ6vgyoWNeZlvgKXWM_UlHDp5NVGdDQ_wmA/photo/AF1QipMJp8Y5lowIuICduL4qiHwr1iFVONKowx6J8xK1?key=Z3M3TDdlRk5aZWN3TG53RkxMTmJvM0JQaW1VX1hn",
  },
  {
    id: 2,
    title: "JUZ40 Founder Lecture",
    description: "Zhuldyzai Musayeva shared her experience on the topic 'The Secrets of JUZ40's Rapid Growth' and spoke about the key steps she took on this journey.",
    image: "/events/juz40.jpg",
    photo_url: "https://photos.google.com/share/AF1QipMHVf2BLLW29m6x3Yxkd0BMSnVKx4w0GbC6juNkpPzpygSOVZWwDjBrg-Rz3Awi1w/photo/AF1QipN21Odg_WV0twJSGGVL7y8qwPMynn0ctU9o3ESB?key=ck1fUWhkWm5lVzRmS2gwTENTVVNLZmdrdy1laHdn",
  },
  {
    id: 3,
    title: "Psychology in Sales",
    description: "Mykhal Skrypnyk — a certified business trainer with 13 years of experience in sales and team management. Co-founder of Smart Sales, successful entrepreneur.",
    image: "/events/sales-psychology.jpg",
    photo_url: "https://photos.google.com/share/AF1QipNb1UbQI2UE19GpCPU5XIKvHQ9pjSo1SM0CaCK2LbYK44ktxqVoYGZIOkOBb2WfOA/photo/AF1QipN7bJTO4rVFC6mg0poNX_HyTcbw-SbxQjRPz77X?key=aDJ1Qko2MmVST1NpYVd1dUgxRXp0RWVEVjVnQ0NR",
  },
  {
    id: 4,
    title: "B2B Sales and Negotiation",
    description: "Akmaral, recognized as the Best Entrepreneur of 2023 by Ernst & Young, shared her unique experience in building successful B2B sales and negotiations.",
    image: "/events/b2b-negoti.jpg",
    photo_url: "https://photos.google.com/share/AF1QipNXN3w-tYP7_e5WVg4Jby0ZJi7JDDrWGySCkxQP6TCLFUk_Z31umZPE0hAKGHKkDw/photo/AF1QipNpCSdfz3gIO5Vs2xeqaAZQIhzgbp3r6Ewtw58J?key=QWxjYWp1X3FMYzdOQzVaQkx2UDBIYVFqcVFBZHl3",
  },
  {
    id: 5,
    title: "$20M Business: Stanford and YCombinator",
    description: "Nurlybek Mursali, a Stanford PhD graduate and Y Combinator alumnus, shared valuable insights on how to make the most of opportunities during student years.",
    image: "/events/20M-stanford-yc.jpg",
    photo_url: "https://photos.google.com/share/AF1QipMfgDMr7Ol7bPpzw19DSH9z3_M6nHUMe9jAbk3is55ESZMIPAlcoHab3fZrbALsSA/photo/AF1QipMoSQ3xhiyfvZd_WkU9hqX6Zg2WqB8UeD4w8FHh?key=SV83OENuSXNCOEpPOVFZZlNFS3pTUUVEbnVqR0dR",
  },
  {
    id: 6,
    title: "Entrepreneurs Talk with Ulukbek Sharipov",
    description: "Ulugbek Sharipov — entrepreneur, founder of the 'Shoqan Suits' brand, partner at 'Alhadaya,' #1 YouTube Business KZ, Forbes 30under30, and Ironman70.3.",
    image: "/events/ulugbek.jpg",
    photo_url: "https://photos.google.com/share/AF1QipPSmixOY8zYn2C5WGG4V-TddIqiF4QbbilvbDxcLuyYpl3izp97dPY1lumvwjLO6A/photo/AF1QipPAi5_Hr-JevxUrh5uecO9Htrw6kea1PuMouD3E?key=YTdJQ20xYk1nMm9ZT1RrOE1PMG92UnowYjl2OHF3",
  },
  {
    id: 7,
    title: "Entrepreneurs Talk with Ruslan Shayekin, Azamat Osmanov and Almas Zhali",
    description: "Guests: Azamat Osmanov — CEO of 'Magnum Cash & Carry', Ruslan Shayekin — Chairman of the Board, Almas Zhali — CEO of Brave Talents.",
    image: "/events/entrepren-talk.jpg",
    photo_url: "https://photos.google.com/share/AF1QipPy7Wpkra1nMuNc6vcLK-DogYMPzaPYDPJDzYfqkgLbszDn-8RwR79DaTZC08CIyQ/photo/AF1QipNl45naUK5OJRrcF8P8yBJuRnwt1Qyvz5c09bnc?key=dUQ2V29GM0xaaHBEbFdXWllKWDN5MGFCeHAxVzdB",
  },
];

