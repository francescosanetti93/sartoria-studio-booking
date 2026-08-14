import type { SiteContent } from "../types";

const en: SiteContent = {
  meta: {
    title: "Antichi Telai — Bespoke Woven in Rome, By Invitation",
    description:
      "Cloth woven on century-old Roman looms, tailored for one client at a time. Access by private application only.",
  },
  draftBanner: "Draft translation — pending native review",
  nav: {
    craft: "The Craft",
    experience: "The Experience",
    ateliers: "The Ateliers",
    apply: "Request an invitation",
    taglineYear: "Roma — dal 1894",
  },
  home: {
    heroEyebrow: "Roma — by invitation",
    heroTitle: "Your cloth is not chosen.\nIt is woven.",
    heroCta: "Request an invitation",
    manifestoEyebrow: "Three ateliers. One client at a time.",
    manifestoBody:
      "We do not sell garments. We open the doors of a workshop where cloth is still made by hand, on frames older than the men who work them — and we make something that exists once.",
    splits: [
      {
        eyebrow: "The Craft",
        title: "A century of thread",
        body: "Fibre chosen by hand from mills we've known for decades — Dormeuil, Holland & Sherry, and the Italian houses we still buy from in person. Warped by hand over days. Woven slowly, on frames built more than a century ago. Nothing here can be repeated, and nothing here can be hurried.",
        cta: "See the looms",
        to: "craft",
        photoLabel: "CRAFT — WEAVER'S HANDS ON THE WARP",
      },
      {
        eyebrow: "The Experience — Rome",
        title: "Three days inside the workshop",
        body: "Arrival by private car. A suite kept for you. Mornings at the loom watching your own cloth take form, afternoons of fitting, evenings in the city as our guest. The garment is what you take home; the days are what you remember.",
        cta: "Enter the experience",
        to: "experience",
        photoLabel: "EXPERIENCE — ROME, GOLDEN HOUR",
      },
      {
        eyebrow: "The Experience — Elsewhere",
        title: "The traveling master",
        body: "For those whose time will not permit Rome, the master travels. A private suite, two hours, your measurements archived for life. The looms keep working while you sleep.",
        cta: "See the itinerary",
        to: "experience",
        photoLabel: "TRAVELING MASTER — TRUNK, HOTEL SUITE",
      },
      {
        eyebrow: "The Ateliers",
        title: "Three rooms in Rome",
        body: "Monteverde, Balduina, Vigna Clara — three private spaces run by the Di Pietrantonio family since 1894. No showroom, no sign on the door. Seen only by appointment.",
        cta: "See the ateliers",
        to: "ateliers",
        photoLabel: "ATELIER — INTERIOR, MONTEVERDE",
      },
    ],
    admissionEyebrow: "Admission",
    admissionTitle: "We accept a limited number of clients each season.",
    admissionBody:
      "There is no catalogue and no price list. Tell us the occasion and your city; a client advisor will reply personally, usually within the hour.",
    admissionCta: "Request an invitation",
  },
  craft: {
    eyebrow: "The Craft",
    heroTitle: "Frames older than the century. Hands that have kept them alive.",
    photoCaption: "The Di Pietrantonio workshop — Monteverde, Rome.",
    steps: [
      {
        n: "I",
        t: "The fibre",
        d: "Super 150s merino, undyed cashmere, silk — chosen from Dormeuil, Holland & Sherry and the Italian mills we've bought from for decades. We buy in quantities too small to interest a large house, and too particular to substitute.",
      },
      {
        n: "II",
        t: "The warp",
        d: "Several days' work, by two people, threading thousands of ends by hand. A mistake here cannot be corrected later; it can only be cut out and begun again.",
      },
      {
        n: "III",
        t: "The weaving",
        d: "Eleven centimetres an hour, on frames built more than a century ago. The looms are wood: they breathe with the weather, and the cloth carries that irregularity. A modern machine makes far more — and none of it alive.",
      },
      {
        n: "IV",
        t: "The finishing",
        d: "Washed in soft water, beaten, rested for weeks. The cloth is then cut in the atelier by hand, following a pattern kept for as long as you are a client.",
      },
    ],
    stats: [
      { k: "1894", v: "The year the house began, in Abruzzo." },
      { k: "3", v: "Ateliers in Rome, each open by appointment only." },
      { k: "11 cm", v: "Woven per hour. A jacket length takes several working days." },
    ],
    closingTitle: "The cloth exists once. So does the invitation.",
    closingCta: "Request an invitation",
  },
  experience: {
    eyebrow: "The Experience",
    heroTitle: "You come to the loom, or the loom's keeper comes to you.",
    romanLabel: "One — Inbound",
    romanTitle: "The Roman Atelier Experience",
    romanIntro:
      "Three days as a guest of the house. Travel, transfers and residence are arranged by our concierge with a five-star hotel in the centre of Rome; nothing appears on an invoice as an extra. You are here to watch cloth be born and to be measured properly. Everything else is handled.",
    romanDays: [
      {
        n: "Day one",
        t: "",
        d: "Private transfer from the airport. Suite held at the partner hotel. Evening: the ateliers by lamplight, alone with the cutter.",
      },
      {
        n: "Day two",
        t: "",
        d: "Morning at the loom — your warp is mounted and the first length is woven while you watch. Lunch in the courtyard. Afternoon: first basted fitting.",
      },
      {
        n: "Day three",
        t: "",
        d: "Second fitting. Selection of linings, horn, thread. A dinner in the city arranged around your table, not ours.",
      },
      {
        n: "After",
        t: "",
        d: "The garment is finished over several weeks and hand-delivered to your address, anywhere, by a member of the house.",
      },
    ],
    travelingLabel: "Two — Outbound",
    travelingTitle: "The Traveling Master",
    travelingIntro:
      "Several times a year the master and his trunk are received in a private suite in your city. Two hours, by appointment, with the same cloth and the same cutter's hand. Your measurements and preferences are archived; from the second commission we already know everything.",
    travelCitiesLabel: "Seasonal circuit",
    travelCities: [
      "Dubai",
      "Abu Dhabi",
      "London",
      "Geneva",
      "Moscow",
      "New York",
      "Miami",
      "Shanghai",
      "Hong Kong",
      "Singapore",
    ],
    travelNote: "Dates are released only to the list. Cities are added when enough clients request one.",
    procedureEyebrow: "How it proceeds",
    procedureTitle: "Application, a personal reply, a conversation. Then the cloth.",
    procedureBody:
      "No prices are published. After the conversation, a deposit confirms the commission and the warp is prepared in your name.",
    cta: "Request an invitation",
  },
  ateliers: {
    eyebrow: "The Ateliers",
    heroTitle: "Three rooms in Rome, none of them with a sign on the door.",
    heroNote:
      "Addresses are given only with a confirmed appointment. There is no showroom and no entrance from the street.",
    spaces: [
      {
        name: "Monteverde",
        address: "Via Roberto Alessandri 53, 00151 Roma",
        role: "The original workshop",
        text: "Where fibre is chosen and clients are received first, always alone. The house's original room, open since the family moved to Rome.",
        photoLabel: "ATELIER MONTEVERDE — ENTRANCE",
      },
      {
        name: "Balduina",
        address: "Via Romeo Rodriguez Pereira 120, 00136 Roma",
        role: "The quiet room",
        text: "A smaller space, favoured for fittings without an audience. This is the room clients ask to return to.",
        photoLabel: "ATELIER BALDUINA — INTERIOR",
      },
      {
        name: "Vigna Clara",
        address: "Piazza Carli 10, 00191 Roma",
        role: "The cutting table",
        text: "The newest of the three, closest to the city's northern hotels. Patterns are kept here once a first commission is complete.",
        photoLabel: "ATELIER VIGNA CLARA — CUTTING TABLE",
      },
    ],
    byAppointment: "By appointment only",
    closingTitle: "The gate opens for those we expect.",
    closingCta: "Request an invitation",
    contactTitle: "Direct contact",
  },
  apply: {
    eyebrow: "Private application",
    title: "Tell us a little. We will tell you everything.",
    intro:
      "We accept a limited number of clients each season. This is not an order — it is the beginning of a conversation with a dedicated advisor. No prices are shown until we have spoken.",
    fields: {
      name: "Full name",
      city: "City & country",
      email: "Email",
      phone: "WhatsApp / WeChat",
      note: "Anything we should know",
    },
    occasionLabel: "The occasion",
    occasions: [
      "A wedding",
      "A wardrobe, from the beginning",
      "Ceremonial or official dress",
      "A gift",
      "Something else",
    ],
    routeLabel: "You would prefer to",
    routes: ["Come to Rome", "Receive the master in my city", "Undecided — advise me"],
    heardLabel: "How you came to know of us",
    heard: ["A current client", "A hotel or concierge", "Press or editorial", "Social", "Another maison"],
    submit: "Submit application",
    sending: "Sending",
    disclaimer: "Held in confidence. Never shared, never used for mailings.",
    successEyebrow: "Received",
    successTitle: "Your request is with a client advisor.",
    successBody:
      "You will be contacted personally — by name, on WhatsApp or WeChat, in your language. Usually within the hour, never later than the same day.",
    errorText: "Something went wrong. You can also reach us directly:",
  },
  footer: {
    blurb: "Three ateliers in Rome. Cloth woven for one client at a time, since 1894.",
    discretionEyebrow: "Discretion",
    discretionBody: "Addresses are shared upon confirmed appointment only. No showroom, no walk-ins, no public price list.",
    cta: "Request an invitation",
    languagesEyebrow: "Languages",
    languagesNote: "Your advisor replies on WhatsApp or WeChat, in your language, within minutes.",
    directContactEyebrow: "Direct contact",
    byInvitation: "By invitation only",
  },
};

export default en;
