export interface MapEngagement {
  title: string;
  years: string;
  focus: string;
  to: string;
}

export interface MapLocation {
  id: string;
  kind?: "home";
  city: string;
  country: string;
  coordinates: [number, number];
  years: string;
  summary: string;
  labelOffset?: { dx: number; dy: number };
  pinOffset?: { dx: number; dy: number };
  engagements: MapEngagement[];
}

// Placeholder links: each engagement currently points to an existing page
// in the Work section until the dedicated case studies are written.
export const mapLocations: MapLocation[] = [
  {
    id: "toronto",
    kind: "home",
    city: "Toronto",
    country: "Canada",
    coordinates: [-79.3832, 43.6532],
    years: "Home base",
    summary: "Based in Toronto, working with partners across regions.",
    engagements: [],
  },
  {
    id: "nairobi",
    city: "Nairobi",
    country: "Kenya",
    coordinates: [36.8219, -1.2921],
    years: "2017–2020",
    summary: "National institutions, labour market systems and leadership development.",
    engagements: [
      {
        title: "Classrooms Without Borders",
        years: "2017–2020",
        focus: "Leadership & Management",
        to: "/project/classrooms-without-borders",
      },
      {
        title: "Building Bridges",
        years: "2017–2020",
        focus: "Labour Market Systems",
        to: "/project/building-bridges-bogota",
      },
      {
        title: "Blueprint to Bootcamp",
        years: "2017–2020",
        focus: "Curriculum Development",
        to: "/project/blueprint-to-bootcamp",
      },
      {
        title: "Convening the Unconvened",
        years: "2017–2020",
        focus: "Institutional Capacity Building",
        to: "/project/convening-the-unconvened",
      },
    ],
  },
  {
    id: "kisumu",
    city: "Kisumu",
    country: "Kenya",
    coordinates: [34.7617, -0.0917],
    years: "2017–2020",
    summary: "Blue Economy pathways and applied curriculum with regional colleges.",
    pinOffset: { dx: -20, dy: -12 },
    labelOffset: { dx: 0, dy: -13 },
    engagements: [
      {
        title: "Women Who Build",
        years: "2017–2020",
        focus: "Blue Economy",
        to: "/project/women-who-build",
      },
      {
        title: "The Rural Pathways Initiative",
        years: "2017–2020",
        focus: "Applied Curriculum",
        to: "/project/rural-pathways",
      },
    ],
  },
  {
    id: "tanzania",
    city: "Morogoro & Dodoma",
    country: "Tanzania",
    coordinates: [37.6612, -6.8235],
    years: "2022–2026",
    summary: "Full-cycle management of a women's skills and industry-linkage program.",
    labelOffset: { dx: 6, dy: 20 },
    engagements: [
      {
        title: "Bridging Classroom to Industry for Women",
        years: "2022–2026",
        focus: "Workforce Development & Gender Equality",
        to: "/project/esp05-tanzania",
      },
    ],
  },
  {
    id: "manila",
    city: "Manila",
    country: "Philippines",
    coordinates: [120.9842, 14.5995],
    years: "Specialist missions",
    summary: "Short-term technical assignments in animation and skills strategy.",
    engagements: [
      {
        title: "Skills for the Next Economy",
        years: "Specialist mission",
        focus: "Animation & Creative Industries",
        to: "/project/skills-next-economy",
      },
      {
        title: "The Listening Tour",
        years: "Specialist mission",
        focus: "Curriculum & Industry Consultation",
        to: "/project/listening-tour",
      },
    ],
  },
  {
    id: "belize",
    city: "Belize City",
    country: "Belize",
    coordinates: [-88.1962, 17.5046],
    years: "2022–2024",
    summary: "Ecotourism training pathways with national training institutions.",
    engagements: [
      {
        title: "Designing the First 100 Days",
        years: "2022–2024",
        focus: "Ecotourism & Capacity Building",
        to: "/project/first-hundred-days",
      },
    ],
  },
  {
    id: "dominica",
    city: "Roseau",
    country: "Dominica",
    coordinates: [-61.3874, 15.3092],
    years: "2022–2024",
    summary: "Ecotourism curriculum and community-based delivery partnerships.",
    labelOffset: { dx: 14, dy: 18 },
    engagements: [
      {
        title: "Skills for the Next Economy",
        years: "2022–2024",
        focus: "Ecotourism & Curriculum Development",
        to: "/project/skills-next-economy",
      },
    ],
  },
];
