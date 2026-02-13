export interface ChecklistSection {
  title: string;
  items: string[];
}

export interface VisaChecklist {
  id: string;
  country: string;
  description: string;
  sections: ChecklistSection[];
}

export const visaChecklists: Record<string, VisaChecklist> = {
  usa: {
    id: "usa",
    country: "USA",
    description: "An official authorization that allows a foreign national to enter, stay in, or transit through the United States for a specific purpose and duration.",
    sections: [
      {
        title: "Non-Immigrant Visas (Temporary Stay)",
        items: [
          "B1/B2 – Visitor Visa: B1 (Business) for meetings, conferences; B2 (Tourism) for family visits, medical treatment.",
          "F1 – Student Visa: For students in U.S. universities or language schools; requires SEVP-approved institution admission.",
          "J1 – Exchange Visitor Visa: For internships, training, research, or teaching sponsored by approved organizations.",
          "H1B – Work Visa: For skilled professionals requiring a U.S. employer sponsor.",
          "L1 – Intra-Company Transfer Visa: L1A for Managers/Executives; L1B for Specialized knowledge employees.",
          "O Visa: For individuals with extraordinary ability in arts, science, sports, education, or business."
        ]
      },
      {
        title: "Immigrant Visas (Permanent Residence)",
        items: [
          "Family-Based Immigration: Sponsored by a U.S. citizen or permanent resident (spouses, children, parents, siblings).",
          "Employment-Based Immigration: Sponsored by a U.S. employer (EB-1 to EB-5 preference categories).",
          "Diversity Visa (DV Lottery): Random selection program granting permanent residence to selected applicants."
        ]
      },
      {
        title: "Required Documents (General)",
        items: [
          "Valid passport",
          "Visa application confirmation page (DS-160/DS-260)",
          "Appointment confirmation",
          "Passport-size photographs",
          "Financial proof",
          "Travel history",
          "Invitation letter (if applicable)",
          "Employment or education documents"
        ]
      },
      {
        title: "Important Notes",
        items: [
          "Visa validity is the period you can enter the U.S.; duration of stay is determined at the port of entry.",
          "Having a visa does not guarantee entry.",
          "Overstaying a visa can lead to future bans.",
          "Providing false information may result in permanent refusal."
        ]
      }
    ]
  },
  uk: {
    id: "uk",
    country: "United Kingdom",
    description: "An official authorization that allows foreign nationals to enter, stay, work, study, or settle in the UK based on nationality and purpose.",
    sections: [
      {
        title: "Visit Visas (Up to 6 months)",
        items: [
          "Common purposes: Tourism, visiting family/friends, business meetings, or short medical treatment.",
          "No work allowed; limited study permitted up to 6 months.",
          "Proof of funds and intent to return required."
        ]
      },
      {
        title: "UK Tourist & Visit Visa Checklist",
        items: [
          "Valid passport and old passports (if available)",
          "Online visa application form and fee payment receipt",
          "Appointment confirmation",
          "Hotel booking or accommodation details",
          "Recent bank statements (last 6 months)",
          "Proof of income (salary slips / business proof / business documents)",
          "Evidence of strong ties to home country",
          "Passport-size photograph and Income Tax Returns",
          "Invitation letter from UK host and host's passport/residence status (for family visits)"
        ]
      },
      {
        title: "Student Visa Document Checklist",
        items: [
          "Confirmation of Acceptance for Studies (CAS) reference number",
          "Immigration Health Surcharge (IHS) payment receipt",
          "Academic qualifications and transcripts listed on your CAS",
          "English language evidence (SELT certificate like IELTS/PTE or exemption)",
          "Financial evidence: Bank statements held for at least 28 consecutive days",
          "Tuberculosis (TB) Test Certificate (if required by country)"
        ]
      },
      {
        title: "Work Visa Document Checklist",
        items: [
          "Certificate of Sponsorship (CoS) reference number",
          "Job offer details: Title, annual salary, and occupation code",
          "Criminal record certificate (for specific specify roles like healthcare)",
          "Marriage/Birth certificates for dependents (if applicable)"
        ]
      }
    ]
  },
  australia: {
    id: "australia",
    country: "Australia",
    description: "An official permit that allows foreign nationals to enter, stay, and travel within Australia for tourism, business, study, work, or family visits.",
    sections: [
      {
        title: "Types of Australia Visas",
        items: [
          "Tourist Visa (Subclass 600): For leisure, sightseeing, or visiting family/friends (3/6/12 months validity).",
          "Business Visitor Visa (Subclass 600): For meetings, conferences, or negotiations (no paid work).",
          "Student Visa (Subclass 500): For enrolled students; allows full-time study and work up to 48 hours per fortnight.",
          "Work Visas: Includes Temporary Skill Shortage (482), Skilled Independent (189), and Working Holiday (417 & 462).",
          "Transit Visa (Subclass 771): For transits less than 72 hours.",
          "Family & Partner Visas: For spouses, parents, or children of citizens/residents."
        ]
      },
      {
        title: "Mandatory Requirements",
        items: [
          "Valid passport and completed visa application form",
          "Proof of financial capacity",
          "Travel itinerary and purpose of travel documents",
          "Health and character documents",
          "Visa fee payment receipt"
        ]
      },
      {
        title: "Processing Times",
        items: [
          "Tourist Visa: 15–30 days",
          "Student Visa: 1–3 months",
          "Work Visa: 2–6 months",
          "Family / PR Visas: 6–12+ months"
        ]
      }
    ]
  },
  schengen: {
    id: "schengen",
    country: "Schengen Area",
    description: "Allows travelers to move freely across 27 European countries with a single visa, without internal border checks.",
    sections: [
      {
        title: "Types of Schengen Visas",
        items: [
          "Tourist, Business, Family/Friends Visit, Medical, Transit, and Short-Term Study (under 90 days).",
          "Validity: Single, Double, or Multiple entry; Max stay 90 days in any 180-day period."
        ]
      },
      {
        title: "Mandatory Documents",
        items: [
          "Valid passport issued within last 10 years, valid for 3+ months after return",
          "Schengen visa application form and photographs",
          "Travel medical insurance (minimum €30,000 coverage valid for entire trip)",
          "Travel itinerary / flight reservation and cover letter",
          "Proof of accommodation (hotel booking / invitation letter)",
          "Proof of financial means (bank statements, salary slips)"
        ]
      },
      {
        title: "Processing Time",
        items: [
          "Standard: 15 working days; Extended: up to 45 days.",
          "Advised to apply 4–6 weeks before travel."
        ]
      }
    ]
  },
  ireland: {
    id: "ireland",
    country: "Ireland",
    description: "Official authorization allowing entry to the Republic of Ireland; note that Ireland is not part of the Schengen Area.",
    sections: [
      {
        title: "Types of Ireland Visas",
        items: [
          "Tourist/Business Visa (Short Stay – Type C): Holidays or short business meetings (up to 90 days).",
          "Student Visa (Long Stay – Type D): For enrolled students; allows part-time work during term and full-time during holidays.",
          "Work Visa (Employment Permit): Critical Skills, General, or Intra-Company Transfer permits.",
          "Family / Dependent Visa: For joining citizens or legal residents."
        ]
      },
      {
        title: "Required Documents",
        items: [
          "Valid passport (minimum 6 months validity)",
          "Completed online application form and summary sheet",
          "Cover letter explaining travel purpose",
          "Proof of accommodation and travel itinerary",
          "Proof of sufficient funds and visa fee receipt"
        ]
      },
      {
        title: "Processing Time",
        items: [
          "Short Stay Visas: 2–4 weeks",
          "Long Stay Visas: 4–8 weeks"
        ]
      }
    ]
  },
  japan: {
    id: "japan",
    country: "Japan",
    description: "Official authorization issued by the Government of Japan for entry and stay.",
    sections: [
      {
        title: "Types of Japan Visas",
        items: [
          "Tourist/Business Visa (Temporary Visitor): Sightseeing or short business activities (stays up to 15/30 days).",
          "Student Visa: For international students; allows part-time work up to 28 hours/week.",
          "Work Visa: For professionals like Engineers, Instructors, or Skilled Laborers."
        ]
      },
      {
        title: "Required Documents",
        items: [
          "Valid passport and completed application form",
          "Cover letter explaining travel purpose and flight schedule/itinerary",
          "Proof of accommodation and financial proof (bank statements)",
          "Certificate of Eligibility (COE) – required for work & student visas"
        ]
      },
      {
        title: "Processing Time",
        items: [
          "Tourist / Business Visa: 5–10 working days",
          "Student / Work Visa: 1–3 months"
        ]
      }
    ]
  },
  "south-korea": {
    id: "south-korea",
    country: "South Korea",
    description: "Authorization to enter the Republic of Korea for tourism, business, study, work, or family visits.",
    sections: [
      {
        title: "Types of South Korea Visas",
        items: [
          "Tourist Visa (C-3): Leisure travel or visiting relatives (stays up to 30/90 days).",
          "Business Visa (C-3 / C-2): For short-term activities like meetings or trade events.",
          "Student Visa (D-2 / D-4): Long-term stay for students with part-time work permission.",
          "Work Visa: Common types include E-2 (Teaching), E-7 (Specialty), and D-10 (Job Seeker)."
        ]
      },
      {
        title: "Required Documents",
        items: [
          "Valid passport (min 6 months) and application form",
          "Cover letter stating travel purpose and travel itinerary",
          "Proof of accommodation and financial proof",
          "University admission letter (for students) or Certificate of employment (for work)"
        ]
      },
      {
        title: "Processing Time",
        items: [
          "Tourist / Business Visa: 7–15 working days",
          "Student Visa: 2–4 weeks",
          "Work Visa: 3–6 weeks"
        ]
      }
    ]
  }
};