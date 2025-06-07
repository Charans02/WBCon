import {
  Facebook,
  // Instagram,
  // Twitter,
  // Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { ServiceType, TestimonialType, Expert, ComparisonSet, JunkRemovalType, Customer } from "./types";

export const CONTACT_INFO = [
  {
    name: "Email",
    icon: <Mail size={16} className="stroke-foreground fill-background" />,
    value: "kreeves@goodnewshaulers.com",
  },
  {
    name: "Address",

    icon: <MapPin size={16} className="stroke-foreground fill-background" />,
    value: "5904 S. Cooper St. Suite 104 #905 Arlington TX 76017",
  },
  {
    name: "Phone",
    icon: <Phone size={16} className="stroke-foreground fill-background" />,
    value: "817-681-2020",
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
    url: "https://www.facebook.com/share/18x1YEk9EE/?mibextid=wwXIfr",
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
    title: "Property clean outs",
    description:
      "If you recently purchased a house or our trying to sell a house or had a tenant recently move out. We are the right guys for the job!",
    imageHeight: 600,
  },
  {
    image: "/images/service_2.jpg",
    title: "Auto/Boat/RV removal",
    description:
      "We are one of the only junk removal companies in Texas who are  able to get your car, boat or rv stuck in your driveway gone today!",
    imageHeight: 600,
  },
  {
    image: "/images/service_3.jpg",
    title: "Trash and Junk Removal",
    description:
      "We remove any trash or junk piling up in your home, garage or any where you need it gone!",
    imageHeight: 600,
  },
];

export const TESTIMONIALS: TestimonialType[] = [
  {
    avatar: "/images/avatar_1.png",
    name: "Pedro Beatty",
    content:
      "Needed appliances removed out of a property I had, (refrigerator, oven, washer and, dryer). Good News Haulers came out had them removed quickly. Will definitely use them again and refer to my friends that need junk removed.",
    rating: 5,
  },
  {
    avatar: "/images/avatar_2.png",
    name: "Justin Gerhold Jr.",
    content:
      "My tenant moved out of my property, needed to get all the old furniture out of the apartment. Good News Haulers had it done in a day.",
    rating: 5,
  },
  {
    avatar: "/images/avatar_3.png",
    name: "Rufus Mohr",
    content:
      "Had a very easy time working with him. I needed my garage cleaned out before the holidays. The owner came out on the weekend, got it all done in a timely manner and left my garage looking great.",
    rating: 5,
  },
];

export const SERVICE_AREAS = [
  "Arlington",
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
    avatar_url: "/images/avatar_1.png",
    name: "Pedro Beatty",
  },
  {
    id: 2,
    avatar_url: "/images/avatar_2.png",
    name: "Justin Gerhold Jr.",
  },
  {
    id: 3,
    avatar_url: "/images/avatar_3.png",
    name: "Rufus Mohr",
  },
  {
    id: 4,
    avatar_url: "/images/avatar_1.png",
    name: "John Doe",
  },
];
