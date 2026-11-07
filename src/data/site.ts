// All editable site content lives here. Text in [square brackets] shows as a visible placeholder.

import torontoExchangeImage from "@/assets/toronto-learning-exchange.jpg.asset.json";
import kiliHubImage from "@/assets/kilimanjaro-kili-hub.jpg.asset.json";

export const profile = {
  name: "Mary Bantug",
  headline:
    "I build education partnerships across Africa and the Caribbean that deliver measurable, locally driven results.",
  subline: "Program Manager | Donor-funded international development and education programs",
  location: "Toronto, ON",
  email: "mary.mikelle@gmail.com",
  linkedin: "https://www.linkedin.com/in/marybantug/",
  resume: "", // add résumé link here; empty shows a placeholder
};

export const nav = [
  { id: "work", label: "Work" },
  { id: "how-i-work", label: "How I Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export const impact = [
  { value: "10+", label: "years managing donor-funded programs" },
  { value: "4", label: "countries: Kenya, Tanzania, Belize, Dominica" },
  { value: "150+", label: "participants reached across two continents" },
  { value: "10+", label: "NGOs supported through a shared hub in Tanzania" },
];
export const fundersNote =
  "[Funded by Global Affairs Canada and Mastercard Foundation initiatives — confirm approval before showing]";

export const countries = [
  { name: "Kenya", code: "ke", line: "[Add one line]" },
  { name: "Tanzania", code: "tz", line: "[Add one line]" },
  { name: "Belize", code: "bz", line: "[Add one line]" },
  { name: "Dominica", code: "dm", line: "[Add one line]" },
  { name: "Canada", code: "ca", line: "[Add one line]" },
];

export type CaseStudy = {
  id: string;
  title: string;
  tag: string;
  summary: string;
  keyNumber: string;
  keyLabel: string;
  image?: string;
  imageAlt?: string;
  context: string;
  role: string;
  approach: string[];
  outcomes: string[];
  learned: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "tanzania-teaching",
    title: "Building Teaching Capacity with Partner Colleges in Tanzania",
    tag: "Train-the-Trainer partnership | Tanzania | [Years]",
    summary: "Canadian and Tanzanian colleges co-designed workshops to strengthen competency-based teaching.",
    keyNumber: "4+",
    keyLabel: "engagements",
    image: "/TZ_Header.JPG",
    imageAlt: "Workshop with partner college instructors in Tanzania",
    context:
      "Colleges in Tanzania are shifting toward competency-based education and training (CBET), an approach focused on what graduates can do in the workplace. Making that shift takes more than a new curriculum; instructors need confidence and practical tools. As part of a donor-funded partnership, Canadian and Tanzanian colleges came together to strengthen instructional capacity from the inside.",
    role: "As Program Manager, I led delivery from planning through implementation, coordinating faculty, project staff, and local partners across two continents.",
    approach: [
      "Co-design, not delivery: Canadian faculty and partner-college instructors built technical workshops together.",
      "Starting with listening: consultations and needs assessments with institutions and local industry partners shaped the topics and format.",
      "Building to last: a Train-the-Trainer model so participants become trainers themselves, over 4+ engagements.",
      "Inclusion built in: gender equality and social inclusion were part of the design from the start. [Add one concrete example]",
      "Tracking what matters: Results-Based Management to monitor progress, manage risk, and report to funders.",
    ],
    outcomes: [
      "4+ Train-the-Trainer engagements",
      "Strengthened instructional capacity and advanced CBET programs at 2+ partner institutions",
      "[Add a rounded, approved result]",
    ],
    learned: "[Write in my own voice]",
  },
  {
    id: "partner-led-design",
    title: "Designing Programs with Partners, Not for Them",
    tag: "Stakeholder consultation and program design | Kenya, Tanzania, Belize, Dominica | [Years]",
    summary:
      "Consultations and needs assessments with institutions, NGOs, and local industry shaped locally driven program designs across four countries.",
    keyNumber: "4",
    keyLabel: "countries",
    context:
      "Programs designed far from the people they serve often miss the mark. They can overlook local priorities, duplicate what already exists, or leave out the people who most need to be included. Across donor-funded education programs in East Africa and the Caribbean, we set out to start somewhere different: by asking institutions, NGOs, and local industry what they actually needed, and letting their answers shape the program.",
    role:
      "As Program Manager, I led stakeholder consultations and needs assessments with academic institutions, NGOs, and local industry partners, then translated what we heard into locally driven program designs with gender equality and social inclusion built in.",
    approach: [
      "Listening before designing: each program began with consultations and needs assessments rather than a pre-set plan. [Add one example of a method or question]",
      "Bringing different voices to the table: institutions, NGOs, and industry partners often see the same challenge differently. [Add an example of differing views and how I handled it]",
      "Turning input into design: partner input became concrete program choices. [Add one design decision that changed because of partner input]",
      "Inclusion by design: gender equality and social inclusion built in from the start. [Add one concrete example]",
      "Checking that it worked: Results-Based Management to track progress against agreed goals and adjust when needed.",
    ],
    outcomes: [
      "Consultations and needs assessments with academic institutions, NGOs, and local industry partners across 4 countries",
      "Locally driven designs with gender equality and social inclusion built in",
      "[Add a rounded, approved result]",
    ],
    learned: "[Write in my own voice]",
  },
  {
    id: "tanzania-exchange",
    title: "Hosting Tanzanian Education Partners in Canada",
    tag: "International learning exchange | Canada and Tanzania | [Year]",
    summary: "A two-week exchange so partners could see college operations first-hand and take ideas home.",
    keyNumber: "7",
    keyLabel: "service areas",
    image: torontoExchangeImage.url,
    imageAlt: "Toronto skyline at sunset with the CN Tower", 
    context:
      "Partnerships are strongest when learning flows both ways. After working with Tanzanian colleges remotely and in-country, we organized a two-week learning exchange in Canada so partners could see college operations first-hand and take ideas home.",
    role: "I managed the exchange end to end, coordinating the parts of our institution involved, and authored articles to document and share what we learned.",
    approach: [
      "One visit, many departments: the exchange drew on 7 internal service areas so partners saw the college as a whole system. [Name areas if approved]",
      "Designing for exchange, not a tour: [Describe how I built in two-way conversation]",
      "Capturing the learning: knowledge-sharing articles reached people who weren't in the room.",
    ],
    outcomes: [
      "A two-week exchange for Tanzanian education partners",
      "Collaboration across 7 internal service areas",
      "Knowledge-sharing articles [link]",
      "[Add a follow-on result]",
    ],
    learned: "[Write in my own voice]",
  },
  {
    id: "kili-hub",
    title: "Running a Shared Space for NGOs in Northern Tanzania",
    tag: "Community and operations leadership | Kili Hub, Tanzania | 2015-2016",
    summary: "Day-to-day leadership of a co-working hub where NGOs and entrepreneurs worked side by side.",
    keyNumber: "10+",
    keyLabel: "NGOs",
    image: kiliHubImage.url,
    imageAlt: "Giraffe standing in front of Mount Kilimanjaro in Tanzania",
    context:
      "Small organizations working in the same region often face the same challenges in isolation. Kili Hub, a co-working space run by the social enterprise Anza International, gave NGOs and entrepreneurs a place to work side by side and collaborate.",
    role: "As Community and Operations Manager, I ran the hub day to day, led programming, coached a small team, and set strategic direction.",
    approach: [
      "Reliable operations for a multi-tenant space serving 10+ local and international NGOs.",
      "Programming that built connections: workshops, technical working groups, and networking events.",
      "Leading a small team: [Add a short example]",
    ],
    outcomes: [
      "Served 10+ local and international NGOs",
      "Delivered workshops, working groups, and networking events",
      "Strengthened operational capacity and collaboration between organizations",
      "[Add a rounded result]",
    ],
    learned: "[Write in my own voice]",
  },
];

export const principles = [
  { icon: "ear", title: "Listening first", text: "Stakeholder consultations and needs assessments before designing anything." },
  { icon: "users", title: "Co-design", text: "Programs shaped with partners so they fit local contexts." },
  { icon: "chart", title: "Tracking results", text: "Results-Based Management: setting clear goals, measuring progress, and using evidence to make decisions." },
  { icon: "heart", title: "Inclusion by design", text: "Gender equality and social inclusion built in from the start." },
] as const;

export const about = {
  story:
    "[Write a warm, personal story: peacebuilding background, early work in Tanzania, a decade of program management.]",
  education: [
    { school: "Royal Roads University", credential: "Master of Arts, Human Security and Peacebuilding" },
    { school: "Humber Polytechnic", credential: "Post-Graduate Certificate, International Development (with Honours)" },
    { school: "University of Toronto", credential: "Honours Bachelor of Arts" },
  ],
  focus: [
    "Donor-Funded Program Management",
    "Results-Based Management and Monitoring",
    "Multi-Institutional Partnership Development",
    "Stakeholder Engagement and Governance Support",
    "Resource Mobilization and Proposal Development",
  ],
};
