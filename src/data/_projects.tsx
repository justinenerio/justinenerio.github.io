import React from "react";


export const ProjectList: Project[] = [
  {
    category: "Work",
    title: "Espresso Cash",
    slug: "#espresso-cash",
    subtitle:
      "An easy, fast & secure way to pay with crypto.",
    period: "August 2022 - Present",
    imageUrl: "img/projects/espresso-cash.png",
    tech: ["Flutter", "Solana"],
    description: (
      <>
        <p>
          Espresso Cash Wallet is the first crypto wallet that allows users to
          send crypto with just a link. You can send and receive any Solana
          tokens like SOL tokens and also SPL tokens. Our wallet is totally
          non-custodial which means that only you own your funds. Espresso Cash
          Wallet is available on all platforms.
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/espresso-cash",
      },
      {
        name: "Website",
        link: "https://www.espressocash.com/",
      },
    ],
  },
  {
    category: "Website",
    title: "justinenerio.dev",
    slug: "#website",
    subtitle:
      "A personal website and blog! ",
    period: "June 2023",
    tech: ["Docusaurus", "ReactJS", "TailwindCSS"],
    imageUrl: "img/projects/justinenerio.png",
    description: (
      <>
        <p>
          I first started this portfolio template project back in October 2020.
          The template has gone through numerous iterations ever since, and is
          still updated presently.
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/justinenerio/justinenerio.github.io",
      },
      {
        name: "Website",
        link: "https://justinenerio.dev",
      },
    ],
  },
  {
    category: "Work",
    title: "SkelterAndNu",
    slug: "#skeletorandnu",
    subtitle: "SaaS, crowdsourcing and micropayments.",
    period: "2021",
    tech: ["Flutter", "Firebase", "Micropayments"],
    description: (
      <>
        <p>
          Introducing our game-changing SaaS platform powered by Flutter Web and Firebase.
          Simplify crowdsourcing and micropayments by effortlessly creating tasks and
          making payments with crypto and fiat currencies. With streamlined onboarding,
          personalized profiles, and versatile settings like PayPal and cryptocurrency
          integration, our platform caters to your unique needs.
        </p>
        <p>
          Experience a new era of collaboration with our user-friendly admin and user
          sites. Whether you're an administrator or user, our platform provides
          powerful tools for efficient task management and seamless engagement.
          Discover the limitless potential of crowdsourcing and micropayments,
          revolutionizing the way you work and pay.
        </p>
      </>
    ),
    links: [],
  },
  {
    category: "Hackathon",
    title: "Retro 95, Windows 95 Desktop Experience",
    slug: "#retro95",
    imageUrl: "img/projects/retro95.png",
    subtitle:
      "Experience nostalgia with the iconic Windows 95 right from your browser.",
    period: "June 2020",
    tech: ["Flutter"],
    description: (
      <>
        <p>
          Retro 95 is an attempt to recreate the Windows 95 desktop
          experience with Flutter. Contains programs like notepad , a web browser,
          calculator and more.
        </p>

        <p>
          Developed with Flutter Web, but will compile to all platforms
          that Flutter supports.
        </p>

        <p>
          A Retro Theme Flutter Hack 20 Entry!
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/justinenerio/retro95",
      },
      {
        name: "Demo",
        link: "https://justinenerio.github.io/retro95/#/",
      },
    ],
  },
  {
    category: "Hackathon",
    title: "SnapHunt, A Scavenger Hunt Game",
    slug: "#snaphunt",
    subtitle:
      "SnapHunt is a mobile scavenger hunt game where players capture real-world items to score points and win.",
    period: "November 2019",
    imageUrl: "img/projects/snaphunt.png",
    tech: ["Flutter", "Firebase", "Google Cloud Vision"],
    description: (
      <>
        <p>
          SnapHunt is a scavenger hunt game where a player can invite other players
          on a real world scavenger hunt while using the app as the item identifier
          by taking a picture of it. Using machine learning technology, the app
          identifies and scores the player according. Users can play solo or with a
          group. First player to complete the scavenger hunt or the player the the
          highest score after countdown ends wins.
        </p>
        <p>
          Champion of <a href="https://flutter.ph/hackathon2019/#/" target="_blank">Flutter PH Hackathon 2019</a>!
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/snap-hunt/snaphunt",
      },
      {
        name: "Google Play Store",
        link: "https://play.google.com/store/apps/details?id=com.em2.snaphunt",
      },
    ],
  },
  {
    category: "Personal, Hackathon",
    title: "JTransit - Cebu Jeepney Navigation ",
    slug: "#jtransit",
    imageUrl: "img/projects/jtransit.png",
    subtitle: "JTransit - Your essential app for navigating Cebu's Jeepney system with suggested routes, fare calculation, offline directions, and Night Mode.",
    period: "2019",
    tech: ["Flutter"],
    description: (
      <>
        <p>
          Introducing JTransit - Cebu Jeepney Navigation, the must-have app for
          commuters in Cebu. With over 60 Jeepney routes, fare calculation for different
          categories, offline directions, and Night Mode, simplify your daily commute
          with JTransit.
        </p>

        <p>
          JTransit offers comprehensive features to enhance your Cebu commute.
          Get suggested routes for 60+ Jeepney routes, calculate fares for students,
          PWDs, and seniors, access offline directions, and enjoy Night Mode.
          Save time and effort with JTransit - download now!
        </p>
      </>
    ),
    links: [
      {
        name: "Website",
        link: "https://jtransit.github.io/",
      },
      {
        name: "Web App",
        link: "https://jtransit.github.io/app/#/",
      },
      {
        name: "Google Play Store",
        link: "https://play.google.com/store/apps/details?id=com.boscafsoftware.jtransit&hl=en_US",
      },
    ],
  },
];

export type Project = {
  category: string;
  title: string;
  slug: string;
  subtitle: string;
  imageUrl?: string;
  period: string;
  tech: string[];
  description: JSX.Element;
  links: {
    name: string;
    link: string;
  }[];
  bgColor?: string;
};
