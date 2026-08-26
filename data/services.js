const services = [
    {
        id: 1,
        name: "Aadhaar Services",
        category: "Identity",
        level: "Central",
        description: "Access official Aadhaar-related services and information through UIDAI.",
        eligibility: "Requirements depend on the specific Aadhaar service.",
        documents: [
            "Aadhaar-related documents as applicable",
            "Identity or supporting documents when required",
            "Registered mobile number where applicable"
        ],
        steps: [
            "Identify the Aadhaar service you need.",
            "Check the requirements on the official UIDAI website.",
            "Follow the official process for the selected service.",
            "Do not share your OTP, PIN or sensitive information with anyone."
        ],
        officialUrl: "https://uidai.gov.in",
        verified: true,
        lastVerified: "August 2026"
    },
    {
        id: 2,
        name: "PAN Card",
        category: "Identity",
        level: "Central",
        description: "Find official information and services related to Permanent Account Number (PAN).",
        eligibility: "Eligibility and application requirements depend on the PAN service.",
        documents: [
            "Proof of identity",
            "Proof of address",
            "Proof of date of birth, where applicable"
        ],
        steps: [
            "Select the required PAN service.",
            "Check the latest requirements.",
            "Complete the application through the official source.",
            "Keep your acknowledgement or application reference safely."
        ],
        officialUrl: "https://www.incometax.gov.in",
        verified: true,
        lastVerified: "August 2026"
    },
    {
        id: 3,
        name: "Passport",
        category: "Documents",
        level: "Central",
        description: "Access official passport application and related information.",
        eligibility: "Eligibility and documentation depend on the passport service and applicant circumstances.",
        documents: [
            "Identity proof",
            "Address proof",
            "Date-of-birth proof where required"
        ],
        steps: [
            "Identify the passport service required.",
            "Check the current document requirements.",
            "Complete the application through the official Passport Seva system.",
            "Follow the appointment and verification instructions."
        ],
        officialUrl: "https://www.passportindia.gov.in",
        verified: true,
        lastVerified: "August 2026"
    },
    {
        id: 4,
        name: "DigiLocker",
        category: "Documents",
        level: "Central",
        description: "Access and manage digital documents through the official DigiLocker platform.",
        eligibility: "Availability of specific documents depends on the issuing authority and service.",
        documents: [
            "Mobile number",
            "Aadhaar or other supported identity details where required"
        ],
        steps: [
            "Open the official DigiLocker website.",
            "Create or access your account.",
            "Use the available document services.",
            "Download or share documents through the official platform."
        ],
        officialUrl: "https://www.digilocker.gov.in",
        verified: true,
        lastVerified: "August 2026"
    },
    {
        id: 5,
        name: "Scholarships",
        category: "Education",
        level: "Central",
        description: "Find government scholarship information and resources for eligible students.",
        eligibility: "Eligibility varies by scholarship, course, category, income and other conditions.",
        documents: [
            "Student identity details",
            "Academic records",
            "Income or category certificates where applicable",
            "Bank account details where required"
        ],
        steps: [
            "Find a scholarship that matches your circumstances.",
            "Read the official eligibility requirements.",
            "Prepare the required documents.",
            "Apply through the official scholarship portal."
        ],
        officialUrl: "https://scholarships.gov.in",
        verified: true,
        lastVerified: "August 2026"
    },
    {
        id: 6,
        name: "Driving Licence",
        category: "Transport",
        level: "Central",
        description: "Find official driving licence and transport-related services.",
        eligibility: "Eligibility depends on the licence category and applicant circumstances.",
        documents: [
            "Proof of identity",
            "Proof of address",
            "Age-related documents where required"
        ],
        steps: [
            "Select the required driving licence service.",
            "Check the applicable requirements.",
            "Submit the application through the official transport portal.",
            "Follow the applicable test and verification process."
        ],
        officialUrl: "https://parivahan.gov.in",
        verified: true,
        lastVerified: "August 2026"
    },
    {
        id: 7,
        name: "Government Jobs",
        category: "Jobs",
        level: "Central",
        description: "Find official government recruitment and employment information.",
        eligibility: "Eligibility varies by recruitment notification.",
        documents: [
            "Educational certificates",
            "Identity proof",
            "Category certificates where applicable",
            "Other documents specified in the official notification"
        ],
        steps: [
            "Find the relevant recruitment notification.",
            "Read the official eligibility criteria.",
            "Prepare the required documents.",
            "Apply only through the official recruitment source."
        ],
        officialUrl: "https://www.ncs.gov.in",
        verified: true,
        lastVerified: "August 2026"
    },
    {
        id: 8,
        name: "Rajasthan SSO",
        category: "State Services",
        level: "Rajasthan",
        description: "Access Rajasthan government services through the official SSO platform.",
        eligibility: "Eligibility depends on the individual service being accessed.",
        documents: [
            "SSO account details",
            "Identity information where required",
            "Documents required by the selected service"
        ],
        steps: [
            "Open the official Rajasthan SSO website.",
            "Log in or register as applicable.",
            "Select the required government service.",
            "Follow the instructions provided by the relevant department."
        ],
        officialUrl: "https://sso.rajasthan.gov.in",
        verified: true,
        lastVerified: "August 2026"
    }
];

module.exports = services;
