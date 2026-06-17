export interface Review {
  name: string;
  location: string;
  rating: number;
  body: string;
  tag: string;
}

export const REVIEWS: Review[] = [
  {
    name: "Ananya R.",
    location: "Bengaluru",
    rating: 5,
    body: "I was spending ₹250 a day on lattes. One pouch basically replaced a month of café runs and honestly tastes better.",
    tag: "Saved on café visits",
  },
  {
    name: "Kabir M.",
    location: "Delhi",
    rating: 5,
    body: "Exam season survival kit. 2 AM, half-asleep, pour and stir — proper coffee in under a minute. No machine, no mess.",
    tag: "Late-night study sessions",
  },
  {
    name: "Sara D.",
    location: "Mumbai",
    rating: 5,
    body: "Best iced coffee I've made at home, full stop. Pour over ice and milk and it's smoother than my local café's.",
    tag: "Iced coffee at home",
  },
  {
    name: "Rohan T.",
    location: "Pune",
    rating: 5,
    body: "Back-to-back morning calls and I still get a real cup at my desk. Convenient without feeling like instant coffee.",
    tag: "Work mornings",
  },
];
