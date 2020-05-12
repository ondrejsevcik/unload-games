import { shuffle } from "./shuffle";

export function getFlags(continent: Continent | null): Flag[] {
  let flags;
  switch (continent) {
    case "africa":
      flags = africaFlags;
      break;
    case "asia":
      flags = asiaFlags;
      break;
    case "europe":
      flags = europeFlags;
      break;
    case "north-america":
      flags = northAmericaFlags;
      break;
    case "oceania":
      flags = oceaniaFlags;
      break;
    case "south-america":
      flags = oceaniaFlags;
      break;
    default:
      flags = allFlags;
      break;
  }

  return shuffle(flags);
}

export function getFlagImgPath(flag: Flag) {
  return `/img-flags/${flag.countryCode}.png`;
}

export type Continent =
  | "africa"
  | "asia"
  | "europe"
  | "north-america"
  | "oceania"
  | "south-america";

export const continentOptions: {
  label: string;
  value: Continent | null;
}[] = [
  { label: "All", value: null },
  { label: "Africa", value: "africa" },
  { label: "Asia", value: "asia" },
  { label: "Europe", value: "europe" },
  { label: "North America", value: "north-america" },
  { label: "Oceania", value: "oceania" },
  { label: "South America", value: "south-america" }
];

export interface Flag {
  countryCode: string;
  countryName: string;
  continent: Continent;
}

let africaFlags: Flag[] = [
  {
    countryName: "Algeria",
    countryCode: "dz",
    continent: "africa"
  },
  {
    countryName: "Angola",
    countryCode: "ao",
    continent: "africa"
  },
  {
    countryName: "Benin",
    countryCode: "bj",
    continent: "africa"
  },
  {
    countryName: "Botswana",
    countryCode: "bw",
    continent: "africa"
  },
  {
    countryName: "British Indian Ocean Territory",
    countryCode: "io",
    continent: "africa"
  },
  {
    countryName: "Burkina Faso",
    countryCode: "bf",
    continent: "africa"
  },
  {
    countryName: "Burundi",
    countryCode: "bi",
    continent: "africa"
  },
  {
    countryName: "Cameroon",
    countryCode: "cm",
    continent: "africa"
  },
  {
    countryName: "Cape Verde",
    countryCode: "cv",
    continent: "africa"
  },
  {
    countryName: "Central African Republic",
    countryCode: "cf",
    continent: "africa"
  },
  {
    countryName: "Chad",
    countryCode: "td",
    continent: "africa"
  },
  {
    countryName: "Comoros",
    countryCode: "km",
    continent: "africa"
  },
  {
    countryName: "Republic of the Congo",
    countryCode: "cg",
    continent: "africa"
  },
  {
    countryName: "DR Congo",
    countryCode: "cd",
    continent: "africa"
  },
  {
    countryName: "Côte d'Ivoire",
    countryCode: "ci",
    continent: "africa"
  },
  {
    countryName: "Djibouti",
    countryCode: "dj",
    continent: "africa"
  },
  {
    countryName: "Egypt",
    countryCode: "eg",
    continent: "africa"
  },
  {
    countryName: "Equatorial Guinea",
    countryCode: "gq",
    continent: "africa"
  },
  {
    countryName: "Eritrea",
    countryCode: "er",
    continent: "africa"
  },
  {
    countryName: "Eswatini",
    countryCode: "sz",
    continent: "africa"
  },
  {
    countryName: "Ethiopia",
    countryCode: "et",
    continent: "africa"
  },
  {
    countryName: "Gabon",
    countryCode: "ga",
    continent: "africa"
  },
  {
    countryName: "Gambia",
    countryCode: "gm",
    continent: "africa"
  },
  {
    countryName: "Ghana",
    countryCode: "gh",
    continent: "africa"
  },
  {
    countryName: "Guinea",
    countryCode: "gn",
    continent: "africa"
  },
  {
    countryName: "Guinea-Bissau",
    countryCode: "gw",
    continent: "africa"
  },
  {
    countryName: "Kenya",
    countryCode: "ke",
    continent: "africa"
  },
  {
    countryName: "Lesotho",
    countryCode: "ls",
    continent: "africa"
  },
  {
    countryName: "Liberia",
    countryCode: "lr",
    continent: "africa"
  },
  {
    countryName: "Libya",
    countryCode: "ly",
    continent: "africa"
  },
  {
    countryName: "Madagascar",
    countryCode: "mg",
    continent: "africa"
  },
  {
    countryName: "Malawi",
    countryCode: "mw",
    continent: "africa"
  },
  {
    countryName: "Mali",
    countryCode: "ml",
    continent: "africa"
  },
  {
    countryName: "Mauritania",
    countryCode: "mr",
    continent: "africa"
  },
  {
    countryName: "Mauritius",
    countryCode: "mu",
    continent: "africa"
  },
  {
    countryName: "Mayotte",
    countryCode: "yt",
    continent: "africa"
  },
  {
    countryName: "Morocco",
    countryCode: "ma",
    continent: "africa"
  },
  {
    countryName: "Mozambique",
    countryCode: "mz",
    continent: "africa"
  },
  {
    countryName: "Namibia",
    countryCode: "na",
    continent: "africa"
  },
  {
    countryName: "Niger",
    countryCode: "ne",
    continent: "africa"
  },
  {
    countryName: "Nigeria",
    countryCode: "ng",
    continent: "africa"
  },
  {
    countryName: "Réunion",
    countryCode: "re",
    continent: "africa"
  },
  {
    countryName: "Rwanda",
    countryCode: "rw",
    continent: "africa"
  },
  {
    countryName: "Saint Helena, Ascension and Tristan da Cunha",
    countryCode: "sh",
    continent: "africa"
  },
  {
    countryName: "São Tomé and Príncipe",
    countryCode: "st",
    continent: "africa"
  },
  {
    countryName: "Senegal",
    countryCode: "sn",
    continent: "africa"
  },
  {
    countryName: "Seychelles",
    countryCode: "sc",
    continent: "africa"
  },
  {
    countryName: "Sierra Leone",
    countryCode: "sl",
    continent: "africa"
  },
  {
    countryName: "Somalia",
    countryCode: "so",
    continent: "africa"
  },
  {
    countryName: "South Africa",
    countryCode: "za",
    continent: "africa"
  },
  {
    countryName: "South Sudan",
    countryCode: "ss",
    continent: "africa"
  },
  {
    countryName: "Sudan",
    countryCode: "sd",
    continent: "africa"
  },
  {
    countryName: "Tanzania",
    countryCode: "tz",
    continent: "africa"
  },
  {
    countryName: "Togo",
    countryCode: "tg",
    continent: "africa"
  },
  {
    countryName: "Tunisia",
    countryCode: "tn",
    continent: "africa"
  },
  {
    countryName: "Uganda",
    countryCode: "ug",
    continent: "africa"
  },
  {
    countryName: "Western Sahara",
    countryCode: "eh",
    continent: "africa"
  },
  {
    countryName: "Zambia",
    countryCode: "zm",
    continent: "africa"
  },
  {
    countryName: "Zimbabwe",
    countryCode: "zw",
    continent: "africa"
  }
];

