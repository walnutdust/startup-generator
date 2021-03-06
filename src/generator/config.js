import { lazy } from "react";

import { ReactComponent as SupportIconImage } from "images/support-icon.svg";
import { ReactComponent as ShieldIconImage } from "images/shield-icon.svg";
import { ReactComponent as CustomizeIconImage } from "images/customize-icon.svg";
import { ReactComponent as FastIconImage } from "images/fast-icon.svg";
import { ReactComponent as ReliableIconImage } from "images/reliable-icon.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import { ReactComponent as TimeIcon } from "feather-icons/dist/icons/clock.svg";

import icon1 from "images/icon1.svg";
import icon2 from "images/icon2.svg";
import icon3 from "images/icon3.svg";

import icon1light from "images/icon1-light.svg";
import icon2light from "images/icon2-light.svg";
import icon3light from "images/icon3-light.svg";

const TwoColSingleFeatureWithStats = lazy(() =>
  import("components/statistics/TwoColSingleFeatureWithStats")
);
const TwoColSingleFeatureWithStats2 = lazy(() =>
  import("components/statistics/TwoColSingleFeatureWithStats2")
);
const ThreeColCenteredStatsPrimaryBackground = lazy(() =>
  import("components/statistics/ThreeColCenteredStatsPrimaryBackground")
);

const DashedBorderSixFeatures = lazy(() =>
  import("components/features/DashedBorderSixFeatures")
);
const ThreeColSimple = lazy(() => import("components/features/ThreeColSimple"));
const ThreeColWithSideImage = lazy(() =>
  import("components/features/ThreeColWithSideImage")
);
const ThreeColWithSideImageWithPrimaryBackground = lazy(() =>
  import("components/features/ThreeColWithSideImageWithPrimaryBackground")
);

const TwoColWithButton = lazy(() =>
  import("components/features/TwoColWithButton")
);

const TwoColWithSteps = lazy(() =>
  import("components/features/TwoColWithSteps")
);
const TwoColWithTwoFeaturesAndButtons = lazy(() =>
  import("components/features/TwoColWithTwoFeaturesAndButtons")
);
const TwoColWithTwoHorizontalFeaturesAndButton = lazy(() =>
  import("components/features/TwoColWithTwoHorizontalFeaturesAndButton")
);
const ThreeColContactDetails = lazy(() =>
  import("components/features/ThreeColContactDetails")
);

const GridWithFeaturedPosts = lazy(() =>
  import("components/blogs/GridWithFeaturedPost")
);
const PopularAndRecentBlogPosts = lazy(() =>
  import("components/blogs/PopularAndRecentBlogPosts")
);
const ThreeColSimpleWithImage = lazy(() =>
  import("components/blogs/ThreeColSimpleWithImage")
);
const ThreeColSimpleWithImageAndDashedBorder = lazy(() =>
  import("components/blogs/ThreeColSimpleWithImageAndDashedBorder")
);

const SimplePrimaryBackground = lazy(() =>
  import("components/testimonials/SimplePrimaryBackground")
);
const ThreeColumnWithProfileImage = lazy(() =>
  import("components/testimonials/ThreeColumnWithProfileImage")
);
const TwoColumnWithImage = lazy(() =>
  import("components/testimonials/TwoColumnWithImage")
);
const TwoColumnWithImageAndProfilePictureReview = lazy(() =>
  import("components/testimonials/TwoColumnWithImageAndProfilePictureReview")
);
const TwoColumnWithImageAndRating = lazy(() =>
  import("components/testimonials/TwoColumnWithImageAndRating")
);

const SimpleWithSideImage = lazy(() =>
  import("components/faqs/SimpleWithSideImage")
);
const SingleCol = lazy(() => import("components/faqs/SingleCol"));
const TwoColumnPrimaryBackground = lazy(() =>
  import("components/faqs/TwoColumnPrimaryBackground")
);

