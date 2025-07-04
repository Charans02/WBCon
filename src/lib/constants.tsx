import {
  Facebook,
  // Instagram,
  // Twitter,
  // Youtube,
  // Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { ServiceType, TestimonialType, Expert, ComparisonSet, JunkRemovalType, Customer } from "./types";

export const CONTACT_INFO = [
  // {
  //   name: "Email",
  //   icon: <Mail size={16} className="stroke-foreground fill-background" />,
  //   value: "kreeves@goodnewshaulers.com",
  // },
  {
    name: "Address",

    icon: <MapPin size={16} className="stroke-foreground fill-background" />,
    value: "SALT LAKE CITY, UT,  84015-1531",
  },
  {
    name: "Phone",
    icon: <Phone size={16} className="stroke-foreground fill-background" />,
    value: "801-654-1028",
  },
];

export const SOCIAL_LINKS = [
  // {
  //   name: "Instagram",
  //   icon: <Instagram size={24} />,
  //   url: "/",
  // },
  // {
  //   name: "Twitter",
  //   icon: <Twitter size={24} />,
  //   url: "/",
  // },
  {
    name: "Facebook",
    icon: <Facebook size={24} />,
    url: "https://www.facebook.com/waymanbrosconstructionut",
  },
  // {
  //   name: "Youtube",
  //   icon: <Youtube size={24} />,
  //   url: "/",
  // },
];

export const QUICK_LINKS = [
  {
    name: "About Us",
    url: "#story",
  },
  {
    name: "Services",
    url: "#services",
  },
  {
    name: "Reviews",
    url: "#testimonials",
  },
  {
    name: "Contact Us",
    url: "#contact",
  },
];

export const SERVICES: ServiceType[] = [
  {
    image: "/images/service_1.jpg",
    title: "Residential Junk Removal",
    description:
      "We clear garages, storage units, attics, and anywhere else junk piles up.",
    imageHeight: 600,
  },
  {
    image: "/images/service_2.jpg",
    title: "Yard Waste & Debris",
    description:
      "Landscaping mess or storm debris? We’ll get your yard back to clean.",
    imageHeight: 600,
  },
  {
    image: "/images/service_3.jpg",
    title: "Construction & Renovation Cleanup",
    description:
      "Contractors and DIYers alike trust us to haul away scrap and debris fast.",
    imageHeight: 600,
  },
];

export const TESTIMONIALS: TestimonialType[] = [
  {
    avatar: "/images/avatar_4.png",
    name: "James R",
    content:
      "We finally love our bathroom again! The team made the whole process easy.",
    rating: 5,
  },
  {
    avatar: "/images/avatar_5.jpg",
    name: "Lisa M",
    content:
      "They turned our outdated kitchen into a dream space. Fast, Friendly and Professional.",
    rating: 5,
  },
  {
    avatar: "/images/avatar_1.png",
    name: "Mark T",
    content:
      "Very happy  with our basement remodel. Cleanwork and Stayed on budget.",
    rating: 5,
  },
  {
    avatar: "/images/avatar_2.png",
    name: "Evan P",
    content:
      "From start to finish everything was smooth. Highly recommend for any home upgrade.",
    rating: 5,
  },
];

export const SERVICE_AREAS = [
  "Salt Lake City",
  "Mansfield",
  "Grand Prairie",
  "And Surrounding Areas in ",
];

export const EXPERT_IMAGES: Expert[] = [
  {
    id: 1,
    img_group: [
      {
        id: 1,
        img_url: "/images/image.jpg",
        img_name: "Expert 1",
      },
      {
        id: 2,
        img_url: "/images/image_1.jpg",
        img_name: "Expert 2",
      },
      {
        id: 3,
        img_url: "/images/image_2.jpg",
        img_name: "Expert 3",
      },
      {
        id: 4,
        img_url: "/images/image_3.jpg",
        img_name: "Expert 4",
      },
      {
        id: 5,
        img_url: "/images/image_4.jpg",
        img_name: "Expert 5",
      },
    ],
  },
  {
    id: 2,
    img_group: [
      {
        id: 1,
        img_url: "/images/image.png",
        img_name: "Expert 1",
      },
      {
        id: 2,
        img_url: "/images/image_1.jpg",
        img_name: "Expert 2",
      },
      {
        id: 3,
        img_url: "/images/image_2.jpg",
        img_name: "Expert 3",
      },
      {
        id: 4,
        img_url: "/images/image_3.jpg",
        img_name: "Expert 4",
      },
      {
        id: 5,
        img_url: "/images/image_4.jpg",
        img_name: "Expert 5",
      },
    ],
  },
  {
    id: 3,
    img_group: [
      {
        id: 1,
        img_url: "/images/image.png",
        img_name: "Expert 1",
      },
      {
        id: 2,
        img_url: "/images/image_1.jpg",
        img_name: "Expert 2",
      },
      {
        id: 3,
        img_url: "/images/image_2.jpg",
        img_name: "Expert 3",
      },
      {
        id: 4,
        img_url: "/images/image_3.jpg",
        img_name: "Expert 4",
      },
      {
        id: 5,
        img_url: "/images/image_4.jpg",
        img_name: "Expert 5",
      },
    ],
  },
];

export const COMPARISON_SETS: ComparisonSet[] = [
  {
    id: 1,
    before: "/images/before.jpg",
    after: "/images/after.jpg",
    title: "Backyard Cleanup",
  },
  {
    id: 2,
    before: "/images/before.jpg",
    after: "/images/after.jpg",
    title: "Garage Cleanup",
  },
  {
    id: 3,
    before: "/images/before.jpg",
    after: "/images/after.jpg",
    title: "Home Cleanout",
  },
];

export const JUNK_REMOVAL_IMAGES: JunkRemovalType[] = [
  {
    id: 1,
    img_url: "/images/junk_remove.png",
    img_name: "Junk Removal 1",

  },
  {
    id: 2,
    img_url: "/images/junk_remove.png",
    img_name: "Junk Removal 2",
  },
  {
    id: 3,
    img_url: "/images/junk_remove.png",
    img_name: "Junk Removal 3",
  },
];

export const CUSTOMERS: Customer[] = [
  {
    id: 1,
    avatar_url: "/images/avatar_4.png",
    name: "Pedro Beatty",
  },
  {
    id: 2,
    avatar_url: "/images/avatar_5.jpg",
    name: "Justin Gerhold Jr.",
  },
  {
    id: 3,
    avatar_url: "/images/avatar_3.png",
    name: "Rufus Mohr",
  },
  {
    id: 4,
    avatar_url: "/images/avatar_2.png",
    name: "John Doe",
  },
];
