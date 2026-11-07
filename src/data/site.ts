// All editable site content lives here. Text in [square brackets] shows as a visible placeholder.

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
  { id: "writing", label: "Writing" },
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
    id: "kenya-covid",
    title: "Keeping Education Partnerships Moving During COVID-19",
    tag: "Virtual multi-partner program | Kenya and Canada | [Years]",
    summary: "A Kenya partnership rebuilt for fully virtual delivery when borders and campuses closed.",
    keyNumber: "150+",
    keyLabel: "participants",
    image: "/KE_HOD training.JPG",
    imageAlt: "Training session with institutional leaders in Kenya",
    context:
      "When COVID-19 closed borders and campuses, in-person capacity-building could no longer run as planned. Our Kenya partnership had to rebuild the program for a fully virtual format across two continents, with partners who had different connectivity and schedules.",
    role: "As Project Manager, I led a fully virtual, multi-partner program in coordination with Kenya's Ministry of Education [confirm approval to name; otherwise \"a national ministry of education\"], coordinating institutional partners, faculty, and local stakeholders.",
    approach: [
      "Redesigning for the new reality: reworked activities for online delivery rather than just moving sessions onto video. [Add one example]",
      "Keeping partners engaged across time zones: [Describe how I kept trust and momentum]",
      "Working with government: aligned the program with national priorities while managing the needs of multiple institutions.",
    ],
    outcomes: [
      "Reached 150+ participants across two continents",
      "Delivered fully virtually while partnerships stayed active",
      "[Add one rounded, approved result]",
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
    image: "/TZ_Approach.jpeg",
    imageAlt: "Tanzanian and Canadian education partners together",
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

export const writing = [
  { title: "[Article title]", publication: "[Publication]", link: "" },
  { title: "[Article title]", publication: "[Publication]", link: "" },
  { title: "[Article title]", publication: "[Publication]", link: "" },
];

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

export const testimonials = [
  { quote: "[Quote]", by: "[Name or role, e.g., Faculty partner, Tanzania]" },
  { quote: "[Quote]", by: "[Name or role]" },
  { quote: "[Quote]", by: "[Name or role]" },
];