const FiveColumnDark = lazy(() => import("components/footers/FiveColumnDark"));
const FiveColumnWithBackground = lazy(() =>
  import("components/footers/FiveColumnWithBackground")
);
const FiveColumnWithInputForm = lazy(() =>
  import("components/footers/FiveColumnWithInputForm")
);
const MiniCenteredFooter = lazy(() =>
  import("components/footers/MiniCenteredFooter")
);
const SimpleFiveColumn = lazy(() =>
  import("components/footers/SimpleFiveColumn")
);

const ProfileThreeColGrid = lazy(() =>
  import("components/cards/ProfileThreeColGrid")
);

const PortfolioTwoCardsWithImage = lazy(() =>
  import("components/cards/PortfolioTwoCardsWithImage")
);
const ThreeColSlider = lazy(() => import("components/cards/ThreeColSlider"));
const TwoTrendingPreviewCardsWithImage = lazy(() =>
  import("components/cards/TwoTrendingPreviewCardsWithImage")
);

const GetStarted = lazy(() => import("components/cta/GetStarted"));
const GetStartedLight = lazy(() => import("components/cta/GetStartedLight"));
const DownloadApp = lazy(() => import("components/cta/DownloadApp"));

const BackgroundAsImage = lazy(() =>
  import("components/hero/BackgroundAsImage")
);

const SimpleContactUs = lazy(() => import("components/forms/SimpleContactUs"));
const SimpleSubscribeNewsletter = lazy(() =>
  import("components/forms/SimpleSubscribeNewsletter")
);
const TwoColContactUsWithIllustration = lazy(() =>
  import("components/forms/TwoColContactUsWithIllustration")
);
const TwoColContactUsWithIllustrationFullForm = lazy(() =>
  import("components/forms/TwoColContactUsWithIllustrationFullForm")
);

const BackgroundAsImageWithCenteredContent = lazy(() =>
  import("components/hero/BackgroundAsImageWithCenteredContent")
);
const FullWidthWithImage = lazy(() =>
  import("components/hero/FullWidthWithImage")
);
const TwoColumnWithFeaturesAndTestimonial = lazy(() =>
  import("components/hero/TwoColumnWithFeaturesAndTestimonial")
);
const TwoColumnWithInput = lazy(() =>
  import("components/hero/TwoColumnWithInput")
);
const TwoColumnWithPrimaryBackground = lazy(() =>
  import("components/hero/TwoColumnWithPrimaryBackground")
);
const TwoColumnWithVideo = lazy(() =>
  import("components/hero/TwoColumnWithVideo")
);

