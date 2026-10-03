export interface Project {
  id: string;
  title: string;
  tags: string[];
  type: string;
  location: string;
  year: string;
  timeframe: string;
  client?: string;
  focusArea: string;
  summary: string;
  overview: string;
  images: string[];
  color: string;
  aspectRatio: "portrait" | "landscape" | "square";
  expertise: string[];
  opportunity: string;
  approach: string;
  work: string[];
  results: { value: string; label: string }[];
  voices: { quote: string; name: string; role: string }[];
  fieldNote: { quote: string; reflection: string };
  lessons: string[];
  whyItMatters: string[];
  relatedIds: string[];
}

const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80`;

export const projects: Project[] = [ {
    id: "esp05-tanzania",
    title: "Bridging Classroom to Industry for Women in Tanzania",
    tags: ["women's empowerment", "workforce development", "program management"],
    type: "TECHNICAL COOPERATION & WORKFORCE DEVELOPMENT",
    location: "Morogoro & Dodoma Regions, Tanzania",
    year: "2022–2026",
    timeframe: "4 years",
    client: "Colleges and Institutes Canada",
    focusArea: "Workforce Development",
    summary:
      "End-to-end management of a four-year women's empowerment and workforce development program across two Tanzanian regions — from proposal through reporting to close-out.",
    overview:
      "ESP05 set out to open doors for women in the Morogoro and Dodoma regions through skills training and stronger connections between training institutions and local industry. I led the program end to end — carrying it from the original proposal through implementation, donor reporting, and close-out — and facilitated the sessions that brought Folk Development Colleges, community organizations, and employers to the same table.",
    images: [
      "/TZ_Header.JPG",
      "/TZ_Opportunities.jpeg",
      "/TZ_Approach.jpeg",
      u("photo-1529156069898-49953e39b3ac"),
    ],
    color: "#10B981",
    aspectRatio: "landscape",
    expertise: [
      "End-to-End Project Management",
      "Workshop Facilitation",
      "Relationship Management",
      "Cross-Functional Team Leadership",
      "Budget & Risk Management",
      "Event Planning",
    ],
    opportunity:
      "In Morogoro and Dodoma, women faced real barriers to earning: training existed, but pathways from the classroom to actual work were thin. Folk Development Colleges like Bigwa and Munguri were trusted community institutions with underused connections to local employers, and community-based organizations held relationships no external team could replicate. The gap wasn't willingness on any side — it was structure: nobody owned the links between training, community, and industry.",
    approach:
      "I managed ESP05 as a full-cycle engagement, owning it from proposal to close. That meant building the partnership architecture first — aligning Colleges and Institutes Canada, the two Folk Development Colleges, community-based organizations, and Ministry representatives around clear roles — then running delivery through cross-functional teams in both regions. Where I wasn't managing, I was teaching: facilitating sessions that built partners' own capacity, mainly on Industry Engagement and Designing Community Events, so the connections outlasted the program.",
    work: [
      "Led the program full-cycle: proposal development, implementation, donor reporting, and close-out",
      "Facilitated partner and staff sessions, mainly on Industry Engagement and Designing Community Events",
      "Managed relationships across Colleges and Institutes Canada, Bigwa FDC, Munguri FDC, community-based organizations, and Ministry representatives",
      "Led cross-functional teams delivering across the Morogoro and Dodoma regions",
      "Owned budget and risk management across the full four-year cycle",
      "Planned and delivered community events and partner convenings in both regions",
    ],
    results: [
      { value: "XX", label: "Key stakeholders engaged across government, education & industry" },
      { value: "2", label: "Folk Development Colleges as core delivery partners" },
      { value: "4 yrs", label: "delivered from proposal to close-out" },
      { value: "2026", label: "closing with structures partners run themselves" },
    ],
    voices: [
      {
        quote:
          "The sessions didn't just inform us — we left with a plan we could run ourselves.",
        name: "Program partner",
        role: "Folk Development College",
      },
      {
        quote:
          "Mary held the whole map — colleges, communities, ministry, budget — and made it feel manageable.",
        name: "Team member",
        role: "Cross-functional delivery team",
      },
    ],
    fieldNote: {
      quote: "A program succeeds when the partners stop needing the manager.",
      reflection:
        "Facilitating sessions on Industry Engagement and Designing Community Events taught me the same lesson from both sides of the room: the strongest outcomes came when partners designed the next step themselves. My job was to hold the structure — the budget, the risks, the relationships — so they had the room to do it.",
    },
    lessons: [
      "End-to-end ownership matters: the person who writes the proposal should still be there at close-out.",
      "Facilitation is a sustainability strategy — partners who build the skills keep the results.",
      "In multi-partner programs, relationship management is not soft work; it is the work.",
    ],
    whyItMatters: [
      "Women's economic empowerment depends on real links between training and local industry, not training alone.",
      "Local institutions like Folk Development Colleges are the most durable delivery channels a program can build on.",
      "Programs designed for handover from day one are the ones that survive their own closing dates.",
    ],
    relatedIds: ["skills-next-economy", "rural-pathways", "blueprint-to-bootcamp"],
  },
  {
    id: "kefep06-kenya",
    title: "Leadership & Management for Kenya's Polytechnics",
    tags: ["leadership development", "capacity building", "education & skills"],
    type: "Thematic Partnership & Leadership Development",
    location: "Nairobi, Kenya",
    year: "2017–2020",
    timeframe: "3 years",
    client: "Thematic partnership — Kenya Technical Trainers College (now Kenya School of TVET) & KATTI",
    focusArea: "Leadership & Management",
    summary:
      "KEFEP06 — Kenya Education for Employment Program. A three-year thematic partnership building leadership and management capacity across all of Kenya's national polytechnics, training HODs, Deputy Principals, and Principals.",
    overview:
      "KEFEP06 — the Kenya Education for Employment Program — included a thematic partnership on leadership and management that ran from 2017 to 2020. Working with every national polytechnic in Kenya, we trained the people who hold institutions together: heads of departments, deputy principals, and principals. The partnership was anchored by two national institutions — the Kenya Technical Trainers College, now the Kenya School of TVET, and KATTI, the Kenya Association of Technical Training Institutes — so the training was grounded in the system it was meant to strengthen.",
    images: [
      "/KE_HOD training.JPG",
      "/KE_NairobiTTI.JPG",
      u("photo-1571260899304-425eee4c7efc"),
      u("photo-1541339907198-e08756dedf3f"),
    ],
    color: "#D97706",
    aspectRatio: "landscape",
    expertise: [
      "Leadership Development",
      "Institutional Capacity Building",
      "Workshop Facilitation",
      "Partnership Development",
      "Training Design & Delivery",
      "Stakeholder Engagement",
    ],
    opportunity:
      "Kenya's national polytechnics were led by people promoted for their technical excellence — master trainers and subject specialists who woke up one day responsible for budgets, staff, and institutional strategy, often without structured preparation for the shift. Leadership in a polytechnic is not a personal skill; it is a system constraint. If heads of departments, deputy principals, and principals managed by instinct alone, every reform flowing down from the national level lost coherence on the way through the institution.",
    approach:
      "The partnership worked through the system's own institutions rather than around them. Kenya Technical Trainers College — now the Kenya School of TVET — anchored the training content and delivery, while KATTI connected the program to the association network that represents technical training institutes nationwide. That architecture mattered: training leaders through their own national institutions built credibility that an external provider could never carry, and it positioned the content to outlive the program.",
    work: [
      "Delivered a three-year thematic partnership on leadership and management under KEFEP06 (2017–2020)",
      "Reached all of Kenya's national polytechnics through structured leadership and management training",
      "Trained heads of departments, deputy principals, and principals across the polytechnic system",
      "Worked in partnership with Kenya Technical Trainers College (now Kenya School of TVET) as the national training anchor",
      "Engaged KATTI to connect the training to the nationwide network of technical training institutes",
      "Adapted the curriculum to the realities of TVET institution management in the Kenyan context",
    ],
    results: [
      { value: "XX", label: "institutional leaders trained — HODs, Deputy Principals & Principals" },
      { value: "All", label: "national polytechnics in Kenya reached" },
      { value: "2", label: "national partner institutions anchoring the training" },
      { value: "3 yrs", label: "thematic partnership, 2017–2020" },
    ],
    voices: [
      {
        quote:
          "We were promoted into leadership without ever being trained for it. This gave us the language and the tools.",
        name: "Training participant",
        role: "Head of Department, national polytechnic",
      },
      {
        quote:
          "Working through our own institutions made the training ours — not something done to us.",
        name: "Institutional partner",
        role: "National TVET partner institution",
      },
    ],
    fieldNote: {
      quote: "The people who run the institutions are the reform.",
      reflection:
        "Across three years of working with heads of departments, deputy principals, and principals, the lesson repeated itself: national reforms succeed or stall inside institutions, at the level of the people who lead them. Training those leaders through their own national institutions was not a delivery shortcut — it was the sustainability strategy.",
    },
    lessons: [
      "Leadership training lands best when it is delivered through the institutions leaders already trust.",
      "A thematic partnership aligned with national institutions outlasts any single funded project.",
      "Institutional capacity is built at the level where decisions are made: departments, deputy offices, the principal's office.",
    ],
    whyItMatters: [
      "TVET systems are only as strong as the leadership running their institutions.",
      "Investing in HODs, deputy principals, and principals multiplies every other investment in the system.",
      "Partnerships anchored in national institutions turn training into permanent capability.",
    ],
    relatedIds: ["convening-the-unconvened", "classrooms-without-borders", "esp05-tanzania"],
  },
  {
    id: "building-bridges-bogota",
    title: "Building Bridges in Bogotá",
    tags: ["partnership development", "stakeholder engagement", "international collaboration"],
    type: "Partnership & Strategy",
    location: "Bogotá, Colombia",
    year: "2025",
    timeframe: "18 months",
    client: "Secretary of Education & Local Industry Alliance",
    focusArea: "Partnership Development",
    summary:
      "Convening employers, training centers, and city government around a shared youth-employment agenda — and building the coalition structures to sustain it beyond any single program cycle.",
    overview:
      "The city had no shortage of goodwill: employers wanted entry-level talent, training centers had waiting lists, and the local government had funding. What was missing was a shared table. I was brought in to design and facilitate that table — turning scattered goodwill into a signed partnership compact with clear roles, timelines, and accountability.",
    images: [
      u("photo-1523580494863-6f3031224c94"),
      u("photo-1517048676732-d65bc937f952"),
      u("photo-1531482615713-2afd69097998"),
      u("photo-1529156069898-49953e39b3ac"),
    ],
    color: "#0EA5E9",
    aspectRatio: "landscape",
    expertise: [
      "Partnership Development",
      "Stakeholder Engagement",
      "Workshop Facilitation",
      "Coalition Building",
      "Program Design",
      "International Collaboration",
    ],
    opportunity:
      "Three sectors, one labor market, and no mechanism to coordinate. Employers interviewed for roles training centers didn't teach; graduates finished programs without a single employer contact. Youth unemployment in the target districts sat well above the city average, and every institution blamed the others. The cost of inaction was measured in a generation of young people aging out of eligibility for the very programs meant to serve them.",
    approach:
      "Rather than starting with a memorandum, I started with listening. Over six weeks I ran one-on-one interviews with every prospective partner, mapping what each actor needed, feared, and could credibly offer. Those interviews became the raw material for a series of facilitated working sessions where partners drafted the compact themselves — because a partnership people write is a partnership people keep.",
    work: [
      "Stakeholder mapping and 30+ one-on-one interviews across employers, training providers, and government",
      "Design and facilitation of three multi-sector working sessions to draft the partnership compact",
      "Negotiation of shared governance structures, including a rotating steering committee",
      "Development of a results framework with indicators all three sectors agreed to track",
      "Coaching two local facilitators to carry the process forward after the engagement ended",
    ],
    results: [
      { value: "14", label: "organizations signed the partnership compact" },
      { value: "420", label: "young people enrolled in new pathways in year one" },
      { value: "3", label: "career pathways co-designed and launched" },
 { value: "82%", label: "of partner commitments delivered on schedule" },
    ],
    voices: [
      {
        quote:
          "For the first time, we were in a room where the training center, the employer, and the city were all solving one problem instead of three.",
        name: "Program Director",
        role: "Local Industry Alliance",
      },
      {
        quote:
          "Mary made the hard conversations feel safe — and made the safe conversations feel urgent.",
        name: "Deputy Secretary",
        role: "City Education Office",
      },
    ],
    fieldNote: {
      quote:
        "The most important meeting happened in the parking lot, after the meeting.",
      reflection:
        "On the second day of negotiations, two delegates who had barely spoken in the plenary kept talking by their cars for forty minutes. That hallway-and-parking-lot energy — not the signed document — was the real deliverable. My job was less to build a partnership than to create the conditions where people could finally hear each other.",
    },
    lessons: [
      "Coalitions are built on self-interest, honestly named — not on shared slogans.",
      "Facilitation is strategy: who speaks first shapes what is possible.",
      "Design the exit before the entrance; sustainability is a design choice, not an afterthought.",
    ],
    whyItMatters: [
      "Cross-sector partnerships fail more often from process neglect than from lack of funding or intent.",
      "Locally owned governance structures outlast externally designed programs.",
      "Youth employment is a systems problem — and systems problems are convening problems.",
    ],
    relatedIds: ["convening-the-unconvened", "listening-tour", "first-hundred-days"],
  },
  {
    id: "skills-next-economy",
    title: "Skills for the Next Economy",
    tags: ["workforce development", "program design", "education & skills"],
    type: "Program Design",
    location: "Manila, Philippines",
    year: "2024",
    timeframe: "12 months",
    client: "National Technical-Vocational Agency",
    focusArea: "Workforce Development",
    summary:
      "Redesigning a national training curriculum so that what classrooms teach matches what the digital economy actually hires for.",
    overview:
      "A national training agency faced a widening gap: its most popular courses prepared learners for jobs that were quietly disappearing. I led a twelve-month curriculum redesign, pairing labor-market analytics with employer co-design to rebuild three flagship programs from the ground up.",
    images: [
      u("photo-1524178232363-1fb2b075b655"),
      u("photo-1573164713988-8665fc963095"),
      u("photo-1497486751825-1233686d5d80"),
      u("photo-1522202176988-66273c2fd55f"),
    ],
    color: "#14B8A6",
    aspectRatio: "landscape",
    expertise: [
      "Program Design",
      "Workforce Development",
      "Curriculum Strategy",
      "Labor Market Analysis",
      "Stakeholder Engagement",
      "Project Management",
    ],
    opportunity:
      "Enrollment was strong and completion rates were healthy — but placement was falling year over year. Graduates held certificates employers no longer recognized as preparation. The agency's own data stopped at the classroom door: nobody had systematically asked employers what they were hiring for, or why they were choosing other candidates.",
    approach:
      "I built the redesign around evidence, not opinion. We began with a demand-side study — interviews and hiring data from 60 employers across four regions — then translated the findings into skills profiles for each target occupation. Employers didn't just review the new curriculum; they helped build the assessments, which turned skeptics into champions.",
    work: [
      "Demand-side labor market study covering 60 employers across four regions",
      "Co-design of skills profiles for three target occupation families",
      "Rebuild of three flagship curricula with modular, stackable units",
      "Development of employer-validated assessment tools",
      "Training-of-trainers for 120 instructors across the national network",
    ],
    results: [
      { value: "60", label: "employers engaged in curriculum co-design" },
      { value: "120", label: "instructors trained on the new programs" },
      { value: "+34%", label: "improvement in graduate placement rate" },
    ],
    voices: [
      {
        quote:
          "We stopped guessing what employers want and started asking. That one shift changed everything downstream.",
        name: "Curriculum Lead",
        role: "National Training Agency",
      },
    ],
    fieldNote: {
      quote: "Every curriculum is a bet about the future. Most were placed years ago.",
      reflection:
        "Reviewing the old course materials, I found modules last updated before the pandemic — teaching tools for jobs that had already transformed. The moment that stayed with me was an instructor saying, quietly, that she had known for years the content was outdated but had no channel to say so. Systems don't lack information; they lack listening structures.",
    },
    lessons: [
      "Placement data is the truest curriculum feedback loop — wire it in from day one.",
      "Instructors are your earliest warning system; give them a formal channel.",
      "Stackable credentials turn a single course into a career ladder.",
    ],
    whyItMatters: [
      "Skills systems that don't track employer demand train people for the past.",
      "Employer co-design builds both relevance and political durability.",
      "Curriculum reform is change management, not just content development.",
    ],
    relatedIds: ["blueprint-to-bootcamp", "rural-pathways", "women-who-build"],
  },
  {
    id: "classrooms-without-borders",
    title: "Classrooms Without Borders",
    tags: ["international collaboration", "education & skills", "partnership development"],
    type: "Partnership & Exchange",
    location: "Nairobi, Kenya",
    year: "2024",
    timeframe: "10 months",
    client: "Regional Education Network",
    focusArea: "International Collaboration",
    summary:
      "Designing a cross-border teacher exchange across five countries — turning a pilot of good intentions into a structured program with shared standards.",
    overview:
      "Five countries, one regional network, and a shared teacher shortage in STEM subjects. I designed and launched a cross-border exchange program that lets teachers serve where they are needed most — with shared standards, mutual recognition of qualifications, and safeguards for both the teachers and the schools that host them.",
    images: [
      u("photo-1543269865-cbf427effbad"),
      u("photo-1427504494785-3a9ca7044f45"),
      u("photo-1523050854058-8df90110c9f1"),
      u("photo-1517245386807-bb43f82c33c4"),
    ],
    color: "#F59E0B",
    aspectRatio: "portrait",
    expertise: [
      "International Collaboration",
      "Program Design",
      "Partnership Development",
      "Policy Alignment",
      "Stakeholder Engagement",
      "Capacity Building",
    ],
    opportunity:
      "Each country in the network was separately recruiting against the same regional shortage, often competing with each other for the same teachers. Qualifications earned in one country weren't recognized in another, and ad-hoc arrangements left teachers without contracts, insurance, or career continuity. The network needed one framework five ministries could sign.",
    approach:
      "The breakthrough was sequencing: instead of negotiating a grand treaty, I designed a minimum viable exchange between just two countries, documented everything, and used the pilot's results as the evidence base for the wider framework. Small wins created the trust that big agreements require.",
    work: [
      "Comparative review of teacher qualification and registration frameworks across five countries",
      "Design of a two-country pilot exchange, including contracts, mentoring, and safeguards",
      "Facilitation of inter-ministerial working groups toward a regional framework agreement",
      "Development of a shared toolkit: matching, onboarding, and recognition procedures",
      "Establishment of a regional coordination unit with staff drawn from member countries",
    ],
    results: [
      { value: "5", label: "countries joined the regional framework" },
      { value: "38", label: "teachers deployed in the first two cohorts" },
      { value: "12,000+", label: "students reached by exchanged teachers" },
    ],
    voices: [
      {
        quote:
          "We had talked about regional cooperation for a decade. This was the first time we had a design we could actually sign.",
        name: "Network Coordinator",
        role: "Regional Education Network",
      },
    ],
    fieldNote: {
      quote: "The pilot teacher taught 240 students math — and two ministries how to cooperate.",
      reflection:
        "Our first exchange teacher sent weekly voice notes describing her classroom. Ministers read them. It sounds small, but those notes did more for political will than any briefing paper: they made an abstract agreement feel like a person, a classroom, a community.",
    },
    lessons: [
      "Pilot small, document everything, then scale on evidence.",
      "Mutual recognition of qualifications is the hinge every mobility program turns on.",
      "Individual stories move policy faster than aggregated data.",
    ],
    whyItMatters: [
      "Teacher shortages are regional problems wearing national disguises.",
      "Mobility frameworks protect workers as much as they move them.",
      "Regional bodies succeed when they deliver small, visible wins early.",
    ],
    relatedIds: ["building-bridges-bogota", "esp05-tanzania", "convening-the-unconvened"],
  },
  {
    id: "listening-tour",
    title: "The Listening Tour",
    tags: ["stakeholder engagement", "capacity building", "workforce development"],
    type: "Stakeholder Engagement",
    location: "Ho Chi Minh City, Vietnam",
    year: "2023",
    timeframe: "6 months",
    client: "International Development Partner",
    focusArea: "Stakeholder Engagement",
    summary:
      "A six-month listening tour across factories, dormitories, and training centers — rebuilding a workforce program around what workers actually said.",
    overview:
      "A flagship workforce program was delivering on paper but underused in practice. I led a deep listening process across the full workforce chain — workers, line supervisors, trainers, and recruiters — and translated what we heard into a redesigned program with new services the original design had never imagined.",
    images: [
      u("photo-1517245386807-bb43f82c33c4"),
      u("photo-1529156069898-49953e39b3ac"),
      u("photo-1522202176988-66273c2fd55f"),
      u("photo-1573164713988-8665fc963095"),
    ],
    color: "#A855F7",
    aspectRatio: "square",
    expertise: [
      "Stakeholder Engagement",
      "Qualitative Research",
      "Workshop Facilitation",
      "Capacity Building",
      "Program Design",
      "Cross-Cultural Communication",
    ],
    opportunity:
      "Enrollment numbers looked fine; retention didn't. Half of participants left programs within the first month. The funder assumed the problem was marketing. The real question was whether the program was solving a problem workers actually had — and nobody had asked them in their own language, on their own turf, without an enrollment form in hand.",
    approach:
      "We went where people already were: factory canteens, dormitory common rooms, bus stops outside the industrial zone. Over 90 conversations, we listened for the gaps between what the program offered and what people were navigating — transport shifts, childcare, remittances, night classes that ended after the last bus.",
    work: [
      "90+ in-context interviews across factories, dormitories, and training centers",
      "Journey mapping of the worker experience from first contact to first job",
      "Synthesis workshops with program staff to reframe the service model",
      "Redesign of scheduling, outreach, and support services based on findings",
      "Establishment of a permanent worker advisory panel",
    ],
    results: [
      { value: "90+", label: "in-depth conversations across the workforce chain" },
      { value: "2.4x", label: "increase in month-two program retention" },
      { value: "1", label: "permanent worker advisory panel established" },
    ],
    voices: [
      {
        quote:
          "Nobody ever asked me why I left. They only asked why I hadn't come back.",
        name: "Former program participant",
        role: "Electronics manufacturing worker",
      },
    ],
    fieldNote: {
      quote: "The bus schedule was the real curriculum constraint.",
      reflection:
        "We had budgeted for everything except transport timing. One worker drew me the bus timetable on the back of a payslip, showing that the free evening class ended ninety minutes after the last bus to her district. Three years of 'low engagement' was, in part, a timetable problem. Proximity to real lives is not a research nicety — it is where the answers live.",
    },
    lessons: [
      "Retention problems are usually design problems wearing a marketing costume.",
      "Interview people in their context, not in your office.",
      "The cheapest fixes are often found in logistics, not strategy.",
    ],
    whyItMatters: [
      "Programs designed without workers solve the funder's problem, not the worker's.",
      "Listening is a capability organizations can build, not a one-off exercise.",
      "Small structural frictions quietly defeat well-funded intentions.",
    ],
    relatedIds: ["rural-pathways", "women-who-build", "skills-next-economy"],
  },
  {
    id: "blueprint-to-bootcamp",
    title: "Blueprint to Bootcamp",
    tags: ["workforce development", "program design", "partnership development"],
    type: "Program Design",
    location: "Berlin, Germany",
    year: "2023",
    timeframe: "9 months",
    client: "Regional Chamber of Commerce",
    focusArea: "Program Design",
    summary:
      "Turning a regional skills blueprint into a working bootcamp model — from employer promise to first employed cohort in nine months.",
    overview:
      "A regional skills strategy had sat on a shelf for two years. I converted it into an operating bootcamp: a 14-week intensive co-owned by employers, with hiring commitments built in from day one and a design built for the region's specific labor market rather than imported wholesale.",
    images: [
      u("photo-1552664730-d307ca884978"),
      u("photo-1531482615713-2afd69097998"),
      u("photo-1524178232363-1fb2b075b655"),
      u("photo-1517048676732-d65bc937f952"),
    ],
    color: "#6366F1",
    aspectRatio: "landscape",
    expertise: [
      "Program Design",
      "Workforce Development",
      "Employer Engagement",
      "Project Management",
      "Partnership Development",
      "Monitoring & Evaluation",
    ],
    opportunity:
      "The blueprint was rigorous but abstract: forty pages of priorities with no delivery mechanism. Meanwhile, employers were importing talent for mid-skill technical roles while local residents lined up for unrelated work. The gap was operational — someone had to turn strategy into a program a person could enroll in on a Tuesday.",
    approach:
      "I treated the blueprint as raw material, not scripture. We reverse-engineered it into a single program with one occupation family, one employer coalition, and one funding model — deliberately narrow so it could prove itself. Speed to a visible result mattered more than comprehensive coverage.",
    work: [
      "Translation of the regional skills blueprint into one deliverable program design",
      "Recruitment of a founding employer coalition with named hiring commitments",
      "Design of the 14-week intensive: curriculum, schedule, support services, assessment",
      "Setup of financing and governance, including employer cost-share model",
      "Delivery support through the first cohort, from intake to job placement",
    ],
    results: [
      { value: "14 wks", label: "from intake to job-ready, per cohort" },
      { value: "9", label: "employers with named hiring commitments" },
      { value: "71%", label: "of the first cohort employed within 3 months" },
    ],
    voices: [
      {
        quote:
          "We stopped writing strategy documents and started counting hired people. That reframed every meeting.",
        name: "Skills Program Manager",
        role: "Regional Chamber of Commerce",
      },
    ],
    fieldNote: {
      quote: "The blueprint didn't fail. It was simply never given hands.",
      reflection:
        "In week one, an employer asked which page of the blueprint I was implementing. None, I admitted — we were implementing its conclusions. That distinction is the whole game: strategy documents describe a direction, but programs live or die on schedules, budgets, and named people doing named tasks.",
    },
    lessons: [
      "A strategy without a delivery vehicle is a wish, not a plan.",
      "Narrow beats comprehensive when you need proof of concept.",
      "Named hiring commitments transform employer engagement from polite to real.",
    ],
    whyItMatters: [
      "The distance between skills policy and skills delivery is where programs go to die.",
      "Employer ownership is the difference between a course and a pipeline.",
      "Speed to first result buys credibility for everything that follows.",
    ],
    relatedIds: ["skills-next-economy", "first-hundred-days", "building-bridges-bogota"],
  },
  
  {
    id: "rural-pathways",
    title: "The Rural Pathways Initiative",
    tags: ["workforce development", "capacity building", "education & skills"],
    type: "Capacity Building",
    location: "Oaxaca, Mexico",
    year: "2022",
    timeframe: "14 months",
    client: "State Rural Development Office",
    focusArea: "Capacity Building",
    summary:
      "Building local teams' ability to run their own rural training pathways — so the program survived long after the consultants went home.",
    overview:
      "A state office wanted rural training pathways but had no delivery team. Rather than building a program around outside experts, I built the team: recruiting, training, and coaching local staff until they ran every stage of the pathway — design, employer relations, delivery, and evaluation — themselves.",
    images: [
      u("photo-1544531585-9847b68c8c86"),
      u("photo-1517048676732-d65bc937f952"),
      u("photo-1522202176988-66273c2fd55f"),
      u("photo-1531482615713-2afd69097998"),
    ],
    color: "#D97706",
    aspectRatio: "landscape",
    expertise: [
      "Capacity Building",
      "Workforce Development",
      "Coaching & Mentoring",
      "Program Design",
      "Community Engagement",
      "Monitoring & Evaluation",
    ],
    opportunity:
      "Two previous programs in the region had ended when external funding and staff did, leaving communities with brochures and no service. The state office knew another parachute program would burn the last of its credibility. The mandate was explicit: build capability, not dependency.",
    approach:
      "We hired locally from day one and apprenticed the team into every function. I worked alongside, not in front — co-designing in the first cycle, supervising in the second, and reviewing from a distance in the third. Capability transfer was the deliverable; the program was the classroom.",
    work: [
      "Recruitment and onboarding of a six-person local delivery team",
      "Apprenticeship model: co-design, then supervise, then review, across three cycles",
      "Development of plain-language playbooks for each stage of the pathway",
      "Employer relationship coaching with local agri-businesses and cooperatives",
      "Establishment of a peer learning network linking four rural municipalities",
    ],
    results: [
      { value: "6", label: "local team members fully running the program" },
      { value: "4", label: "municipalities connected in a peer learning network" },
      { value: "100%", label: "of cycle-three delivery led by local staff" },
    ],
    voices: [
      {
        quote:
          "For the first time, the people running the program were the people the program was for.",
        name: "Municipal Liaison",
        role: "Rural Development Office",
      },
    ],
    fieldNote: {
      quote: "Capacity building is measured by what still works when you're gone.",
      reflection:
        "In cycle three, I attended the team's employer meeting as an observer. They handled a difficult negotiation — a cooperative pushing back on scheduling — with a fluency I could not have taught, only made room for. I took no notes that day. There was nothing left for me to write down.",
    },
    lessons: [
      "Hire for community trust; teach the technical skills.",
      "Withdraw deliberately, on a schedule the team can see.",
      "Playbooks written by the team outlast playbooks written for them.",
    ],
    whyItMatters: [
      "Programs that leave without leaving capability behind take credibility with them.",
      "Local ownership is built through staged handover, not signature ceremonies.",
      "Rural workforce challenges demand rural-led solutions.",
    ],
    relatedIds: ["listening-tour", "skills-next-economy", "women-who-build"],
  },
  {
    id: "first-hundred-days",
    title: "Designing the First 100 Days",
    tags: ["program design", "project management", "stakeholder engagement"],
    type: "Program Launch",
    location: "Amman, Jordan",
    year: "2022",
    timeframe: "5 months",
    client: "National Youth Employment Task Force",
    focusArea: "Program Design",
    summary:
      "Designing the launch plan for a new national youth employment initiative — the operating system, governance, and first-100-days roadmap.",
    overview:
      "A newly formed national task force had a mandate, a budget, and no operating model. I designed its launch: governance structures, decision rights, delivery routines, and a first-100-days roadmap that turned twenty-two institutions' expectations into a single coordinated start.",
    images: [
      u("photo-1517048676732-d65bc937f952"),
      u("photo-1552664730-d307ca884978"),
      u("photo-1523580494863-6f3031224c94"),
      u("photo-1497486751825-1233686d5d80"),
    ],
    color: "#0EA5E9",
    aspectRatio: "square",
    expertise: [
      "Program Design",
      "Project Management",
      "Governance Design",
      "Stakeholder Engagement",
      "Facilitation",
      "Monitoring & Evaluation",
    ],
    opportunity:
      "Twenty-two institutions had been named to the task force — a recipe for either gridlock or theater. With no decision rights, no delivery routines, and political attention that would not wait, the initiative risked spending its first year negotiating its own org chart instead of serving young people.",
    approach:
      "I designed for the first 100 days as if they were a product: one visible early win, a weekly operating rhythm, decision rights that could be explained in one slide, and a scoreboard everyone could read. Governance was kept light and provisional — designed to be revised by the people using it.",
    work: [
      "Design of governance and decision-rights architecture across 22 institutions",
      "Creation of the first-100-days roadmap with owners, milestones, and dependencies",
      "Facilitation of the task force's founding sessions and operating agreements",
      "Setup of delivery routines: weekly reviews, escalations, and a public scoreboard",
      "Delivery of the first visible win: a rapid upskilling pilot within 60 days",
    ],
    results: [
      { value: "22", label: "institutions aligned on one operating model" },
      { value: "60 days", label: "to first visible pilot launch" },
      { value: "1 slide", label: "needed to explain who decides what" },
    ],
    voices: [
      {
        quote:
          "The scoreboard changed the culture. Meetings stopped being about status and became about unblocking.",
        name: "Task Force Secretariat Lead",
        role: "National Youth Employment Initiative",
      },
    ],
    fieldNote: {
      quote: "New institutions don't need more meetings. They need a rhythm.",
      reflection:
        "The task force's first instinct was to schedule more coordination meetings — one per institution, effectively. We replaced them with one weekly review with one scoreboard. Watching twenty-two institutions settle into a shared rhythm was the clearest demonstration I've seen that structure is not bureaucracy; it is kindness to busy people.",
    },
    lessons: [
      "Decision rights, published early, prevent months of quiet turf negotiation.",
      "One visible early win funds the political capital for the long game.",
      "Light governance designed for revision beats heavy governance designed to impress.",
    ],
    whyItMatters: [
      "Launch phase decisions echo for years; design them as deliberately as the program itself.",
      "Cross-institutional initiatives live or die on operating rhythm.",
      "Visible momentum is the currency that keeps coalitions funded.",
    ],
    relatedIds: ["blueprint-to-bootcamp", "building-bridges-bogota", "convening-the-unconvened"],
  },
  {
    id: "women-who-build",
    title: "Women Who Build",
    tags: ["education & skills", "workforce development", "capacity building"],
    type: "Program Design",
    location: "Lagos, Nigeria",
    year: "2022",
    timeframe: "11 months",
    client: "Construction Sector Skills Partnership",
    focusArea: "Education & Skills",
    summary:
      "Opening construction-sector careers to women — redesigning recruitment, training, and site culture so that the first cohort would not be the last.",
    overview:
      "A sector skills partnership wanted to move beyond token female enrollment in construction trades. I designed a program that treated retention as the core metric — rebuilding recruitment, training schedules, mentoring, and site conditions together, because each alone would have failed.",
    images: [
      u("photo-1529156069898-49953e39b3ac"),
      u("photo-1544531585-9847b68c8c86"),
      u("photo-1522202176988-66273c2fd55f"),
      u("photo-1523050854058-8df90110c9f1"),
    ],
    color: "#EC4899",
    aspectRatio: "portrait",
    expertise: [
      "Program Design",
      "Workforce Development",
      "Stakeholder Engagement",
      "Capacity Building",
      "Inclusive Recruitment",
      "Monitoring & Evaluation",
    ],
    opportunity:
      "Women made up under 4% of the construction trade workforce, and earlier attempts had produced cohorts that enrolled impressively and evaporated by month three. Training existed; what didn't exist was a system that accounted for site culture, safety, facilities, and the economics of showing up.",
    approach:
      "We designed backwards from retention. Everything — stipend timing, tool provision, site facilities, mentor matching, employer codes of conduct — was treated as part of the training program. Employers signed on to site-level standards, not just quotas, and the program tracked retention weekly, not annually.",
    work: [
      "Retention-first program design across recruitment, training, and placement",
      "Negotiation of employer site standards: facilities, mentoring, and conduct",
      "Recruitment campaign co-created with women already working in adjacent trades",
      "Weekly retention monitoring with rapid-response problem solving",
      "Peer mentor training for twelve tradeswomen as program anchors",
    ],
    results: [
      { value: "64", label: "women completed the full training pathway" },
      { value: "88%", label: "retained in trades six months after placement" },
      { value: "12", label: "trained peer mentors anchoring later cohorts" },
    ],
    voices: [
      {
        quote:
          "The program didn't just train us. It changed what the site expects a builder to look like.",
        name: "Graduate, first cohort",
        role: "Certified electrician",
      },
    ],
    fieldNote: {
      quote: "A locker is a policy statement.",
      reflection:
        "The single most requested change was not a workshop topic but changing rooms and lockable storage on-site. When we funded facilities before marketing, applications rose on their own. It taught me that inclusion is rarely a messaging problem — it is an infrastructure problem with a messaging symptom.",
    },
    lessons: [
      "Design for retention first; recruitment numbers follow.",
      "Facilities and stipend mechanics are inclusion policy, not administration.",
      "Peer mentors convert individual success into structural change.",
    ],
    whyItMatters: [
      "Sector-wide inclusion fails when treated as a marketing exercise.",
      "Workplace conditions are training conditions.",
      "The first cohort carries the weight of every cohort after it — design for their survival.",
    ],
    relatedIds: ["rural-pathways", "listening-tour", "skills-next-economy"],
  },
  {
    id: "convening-the-unconvened",
    title: "Convening the Unconvened",
    tags: ["partnership development", "international collaboration", "stakeholder engagement"],
    type: "Partnership & Convening",
    location: "Kathmandu, Nepal",
    year: "2021",
    timeframe: "7 months",
    client: "Regional Migration & Skills Forum",
    focusArea: "Partnership Development",
    summary:
      "Bringing migrant worker associations, recruiters, and two governments into one room for the first time — and designing the forum that kept them there.",
    overview:
      "Migrant workers from the region were affected by every decision and present at none of them. I designed and convened a forum that gave worker associations a formal seat alongside recruiters and government agencies — the first structure of its kind in the corridor, and now a standing body.",
    images: [
      u("photo-1523580494863-6f3031224c94"),
      u("photo-1529156069898-49953e39b3ac"),
      u("photo-1522202176988-66273c2fd55f"),
      u("photo-1517245386807-bb43f82c33c4"),
    ],
    color: "#7C3AED",
    aspectRatio: "landscape",
    expertise: [
      "Partnership Development",
      "Stakeholder Engagement",
      "International Collaboration",
      "Facilitation",
      "Institutional Design",
      "Capacity Building",
    ],
    opportunity:
      "Recruitment corridors linked two countries, dozens of agencies, and hundreds of thousands of workers — with no shared body where worker voices had standing. Advocacy happened in protest; regulation happened in closed rooms. Everyone acknowledged the gap; no one had a design for closing it, because no one trusted the others enough to share a table.",
    approach:
      "Trust had to be built asymmetrically: months of separate pre-negotiations with each constituency before any joint meeting. Workers set the agenda for the first session; recruiters and officials responded rather than presented. Seating, speaking order, and language access were treated as governance, not logistics.",
    work: [
      "Separate trust-building consultation rounds with each constituency",
      "Design of the forum's composition, charter, and decision procedures",
      "Convening of the founding forum with formal worker association representation",
      "Establishment of working groups on recruitment fees and grievance pathways",
      "Coaching worker association leaders in formal negotiation settings",
    ],
    results: [
      { value: "1st", label: "forum of its kind with formal worker representation" },
      { value: "2", label: "governments at one table with worker associations" },
      { value: "Standing", label: "body that continues to meet quarterly" },
    ],
    voices: [
      {
        quote:
          "We were always the subject of the meeting. This was the first time we were a member of it.",
        name: "General Secretary",
        role: "Migrant Workers' Association",
      },
    ],
    fieldNote: {
      quote: "Who sets the agenda decides the meeting before it starts.",
      reflection:
        "For the founding session, we gave the agenda entirely to the worker associations. Officials later admitted they arrived uneasy — and left converted, because the agenda was more demanding of recruiters than of anyone else. Fairness, it turns out, is persuasive. The hand that sets the agenda holds the meeting.",
    },
    lessons: [
      "Pre-negotiate separately before convening jointly; trust is built bilaterally.",
      "Agenda-setting power is the most concrete form of inclusion.",
      "Design seating, speaking order, and language as governance.",
    ],
    whyItMatters: [
      "Migration and skills systems improve fastest when workers hold formal power.",
      "Convening is a discipline: composition and process are the strategy.",
      "Regional labor corridors need institutions, not just agreements.",
    ],
    relatedIds: ["building-bridges-bogota", "classrooms-without-borders", "esp05-tanzania"],
  },
];

export const services: { title: string; description: string }[] = [
  {
    title: "Partnership Strategy",
    description:
      "Designing coalitions, compacts, and governance structures that align organizations around shared outcomes — and survive leadership changes.",
  },
  {
    title: "Education & Skills Initiatives",
    description:
      "From curriculum strategy to national program design, building learning systems that connect classrooms to real labor-market demand.",
  },
  {
    title: "Stakeholder Engagement",
    description:
      "Listening processes, embedded consultation, and participation systems that bring the right voices to the table with real standing.",
  },
  {
    title: "Workforce Development",
    description:
      "Employer-driven training pathways, retention-first program design, and labor-market-aligned skills systems across sectors and borders.",
  },
  {
    title: "Workshop Facilitation",
    description:
      "Multi-stakeholder sessions, working groups, and negotiations designed to produce decisions — not just dialogue.",
  },
  {
    title: "Project Leadership",
    description:
      "Launch-phase design, governance, operating rhythms, and first-100-days roadmaps for new initiatives and task forces.",
  },
  {
    title: "Advisory Support",
    description:
      "Strategic counsel for funders, ministries, and NGOs on program architecture, stakeholder strategy, and capability building.",
  },
];

export const contactEmail = "hello@marybantug.com";

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

// Get unique categories from all project tags
export const getCategories = (): string[] => {
  const allTags = projects.flatMap((project) => project.tags);
  return [...new Set(allTags)];
};
