import moodWebDemoVideo from "/videos/mood-web-demo.mp4";
import moodAppDemoVideo from "/videos/mood-app-demo.mp4";
import gasTrackerWebDemoVideo from "/videos/gas-tracker-demo.mp4";
import urlShortenerDemoVideo from "/videos/url-shortener-demo.mp4";

import astroLogo from "/svg/astro.svg";
import tailwindLogo from "/svg/tailwind.svg";
import nodeJsLogo from "/svg/nodejs.svg";
import pythonLogo from "/svg/python.svg";
import reactLogo from "/svg/react.svg";
import javaLogo from "/svg/java.svg";
import androidLogo from "/svg/android.svg";
import nextLogo from "/svg/nextjs.svg";

const projectsData = [
    {
        title: "Facial recognition web",
        description:
            "This is a web that recognizes seven facial expressions (angry, disgusted, scared, happy, sad, surprised, neutral) from a face photo using a convolutional neural network trained by me.",
        videoSrc: moodWebDemoVideo,
        alt: "mood-web-demo",
        codeLink: "https://github.com/Jermaniac/ExpressionMoodApp",
        demoLink: "https://expression-test.vercel.app/",
        techStack: [
            { name: "Python", logo: pythonLogo },
            { name: "React", logo: reactLogo },
            { name: "Tailwind", logo: tailwindLogo },
        ],
    },
    {
        title: "Url Shortener",
        description:
            "Introducing the renowned URL shortener project! Simply paste your long URL and receive a concise and shareable link to share with your friends. The definitive software project!",
        videoSrc: urlShortenerDemoVideo,
        alt: "url-shortener-app",
        codeLink: "https://github.com/Jermaniac/url-shortener-app",
        demoLink: "https://url-shortener-frontend-xi.vercel.app/",
        techStack: [
            { name: "NodeJs", logo: nodeJsLogo },
            { name: "Astro", logo: astroLogo },
            { name: "Tailwind", logo: tailwindLogo },
        ],
    },
    {
        title: "Mood App",
        description:
            "This is a mobile application that recognizes seven facial expressions from a face photograph. You can either choose an image from the gallery or take a photo using the device's camera.",
        videoSrc: moodAppDemoVideo,
        alt: "mood-app-demo",
        codeLink: "https://github.com/Jermaniac/TrabajoFinGradoGerman/tree/master/TFG/MoodApp",
        demoLink: null,
        techStack: [
            { name: "Java", logo: javaLogo },
            { name: "Android", logo: androidLogo },
        ],
    },
    {
        title: "Gas Tracker Web",
        description:
            "This is a dynamic web application designed to provide users with up-to-date information on various fuel types across all provinces in Spain. This API uses the official API from the Spanish government.",
        videoSrc: gasTrackerWebDemoVideo,
        alt: "gas-tracker-web",
        codeLink: "https://github.com/Jermaniac/gas-tracker",
        demoLink: "https://gas-tracker-xi.vercel.app/",
        techStack: [
            { name: "Python", logo: pythonLogo },
            { name: "NextJs", logo: nextLogo },
            { name: "React", logo: reactLogo },
        ],
    },
];

export default projectsData;
