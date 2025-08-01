const projectData = [
  {
    id: 1,
    name: "LIS",
    code: "BGISAD001",
    description: "Web Application",
    location: [19.07609, 72.877426],
    type: "IT",
    city: "Mumbai",
    district: "Mumbai",
    state: "Maharasthra",
    client: "Mr.E.B.Rao - (Support Team )",
    ownership: "Private",
    projectType: "Web Application",
    comments: ""
  },
  {
    id: 2,
    name: "Asset Management",
    code: "BGISAD002",
    description: "Web Application",
    location: [13.067439, 80.237617],
    type: "IT",
    city: "Chennai",
    district: "Chennai",
    state: "Tamilnadu",
    client: "Vellore institute of Technology (Support Team )",
    ownership: "Private",
    projectType: "Web Application",
    comments: ""
  },
  {
    id: 3,
    name: "GIS Based Mobile App RaniBagh",
    code: "BGISAD003",
    description: "Mobile Application",
    location: [19.07609, 72.877426],
    type: "Environmental",
    city: "Mumbai",
    district: "Mumbai",
    state: "Maharasthra",
    client: "Nagar/Save Rani Bagh Botanical Garden Foundation",
    ownership: "Private",
    projectType: "Mobile Application",
    comments: ""
  },
  {
    id: 4,
    name: "POC Wayfinder Line3",
    code: "BGISBD008",
    description: "Mobile Application",
    location: [19.07609, 72.877426],
    type: "Tourism",
    city: "Mumbai",
    district: "Mumbai",
    state: "Maharasthra",
    client: "Mumbai Metro Rail Corporation Limited (MMRCL)",
    ownership: "Private",
    projectType: "Mobile Application",
    comments: ""
  },
  {
    id: 5,
    name: "K K Wagh College",
    code: "BGISBP001",
    description: "Provide the GRAM++ GIS Software & E-Tutor for GIS.",
    location: [19.997454, 73.789803],
    type: "GRAM++",
    city: "Nashik",
    district: "Nashik",
    state: "Maharasthra",
    client: "K K Wagh College of Agriculture,",
    ownership: "Private",
    projectType: "Provide the GRAM++ GIS Software & E-Tutor for GIS.",
    comments: ""
  },
  {
    id: 6,
    name: "NDMVPS-KBT College",
    code: "BGISBP002",
    description: "Provide the GRAM++ GIS Software",
    location: [19.997454, 73.789803],
    type: "GRAM++",
    city: "Nashik",
    district: "Nashik",
    state: "Maharasthra",
    client: "N.D.M.V.P.S's K.B.T. College Of Engineering",
    ownership: "Private",
    projectType: "Provide the GRAM++ GIS Software",
    comments: ""
  },
  {
    id: 7,
    name: "RGM College",
    code: "BGISBP003",
    description: "Provide the GRAM++ GIS Software",
    location: [31.99124, 76.789917],
    type: "GRAM++",
    city: "Joginder Nagar",
    district: "",
    state: "Himachal Pradesh",
    client: "RGM Govt.College, Joginder Nagar Himachal Pradesh",
    ownership: "Government",
    projectType: "Provide the GRAM++ GIS Software",
    comments: "RGM Govt.College, Joginder Nagar Himachal Pradesh"
  },
  {
    id: 8,
    name: "Sreekumar Chhatra",
    code: "BGISBP004",
    description: "Provide the GRAM++ GIS E-Tutor for GIS.",
    location: [19.07609, 72.877426],
    type: "GRAM++",
    city: "Mumbai",
    district: "Mumbai",
    state: "Maharasthra",
    client: "Mr. Sreekumar Chhatra",
    ownership: "Private",
    projectType: "Provide the GRAM++ GIS E-Tutor for GIS.",
    comments: ""
  },
  {
    id: 9,
    name: "RGM College Himachal",
    code: "BGISBP005",
    description: "Provide the GRAM++ GIS Software",
    location: [31.99124, 76.789917],
    type: "GRAM++",
    city: "Joginder Nagar",
    district: "",
    state: "Himachal Pradesh",
    client: "RGM Govt.College, Joginder Nagar Himachal Pradesh",
    ownership: "Private",
    projectType: "Provide the GRAM++ GIS Software",
    comments: "RGM Govt.College, Joginder Nagar Himachal Pradesh"
  },
  {
    id: 10,
    name: "MahaDhaanya",
    code: "BGISCP001",
    description: "Web Application",
    location: [19.07609, 72.877426],
    type: "Social Sector",
    city: "Mumbai",
    district: "Mumbai",
    state: "Maharasthra",
    client: "Municipal Corporation of Greater Mumbai",
    ownership: "Government",
    projectType: "Web Application",
    comments: ""
  },
  {
    id: 11,
    name: "Timber",
    code: "BGISCP002",
    description: "Mobile Application & Web Application",
    location: [28.679079, 77.06971],
    type: "Environmental",
    city: "Delhi",
    district: "New Delhi",
    state: "",
    client: "Insight Development Consulting Group Pvt.Ltd.",
    ownership: "Government",
    projectType: "Mobile Application & Web Application",
    comments: ""
  },
  {
    id: 12,
    name: "TreeLOV",
    code: "BGISCP003",
    description: "Mobile Application",
    location: [19.07609, 72.877426],
    type: "Environmental",
    city: "Mumbai",
    district: "Mumbai",
    state: "Maharasthra",
    client: "Bhugol GIS Pvt.Ltd",
    ownership: "Private",
    projectType: "Mobile Application",
    comments: ""
  },
  {
    id: 14,
    name: "Gram ESMS",
    code: "BGISCP005",
    description: "Web Application",
    location: [19.07609, 72.877426],
    type: "Environmental",
    city: "Mumbai",
    district: "Mumbai",
    state: "Maharasthra",
    client: "EQMS (MMRDA)",
    ownership: "Government",
    projectType: "Web Application",
    comments: ""
  },
  {
    id: 15,
    name: "Travel Time Matrix",
    code: "BGISCP006",
    description: "Web Application",
    location: [19.07609, 72.877426],
    type: "Real Estate",
    city: "Mumbai",
    district: "Mumbai",
    state: "Maharasthra",
    client: "Liases Foras Real Estate Rating and Research Pvt. Ltd",
    ownership: "Private",
    projectType: "Web Application",
    comments: ""
  },
  {
    id: 16,
    name: "NBR",
    code: "BGISCP007",
    description: "Web Application",
    location: [19.07609, 72.877426],
    type: "Social welfare",
    city: "Mumbai",
    district: "Mumbai",
    state: "Maharasthra",
    client: "Mahatma Phule Backward Class Development Corporation Ltd (MPBCDCL)",
    ownership: "Private",
    projectType: "Web Application",
    comments: ""
  },
  {
    id: 17,
    name: "Cookstove-ICDP",
    code: "BGISCP008",
    description: "Web Application",
    location: [19.07609, 72.877426],
    type: "Social welfare",
    city: "Mumbai",
    district: "Mumbai",
    state: "Maharasthra",
    client: "Mahatma Phule Renewable Energy & Infrastructure Technology Ltd (MahaPREIT) - CL028",
    ownership: "Private",
    projectType: "Web Application",
    comments: ""
  },
  {
    id: 18,
    name: "Krishi Gram",
    code: "BGISCP009",
    description: "Web Application",
    location: [19.07609, 72.877426],
    type: "Agriculture",
    city: "Mumbai",
    district: "Mumbai",
    state: "Maharasthra",
    client: "Indian Institute of Technology (IIT), Bombay",
    ownership: "Government",
    projectType: "Web Application",
    comments: ""
  },
  {
    id: 19,
    name: "Claim Assure",
    code: "BGISCP010",
    description: "Mobile Application & Web Application",
    location: [19.07609, 72.877426],
    type: "Health",
    city: "Mumbai",
    district: "Mumbai",
    state: "Maharasthra",
    client: "Maxim Health Services LLP",
    ownership: "Government",
    projectType: "Mobile Application & Web Application",
    comments: ""
  },
  {
    id: 20,
    name: "Arogya Aplya Dari",
    code: "BGISCP011",
    description: "Mobile Application & Web Application",
    location: [19.07609, 72.877426],
    type: "Health",
    city: "Mumbai",
    district: "Mumbai",
    state: "Maharasthra",
    client: "Municipal Corporation of Greater Mumbai (MCGM)/ADANI Foundation",
    ownership: "Government",
    projectType: "Mobile Application & Web Application",
    comments: ""
  },
  {
    id: 21,
    name: "Data Entry Cookstove",
    code: "BGISCS001",
    description: "-",
    location: [19.07609, 72.877426],
    type: "Social welfare",
    city: "Mumbai",
    district: "Mumbai",
    state: "Maharasthra",
    client: "Mahatma Phule Renewable Energy & Infrastructure Technology Ltd (MahaPREIT) - CL028",
    ownership: "Government",
    projectType: "-",
    comments: ""
  },
  {
    id: 22,
    name: "Nashik RFI",
    code: "BGISCS002",
    description: "-",
    location: [19.997454, 73.789803],
    type: "Infrastructure",
    city: "Nashik",
    district: "Mumbai",
    state: "Maharasthra",
    client: "Nashik Municipal Smart City Development Corporation Limited",
    ownership: "Private",
    projectType: "-",
    comments: ""
  },
  {
    id: 23,
    name: "MahaPREIT Website",
    code: "BGISCS004",
    description: "Web Application",
    location: [19.07609, 72.877426],
    type: "Social welfare",
    city: "Mumbai",
    district: "Mumbai",
    state: "Maharasthra",
    client: "Mahatma Phule Renewable Energy & Infrastructure Technology Ltd (MahaPREIT) - CL028",
    ownership: "Private",
    projectType: "Web Application",
    comments: ""
  },
  {
    id: 24,
    name: "Data Entry Cookstove",
    code: "BGISCS005",
    description: "-",
    location: [19.07609, 72.877426],
    type: "Social welfare",
    city: "Mumbai",
    district: "Mumbai",
    state: "Maharasthra",
    client: "Mahatma Phule Renewable Energy & Infrastructure Technology Ltd (MahaPREIT) - CL028",
    ownership: "Private",
    projectType: "-",
    comments: ""
  },
  {
    id: 25,
    name: "Hydrologica lAnd Hydraulic Study-PADECO",
    code: "BGISSM001",
    description: "-",
    location: [-1.940278, 29.873888],
    type: "Hydrology",
    city: "Rwanda",
    district: "",
    state: "",
    client: "Padeco India Pvt.Ltd.",
    ownership: "Private",
    projectType: "-",
    comments: "Africa, Rawanda"
  },
  {
    id: 26,
    name: "GISBased Maps of Uttarakhand And GRAM++",
    code: "BGISSM002",
    description: "-",
    location: [19.07609, 72.877426],
    type: "Education",
    city: "Mumbai",
    district: "Mumbai",
    state: "Maharastra",
    client: "The Hans Foundation",
    ownership: "Cancelled",
    projectType: "-",
    comments: ""
  },
  {
    id: 27,
    name: "My Family My Responsibity",
    code: "BGISSM003",
    description: "Mobile Application & Web Application",
    location: [19.07609, 72.877426],
    type: "Health",
    city: "Mumbai",
    district: "Maharastra",
    state: "Maharastra",
    client: "SBI Life Insurance Company Limited",
    ownership: "Government",
    projectType: "Mobile Application & Web Application",
    comments: ""
  },
  {
    id: 28,
    name: "TOD",
    code: "BGISSM004",
    description: "Spatial Mapping Services",
    location: [18.516726, 73.856255],
    type: "Transportation",
    city: "Pune",
    district: "Pune",
    state: "Maharastra",
    client: "Urban Mass Transit Company Limited",
    ownership: "Private",
    projectType: "Spatial Mapping Services",
    comments: ""
  },
  {
    id: 29,
    name: "Panvel-Karjat Railway Route",
    code: "BGISSM005",
    description: "Spatial Mapping Services",
    location: [19.21833, 72.978088],
    type: "Transportation",
    city: "Thane",
    district: "Thane",
    state: "Maharastra",
    client: "Mumbai Railway Vikas Corporation Limited (MRVC)",
    ownership: "Inhouse",
    projectType: "Spatial Mapping Services",
    comments: ""
  },
  {
    id: 30,
    name: "MahaDistribution",
    code: "BGISSM006",
    description: "Web Application",
    location: [19.07609, 72.877426],
    type: "Social welfare",
    city: "Mumbai",
    district: "Mumbai",
    state: "Maharastra",
    client: "Municipal Corporation of Greater Mumbai",
    ownership: "Private",
    projectType: "Web Application",
    comments: ""
  },
  {
    id: 31,
    name: "Gram Awas",
    code: "BGISSM007",
    description: "Web Application",
    location: [19.07609, 72.877426],
    type: "Weather",
    city: "Mumbai",
    district: "Mumbai",
    state: "Maharastra",
    client: "ICICI Lombard",
    ownership: "Private",
    projectType: "Web Application",
    comments: ""
  },
  {
    id: 32,
    name: "Inhouse Mapping",
    code: "BGISSM008",
    description: "Spatial Mapping Services",
    location: [19.07609, 72.877426],
    type: "Social welfare",
    city: "Mumbai",
    district: "Mumbai",
    state: "Maharastra",
    client: "Bhugol GIS Pvt.Ltd (MP Ensystems Advisory Pvt Ltd)",
    ownership: "Government",
    projectType: "Spatial Mapping Services",
    comments: ""
  },
  {
    id: 33,
    name: "NAMCO",
    code: "BGISSM009",
    description: "Spatial Mapping Services",
    location: [19.07609, 72.877426],
    type: "IT",
    city: "Mumbai",
    district: "Mumbai",
    state: "Maharastra",
    client: "Bandai NAMCO India Private Limited",
    ownership: "Government",
    projectType: "Spatial Mapping Services",
    comments: ""
  },
  {
    id: 34,
    name: "Victims Of Trafficking Asia Foundation",
    code: "BGISSM010",
    description: "Spatial Mapping Services",
    location: [19.07609, 72.877426],
    type: "Social welfare",
    city: "Mumbai",
    district: "Mumbai",
    state: "Maharastra",
    client: "The Asia Foundation",
    ownership: "Private",
    projectType: "Spatial Mapping Services",
    comments: ""
  },
  {
    id: 35,
    name: "Nashik SmartCity",
    code: "BGISSM011",
    description: "Web Application & Spatial Mapping Services",
    location: [19.997454, 73.789803],
    type: "Infrastructure",
    city: "Nashik",
    district: "Maharastra",
    state: "Maharastra",
    client: "Nashik Municipal Smart City Development Corporation Limited",
    ownership: "Private",
    projectType: "Web Application & Spatial Mapping Services",
    comments: ""
  },
  {
    id: 36,
    name: "Water Inventory Nashik District",
    code: "BGISSM012",
    description: "Spatial Mapping Services",
    location: [19.997454, 73.789803],
    type: "Infrastructure",
    city: "Nashik",
    district: "Maharastra",
    state: "Maharastra",
    client: "Water Conservation Department, Nashik.",
    ownership: "Private",
    projectType: "Spatial Mapping Services",
    comments: ""
  },
  {
    id: 37,
    name: "GIS Mapping Khasra Boundaries",
    code: "BGISSM013",
    description: "Spatial Mapping Services",
    location: [19.07609, 72.877426],
    type: "Land Parcel Mapping",
    city: "Mumbai",
    district: "Maharastra",
    state: "Maharastra",
    client: "Saisanket Industries Pvt Ltd",
    ownership: "Private",
    projectType: "Spatial Mapping Services",
    comments: ""
  },
  {
    id: 38,
    name: "Wetland Study Navi Mumbai SEZ",
    code: "BGISSM014",
    description: "Spatial Mapping Services",
    location: [19.03681, 73.01582],
    type: "Enivironment",
    city: "Navi Mumbai",
    district: "Raigad",
    state: "Maharastra",
    client: "Indian Institute of Technology Bombay",
    ownership: "Private",
    projectType: "Spatial Mapping Services",
    comments: ""
  },
  {
    id: 39,
    name: "Gongri Land Parcel Mapping",
    code: "BGISSM015",
    description: "Spatial Mapping Services",
    location: [19.07609, 72.877426],
    type: "Hydrology",
    city: "Mumbai",
    district: "Mumbai",
    state: "",
    client: "Scatec",
    ownership: "Government",
    projectType: "Spatial Mapping Services",
    comments: ""
  },
  {
    id: 40,
    name: "Maharashtra PSP",
    code: "BGISSM016",
    description: "Spatial Mapping Services",
    location: [19.07609, 72.877426],
    type: "Hydrology",
    city: "Mumbai",
    district: "Maharastra",
    state: "Maharastra",
    client: "Elements Renewable Energy Pvt. Ltd.",
    ownership: "Private",
    projectType: "Spatial Mapping Services",
    comments: ""
  },
  {
    id: 41,
    name: "Scatec Lidar Survey",
    code: "BGISSM017",
    description: "Spatial Mapping Services",
    location: [27.26475, 92.42472],
    type: "Hydrology",
    city: "Bomdila",
    district: "Bomdila",
    state: "West Kameng",
    client: "Scatec",
    ownership: "Private",
    projectType: "Spatial Mapping Services",
    comments: ""
  },
  {
    id: 42,
    name: "Kalyan Railway Yard",
    code: "BGISSM018",
    description: "Spatial Mapping Services",
    location: [19.21833, 72.978088],
    type: "Transportation",
    city: "Thane",
    district: "Thane",
    state: "Maharastra",
    client: "Central Railway",
    ownership: "Government",
    projectType: "Spatial Mapping Services",
    comments: ""
  },
  {
    id: 43,
    name: "ACPL Drone Survey GIS Mapping",
    code: "BGISSM019",
    description: "Spatial Mapping Services",
    location: [27.26475, 92.42472],
    type: "Urban Planning",
    city: "Bomdila",
    district: "West Kameng",
    state: "Arunachal Pradesh",
    client: "Amiand Consulting Pvt.Ltd.",
    ownership: "Private",
    projectType: "Spatial Mapping Services",
    comments: "Bomdila, West Kemang, Arunachal Pradesh"
  },
  {
    id: 44,
    name: "MMRCL Line11 Drone Survey",
    code: "BGISSM020",
    description: "Spatial Mapping Services",
    location: [19.07609, 72.877426],
    type: "Urban Planning",
    city: "Mumbai",
    district: "Mumbai",
    state: "Maharashtra",
    client: "Mumbai Metro Rail Corporation Limited (MMRCL)",
    ownership: "Government",
    projectType: "Spatial Mapping Services",
    comments: ""
  },
  {
    id: 45,
    name: "Archaeological GPR Survey Kerala",
    code: "BGISSM021",
    description: "Spatial Mapping Services",
    location: [10.530345, 76.214729],
    type: "Infrastructure",
    city: "Thrissur",
    district: "Thrissur",
    state: "Tamilnadu",
    client: "Archaeological Survey of India (ASI)",
    ownership: "Government",
    projectType: "Spatial Mapping Services",
    comments: ""
  },
  {
    id: 46,
    name: "Intervention Land scapes MH_RECAP4NDC",
    code: "BGISSM022",
    description: "Spatial Mapping Services",
    location: [19.07609, 72.877426],
    type: "Environmental",
    city: "Mumbai",
    district: "Maharashtra",
    state: "Maharashtra",
    client: "Insight Development Consulting Group Pvt.Ltd.",
    ownership: "Government",
    projectType: "Spatial Mapping Services",
    comments: ""
  },
  {
    id: 47,
    name: "MMRCL Line3 GPR Survey",
    code: "BGISSM023",
    description: "Spatial Mapping Services",
    location: [19.07609, 72.877426],
    type: "Infrastructure",
    city: "Mumbai",
    district: "Mumbai",
    state: "Maharastra",
    client: "Mumbai Metro Rail Corporation Limited (MMRCL)",
    ownership: "Government",
    projectType: "Spatial Mapping Services",
    comments: ""
  },
  {
    id: 48,
    name: "Utility GPR Survey Line11",
    code: "BGISSM024",
    description: "Spatial Mapping Services",
    location: [19.07609, 72.877426],
    type: "Infrastructure",
    city: "Mumbai",
    district: "Mumbai",
    state: "Maharastra",
    client: "Mumbai Metro Rail Corporation Limited (MMRCL)",
    ownership: "Government",
    projectType: "Spatial Mapping Services",
    comments: ""
  },
  {
    id: 49,
    name: "GeoSurvey Tree Tagging Project",
    code: "BGISSM025",
    description: "Mobile Application & Web Application",
    location: [19.07609, 72.877426],
    type: "Environmental",
    city: "Mumbai",
    district: "Mumbai",
    state: "Maharashtra",
    client: "Mumbai Metro Rail Corporation Limited (MMRCL)",
    ownership: "Government",
    projectType: "Mobile Application & Web Application",
    comments: ""
  },
  {
    id: 50,
    name: "CTES College",
    code: "BGISTS001",
    description: "-",
    location: [19.07609, 72.877426],
    type: "Education",
    city: "Mumbai",
    district: "Mumbai",
    state: "Maharastra",
    client: "CTES Colleage of Architecture",
    ownership: "Private",
    projectType: "-",
    comments: ""
  },
  {
    id: 51,
    name: "GIS-Remote Sensing",
    code: "BGISTS002",
    description: "-",
    location: [19.07609, 72.877426],
    type: "Education",
    city: "Mumbai",
    district: "Mumbai",
    state: "Maharastra",
    client: "Mr. Mayank Bhandari",
    ownership: "Private",
    projectType: "-",
    comments: ""
  },
  {
    id: 52,
    name: "MMRCL metro line 11 Geoportal",
    code: "MMRCL metro line 11 Geoportal",
    description: "Web Application",
    location: [19.07609, 72.877426],
    type: "Urban Planning",
    city: "Mumbai",
    district: "Mumbai",
    state: "Maharashtra",
    client: "-",
    ownership: "Government",
    projectType: "Web Application",
    comments: ""
  },
  {
    id: 53,
    name: "ACPL Asset Management System",
    code: "BGISCP012",
    description: "Web Application",
    location: [19.07609, 72.877426],
    type: "Management",
    city: "Mumbai",
    district: "Mumbai",
    state: "Maharastra",
    client: "Amiand Consulting Pvt Ltd",
    ownership: "Private",
    projectType: "Web Application",
    comments: ""
  },
  {
    id: 54,
    name: "Construction Progress Tracker System",
    code: "BGISCP013",
    description: "Mobile Application & Web Application",
    location: [19.07609, 72.877426],
    type: "Management",
    city: "Mumbai",
    district: "Mumbai",
    state: "Maharastra",
    client: "BEST GEOTECHNICS PVT. LTD.",
    ownership: "Private",
    projectType: "Mobile Application & Web Application",
    comments: ""
  },
  {
    id: 55,
    name: "Hindu Khatik Samaj Website",
    code: "BGISCP014",
    description: "Web Application",
    location: [19.07609, 72.877426],
    type: "IT",
    city: "Mumbai",
    district: "Mumbai",
    state: "Maharashtra",
    client: "Hindu Khatik Samaj Development Corporation Ltd.",
    ownership: "Government",
    projectType: "Web Application",
    comments: ""
  },
  {
    id: 56,
    name: "Best Geo Website & Project Accomplishments",
    code: "BGISCP015",
    description: "Web Application",
    location: [19.07609, 72.877426],
    type: "IT",
    city: "Mumbai",
    district: "Mumbai",
    state: "Maharastra",
    client: "BEST GEOTECHNICS PVT. LTD.",
    ownership: "Private",
    projectType: "Web Application",
    comments: ""
  }
];

export default projectData;