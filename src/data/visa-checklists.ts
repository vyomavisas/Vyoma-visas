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
    description: "A United States (USA) visa is an official authorization placed in a traveler’s passport that allows a foreign national to enter, stay in, or transit through the United States for a specific purpose and duration. The type of visa you need depends on why you are traveling, how long you plan to stay, and your eligibility under U.S. immigration law.\n 1.Non Immigrant visas:Non-immigrant visas are issued to individuals who wish to visit the U.S. temporarily for tourism, business, study, work, or medical treatment.\n2.Immigrant Visas:Immigrant visas are issued to individuals who intend to live permanently in the United States and eventually obtain a Green Card.",
    sections: [
      {
        title: "Types of USA Visas (Non-Immigrant - Temporary Stay)",
        items: [
          "B1/B2 – Visitor Visa",
          "• B1 (Business): Meetings, conferences, business negotiations",
          "• B2 (Tourism): Tourism, family visits, medical treatment",
          "• Usually granted for up to 10 years (multiple entry)",
          "• Each stay typically limited to up to 6 months",
          "F1 – Student Visa",
          "• For students enrolled in U.S. universities, colleges, or language schools",
          "• Requires admission from a SEVP-approved institution",
          "• Allows limited on-campus work and Optional Practical Training (OPT)",
          "J1 – Exchange Visitor Visa",
          "• For exchange programs such as internships, training, research, teaching",
          "• Sponsored by an approved exchange organization",
          "• Some applicants may be subject to a 2-year home residency requirement",
          "H1B – Work Visa (Specialty Occupation)",
          "• For skilled professionals (IT, engineering, healthcare, finance, etc.)",
          "• Requires a U.S. employer sponsor",
          "• Initially granted for 3 years, extendable to 6 years",
          "L1 – Intra-Company Transfer Visa",
          "• For employees transferring from a foreign office to a U.S. branch",
          "• L1A: Managers/Executives",
          "• L1B: Specialized knowledge employees",
          "O Visa",
          "• For individuals with extraordinary ability in arts, science, sports, education, or business"
        ]
      },
      {
        title: "Immigrant Visas (Permanent Residence)",
        items: [
          "Family-Based Immigration",
          "• Sponsored by a U.S. citizen or permanent resident",
          "• Includes spouses, children, parents, and siblings",
          "Employment-Based Immigration",
          "• Sponsored by a U.S. employer",
          "• Divided into preference categories (EB-1 to EB-5)",
          "Diversity Visa (DV Lottery)",
          "• Random selection program for eligible countries",
          "• Grants permanent residence to selected applicants"
        ]
      },
      {
        title: "USA Visa Application Process",
        items: [
          "1. Choose the correct visa type",
          "2. Complete DS-160 (Non-Immigrant) or DS-260 (Immigrant) form",
          "3. Pay the visa application fee",
          "4. Schedule visa interview",
          "5. Prepare required documents",
          "6. Attend interview at U.S. Embassy or Consulate",
          "7. Visa approval or refusal decision"
        ]
      },
      {
        title: "Required Documents (General)",
        items: [
          "Valid passport",
          "Visa application confirmation page",
          "Appointment confirmation",
          "Passport-size photographs",
          "Financial proof",
          "Travel history",
          "Invitation letter (if applicable)",
          "Employment or education documents",
          "* Additional documents may be required depending on visa category."
        ]
      },
      {
        title: "Visa Interview & Approval (Evaluations)",
        items: [
          "Purpose of travel",
          "Financial stability",
          "Ties to home country",
          "Previous travel history",
          "Immigration intent",
          "Approval is not guaranteed and depends on individual eligibility."
        ]
      },
      {
        title: "Visa Validity & Duration of Stay",
        items: [
          "Visa validity: Period during which you can enter the U.S.",
          "Duration of stay: Determined by U.S. Customs at the port of entry",
          "Having a visa does not guarantee entry"
        ]
      },
      {
        title: "Important Notes",
        items: [
          "Overstaying a visa can lead to future bans",
          "Providing false information may result in permanent refusal",
          "Each application is reviewed individually"
        ]
      },
      {
        title: "Why Choose Professional Visa Assistance?",
        items: [
          "Correct visa category selection",
          "Accurate documentation",
          "Interview preparation",
          "Reduced chances of rejection",
          "Time-saving and stress-free process"
        ]
      }
    ]
  },
  uk: {
    id: "uk",
    country: "United Kingdom",
    description: "A UK Visa is an official authorization that allows foreign nationals to enter, stay, work, study, or settle in the United Kingdom for a specific purpose and duration. The UK visa system is points-based and regulated by UK Visas and Immigration (UKVI) under the Home Office.",
    sections: [
      {
        title: "Visit Visas (Up to 6 months)",
        items: [
          "Common purposes: Tourism and holidays, Visiting family or friends, Business meetings or conferences, Short medical treatment.",
          "Note: No work allowed; limited study permitted up to 6 months.",
          "Proof of funds and intent to return to home country required."
        ]
      },
      {
        title: "UK Tourist Visa Checklist (Tourism & Holidays)",
        items: [
          "Valid passport",
          "Old passports (if available)",
          "Online visa application form",
          "Visa fee payment receipt",
          "Appointment confirmation",
          "Travel itinerary (optional)",
          "Hotel booking or accommodation details",
          "Recent bank statements (last 6 months)",
          "Proof of income (salary slips / business proof)",
          "Employment letter or business documents",
          "Evidence of strong ties to home country",
          "Passport-size photograph",
          "Income Tax Returns"
        ]
      },
      {
        title: "UK Visit Visa Checklist (Family or Friends)",
        items: [
          "Valid passport and old passports (if available)",
          "Online visa application form and fee receipt",
          "Appointment confirmation",
          "Invitation letter from UK host",
          "Copy of host’s passport / BRP / residence status",
          "Proof of relationship (if applicable)",
          "Host accommodation details",
          "Recent bank statements (last 6 months)",
          "Proof of income and employment/business documents",
          "Evidence of strong ties to home country",
          "Passport-size photograph and Income Tax Returns"
        ]
      },
      {
        title: "UK Business Visit Visa Checklist",
        items: [
          "Valid passport and old passports (if available)",
          "Online visa application form and fee receipt",
          "Appointment confirmation",
          "Invitation letter from UK company or organizer",
          "Business cover letter from employer",
          "Conference or event registration (if applicable)",
          "Recent bank statements (last 6 months)",
          "Proof of income and employment/business registration",
          "Evidence of strong ties to home country",
          "Passport-size photograph and Income tax returns"
        ]
      },
      {
        title: "UK Medical Visit Visa Checklist",
        items: [
          "Valid passport and old passports (if available)",
          "Online visa application form and fee receipt",
          "Appointment confirmation",
          "Medical letter from UK hospital or clinic",
          "Treatment details and estimated cost",
          "Proof of payment or ability to pay treatment expenses",
          "Recent bank statements (last 6 months)",
          "Proof of income and employment documents",
          "Evidence of strong ties to home country",
          "Passport-size photograph"
        ]
      },
      {
        title: "Student Visa (Study Visas)",
        items: [
          "For individuals aged 16+ studying at a licensed UK institution.",
          "Requirements: Confirmation of Acceptance for Studies (CAS), English proficiency, Sufficient financial evidence.",
          "1. Passport & Identity",
          "2. Visa Application",
          "3. Confirmation of Acceptance for Studies (CAS) reference",
          "4. Academic Evidence (transcripts/certificates)",
          "5. English Language Evidence (Approved test result)",
          "6. Financial Evidence (Tuition fees + living costs)",
          "• Funds must be held for at least 28 consecutive days.",
          "• Parent/Guardian account: requires birth certificate & consent letter.",
          "7. Tuberculosis (TB) Test Certificate (where applicable)",
          "8. Other: ATAS certificate, sponsor letter, translations, or parental consent (under 18).",
          "9. Recent passport-style photos."
        ]
      },
      {
        title: "Work Visa Checklist (Skilled Worker)",
        items: [
          "For professionals with a job offer from a licensed UK sponsor.",
          "1. Identity: Valid passport (1 blank page) and previous travel history.",
          "2. Job Docs: Certificate of Sponsorship (CoS) reference number.",
          "• Job details: title, salary, occupation code, and sponsor licence number.",
          "3. English Proof: Approved test (IELTS for UKVI) or degree taught in English.",
          "4. Maintenance: Proof of personal savings (unless employer certified).",
          "5. Health/Character: TB test results and Criminal record certificate (if specified).",
          "6. Dependents: Marriage/Birth certificates and proof of relationship.",
          "7. Supporting Evidence: Employment contract, payslips, or work references.",
          "8. Translations: Certified English/Welsh translations for non-English docs.",
          "9. Fees: Online form, visa fee receipt, and IHS payment receipt.",
          "10. Biometrics: Attend appointment for fingerprints and photograph."
        ]
      },
      {
        title: "Family Visa Checklist",
        items: [
          "For joining family who are UK citizens or settled residents (Spouse, Child, Parent).",
          "1. Personal: Passport, copies of UK visas/stamps, TB test, translations.",
          "2. Relationship Proof: Marriage certificate or cohabitation proof (2 years).",
          "• Child: Birth certificate and parental responsibility evidence.",
          "• Parent: Birth certificate showing link and dependency evidence.",
          "3. Sponsor Docs: Copy of British passport/BRP and National Insurance number.",
          "4. Financial Evidence: Payslips (6 months), bank statements, employment letter.",
          "• Must meet income requirement (e.g. £29,000+ for partners in 2026).",
          "5. Accommodation: Tenancy agreement, mortgage statement, or utility bills.",
          "6. Supporting: Photos together, chat logs, flight tickets, joint accounts.",
          "7. Child-specific: School enrolment and address evidence."
        ]
      },
      {
        title: "UK Visa Application Process",
        items: [
          "1. Choose the correct visa type.",
          "2. Complete the online application.",
          "3. Pay visa fees and healthcare surcharge (IHS).",
          "4. Book and attend biometric appointment.",
          "5. Submit documents (online upload or in-person).",
          "6. Wait for a decision (decision times vary by country/type)."
        ]
      },
      {
        title: "Why Choose the UK?",
        items: [
          "World-class education",
          "Global career opportunities",
          "Strong healthcare system",
          "Multicultural environment",
          "Clear pathways to settlement"
        ]
      }
    ]
  },