let asiaFlags: Flag[] = [
  {
    countryName: "Armenia",
    countryCode: "am",
    continent: "asia"
  },
  {
    countryName: "Azerbaijan",
    countryCode: "az",
    continent: "asia"
  },
  {
    countryName: "Bahrain",
    countryCode: "bh",
    continent: "asia"
  },
  {
    countryName: "Bangladesh",
    countryCode: "bd",
    continent: "asia"
  },
  {
    countryName: "Bhutan",
    countryCode: "bt",
    continent: "asia"
  },
  {
    countryName: "Brunei",
    countryCode: "bn",
    continent: "asia"
  },
  {
    countryName: "Cambodia",
    countryCode: "kh",
    continent: "asia"
  },
  {
    countryName: "China",
    countryCode: "cn",
    continent: "asia"
  },
  {
    countryName: "Egypt",
    countryCode: "eg",
    continent: "asia"
  },
  {
    countryName: "Georgia",
    countryCode: "ge",
    continent: "asia"
  },
  {
    countryName: "Hong Kong",
    countryCode: "hk",
    continent: "asia"
  },
  {
    countryName: "India",
    countryCode: "in",
    continent: "asia"
  },
  {
    countryName: "Indonesia",
    countryCode: "id",
    continent: "asia"
  },
  {
    countryName: "Iran",
    countryCode: "ir",
    continent: "asia"
  },
  {
    countryName: "Iraq",
    countryCode: "iq",
    continent: "asia"
  },
  {
    countryName: "Israel",
    countryCode: "il",
    continent: "asia"
  },
  {
    countryName: "Japan",
    countryCode: "jp",
    continent: "asia"
  },
  {
    countryName: "Jordan",
    countryCode: "jo",
    continent: "asia"
  },
  {
    countryName: "Kazakhstan",
    countryCode: "kz",
    continent: "asia"
  },
  {
    countryName: "North Korea",
    countryCode: "kp",
    continent: "asia"
  },
  {
    countryName: "South Korea",
    countryCode: "kr",
    continent: "asia"
  },
  {
    countryName: "Kuwait",
    countryCode: "kw",
    continent: "asia"
  },
  {
    countryName: "Kyrgyzstan",
    countryCode: "kg",
    continent: "asia"
  },
  {
    countryName: "Laos",
    countryCode: "la",
    continent: "asia"
  },
  {
    countryName: "Lebanon",
    countryCode: "lb",
    continent: "asia"
  },
  {
    countryName: "Macau",
    countryCode: "mo",
    continent: "asia"
  },
  {
    countryName: "Malaysia",
    countryCode: "my",
    continent: "asia"
  },
  {
    countryName: "Maldives",
    countryCode: "mv",
    continent: "asia"
  },
  {
    countryName: "Mongolia",
    countryCode: "mn",
    continent: "asia"
  },
  {
    countryName: "Myanmar",
    countryCode: "mm",
    continent: "asia"
  },
  {
    countryName: "Nepal",
    countryCode: "np",
    continent: "asia"
  },
  {
    countryName: "Oman",
    countryCode: "om",
    continent: "asia"
  },
  {
    countryName: "Pakistan",
    countryCode: "pk",
    continent: "asia"
  },
  {
    countryName: "Palestine",
    countryCode: "ps",
    continent: "asia"
  },
  {
    countryName: "Philippines",
    countryCode: "ph",
    continent: "asia"
  },
  {
    countryName: "Qatar",
    countryCode: "qa",
    continent: "asia"
  },
  {
    countryName: "Russia",
    countryCode: "ru",
    continent: "asia"
  },
  {
    countryName: "Saudi Arabia",
    countryCode: "sa",
    continent: "asia"
  },
  {
    countryName: "Singapore",
    countryCode: "sg",
    continent: "asia"
  },
  {
    countryName: "Sri Lanka",
    countryCode: "lk",
    continent: "asia"
  },
  {
    countryName: "Syria",
    countryCode: "sy",
    continent: "asia"
  },
  {
    countryName: "Taiwan",
    countryCode: "tw",
    continent: "asia"
  },
  {
    countryName: "Tajikistan",
    countryCode: "tj",
    continent: "asia"
  },
  {
    countryName: "Thailand",
    countryCode: "th",
    continent: "asia"
  },
  {
    countryName: "Timor-Leste",
    countryCode: "tl",
    continent: "asia"
  },
  {
    countryName: "Turkey",
    countryCode: "tr",
    continent: "asia"
  },
  {
    countryName: "Turkmenistan",
    countryCode: "tm",
    continent: "asia"
  },
  {
    countryName: "United Arab Emirates",
    countryCode: "ae",
    continent: "asia"
  },
  {
    countryName: "Uzbekistan",
    countryCode: "uz",
    continent: "asia"
  },
  {
    countryName: "Vietnam",
    countryCode: "vn",
    continent: "asia"
  },
  {
    countryName: "Yemen",
    countryCode: "ye",
    continent: "asia"
  }
];

