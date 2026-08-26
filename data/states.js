const states = [
    {
        "id": "andhra-pradesh",
        "name": "Andhra Pradesh",
        "code": "AP",
        "type": "State",
        "services": []
    },
    {
        "id": "arunachal-pradesh",
        "name": "Arunachal Pradesh",
        "code": "AR",
        "type": "State",
        "services": []
    },
    {
        "id": "assam",
        "name": "Assam",
        "code": "AS",
        "type": "State",
        "services": []
    },
    {
        "id": "bihar",
        "name": "Bihar",
        "code": "BR",
        "type": "State",
        "services": []
    },
    {
        "id": "chhattisgarh",
        "name": "Chhattisgarh",
        "code": "CG",
        "type": "State",
        "services": []
    },
    {
        "id": "goa",
        "name": "Goa",
        "code": "GA",
        "type": "State",
        "services": []
    },
    {
        "id": "gujarat",
        "name": "Gujarat",
        "code": "GJ",
        "type": "State",
        "services": []
    },
    {
        "id": "haryana",
        "name": "Haryana",
        "code": "HR",
        "type": "State",
        "services": []
    },
    {
        "id": "himachal-pradesh",
        "name": "Himachal Pradesh",
        "code": "HP",
        "type": "State",
        "services": []
    },
    {
        "id": "jharkhand",
        "name": "Jharkhand",
        "code": "JH",
        "type": "State",
        "services": []
    },
    {
        "id": "karnataka",
        "name": "Karnataka",
        "code": "KA",
        "type": "State",
        "services": []
    },
    {
        "id": "kerala",
        "name": "Kerala",
        "code": "KL",
        "type": "State",
        "services": []
    },
    {
        "id": "madhya-pradesh",
        "name": "Madhya Pradesh",
        "code": "MP",
        "type": "State",
        "services": []
    },
    {
        "id": "maharashtra",
        "name": "Maharashtra",
        "code": "MH",
        "type": "State",
        "services": []
    },
    {
        "id": "manipur",
        "name": "Manipur",
        "code": "MN",
        "type": "State",
        "services": []
    },
    {
        "id": "meghalaya",
        "name": "Meghalaya",
        "code": "ML",
        "type": "State",
        "services": []
    },
    {
        "id": "mizoram",
        "name": "Mizoram",
        "code": "MZ",
        "type": "State",
        "services": []
    },
    {
        "id": "nagaland",
        "name": "Nagaland",
        "code": "NL",
        "type": "State",
        "services": []
    },
    {
        "id": "odisha",
        "name": "Odisha",
        "code": "OD",
        "type": "State",
        "services": []
    },
    {
        "id": "punjab",
        "name": "Punjab",
        "code": "PB",
        "type": "State",
        "services": []
    },
    {
        "id": "rajasthan",
        "name": "Rajasthan",
        "code": "RJ",
        "type": "State",
        "services": [
            {
                "id": "rajasthan-sso",
                "name": "Rajasthan SSO",
                "category": "Citizen Services",
                "description": "Access multiple Rajasthan government services through the official Single Sign-On platform.",
                "officialUrl": "https://sso.rajasthan.gov.in",
                "verified": true
            },
            {
                "id": "rajasthan-emitra",
                "name": "e-Mitra",
                "category": "Citizen Services",
                "description": "Access Rajasthan citizen services, certificates, payments and transaction/status services through e-Mitra.",
                "officialUrl": "https://emitra.rajasthan.gov.in",
                "verified": true
            },
            {
                "id": "rajasthan-jan-aadhaar",
                "name": "Jan Aadhaar",
                "category": "Identity & Welfare",
                "description": "Access Jan Aadhaar enrollment, e-KYC, e-Card and related family services.",
                "officialUrl": "https://janaadhaar.rajasthan.gov.in",
                "verified": true
            },
            {
                "id": "rajasthan-bonafide",
                "name": "e-Mitra Bonafide / Domicile Certificate",
                "category": "Certificates",
                "description": "Access the official e-Mitra route for Rajasthan bonafide/residence certificate services.",
                "officialUrl": "https://emitra.rajasthan.gov.in",
                "verified": true
            },
            {
                "id": "rajasthan-caste",
                "name": "e-Mitra Caste Certificate",
                "category": "Certificates",
                "description": "Access the official e-Mitra route for Rajasthan caste certificate services.",
                "officialUrl": "https://emitra.rajasthan.gov.in",
                "verified": true
            },
            {
                "id": "rajasthan-ews",
                "name": "e-Mitra EWS Certificate",
                "category": "Certificates",
                "description": "Access the official e-Mitra route for Rajasthan EWS certificate services.",
                "officialUrl": "https://emitra.rajasthan.gov.in",
                "verified": true
            },
            {
                "id": "rajasthan-shala-darpan",
                "name": "Shala Darpan",
                "category": "Education",
                "description": "Access Rajasthan school education information and services through Shala Darpan.",
                "officialUrl": "https://rajshaladarpan.nic.in",
                "verified": true
            },
            {
                "id": "rajasthan-higher-education",
                "name": "Higher Education Admission",
                "category": "Education",
                "description": "Access official Rajasthan higher-education admission information and services.",
                "officialUrl": "https://hte.rajasthan.gov.in",
                "verified": true
            },
            {
                "id": "rajasthan-social-justice",
                "name": "Social Justice Management System",
                "category": "Welfare",
                "description": "Access official Rajasthan social justice and empowerment services and welfare information.",
                "officialUrl": "https://sje.rajasthan.gov.in",
                "verified": true
            },
            {
                "id": "rajasthan-raj-kisan",
                "name": "Raj Kisan",
                "category": "Agriculture",
                "description": "Access Rajasthan agriculture-related services and information through the official Raj Kisan platform.",
                "officialUrl": "https://rajkisan.rajasthan.gov.in",
                "verified": true
            },
            {
                "id": "rajasthan-kcc",
                "name": "Kisan Credit Card (KCC)",
                "category": "Agriculture",
                "description": "Access information related to the Kisan Credit Card service listed in Rajasthan's integrated services.",
                "officialUrl": "https://janaadhaar.rajasthan.gov.in",
                "verified": true
            },
            {
                "id": "rajasthan-health",
                "name": "Rajasthan Government Health Scheme",
                "category": "Health",
                "description": "Access official information related to the Rajasthan Government Health Scheme.",
                "officialUrl": "https://sso.rajasthan.gov.in",
                "verified": true
            },
            {
                "id": "rajasthan-chiranjeevi",
                "name": "Mukhyamantri Chiranjeevi Durghatna Bima Yojana",
                "category": "Health & Welfare",
                "description": "Access official information related to the Rajasthan accident insurance scheme.",
                "officialUrl": "https://sso.rajasthan.gov.in",
                "verified": true
            },
            {
                "id": "rajasthan-urban-employment",
                "name": "Indira Gandhi Shahari Rojgar Guarantee Yojana",
                "category": "Employment & Welfare",
                "description": "Access official information about Rajasthan's urban employment guarantee scheme.",
                "officialUrl": "https://sso.rajasthan.gov.in",
                "verified": true
            },
            {
                "id": "rajasthan-rti",
                "name": "Right To Information Portal",
                "category": "Citizen Services",
                "description": "Access the official Rajasthan RTI portal.",
                "officialUrl": "https://rti.rajasthan.gov.in",
                "verified": true
            }
        ]
    },
    {
        "id": "sikkim",
        "name": "Sikkim",
        "code": "SK",
        "type": "State",
        "services": []
    },
    {
        "id": "tamil-nadu",
        "name": "Tamil Nadu",
        "code": "TN",
        "type": "State",
        "services": []
    },
    {
        "id": "telangana",
        "name": "Telangana",
        "code": "TG",
        "type": "State",
        "services": []
    },
    {
        "id": "tripura",
        "name": "Tripura",
        "code": "TR",
        "type": "State",
        "services": []
    },
    {
        "id": "uttar-pradesh",
        "name": "Uttar Pradesh",
        "code": "UP",
        "type": "State",
        "services": []
    },
    {
        "id": "uttarakhand",
        "name": "Uttarakhand",
        "code": "UK",
        "type": "State",
        "services": []
    },
    {
        "id": "west-bengal",
        "name": "West Bengal",
        "code": "WB",
        "type": "State",
        "services": []
    },
    {
        "id": "andaman-and-nicobar-islands",
        "name": "Andaman and Nicobar Islands",
        "code": "AN",
        "type": "UT",
        "services": []
    },
    {
        "id": "chandigarh",
        "name": "Chandigarh",
        "code": "CH",
        "type": "UT",
        "services": []
    },
    {
        "id": "dadra-and-nagar-haveli-and-daman-and-diu",
        "name": "Dadra and Nagar Haveli and Daman and Diu",
        "code": "DN",
        "type": "UT",
        "services": []
    },
    {
        "id": "delhi",
        "name": "Delhi",
        "code": "DL",
        "type": "UT",
        "services": []
    },
    {
        "id": "jammu-and-kashmir",
        "name": "Jammu and Kashmir",
        "code": "JK",
        "type": "UT",
        "services": []
    },
    {
        "id": "ladakh",
        "name": "Ladakh",
        "code": "LA",
        "type": "UT",
        "services": []
    },
    {
        "id": "lakshadweep",
        "name": "Lakshadweep",
        "code": "LD",
        "type": "UT",
        "services": []
    },
    {
        "id": "puducherry",
        "name": "Puducherry",
        "code": "PY",
        "type": "UT",
        "services": []
    }
];

module.exports = states;