australia: {
    id: "australia",
    country: "Australia",
    description: "An Australia Visa is an official permit that allows foreign nationals to enter, stay, and travel within Australia for purposes such as tourism, business, study, work, or family visits. Australia offers multiple visa categories based on the purpose and duration of stay.\nMost Australian visas are applied for online and are issued electronically (eVisa).",
    sections: [
      {
        title: "Types of Australia Visas",
        items: [
          "1. Australia Tourist Visa (Subclass 600)",
          "• For leisure travel, sightseeing, visiting family or friends.",
          "• Validity: 3 months / 6 months / 12 months",
          "• Single or Multiple entry",
          "• Stay duration: Up to 3 months per visit",
          "2. Australia Business Visitor Visa (Subclass 600)",
          "• For short-term business activities such as meetings, conferences, or negotiations.",
          "• Permitted activities: Business meetings, Trade fairs, Contract discussions",
          "• (No paid work allowed)",
          "3. Australia Student Visa (Subclass 500)",
          "• For international students enrolled in registered Australian educational institutions.",
          "• Key Features: Study full-time, Work up to 48 hours per fortnight, Family members may accompany, Valid for course duration",
          "4. Australia Work Visa",
          "• For skilled professionals and temporary workers.",
          "• Popular Work Visas: Temporary Skill Shortage Visa (Subclass 482), Skilled Independent Visa (Subclass 189), Skilled Nominated Visa (Subclass 190), Working Holiday Visa (Subclass 417 & 462)",
          "5. Australia Transit Visa (Subclass 771)",
          "• For travelers transiting through Australia for less than 72 hours.",
          "6. Family & Partner Visas",
          "• For spouses, partners, parents, or children of Australian citizens or permanent residents."
        ]
      },
      {
        title: "Australia Visa Requirements",
        items: [
          "Mandatory Documents:",
          "• Valid passport",
          "• Completed visa application form",
          "• Recent passport-size photograph",
          "• Proof of financial capacity",
          "• Travel itinerary",
          "• Purpose of travel documents",
          "• Health and character documents",
          "• Visa fee payment receipt",
          "Additional Documents (Based on Visa Type):",
          "• Employment letter / salary slips",
          "• Business invitation letter",
          "• Admission letter (for students)",
          "• Marriage certificate (partner visa)",
          "• Police clearance certificate",
          "• Medical examination reports"
        ]
      },
      {
        title: "Australia Visa Application Process",
        items: [
          "1. Choose the correct visa category",
          "2. Create an ImmiAccount online",
          "3. Fill out the visa application form",
          "4. Upload required documents",
          "5. Pay visa fees online",
          "6. Attend biometrics/medical exam (if required)",
          "7. Track application status",
          "8. Receive visa grant notification"
        ]
      },
      {
        title: "Australia Visa Processing Time",
        items: [
          "• Tourist Visa: 15–30 days",
          "• Student Visa: 1–3 months",
          "• Work Visa: 2–6 months",
          "• Family / PR Visas: 6–12+ months",
          "• (Timelines may vary based on applicant profile and document verification.)"
        ]
      },
      {
        title: "Australia Visa Fees (Approximate)",
        items: [
          "• Tourist Visa: AUD 190",
          "• Student Visa: AUD 710",
          "• Working Holiday Visa: AUD 650",
          "• Skilled Migration Visas: AUD 4,640+",
          "• (Fees may change and depend on visa subclass.)"
        ]
      },
      {
        title: "Health & Character Requirements",
        items: [
          "• Medical examination by approved doctors",
          "• Health insurance (OSHC for students)",
          "• Police clearance certificates",
          "• No criminal or immigration violations"
        ]
      }
    ]
},
  schengen: {
    id: "schengen",
    country: "Schengen Area",
    description: "A Schengen Visa allows travelers to move freely across 27 European countries with a single visa, without internal border checks. It is ideal for tourism, business, family visits, medical treatment, and short-term study.\nThe visa permits a stay of up to 90 days within a 180-day period.",
    sections: [
      {
        title: "Schengen Countries List",
        items: [
          "Austria, Belgium, Croatia, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Netherlands, Norway, Poland, Portugal, Slovakia, Slovenia, Spain, Sweden, Switzerland"
        ]
      },
      {
        title: "Types of Schengen Visas",
        items: [
          "1. Tourist Visa: For leisure travel, sightseeing, or holidays.",
          "2. Business Visa: For meetings, conferences, trade fairs, or professional activities.",
          "3. Family / Friends Visit Visa: For visiting relatives or friends residing in Schengen countries.",
          "4. Medical Visa: For medical treatment in a Schengen country.",
          "5. Transit Visa: For passing through a Schengen airport or territory en route to another country.",
          "6. Short-Term Study / Training Visa: For courses or training programs lasting less than 90 days."
        ]
      },
      {
        title: "Schengen Visa Validity",
        items: [
          "• Single Entry – One-time entry",
          "• Double Entry – Two entries",
          "• Multiple Entry – Multiple visits within validity",
          "• Maximum stay: 90 days in any 180-day period"
        ]
      },
      {
        title: "Schengen Visa Requirements",
        items: [
          "Mandatory Documents:",
          "• Valid passport (issued within last 10 years, valid for 3+ months after return)",
          "• Visa application form",
          "• Passport-size photographs (as per Schengen standards)",
          "• Travel itinerary / flight reservation",
          "• Travel medical insurance (minimum €30,000 coverage)",
          "• Proof of accommodation (hotel booking / invitation letter)",
          "• Proof of financial means (bank statements, salary slips)",
          "• Cover letter explaining purpose of travel",
          "Additional Documents (if applicable):",
          "• Invitation letter (business or family visit)",
          "• Employment letter / NOC",
          "• Business registration documents",
          "• Student ID or enrollment letter"
        ]
      },
      {
        title: "Schengen Visa Application Process",
        items: [
          "1. Determine the main destination country",
          "2. Fill out the Schengen visa application form",
          "3. Book an appointment at embassy / consulate / visa center",
          "4. Submit documents and biometric data",
          "5. Pay visa fee",
          "6. Track application status",
          "7. Receive passport with visa decision"
        ]
      },
      {
        title: "Schengen Visa Processing Time",
        items: [
          "• Standard: 15 working days",
          "• Extended (in special cases): up to 45 days",
          "• Applicants are advised to apply at least 4–6 weeks before travel."
        ]
      },
      {
        title: "Travel Medical Insurance Requirements",
        items: [
          "Insurance must:",
          "• Cover entire Schengen area",
          "• Be valid for the whole trip duration",
          "• Cover emergency medical care and repatriation",
          "• Minimum coverage of €30,000"
        ]
      },
      {
        title: "Why Apply for a Schengen Visa?",
        items: [
          "• Travel across multiple European countries with one visa",
          "• Easy internal movement",
          "• Ideal for tourism and business",
          "• International travel credibility"
        ]
      }
    ]
  },
  ireland: {
    id: "ireland",
    country: "Ireland",
    description: "An Ireland Visa is an official authorization that allows foreign nationals to enter and stay in the Republic of Ireland for purposes such as tourism, business, study, work, or joining family members. Ireland is not part of the Schengen Area, so a separate Irish visa is required.\nMost applicants must apply online, and visas are issued as sticker visas on the passport.",
    sections: [
      {
        title: "Types of Ireland Visas",
        items: [
          "1. Ireland Tourist Visa (Short Stay – Type C)",
          "• For tourism, holidays, sightseeing, or visiting family and friends.",
          "• Validity: Single or Multiple Entry",
          "• Stay Duration: Up to 90 days",
          "2. Ireland Business Visa (Short Stay – Type C)",
          "• For short-term business activities.",
          "• Permitted Activities: Business meetings, Conferences and seminars, Trade fairs, Contract negotiations",
          "• (No paid employment allowed)",
          "3. Ireland Student Visa (Long Stay – Type D)",
          "• For international students enrolled in approved Irish educational institutions.",
          "• Key Features: Long-term stay, Part-time work allowed (up to 20 hours per week during term), Full-time work allowed during holidays, Renewable annually",
          "4. Ireland Work Visa (Employment Permit)",
          "• For skilled professionals offered employment in Ireland.",
          "• Common Employment Permits: Critical Skills Employment Permit, General Employment Permit, Intra-Company Transfer Permit",
          "5. Ireland Transit Visa",
          "• Required for certain nationalities transiting through Ireland to another destination.",
          "6. Ireland Family / Dependent Visa",
          "• For family members of Irish citizens or legal residents."
        ]
      },
      {
        title: "Ireland Visa Requirements",
        items: [
          "Mandatory Documents:",
          "• Valid passport (minimum 6 months validity)",
          "• Completed online visa application form",
          "• Visa application summary sheet",
          "• Recent passport-size photographs",
          "• Cover letter explaining travel purpose",
          "• Proof of accommodation",
          "• Travel itinerary",
          "• Proof of sufficient funds",
          "• Visa fee payment receipt",
          "Additional Documents (Depending on Visa Type):",
          "• Invitation letter (business or family visit)",
          "• Employment letter / salary slips",
          "• College admission letter (students)",
          "• Employment permit approval (work visa)",
          "• Marriage or birth certificates (family visas)",
          "• Medical insurance (recommended)"
        ]
      },
      {
        title: "Ireland Visa Application Process",
        items: [
          "1. Choose the correct visa type",
          "2. Complete the online application form",
          "3. Print application summary",
          "4. Gather required documents",
          "5. Submit documents at VFS / Irish Embassy / Consulate",
          "6. Pay visa fee",
          "7. Track application status",
          "8. Receive passport with visa decision"
        ]
      },
      {
        title: "Ireland Visa Processing Time",
        items: [
          "• Short Stay Visas: 2–4 weeks",
          "• Long Stay Visas: 4–8 weeks",
          "• (Processing times may vary depending on application volume and applicant profile.)"
        ]
      }
    ]
  },
  japan: {
    id: "japan",
    country: "Japan",
    description: "A Japan Visa is an official authorization issued by the Government of Japan that allows foreign nationals to enter and stay in Japan for purposes such as tourism, business, study, work, or visiting family and friends. Depending on nationality and visa type, travelers may require a visa prior to arrival.\nJapan issues sticker visas affixed to the passport, and certain nationalities are eligible for visa-free entry.",
    sections: [
      {
        title: "Types of Japan Visas",
        items: [
          "1. Japan Tourist Visa (Temporary Visitor)",
          "• For tourism, sightseeing, visiting friends or relatives, or short-term leisure travel.",
          "• Validity: Single or Multiple Entry",
          "• Generally valid for 3 months",
          "• Stay Duration: Up to 15 or 30 days (based on nationality)",
          "2. Japan Business Visa (Temporary Visitor)",
          "• For short-term business activities.",
          "• Permitted Activities: Business meetings, Conferences and seminars, Market research, Contract discussions",
          "• (No paid employment allowed)",
          "3. Japan Student Visa",
          "• For international students enrolled in Japanese universities, colleges, vocational schools, or language institutions.",
          "• Key Features: Long-term stay, Part-time work allowed (up to 28 hours/week with permission), Renewable based on course duration",
          "4. Japan Work Visa",
          "• Issued to professionals working in Japan under approved employment categories.",
          "• Popular Work Visa Types: Engineer / Specialist in Humanities / International Services, Highly Skilled Professional Visa, Instructor Visa, Skilled Labor Visa, Specified Skilled Worker (SSW)",
          "5. Japan Transit Visa",
          "• For travelers passing through Japan en route to another country (required for certain nationalities).",
          "6. Japan Family / Dependent Visa",
          "• For spouses, children, or dependents of Japanese citizens or long-term residents."
        ]
      },
      {
        title: "Japan Visa Requirements",
        items: [
          "Mandatory Documents:",
          "• Valid passport",
          "• Completed visa application form",
          "• Recent passport-size photographs",
          "• Cover letter explaining travel purpose",
          "• Travel itinerary / flight schedule",
          "• Proof of accommodation",
          "• Financial proof (bank statements)",
          "• Visa fee payment receipt",
          "Additional Documents (Depending on Visa Type):",
          "• Invitation letter (business or family visit)",
          "• Employment letter / company documents",
          "• Certificate of Eligibility (COE) – for work & student visas",
          "• School admission letter (students)",
          "• Marriage or birth certificates (family visas)"
        ]
      },
      {
        title: "Japan Visa Application Process",
        items: [
          "1. Identify the correct visa type",
          "2. Collect required documents",
          "3. Complete the visa application form",
          "4. Book an appointment at the Japanese Embassy or Consulate",
          "5. Submit documents and application",
          "6. Pay visa fees",
          "7. Attend interview (if required)",
          "8. Track application status",
          "9. Collect passport with visa"
        ]
      },
      {
        title: "Japan Visa Processing Time",
        items: [
          "• Tourist / Business Visa: 5–10 working days",
          "• Student Visa: 1–3 months",
          "• Work Visa: 1–3 months",
          "• (Processing times may vary depending on embassy and application volume.)"
        ]
      }
    ]
  },
  "south-korea": {
    id: "south-korea",
    country: "South Korea",
    description: "A South Korea Visa is an official authorization that allows foreign nationals to enter and stay in the Republic of Korea for purposes such as tourism, business, study, work, or family visits.\nDepending on nationality, travelers may require a visa or may be eligible for visa-free entry or electronic authorization.\nMost visas are issued as sticker visas or electronic approvals.",
    sections: [
      {
        title: "Types of South Korea Visas",
        items: [
          "1. South Korea Tourist Visa (C-3)",
          "• For leisure travel, sightseeing, visiting friends or relatives.",
          "• Validity: Single or Multiple entry",
          "• Typically valid for 3 months",
          "• Stay Duration: Up to 30 or 90 days (depends on nationality)",
          "2. South Korea Business Visa (C-3 / C-2)",
          "• For short-term business activities such as meetings, conferences, negotiations, or trade events.",
          "• Permitted Activities: Business meetings, Market research, Trade fairs, Contract discussions",
          "• (No paid employment allowed)",
          "3. South Korea Student Visa (D-2 / D-4)",
          "• For international students enrolled in Korean universities, colleges, or language institutes.",
          "• Key Features: Long-term stay, Part-time work allowed (with permission), Renewable based on course duration",
          "4. South Korea Work Visa",
          "• Issued to professionals working in South Korea under specific categories.",
          "• Common Work Visa Types: E-2 (Teaching – English instructors), E-7 (Specialty Occupations), E-9 (Non-professional Employment), D-10 (Job Seeker Visa)",
          "5. South Korea Transit Visa",
          "• For travelers passing through South Korea en route to another destination.",
          "• (Some nationalities are exempt under transit programs.)",
          "6. Family / Dependent Visa (F Series)",
          "• For family members of South Korean citizens or long-term residents."
        ]
      },
      {
        title: "South Korea Visa Requirements",
        items: [
          "Mandatory Documents:",
          "• Valid passport (minimum 6 months validity)",
          "• Completed visa application form",
          "• Recent passport-size photographs",
          "• Cover letter stating travel purpose",
          "• Travel itinerary",
          "• Proof of accommodation",
          "• Financial proof (bank statements)",
          "• Visa fee payment receipt",
          "Additional Documents (Based on Visa Type):",
          "• Invitation letter (business or family visit)",
          "• Employment letter / company documents",
          "• University admission letter (for students)",
          "• Certificate of employment (for work visas)",
          "• Marriage or birth certificates (family visas)"
        ]
      },
      {
        title: "South Korea Visa Application Process",
        items: [
          "1. Determine visa type based on travel purpose",
          "2. Gather required documents",
          "3. Fill out the visa application form",
          "4. Book an appointment at the South Korean Embassy or Consulate",
          "5. Submit application and documents",
          "6. Pay visa fees",
          "7. Attend interview (if required)",
          "8. Track application status",
          "9. Collect passport with visa"
        ]
      },
      {
        title: "South Korea Visa Processing Time",
        items: [
          "• Tourist / Business Visa: 7–15 working days",
          "• Student Visa: 2–4 weeks",
          "• Work Visa: 3–6 weeks",
          "• (Processing time may vary depending on embassy and applicant profile.)"
        ]
      }
    ]
  }
};