let europeFlags: Flag[] = [
  {
    countryName: "Åland Islands",
    countryCode: "ax",
    continent: "europe"
  },
  {
    countryName: "Albania",
    countryCode: "al",
    continent: "europe"
  },
  {
    countryName: "Andorra",
    countryCode: "ad",
    continent: "europe"
  },
  {
    countryName: "Austria",
    countryCode: "at",
    continent: "europe"
  },
  {
    countryName: "Belarus",
    countryCode: "by",
    continent: "europe"
  },
  {
    countryName: "Belgium",
    countryCode: "be",
    continent: "europe"
  },
  {
    countryName: "Bosnia and Herzegovina",
    countryCode: "ba",
    continent: "europe"
  },
  {
    countryName: "Bulgaria",
    countryCode: "bg",
    continent: "europe"
  },
  {
    countryName: "Croatia",
    countryCode: "hr",
    continent: "europe"
  },
  {
    countryName: "Cyprus",
    countryCode: "cy",
    continent: "europe"
  },
  {
    countryName: "Czechia",
    countryCode: "cz",
    continent: "europe"
  },
  {
    countryName: "Denmark",
    countryCode: "dk",
    continent: "europe"
  },
  {
    countryName: "Estonia",
    countryCode: "ee",
    continent: "europe"
  },
  {
    countryName: "Faroe Islands",
    countryCode: "fo",
    continent: "europe"
  },
  {
    countryName: "Finland",
    countryCode: "fi",
    continent: "europe"
  },
  {
    countryName: "France",
    countryCode: "fr",
    continent: "europe"
  },
  {
    countryName: "Germany",
    countryCode: "de",
    continent: "europe"
  },
  {
    countryName: "Gibraltar",
    countryCode: "gi",
    continent: "europe"
  },
  {
    countryName: "Greece",
    countryCode: "gr",
    continent: "europe"
  },
  {
    countryName: "Guernsey",
    countryCode: "gg",
    continent: "europe"
  },
  {
    countryName: "Hungary",
    countryCode: "hu",
    continent: "europe"
  },
  {
    countryName: "Iceland",
    countryCode: "is",
    continent: "europe"
  },
  {
    countryName: "Ireland",
    countryCode: "ie",
    continent: "europe"
  },
  {
    countryName: "Isle of Man",
    countryCode: "im",
    continent: "europe"
  },
  {
    countryName: "Italy",
    countryCode: "it",
    continent: "europe"
  },
  {
    countryName: "Jersey",
    countryCode: "je",
    continent: "europe"
  },
  {
    countryName: "Kosovo",
    countryCode: "xk",
    continent: "europe"
  },
  {
    countryName: "Latvia",
    countryCode: "lv",
    continent: "europe"
  },
  {
    countryName: "Liechtenstein",
    countryCode: "li",
    continent: "europe"
  },
  {
    countryName: "Lithuania",
    countryCode: "lt",
    continent: "europe"
  },
  {
    countryName: "Luxembourg",
    countryCode: "lu",
    continent: "europe"
  },
  {
    countryName: "Malta",
    countryCode: "mt",
    continent: "europe"
  },
  {
    countryName: "Moldova",
    countryCode: "md",
    continent: "europe"
  },
  {
    countryName: "Monaco",
    countryCode: "mc",
    continent: "europe"
  },
  {
    countryName: "Montenegro",
    countryCode: "me",
    continent: "europe"
  },
  {
    countryName: "Netherlands",
    countryCode: "nl",
    continent: "europe"
  },
  {
    countryName: "North Macedonia",
    countryCode: "mk",
    continent: "europe"
  },
  {
    countryName: "Norway",
    countryCode: "no",
    continent: "europe"
  },
  {
    countryName: "Poland",
    countryCode: "pl",
    continent: "europe"
  },
  {
    countryName: "Portugal",
    countryCode: "pt",
    continent: "europe"
  },
  {
    countryName: "Romania",
    countryCode: "ro",
    continent: "europe"
  },
  {
    countryName: "Russia",
    countryCode: "ru",
    continent: "europe"
  },
  {
    countryName: "San Marino",
    countryCode: "sm",
    continent: "europe"
  },
  {
    countryName: "Serbia",
    countryCode: "rs",
    continent: "europe"
  },
  {
    countryName: "Slovakia",
    countryCode: "sk",
    continent: "europe"
  },
  {
    countryName: "Slovenia",
    countryCode: "si",
    continent: "europe"
  },
  {
    countryName: "Spain",
    countryCode: "es",
    continent: "europe"
  },
  {
    countryName: "Svalbard and Jan Mayen",
    countryCode: "sj",
    continent: "europe"
  },
  {
    countryName: "Sweden",
    countryCode: "se",
    continent: "europe"
  },
  {
    countryName: "Switzerland",
    countryCode: "ch",
    continent: "europe"
  },
  {
    countryName: "Turkey",
    countryCode: "tr",
    continent: "europe"
  },
  {
    countryName: "Ukraine",
    countryCode: "ua",
    continent: "europe"
  },
  {
    countryName: "United Kingdom",
    countryCode: "gb",
    continent: "europe"
  },
  {
    countryName: "Vatican City",
    countryCode: "va",
    continent: "europe"
  }
];

