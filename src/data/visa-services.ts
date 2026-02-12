import { Plane, Briefcase, GraduationCap, Users, Heart, FileText } from "lucide-react";

export interface VisaService {
  slug: string;
  icon: typeof Plane;
  title: string;
  image: string;
  shortDescription: string;
  whatIs: string;
  purpose: string[];
  whoCanApply: string[];
  eligibility: string[];
  documents: { category: string; items: string[] }[];
  types: string[];
  validity: string[];
  processing: string[];
  fees: string[];
  rules: string[];
  benefits: string[];
  whyVyoma: string[];
}

export const visaServices: VisaService[] = [
  {
    slug: "tourist-visa",
    icon: Plane,
    title: "Tourist Visa",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
    shortDescription:
      "A Tourist Visa allows you to visit a foreign country for leisure, sightseeing, holidays, or visiting friends and family. Ideal for short-term personal travel.",
    whatIs:
      "A Tourist Visa is a temporary visa that allows foreign nationals to enter a country for leisure, sightseeing, holidays, or visiting friends and family. It is strictly for non-business and non-employment purposes and is issued for a limited period. Tourist visas are ideal for travelers who wish to explore a country's culture, attractions, and lifestyle.",
    purpose: [
      "Sightseeing and holiday travel",
      "Visiting friends or relatives",
      "Leisure travel and vacations",
      "Cultural or recreational activities",
      "Short-term personal visits",
      "Attending social events (non-paid)",
    ],
    whoCanApply: [
      "Plan to travel for leisure or personal reasons",
      "Have sufficient funds to support your stay",
      "Intend to return to your home country after the visit",
      "Have no intention of working or overstaying",
    ],
    eligibility: [
      "Valid passport with required validity",
      "Genuine intention to visit temporarily",
      "Proof of sufficient financial means",
      "Strong ties to home country (job, family, property)",
      "Clean immigration and travel history",
      "No criminal record",
    ],
    documents: [
      {
        category: "Personal Documents",
        items: [
          "Valid passport (with minimum validity and blank pages)",
          "Recent passport-size photographs",
          "Completed visa application form",
          "National ID or residence proof",
        ],
      },
      {
        category: "Travel Documents",
        items: [
          "Travel itinerary or flight reservation",
          "Proof of accommodation (hotel booking or invitation letter)",
          "Travel insurance (if required)",
          "Return or onward travel ticket",
        ],
      },
      {
        category: "Financial Documents",
        items: [
          "Bank statements (last 3–6 months)",
          "Proof of income or employment",
          "Sponsorship documents (if applicable)",
        ],
      },
    ],
    types: [
      "Single-entry Tourist Visa",
      "Multiple-entry Tourist Visa",
      "Short-term Tourist Visa",
      "Long-term Tourist Visa (limited stay per visit)",
    ],
    validity: [
      "Visa validity: From a few weeks to several years",
      "Stay duration: Usually 7 to 90 days per visit",
      "Entries: Single or multiple entries allowed",
      "Overstaying beyond the permitted period may lead to penalties or bans",
    ],
    processing: [
      "Standard processing: 5–15 working days",
      "Express processing (if available): 2–5 working days",
      "Processing times depend on destination country, application method, and applicant nationality",
    ],
    fees: [
      "Fees vary based on country of destination, visa type and duration, number of entries, and applicant nationality",
      "Visa fees are generally non-refundable, even if the application is refused",
    ],
    rules: [
      "Paid or unpaid work is strictly prohibited",
      "Business activities are not allowed",
      "Visa extension may not be permitted",
      "Overstaying can result in fines, deportation, or future visa refusal",
      "Travelers must comply with the laws and immigration rules of the host country",
    ],
    benefits: [
      "Easy and fast application process",
      "Opportunity to explore new destinations",
      "Visit family and friends abroad",
      "Experience different cultures and lifestyles",
      "Suitable for short-term travel",
    ],
    whyVyoma: [
      "Eligibility assessment",
      "Document preparation and verification",
      "Application filing support",
      "Appointment scheduling",
      "Status tracking and follow-up",
    ],
  },
  {
    slug: "business-visa",
    icon: Briefcase,
    title: "Business Visa",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop",
    shortDescription:
      "A Business Visa allows foreign nationals to enter a country for business-related purposes such as meetings, conferences, negotiations, and market exploration.",
    whatIs:
      "A Business Visa is a temporary visa that allows foreign nationals to enter a country for business-related purposes such as meetings, conferences, negotiations, and market exploration. It is intended for short-term visits and does not permit employment or paid work in the destination country. Business visas are commonly issued to entrepreneurs, company owners, executives, investors, and corporate representatives.",
    purpose: [
      "Attending business meetings and corporate events",
      "Participating in conferences, seminars, and workshops",
      "Visiting business partners, suppliers, or clients",
      "Exploring investment or business expansion opportunities",
      "Negotiating contracts and agreements",
      "Attending trade fairs and exhibitions",
      "Conducting market research",
      "Receiving short-term business training (unpaid)",
    ],
    whoCanApply: [
      "A business owner or entrepreneur",
      "A company director or executive",
      "A sales, marketing, or procurement professional",
      "An investor or partner in a foreign business",
      "A representative attending an official business event",
    ],
    eligibility: [
      "Hold a valid passport with sufficient validity",
      "Have a clear and genuine business purpose",
      "Provide proof of ties to their home country",
      "Demonstrate sufficient financial means",
      "Have no criminal or immigration violations",
      "Intend to leave the destination country after the visit",
    ],
    documents: [
      {
        category: "Personal Documents",
        items: [
          "Valid passport (with minimum required validity)",
          "Recent passport-size photographs",
          "Completed visa application form",
          "Proof of residence or address",
        ],
      },
      {
        category: "Business Documents",
        items: [
          "Invitation letter from the host company or organization",
          "Cover letter explaining the purpose of travel",
          "Company registration documents (if applicable)",
          "Employer letter confirming position and travel purpose",
        ],
      },
      {
        category: "Financial & Travel Documents",
        items: [
          "Bank statements or proof of funds",
          "Travel itinerary",
          "Proof of accommodation",
          "Return or onward travel ticket",
          "Travel insurance (if required)",
        ],
      },
    ],
    types: [
      "Single-entry Business Visa",
      "Multiple-entry Business Visa",
      "Short-term Business Visa",
      "Long-term Business Visa (with limited stay per visit)",
    ],
    validity: [
      "Validity: Ranges from a few weeks to several years",
      "Stay duration: Typically limited per visit (e.g., 30, 60, or 90 days)",
      "Entries: Single or multiple entries may be allowed",
      "Visa holders must not overstay or violate visa conditions",
    ],
    processing: [
      "Standard processing: 5–15 working days",
      "Express processing (if available): 2–5 working days",
      "Delays may occur during peak travel seasons or due to additional document verification",
    ],
    fees: [
      "Fees depend on country of destination, visa type (single or multiple entry), processing speed, and applicant nationality",
      "Fees are generally non-refundable, even if the visa is refused",
    ],
    rules: [
      "Employment or paid work is strictly prohibited",
      "Business visa holders cannot enroll in long-term study programs",
      "Visa extension is not always permitted",
      "Overstaying may result in fines, bans, or future visa refusal",
      "Always comply with immigration laws of the destination country",
    ],
    benefits: [
      "Enables international business expansion",
      "Facilitates professional networking",
      "Allows participation in global business events",
      "Supports investment and partnership opportunities",
      "Quick processing compared to work visas",
    ],
    whyVyoma: [
      "Eligibility assessment",
      "Document preparation and verification",
      "Invitation letter guidance",
      "Application submission support",
      "Status tracking and follow-up",
    ],
  },
  {
    slug: "study-visa",
    icon: GraduationCap,
    title: "Study Visa",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c8f1?w=600&h=400&fit=crop",
    shortDescription:
      "A Study Visa allows international students to study at recognized educational institutions in a foreign country for academic, vocational, or professional training programs.",
    whatIs:
      "A Study Visa (also known as a Student Visa) allows international students to study at recognized educational institutions in a foreign country. This visa is issued for academic, vocational, or professional training programs and is valid for the duration of the course. A study visa is mandatory for students enrolling in full-time courses abroad.",
    purpose: [
      "Undergraduate and postgraduate degree programs",
      "Diploma and certificate courses",
      "Vocational and technical training",
      "Language courses (long-term)",
      "Research and academic exchange programs",
    ],
    whoCanApply: [
      "Have an offer letter or admission confirmation from a recognized institution",
      "Meet academic eligibility requirements",
      "Have sufficient funds to support tuition and living expenses",
      "Intend to study full-time and comply with visa conditions",
      "Plan to leave the country after completing your studies",
    ],
    eligibility: [
      "Valid passport with sufficient validity",
      "Acceptance letter from an approved educational institution",
      "Proof of financial capability",
      "Academic qualification documents",
      "English or language proficiency test results (if required)",
      "Clean immigration and criminal history",
      "Genuine intent to study",
    ],
    documents: [
      {
        category: "Personal Documents",
        items: [
          "Valid passport",
          "Recent passport-size photographs",
          "Completed study visa application form",
          "National ID or residence proof",
        ],
      },
      {
        category: "Academic Documents",
        items: [
          "Offer letter / Confirmation of Enrollment (COE)",
          "Academic transcripts and certificates",
          "Language test results (IELTS, TOEFL, PTE, etc.)",
          "Statement of Purpose (SOP) or study plan",
        ],
      },
      {
        category: "Financial Documents",
        items: [
          "Bank statements (last 6–12 months)",
          "Proof of tuition fee payment or deposit",
          "Scholarship or sponsorship letter (if applicable)",
          "Affidavit of financial support (if required)",
        ],
      },
      {
        category: "Additional Documents",
        items: [
          "Medical examination reports",
          "Police clearance certificate",
          "Travel insurance or health cover",
          "Accommodation details",
        ],
      },
    ],
    types: [
      "Course level-based (school, diploma, bachelor's, master's, PhD)",
      "Short-term or long-term duration",
      "Language student visas",
      "Vocational trainee visas",
      "Exchange student visas",
    ],
    validity: [
      "Validity: Usually covers the full course duration",
      "Stay duration: Course length + grace period",
      "Renewal/Extension: Possible if continuing studies",
      "Students must maintain enrollment and attendance to keep visa status valid",
    ],
    processing: [
      "Standard processing: 2–12 weeks",
      "Processing times depend on destination country, course level, applicant nationality, and application volume",
      "Early application is strongly recommended",
    ],
    fees: [
      "Fees depend on country of study, course duration, visa type, and applicant nationality",
      "Visa fees are generally non-refundable",
    ],
    rules: [
      "Students must maintain full-time enrollment",
      "Course changes may require visa approval",
      "Overstaying is a serious violation",
      "Academic failure may affect visa status",
      "Part-time work allowed during study periods (hours vary by country)",
      "Full-time work permitted during scheduled breaks",
    ],
    benefits: [
      "Access to world-class education",
      "International exposure and cultural experience",
      "Part-time work opportunities",
      "Pathways to post-study work or residency (in some countries)",
    ],
    whyVyoma: [
      "Course and country selection guidance",
      "Admission and offer letter assistance",
      "SOP drafting support",
      "Financial document preparation",
      "Visa application filing and follow-up",
    ],
  },
  {
    slug: "conference-visa",
    icon: FileText,
    title: "Conference Visa",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    shortDescription:
      "A Conference Visa is issued for attending international conferences, seminars, workshops, symposiums, or official academic and professional events.",
    whatIs:
      "A Conference Visa is a short-term visa issued to foreign nationals who wish to travel to another country to attend conferences, seminars, workshops, symposiums, or official academic and professional events. This visa is strictly for participation purposes and does not permit employment or paid activities. Conference visas are commonly issued to professionals, researchers, delegates, speakers, and representatives attending officially recognized events.",
    purpose: [
      "Attending international conferences and conventions",
      "Participating in seminars, workshops, and symposiums",
      "Academic and research presentations",
      "Professional networking events",
      "Industry exhibitions and forums",
      "Government-approved or institutional conferences",
    ],
    whoCanApply: [
      "A professional or corporate delegate",
      "An academic, researcher, or scholar",
      "A speaker or panelist at a conference",
      "A student attending an academic event",
      "A government or institutional representative",
    ],
    eligibility: [
      "Hold a valid passport with required validity",
      "Be officially registered for the conference",
      "Provide an invitation or confirmation letter from the event organizer",
      "Have sufficient funds to cover travel and stay",
      "Intend to return to their home country after the event",
      "Have a clean immigration and criminal history",
    ],
    documents: [
      {
        category: "Personal Documents",
        items: [
          "Valid passport (with minimum required validity)",
          "Recent passport-size photographs",
          "Completed visa application form",
          "Proof of residence or national ID",
        ],
      },
      {
        category: "Conference Documents",
        items: [
          "Invitation or registration confirmation from the conference organizer",
          "Event details (venue, dates, agenda)",
          "Employer or institution letter (if applicable)",
          "Proof of delegate or speaker status",
        ],
      },
      {
        category: "Travel & Financial Documents",
        items: [
          "Travel itinerary or flight reservation",
          "Proof of accommodation",
          "Bank statements or financial proof",
          "Travel insurance (if required)",
          "Return or onward travel ticket",
        ],
      },
    ],
    types: [
      "Single-entry Conference Visa",
      "Multiple-entry Conference Visa (limited cases)",
      "Short-term Event Visa",
    ],
    validity: [
      "Validity: Usually aligned with the conference dates",
      "Stay duration: Typically ranges from a few days to several weeks",
      "Entries: Generally single entry",
      "Visa holders must depart the country before visa expiry",
    ],
    processing: [
      "Standard processing: 5–15 working days",
      "Express processing (if available): 2–5 working days",
      "Early application is strongly recommended",
    ],
    fees: [
      "Fees depend on destination country, applicant nationality, visa type, and processing speed",
      "Fees are generally non-refundable, even if the visa is refused",
    ],
    rules: [
      "Employment or paid activities are strictly prohibited",
      "Participation is limited to the approved conference",
      "Visa extension is generally not permitted",
      "Overstaying may result in penalties or future visa bans",
      "Always comply with local immigration laws",
    ],
    benefits: [
      "Enables participation in global academic and professional events",
      "Enhances knowledge sharing and networking",
      "Supports professional and career development",
      "Quick processing compared to work visas",
    ],
    whyVyoma: [
      "Eligibility assessment",
      "Conference document verification",
      "Application preparation and submission",
      "Appointment scheduling",
      "Status tracking and follow-up",
    ],
  },
  {
    slug: "dependent-visa",
    icon: Heart,
    title: "Dependent Visa",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop",
    shortDescription:
      "A Dependent Visa allows immediate family members of a primary visa holder to live with them in a foreign country for the duration of the primary visa's validity.",
    whatIs:
      "A Dependent Visa allows immediate family members of a primary visa holder to live with them in a foreign country for the duration of the primary visa's validity. This visa is commonly issued to spouses, children, and in some cases parents of individuals holding work, student, business, or residence visas. Dependent visas are designed to support family reunification while ensuring compliance with immigration laws.",
    purpose: [
      "Reside legally with the primary visa holder",
      "Accompany a spouse studying or working abroad",
      "Access basic services such as healthcare and education",
      "Maintain family unity during overseas stays",
    ],
    whoCanApply: [
      "Your spouse, parent, or guardian holds a valid visa",
      "You can prove your relationship with the primary visa holder",
      "The primary visa holder meets income or sponsorship requirements",
      "You intend to stay only as long as the sponsor's visa remains valid",
    ],
    eligibility: [
      "Valid passport with sufficient validity",
      "Proof of genuine relationship with the sponsor",
      "Financial support proof from the sponsor",
      "Clean criminal and immigration history",
      "Medical examination (if required)",
      "Intention to leave the country when the primary visa expires",
    ],
    documents: [
      {
        category: "Personal Documents",
        items: [
          "Valid passport of the dependent",
          "Recent passport-size photographs",
          "Completed visa application form",
          "Birth certificate or national ID",
        ],
      },
      {
        category: "Relationship Proof",
        items: [
          "Marriage certificate (for spouse)",
          "Birth certificate (for children)",
          "Adoption or guardianship documents (if applicable)",
          "Relationship affidavits (if required)",
        ],
      },
      {
        category: "Sponsor Documents",
        items: [
          "Copy of sponsor's passport and visa",
          "Proof of legal status in host country",
          "Employment or enrollment letter",
          "Proof of income or financial capability",
        ],
      },
      {
        category: "Additional Documents",
        items: [
          "Proof of accommodation",
          "Medical examination reports (if required)",
          "Police clearance certificate (if required)",
          "Travel insurance (if required)",
        ],
      },
    ],
    types: [
      "Spouse Dependent Visa",
      "Child Dependent Visa",
      "Parent Dependent Visa (limited countries)",
      "Family Reunification Visa",
    ],
    validity: [
      "Validity: Usually matches the sponsor's visa validity",
      "Stay duration: Same as the primary visa holder",
      "Renewal: Possible if the sponsor renews their visa",
      "Dependents must leave the country if the sponsor's visa expires or is canceled",
    ],
    processing: [
      "Standard processing: 2–12 weeks",
      "Processing times vary depending on destination country, visa category, applicant nationality, and completeness of documentation",
    ],
    fees: [
      "Fees depend on country of destination, number of dependents, visa duration, and processing method",
      "Fees are usually non-refundable",
    ],
    rules: [
      "Dependents must maintain valid legal status",
      "Overstaying may result in fines or bans",
      "Dependents cannot sponsor others in most cases",
      "Misrepresentation can lead to visa refusal",
      "Work and study permissions vary by country",
    ],
    benefits: [
      "Enables family unity abroad",
      "Legal residence with primary visa holder",
      "Access to education and healthcare",
      "Long-term stay options (depending on country)",
    ],
    whyVyoma: [
      "Eligibility assessment",
      "Relationship document verification",
      "Application preparation and submission",
      "Sponsor eligibility review",
      "Status tracking and follow-up",
    ],
  },
  {
    slug: "visiting-family-visa",
    icon: Users,
    title: "Visiting Family / Friends Visa",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
    shortDescription:
      "A Visiting Family / Friends Visa allows foreign nationals to travel to another country to visit relatives or friends who are legally residing there.",
    whatIs:
      "A Visiting Family / Friends Visa is a short-term visa that allows foreign nationals to travel to another country to visit relatives or friends who are legally residing there. This visa is intended for personal visits and social purposes only and does not permit employment, business, or long-term study. This visa is commonly issued for family reunions, special occasions, or short personal stays.",
    purpose: [
      "Visiting immediate or extended family members",
      "Visiting friends or acquaintances",
      "Attending family events such as weddings or celebrations",
      "Short personal stays and social visits",
      "Spending holidays with relatives or friends",
    ],
    whoCanApply: [
      "You have a family member or friend legally residing in the host country",
      "You can provide proof of relationship or friendship",
      "You intend to stay temporarily and return to your home country",
      "You have sufficient funds or a sponsor to support your stay",
    ],
    eligibility: [
      "Valid passport with required validity",
      "Genuine purpose of visit",
      "Proof of relationship or friendship with the host",
      "Invitation letter from the host (if required)",
      "Proof of sufficient financial means",
      "Strong ties to home country",
      "Clean travel, immigration, and criminal history",
    ],
    documents: [
      {
        category: "Applicant Documents",
        items: [
          "Valid passport (with blank pages)",
          "Recent passport-size photographs",
          "Completed visa application form",
          "Proof of residence or national ID",
        ],
      },
      {
        category: "Invitation & Relationship Documents",
        items: [
          "Invitation letter from family member or friend",
          "Copy of host's passport, residence permit, or visa",
          "Proof of relationship (birth certificate, marriage certificate, family tree, etc.)",
          "Proof of friendship (photos, communication records, affidavits – if applicable)",
        ],
      },
      {
        category: "Financial & Travel Documents",
        items: [
          "Bank statements (last 3–6 months)",
          "Proof of employment or income",
          "Proof of accommodation (host address or hotel booking)",
          "Travel itinerary or flight reservation",
          "Return or onward travel ticket",
          "Travel insurance (if required)",
        ],
      },
    ],
    types: [
      "Single-entry Visit Visa",
      "Multiple-entry Visit Visa",
      "Short-term Visit Visa",
      "Long-term Visit Visa (limited stay per visit)",
    ],
    validity: [
      "Visa validity: From a few weeks to several years",
      "Stay duration: Usually 7 to 90 days per visit",
      "Entries: Single or multiple entries allowed",
      "Overstaying may result in fines, deportation, or future visa bans",
    ],
    processing: [
      "Standard processing: 5–15 working days",
      "Express processing (if available): 2–5 working days",
      "Processing times vary depending on destination country, applicant nationality, and application method",
    ],
    fees: [
      "Fees depend on destination country, visa type and duration, number of entries, and applicant nationality",
      "Visa fees are generally non-refundable, even if the visa is refused",
    ],
    rules: [
      "Employment or business activities are prohibited",
      "Long-term study is not allowed",
      "Visa extension may not be permitted",
      "Dependents usually require separate visas",
      "Overstaying can affect future visa applications",
    ],
    benefits: [
      "Reunite with loved ones abroad",
      "Attend family events and celebrations",
      "Short-term stay with flexible travel options",
      "Faster processing than long-term visas",
    ],
    whyVyoma: [
      "Eligibility assessment",
      "Invitation letter guidance",
      "Relationship document verification",
      "Application preparation and submission",
      "Appointment scheduling",
      "Status tracking and follow-up",
    ],
  },
];

export function getVisaBySlug(slug: string): VisaService | undefined {
  return visaServices.find((s) => s.slug === slug);
}