const grammar = {
  startUp: [
    {
      name: "<startUpName>",
      backgroundImage: "<randomImage>",
      featureImage: "<randomImage>",
      slogan: "<slogan>",
      subslogan: "<subslogan>",
      features: ["<feature>", "<feature>", "<feature>"],
      notification: ["<notification>"],
      icon: "<icon>",

      services: {
        header: "<servicesHeader>",
        subHeader: "<servicesSubHeader>",
        description: "<servicesDescription>",
        services: "<services>",
      },

      testimonials: {
        header: "<testimonialHeader>",
        subHeader: "<testimonialSubHeader>",
        description: "<testimonialDescription>",
        testimonials: [
          "<testimonial>",
          "<testimonial>",
          "<testimonial>",
          "<testimonial>",
        ],
      },

      portfolio: {
        header: "<portfolioHeader>",
        subHeader: "<portfolioSubHeader>",
        description: "<portfolioDescription>",
        projects: ["<project>", "<project>", "<project>", "<project>"],
      },

      qualities: {
        header: "<qualitiesHeader>",
        subHeader: "<qualitiesSubHeader>",
        description: "<qualitiesDescription>",
        qualities: ["<quality>", "<quality>", "<quality>"],
      },

      faqs: {
        header: "<faqHeader>",
        subHeader: "<faqSubHeader>",
        description: "<faqDescription>",
        faqs: ["<faq>", "<faq>", "<faq>", "<faq>"],
      },

      statistics: {
        header: "<statsHeader>",
        subHeader: "<statsSubHeader>",
        description: "<statsDescription>",
        stats: ["<stats>", "<stats>", "<stats>"],
      },

      team: {
        header: "<teamHeader>",
        subHeader: "<teamSubHeader>",
        description: "<teamDescription>",
        members: [
          "<person>",
          "<person>",
          "<person>",
          "<person>",
          "<person>",
          "<person>",
        ],
      },

      contactUs: {
        header: "<contactUsHeader>",
        subHeader: "<contactUsSubHeader>",
        description: "<contactUsDescription>",
      },

      blog: {
        header: "<blogHeader>",
        subHeader: "<blogSubHeader>",
        description: "<blogDescription>",
        posts: [
          "<blogPost>",
          "<blogPost>",
          "<blogPost>",
          "<blogPost>",
          "<blogPost>",
          "<blogPost>",
        ],
      },

      cta: {
        header: "<ctaHeader>",
        subHeader: "<ctaSubHeader>",
      },

      // Put this at the end.
      pageElements: "<pageElements>",
    },
  ],

  icon: [
    { light: [() => icon1light], normal: () => icon1 },
    { light: [() => icon2light], normal: () => icon2 },
    { light: [() => icon3light], normal: () => icon3 },
  ],

  companyName: ["<startUpPrefix><startUpSuffix>"],
  startUpName: ["<companyName>"],
  slogan: [{ start: "<sloganPartI>", emphasis: "<sloganPartII>" }],
  subslogan: [
    "Expertise and Efficiency underlie the <startUpName> experience.",
    "Our services are easy to set up, understand, and customize.",
    "Fully modular building-blocks with a variety of personalized services.",
    "Everything you ever needed in one convenient place.",
    "The future of <mundaneActivity> is just a click away.",
    "Sit back, relax, and let <buzzword> handle it for you.",
    "You've never really did <mundaneActivity> right until <startUpName> came into the picture.",
    "Save time and resources with the leading <mundaneActivity> platform.",
    "Scroll down to see how <startUpName> can improve your experience.",
    "In operation with <randomLargeNumber> clients in <randomNumber>+ cities",
    "Maximizing your workflow for <sloganNoun> and <sloganNoun>",
  ],

  feature: [
    "24/7 Availability",
    "99% Uptime",
    "Excellent Customer Service",
    "Highly Personalizable",
    "Easy to set-up",
    "Easy to use",
    "Proven Track Record",
    "#1 Startup in StartupHunt",
    "Backed by famous venture capital firms",
  ],
  sloganPartI: [
    "Cutting-edge Technology.",
    "<buzzword> meets <mundaneActivity>.",
    "Perfection. Enhanced.",
    "All that you ever needed.",
    "Welcome. To the Future.",
    "<mundaneActivity>? <startUpName>.",
    "The new <mundaneActivity> experience.",
    "Just <startUpName> it.",
    "Everything you never knew you needed.",
    "Access the world.",
    "Your <mundaneActivity>. Better.",
    "Your <mundaneActivity> just got better.",
    "The world's most intuitive way to <mundaneActivity>.",
    "Reimagine the way you <mundaneActivity>.",
    "Integrate your life seamelessly.",
    "A trailblazer for modern <mundaneActivity>.",
    "Doing it all in new ways.",
    "Fast or cheap? What about both?",
    "Orchestrate powerful <mundaneActivity> solutions.",
    "The only limit is your imagination.",
    "Trusted by teams at over <randomLargeNumber> places",
  ],
  sloganPartII: ["<justForYou>", "<futureHook>", "<possibilities>"],

  futureHook: [
    "The Future is Now.",
    "<startUpName> has you covered.",
    "Taken to a whole new level.",
  ],

  startUpPrefix: [
    "Jump",
    "Walk",
    "Dream",
    "Learn",
    "Super",
    "Re",
    "Open",
    "Square",
    "Triangle",
    "Meta",
    "Insta",
    "Face",
    "You",
    "Nexus",
    "Pylon",
    "Probe",
    "Terra",
    "Exo",
    "Para",
    "Friend",
    "Aero",
    "Cabin",
    "Lodge",
    "Room",
    "Sparks",
    "Code",
    "Door",
    "Window",
    "Astral",
    "Grow",
    "Indigo",
    "Positive",
    "we",
  ],
  startUpSuffix: [
    "ify",
    "y",
    ".io",
    ".ai",
    "Hub",
    "Spot",
    "!",
    "",
    "Now",
    "Way",
    "box",
    "able",
    " Technologies",
    "Bay",
    " Data",
    "ly",
    " Health",
    "table",
    "er",
    " Online",
    " CI",
    " AI",
    " ML",
    "builder",
    "pay",
    " Inc",
    "dus",
    " Labs",
    " App",
  ],

  buzzword: [
    "AI",
    "Servers",
    "Cloud",
    "Software",
    "Machine Learning",
    "Cryptography",
    "Blockchain",
    "BitCoin",
    "Cryptocurrency",
    "Fintech",
    "Computer Vision",
  ],
  justForYou: [
    "Just for you.",
    "Tailored to your needs.",
    "Right at your fingertips.",
    "Just a click away,",
    "At your every touch.",
  ],
  possibilities: [
    "Many possibilities.",
    "Endless possibilities.",
    "One platform, endless solutions",
  ],
  mundaneActivity: [
    "coffee",
    "dog-walking",
    "workout",
    "morning commute",
    "homework",
    "cooking",
    "organizing emails",
    "cleaning",
    "laundry",
    "studying",
    "yoga",
    "vacation planning",
    "messaging",
    "delivering items",
    "moving houses",
  ],

  notification: [
    "We're hiring in <continent>!",
    "We have now launched operations in <continent>.",
    "<startUpName> is looking for people like you!",
  ],

  // Testimonials

  testimonialHeader: [
    "Customer Reviews",
    "Testimonials",
    "Hear from our <customersNoun>",
  ],
  testimonialSubHeader: ["Testimonials", "Our <customersNoun>"],
  testimonialDescription: [
    "Here are what some of our <happyAdjective> <customersNoun> have to say about <startUpName>.",
    "Hear from our <happyAdjective> <customersNoun>.",
    "Join our <randomLargeNumber>+ <happyAdjective> <customersNoun>.",
    "See what our <customersNoun> say about us.",
  ],
  testimonial: [
    {
      quote: "<testimonialQuote>",
      company: "<companyName>",
      person: "<person>",
      imageSrc: "<randomImage>",
    },
  ],
  testimonialQuote: [
    "<historyTestimonial> <helpfulTestimonial>",
    "<historyTestimonial> <expectantTestimonial> <blownAwayTestimonial>",
    "<blownAwayTestimonial> <helpfulTestimonial>",
  ],
  helpfulTestimonial: [
    "The amount of support we received from <startUpName> was phenomenal.",
    "You can't believe how thorough and patient <startUpName> was with their after-sales service.",
  ],
  historyTestimonial: [
    "We have been working with <startUpName> for 2 years.",
    "When we learnt about what <startUpName> was up to, we knew we had to get onboard with them.",
  ],
  expectantTestimonial: [
    "<startUpName> was <adjective>.",
    "<startUpName> was <groupOfAdjectives>.",
    "<startUpName> has created something so <adjective> that will transform the industry.",
    "The potential for <startUpName> is limitless.",
    "The only downside of <startUpName> is that it didn't come sooner.",
    "I am excited by the possibility of working with <startUpName> as they continue to improve their offerings.",
  ],
  blownAwayTestimonial: [
    "<startUpName> sparks joy.",
    "<startUpName> is not only easy to work with but also fun! Everything we ever needed was right at our fingertips.",
    "Before <startUpName>, I never thought that it would have been possible to accomplish all of these that quickly.",
    "Thanks to <startUpName>, I am able to better connect with other like-minded peers.",
    "The ease of use of <startUpName>'s services made it a breeze to convince my peers to hop on board.",
  ],

  // Qualities
  qualitiesHeader: [
    "Qualities",
    "What makes us us?",
    "The <startUpName> makeup",
  ],
  qualitiesSubHeader: ["Qualities", "Values"],
  qualitiesDescription: [
    "We are an unique group.",
    "<startUpName> is is made up of a bunch of self-driving, motivated individuals who are always willing to put their best foot forwards.",
  ],
  quality: [
    {
      imageSrc: [() => <ShieldIconImage />],
      title: "Integrity",
      description:
        "Your trust means a lot to us, and we work hard to earn and preserve it.",
    },
    {
      imageSrc: [() => <BriefcaseIcon />],
      title: "Professionalism",
      description:
        "Our team is highly professional and responsive. Expect amazing after-sales service. This is not about selling a service to you. It's about building a relationship.",
    },
    {
      imageSrc: [() => <MoneyIcon />],
      title: "Affordable",
      description:
        "We promise to offer you the best rate we can. Our prices are far below the industry standard, without compromising the quality of our service.",
    },
    {
      imageSrc: [() => <TimeIcon />],
      title: "Efficient",
      description:
        "Work due tomorrow? Already done. Need help in the middle of the night? Our service folks are already there.",
    },
  ],

  // FAQs
  faqHeader: ["FAQs", "Frequently Asked Questions"],
  faqSubHeader: ["FAQs", "Frequently Asked Questions"],
  faqDescription: ["Here are some common questions and answers"],
  faq: [
    {
      question: "<faqQuestion>",
      answer: "<faqAnswer>",
    },
  ],
  faqQuestion: [
    "Why should we work with <startUpName>?",
    "What makes <startUpName> different from its competitors?",
    "I have some issues with [X], how should I go about fixing it?",
    "Why will <startUpName> fundamentally rock my world?",
    "What if I have other questions?",
    "What problem does <startUpName> solve?",
    "How does <startUpName> solve that problem?",
  ],
  faqAnswer: [
    "Because we are awesome.",
    "The team at <startUpName> is dedicated to ensuring that your experience is nothing but stellar. If you face any issues, simply email us, and someone will be onsite within an hour to help you personally resolve it.",
    "After thorough market analysis, we find that many customers are like yourself, having a less-than-optimal experience with <mundaneActivity>. With <startUpName>'s patent-pending <buzzword> <buzzword> platform, we will tackle any issues you may face.",
    "We have the support and backing of the top venture capital firms, and have obtain the necessary governmental support to head into our high-growth phase.",
  ],

  // Statistics
  statsHeader: ["Over <randomLargeNumber> <workDoneNoun>"],
  statsSubHeader: ["Statistics", "Numbers at a glance"],
  statsDescription: [
    "<startUpName> is committed to delivering high-quality experiences",
    "Why <startUpName>? The numbers might convince you.",
    "Numbers do not deceive.",
  ],
  stats: [
    {
      value: "<statsNumber>",
      key: "<statsNoun>",
    },
    { value: "<statsNumberMoney>", key: "<statsNounMoney>" },
  ],
  statsNumber: ["<randomNumber>", "<randomNumber>+"],
  statsNumberMoney: ["$<randomLargeNumber>", "$<randomLargeNumber>+"],
  statsNoun: [
    "Clients",
    "Projects",
    "Employees",
    "Cities",
    "Users",
    "Headlines",
    "Locations",
    "Awards",
    "Partners",
  ],
  statsNounMoney: ["Revenue", "Daily Transactions", "Profit", "Y-o-Y"],

  // Services
  servicesHeader: [
    "Our Awesome Services",
    "Our Professional Services",
    "Designed and Developed by Professionals",
  ],
  servicesSubHeader: ["Services"],
  servicesDescription: ["Find out what we can do for you"],
  services: [
    [
      {
        imageSrc: [() => <ShieldIconImage />],
        title: ["Ads Management"],
        description: [
          "We create and manage ads that you need, from creation to deployment.",
        ],
        url: "https://google.com",
      },
      {
        imageSrc: [() => <SupportIconImage />],
        title: ["Video Conferencing"],
        description: [
          "Our support staff are happy to take video calls with you to walk you through the step-by-step of getting <startUpName> to work with you.",
        ],
        url: "https://google.com",
      },
      {
        imageSrc: [() => <SupportIconImage />],
        title: ["Hassle-Free Expereience"],
        description: [
          "We take care of the dirty work so that you enjoy nothing but the best experience.",
        ],
        url: "https://google.com",
      },
      {
        imageSrc: [() => <CustomizeIconImage />],
        title: ["Customer Relation"],
        description: [
          "We have a dedicated team on-call 24/7 to address any queries you may have, anytime.",
        ],
        url: "https://google.com",
      },
      {
        imageSrc: [() => <ReliableIconImage />],
        title: ["Realiability"],
        description: [
          "Our services are guaranteed to be up, so that you can get the help you need with <mundaneActivity> any time of the day.",
        ],
        url: "https://google.com",
      },
      {
        imageSrc: [() => <FastIconImage />],
        title: ["PR Campaign"],
        description: [
          "Enjoy the <startUpName> experience? Spread the word with our team and you can earn money too!",
        ],
        url: "https://google.com",
      },
    ],
  ],

  // Portfolio
  portfolioHeader: ["We've done some amazing projects"],
  portfolioSubHeader: ["Our portfolio", "Our projects"],
  portfolioDescription: [
    "Here is a selection of work with our trusted <customersNoun>",
  ],
  project: [
    {
      company: "<companyName>",
      title: "<projectTitle>",
      location: "<city>",
      imageSrc: "<randomImage>",
      type: "<projectType>",
      description: "<projectDescription>",
    },
  ],
  projectType: ["Partnership", "Experience Improvement", "B2B Cooperation"],
  projectTitle: [
    "Personalization with <startUpName>",
    "<startUpName> Integration",
    "Customer Outreach",
    "Market Survey",
  ],
  projectDescription: [
    "In this project, <startUpName> helped demonstrate to our <customersNoun> the value of optimizing their <mundaneActivity> experience.",
    "This company did not realize they had a problem with <mundaneActivity> until <startUpName> showed them how it could be done.",
  ],

  // Team
  teamHeader: ["Meet these Fine Folks", "Our Team"],
  teamSubHeader: ["Our Team", "Founding Team"],
  teamDescription: ["We are proud to present them."],

  // Contact us
  contactUsHeader: [
    "Get in touch with us",
    "Feel free to get in touch with us",
  ],
  contactUsSubHeader: ["Contact Us", "Leave a message"],
  contactUsDescription: ["We would love to hear from you"],

  // Blog
  blogHeader: ["We love writing.", "Hear from us."],
  blogSubHeader: ["Blog", "Blog Posts"],
  blogDescription: ["Some amazing blog posts written by more amazing people"],

  blogPost: [
    {
      title: "<blogPostTitle>",
      category: "<blogPostCategory>",
      abstract: "<blogPostAbstract>",
      imageSrc: "<randomImage>",
      author: "<person>",
    },
  ],
  blogPostTitle: [
    "Insights from an Insider",
    "First few months of <startUpName>",
    "Why <startUpName> is well-poised to take on the world",
    "Top 10 customer feedback",
    "Founding story",
    "Announcing, <companyName>, our <buzzword> product",
  ],
  blogPostCategory: ["Projects", "Reflections", "Thoughts", "Announcement"],
  blogPostAbstract: [
    "Starting <startUpName> was not easy. Here are ten lessons for you to optimize your next start up.",
    "<startUpName> has the team, the support, and the technology to go wide.",
    "The #1 thing you should always do as a start up is to talk to your customers. Here's what we found:",
    "It all started over a pizza, three cartons of soft drinks, and a pinic mat.",
    "We are excited to be announcing our latest product - crafted to meet user feedback.",
  ],

  // Call To Action
  ctaHeader: [
    "<customersNoun> all over the world are happily using <startUpName>",
    "Get started in a snap",
    "<startUpName> evolves with you. Personalize your experience today.",
    "Take <startUpName> for a spin.",
  ],
  ctaSubHeader: ["Download Our App", "Get Started", "Join Us"],

  // Utilities

  randomLargeNumber: [
    "100M",
    "200M",
    "123,000",
    (dictionary) => "" + ((dictionary.nextSeed() % 5000) + 5000),
    (dictionary) => "" + ((dictionary.nextSeed() % 50000) + 50000),
  ],
  randomNumber: [(dictionary) => "" + (dictionary.nextSeed() % 100)],
  randomImage: ["https://picsum.photos/seed/<randomNumber>/960/300.webp"],

  intenseAdjective: ["<intensifier> <adjective>"],
  intensifier: ["very", "extremely", "superbly"],
  adjective: [
    "amazing",
    "wonderful",
    "performant",
    "incredible",
    "powerful",
    "colorful",
  ],
  groupOfAdjectives: [
    "<adjective> and <adjective>",
    "<adjective>, <adjective>, and <adjective>",
  ],
  efficiencyAdjective: [
    "easier",
    "faster",
    "more personalized",
    "better",
    "more flexible",
    "highly integrated",
  ],
  happyAdjective: ["happy", "satisfied", "elated"],
  customersNoun: ["customers", "users", "clients", "partners"],
  sloganNoun: [
    "teamwork",
    "communication",
    "collaboration",
    "partnership",
    "efficiency",
    "convenience",
    "joy",
    "flexibility",
    "adaptability",
  ],
  workDoneNoun: [
    "Projects Completed",
    "Customers Satisfied",
    "Smiles Made",
    "Hours Saved",
  ],

  currentJob: [
    "Product Manager",
    "CTO",
    "CEO",
    "Software Engineer",
    "Tech Lead",
    "Project Manager",
    "Janitor",
    "Cafeteria Worker",
    "Founder",
    "Co-Founder",
    "Sr. Designer",
    "Jr. Designer",
    "Lead Developer",
    "Quality Assurance",
    "Head of Sales",
    "Chief Strategy Officer",
    "Chief Outreach Officer",
    "Partner",
    "Human Resource",
  ],
  person: ["<maleIdentifying>", "<femaleIdentifying>"],
  maleIdentifying: [
    {
      name: "<maleName>",
      picture: "https://randomuser.me/api/portraits/men/<randomNumber>.jpg",
      job: "<currentJob>",
    },
  ],
  femaleIdentifying: [
    {
      name: "<femaleName>",
      picture: "https://randomuser.me/api/portraits/women/<randomNumber>.jpg",
      job: "<currentJob>",
    },
  ],

  maleName: ["<maleFirstName> <lastName>"],
  femaleName: ["<femaleFirstName> <lastName>"],

  maleFirstName: [
    "Romeo",
    "Kang Zheng",
    "Steve",
    "Magnus",
    "Williams",
    "Guy",
    "Hashir",
    "Sean",
    "Harold",
  ],
  femaleFirstName: [
    "Juliet",
    "Jane",
    "Mary",
    "Emma",
    "Nicole",
    "Nancy",
    "Indigo",
    "Heidi",
    "Kai Xin",
    "Priscillia",
    "Clara",
  ],
  lastName: [
    "Harry",
    "Austen",
    "Smith",
    "Carlsen",
    "McGee",
    "Li",
    "Tan",
    "Chen",
    "Chau",
    "Jones",
    "Williams",
    "Jackson",
    "Sanders",
    "Rossi",
    "Bruno",
    "Romeo",
    "Schmit",
  ],

  continent: [
    "Africa",
    "Asia",
    "North America",
    "Antarctica",
    "South America",
    "Europe",
    "Oceania",
  ],

  city: [
    "Singapore",
    "New York",
    "Palo Alto",
    "Redwood City",
    "Boston",
    "Bangalore",
    "Seattle",
    "Hong Kong",
  ],

  pageElements: [["<heroElem>", "<bodyElements>", "<footerElem>"]],

  bodyElements: [
    ["<featureElem>", "<testimonialElem>", "<faqElem>"],
    ["<featureElem>", "<testimonialElem>", "<statsElem>", "<faqElem>"],
    [
      "<featureElem>",
      "<ctaElem>",
      "<testimonialElem>",
      "<faqElem>",
      "<statsElem>",
      "<profileElem>",
      "<portfolioElem>",
      "<formElem>",
      "<blogElem>",
    ],
    ["<testimonialElem>", "<faqElem>", "<profileElem>", "<ctaElem>"],
    ["<ctaElem>", "<featureElem>", "<profileElem>", "<blogElem>"],
  ],

  heroElem: [
    () => <BackgroundAsImage key="hero" />,
    () => <BackgroundAsImageWithCenteredContent key="hero" />,
    () => <FullWidthWithImage key="hero" />,
    () => <TwoColumnWithFeaturesAndTestimonial key="hero" />,
    () => <TwoColumnWithInput key="hero" />,
    () => <TwoColumnWithPrimaryBackground key="hero" />,
    () => <TwoColumnWithVideo key="hero" />,
  ],
  statsElem: [
    () => <TwoColSingleFeatureWithStats key="stats" />,
    () => <TwoColSingleFeatureWithStats2 key="stats" />,
    () => <ThreeColCenteredStatsPrimaryBackground key="stats" />,
  ],
  featureElem: [
    () => <DashedBorderSixFeatures key="features" />,
    () => <ThreeColSimple key="features" />,
    () => <ThreeColWithSideImage key="features" />,
    () => <ThreeColWithSideImageWithPrimaryBackground key="features" />,
    () => <TwoColWithButton key="features" />,
    () => <TwoColWithSteps key="features" />,
    () => <TwoColWithTwoFeaturesAndButtons key="features" />,
    () => <TwoColWithTwoHorizontalFeaturesAndButton key="features" />,
    () => <ThreeColContactDetails key="features" />,
  ],
  blogElem: [
    () => <GridWithFeaturedPosts key="blog" />,
    () => <PopularAndRecentBlogPosts key="blog" />,
    () => <ThreeColSimpleWithImage key="blog" />,
    () => <ThreeColSimpleWithImageAndDashedBorder key="blog" />,
  ],
  testimonialElem: [
    () => <SimplePrimaryBackground key="testimonials" />,
    () => <ThreeColumnWithProfileImage key="testimonials" />,
    () => <TwoColumnWithImage key="testimonials" />,
    () => <TwoColumnWithImageAndProfilePictureReview key="testimonials" />,
    () => <TwoColumnWithImageAndRating key="testimonials" />,
  ],
  faqElem: [
    () => <SimpleWithSideImage key="faqs" />,
    () => <SingleCol key="faqs" />,
    () => <TwoColumnPrimaryBackground key="faqs" />,
  ],
  ctaElem: [
    () => <DownloadApp key="cta" />,
    () => <GetStarted key="cta" />,
    () => <GetStartedLight key="cta" />,
  ],
  footerElem: [
    () => <FiveColumnDark key="footer" />,
    () => <FiveColumnWithBackground key="footer" />,
    () => <FiveColumnWithInputForm key="footer" />,
    () => <MiniCenteredFooter key="footer" />,
    () => <SimpleFiveColumn key="footer" />,
  ],
  profileElem: [() => <ProfileThreeColGrid key="profiles" />],
  portfolioElem: [
    () => <PortfolioTwoCardsWithImage key="portfolio" />,
    () => <TwoTrendingPreviewCardsWithImage key="portfolio" />,
    () => <ThreeColSlider key="portfolio" />,
  ],
  formElem: [
    () => <SimpleContactUs key="form" />,
    () => <SimpleSubscribeNewsletter key="form" />,
    () => <TwoColContactUsWithIllustration key="form" />,
    () => <TwoColContactUsWithIllustrationFullForm key="form" />,
  ],
};

export default grammar;