let northAmericaFlags: Flag[] = [
  {
    countryName: "Anguilla",
    countryCode: "ai",
    continent: "north-america"
  },
  {
    countryName: "Antigua and Barbuda",
    countryCode: "ag",
    continent: "north-america"
  },
  {
    countryName: "Aruba",
    countryCode: "aw",
    continent: "north-america"
  },
  {
    countryName: "Bahamas",
    countryCode: "bs",
    continent: "north-america"
  },
  {
    countryName: "Barbados",
    countryCode: "bb",
    continent: "north-america"
  },
  {
    countryName: "Belize",
    countryCode: "bz",
    continent: "north-america"
  },
  {
    countryName: "Bermuda",
    countryCode: "bm",
    continent: "north-america"
  },
  {
    countryName: "Canada",
    countryCode: "ca",
    continent: "north-america"
  },
  {
    countryName: "Caribbean Netherlands",
    countryCode: "bq",
    continent: "north-america"
  },
  {
    countryName: "Cayman Islands",
    countryCode: "ky",
    continent: "north-america"
  },
  {
    countryName: "Costa Rica",
    countryCode: "cr",
    continent: "north-america"
  },
  {
    countryName: "Cuba",
    countryCode: "cu",
    continent: "north-america"
  },
  {
    countryName: "Curaçao",
    countryCode: "cw",
    continent: "north-america"
  },
  {
    countryName: "Dominica",
    countryCode: "dm",
    continent: "north-america"
  },
  {
    countryName: "Dominican Republic",
    countryCode: "do",
    continent: "north-america"
  },
  {
    countryName: "El Salvador",
    countryCode: "sv",
    continent: "north-america"
  },
  {
    countryName: "Greenland",
    countryCode: "gl",
    continent: "north-america"
  },
  {
    countryName: "Grenada",
    countryCode: "gd",
    continent: "north-america"
  },
  {
    countryName: "Guadeloupe",
    countryCode: "gp",
    continent: "north-america"
  },
  {
    countryName: "Guatemala",
    countryCode: "gt",
    continent: "north-america"
  },
  {
    countryName: "Haiti",
    countryCode: "ht",
    continent: "north-america"
  },
  {
    countryName: "Honduras",
    countryCode: "hn",
    continent: "north-america"
  },
  {
    countryName: "Jamaica",
    countryCode: "jm",
    continent: "north-america"
  },
  {
    countryName: "Martinique",
    countryCode: "mq",
    continent: "north-america"
  },
  {
    countryName: "Mexico",
    countryCode: "mx",
    continent: "north-america"
  },
  {
    countryName: "Montserrat",
    countryCode: "ms",
    continent: "north-america"
  },
  {
    countryName: "Nicaragua",
    countryCode: "ni",
    continent: "north-america"
  },
  {
    countryName: "Panama",
    countryCode: "pa",
    continent: "north-america"
  },
  {
    countryName: "Puerto Rico",
    countryCode: "pr",
    continent: "north-america"
  },
  {
    countryName: "Saint Barthélemy",
    countryCode: "bl",
    continent: "north-america"
  },
  {
    countryName: "Saint Kitts and Nevis",
    countryCode: "kn",
    continent: "north-america"
  },
  {
    countryName: "Saint Lucia",
    countryCode: "lc",
    continent: "north-america"
  },
  {
    countryName: "Saint Martin",
    countryCode: "mf",
    continent: "north-america"
  },
  {
    countryName: "Saint Pierre and Miquelon",
    countryCode: "pm",
    continent: "north-america"
  },
  {
    countryName: "Saint Vincent and the Grenadines",
    countryCode: "vc",
    continent: "north-america"
  },
  {
    countryName: "Sint Maarten",
    countryCode: "sx",
    continent: "north-america"
  },
  {
    countryName: "Turks and Caicos Islands",
    countryCode: "tc",
    continent: "north-america"
  },
  {
    countryName: "United States",
    countryCode: "us",
    continent: "north-america"
  },
  {
    countryName: "United States Minor Outlying Islands",
    countryCode: "um",
    continent: "north-america"
  },
  {
    countryName: "British Virgin Islands",
    countryCode: "vg",
    continent: "north-america"
  },
  {
    countryName: "United States Virgin Islands",
    countryCode: "vi",
    continent: "north-america"
  }
];

