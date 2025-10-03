export interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
  instagram_url?: string;
}

export const events: Event[] = [
  {
    id: 1,
    title: "Entrepreneurs Talk with Aidyn Rakhimbayev",
    description: "Aidyn Rakhimbayev is a well respected entrepreneur in the field of construction, founder of BI Group.",
    image: "/events/aidyn.jpg",
    instagram_url: "https://www.instagram.com/p/DGIkILtoYrM/",
  },
  {
    id: 2,
    title: "JUZ40 Founder Lecture",
    description: "Zhuldyzai Musayeva shared her experience on the topic 'The Secrets of JUZ40's Rapid Growth' and spoke about the key steps she took on this journey.",
    image: "/events/juz40.jpg",
    instagram_url: "https://www.instagram.com/p/DB_yf1VMmiP/?img_index=1",
  },
  {
    id: 3,
    title: "Psychology in Sales",
    description: "Mykhal Skrypnyk — a certified business trainer with 13 years of experience in sales and team management. Co-founder of Smart Sales, successful entrepreneur.",
    image: "/events/sales-psychology.jpg",
    instagram_url: "https://www.instagram.com/p/C5Yuy_8IasP/",
  },
  {
    id: 4,
    title: "B2B Sales and Negotiation",
    description: "Akmaral, recognized as the Best Entrepreneur of 2023 by Ernst & Young, shared her unique experience in building successful B2B sales and negotiations.",
    image: "/events/b2b-negoti.jpg",
    instagram_url: "https://www.instagram.com/p/DAENAfHtB3C/?img_index=1",
  },
  {
    id: 5,
    title: "$20M Business: Stanford and YCombinator",
    description: "Nurlybek Mursali, a Stanford PhD graduate and Y Combinator alumnus, shared valuable insights on how to make the most of opportunities during student years.",
    image: "/events/20M-stanford-yc.jpg",
    instagram_url: "https://www.instagram.com/p/C_vWGTrtz-V/?img_index=1",
  },
  {
    id: 6,
    title: "Entrepreneurs Talk with Ulukbek Sharipov",
    description: "Ulugbek Sharipov — entrepreneur, founder of the 'Shoqan Suits' brand, partner at 'Alhadaya,' #1 YouTube Business KZ, Forbes 30under30, and Ironman70.3.",
    image: "/events/ulugbek.jpg",
    instagram_url: "https://www.instagram.com/p/DATYUPrtg4q/",
  },
  {
    id: 7,
    title: "Entrepreneurs Talk with Ruslan Shayekin, Azamat Osmanov and Almas Zhali",
    description: "Guests: Azamat Osmanov — CEO of 'Magnum Cash & Carry', Ruslan Shayekin — Chairman of the Board, Almas Zhali — CEO of Brave Talents.",
    image: "/events/entrepren-talk.jpg",
    instagram_url: "https://www.instagram.com/p/CxQA0t7MWQz/",
  },
];