let oceaniaFlags: Flag[] = [
  {
    countryName: "American Samoa",
    countryCode: "as",
    continent: "oceania"
  },
  {
    countryName: "Australia",
    countryCode: "au",
    continent: "oceania"
  },
  {
    countryName: "Christmas Island",
    countryCode: "cx",
    continent: "oceania"
  },
  {
    countryName: "Cocos Islands",
    countryCode: "cc",
    continent: "oceania"
  },
  {
    countryName: "Cook Islands",
    countryCode: "ck",
    continent: "oceania"
  },
  {
    countryName: "Fiji",
    countryCode: "fj",
    continent: "oceania"
  },
  {
    countryName: "French Polynesia",
    countryCode: "pf",
    continent: "oceania"
  },
  {
    countryName: "Guam",
    countryCode: "gu",
    continent: "oceania"
  },
  {
    countryName: "Indonesia",
    countryCode: "id",
    continent: "oceania"
  },
  {
    countryName: "Kiribati",
    countryCode: "ki",
    continent: "oceania"
  },
  {
    countryName: "Marshall Islands",
    countryCode: "mh",
    continent: "oceania"
  },
  {
    countryName: "Micronesia",
    countryCode: "fm",
    continent: "oceania"
  },
  {
    countryName: "Nauru",
    countryCode: "nr",
    continent: "oceania"
  },
  {
    countryName: "New Caledonia",
    countryCode: "nc",
    continent: "oceania"
  },
  {
    countryName: "New Zealand",
    countryCode: "nz",
    continent: "oceania"
  },
  {
    countryName: "Niue",
    countryCode: "nu",
    continent: "oceania"
  },
  {
    countryName: "Norfolk Island",
    countryCode: "nf",
    continent: "oceania"
  },
  {
    countryName: "Northern Mariana Islands",
    countryCode: "mp",
    continent: "oceania"
  },
  {
    countryName: "Palau",
    countryCode: "pw",
    continent: "oceania"
  },
  {
    countryName: "Papua New Guinea",
    countryCode: "pg",
    continent: "oceania"
  },
  {
    countryName: "Pitcairn Islands",
    countryCode: "pn",
    continent: "oceania"
  },
  {
    countryName: "Samoa",
    countryCode: "ws",
    continent: "oceania"
  },
  {
    countryName: "Solomon Islands",
    countryCode: "sb",
    continent: "oceania"
  },
  {
    countryName: "Tokelau",
    countryCode: "tk",
    continent: "oceania"
  },
  {
    countryName: "Tonga",
    countryCode: "to",
    continent: "oceania"
  },
  {
    countryName: "Tuvalu",
    countryCode: "tv",
    continent: "oceania"
  },
  {
    countryName: "Vanuatu",
    countryCode: "vu",
    continent: "oceania"
  },
  {
    countryName: "Wallis and Futuna",
    countryCode: "wf",
    continent: "oceania"
  }
];

let southAmericaFlags: Flag[] = [
  {
    countryName: "Argentina",
    countryCode: "ar",
    continent: "south-america"
  },
  {
    countryName: "Bolivia",
    countryCode: "bo",
    continent: "south-america"
  },
  {
    countryName: "Brazil",
    countryCode: "br",
    continent: "south-america"
  },
  {
    countryName: "Chile",
    countryCode: "cl",
    continent: "south-america"
  },
  {
    countryName: "Colombia",
    countryCode: "co",
    continent: "south-america"
  },
  {
    countryName: "Ecuador",
    countryCode: "ec",
    continent: "south-america"
  },
  {
    countryName: "Falkland Islands",
    countryCode: "fk",
    continent: "south-america"
  },
  {
    countryName: "French Guiana",
    countryCode: "gf",
    continent: "south-america"
  },
  {
    countryName: "Guyana",
    countryCode: "gy",
    continent: "south-america"
  },
  {
    countryName: "Paraguay",
    countryCode: "py",
    continent: "south-america"
  },
  {
    countryName: "Peru",
    countryCode: "pe",
    continent: "south-america"
  },
  {
    countryName: "Suriname",
    countryCode: "sr",
    continent: "south-america"
  },
  {
    countryName: "Trinidad and Tobago",
    countryCode: "tt",
    continent: "south-america"
  },
  {
    countryName: "Uruguay",
    countryCode: "uy",
    continent: "south-america"
  },
  {
    countryName: "Venezuela",
    countryCode: "ve",
    continent: "south-america"
  }
];

let allFlags = [
  africaFlags,
  asiaFlags,
  europeFlags,
  oceaniaFlags,
  southAmericaFlags,
  northAmericaFlags
].flat();
