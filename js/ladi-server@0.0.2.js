const headTags = [
    {
        tagName: "link",
        attributes:
        {
            href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
            rel: "stylesheet",
            integrity: "sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN",
            crossOrigin: "anonymous"
        }

    }
]


const bottomTags = [
    {
        tagName: "script",
        attributes:
        {
            src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js",
            integrity: "sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+",
            crossOrigin: "anonymous"
        }

    }
]

function initTags(arrTag, domElement) {
    arrTag.forEach(({ tagName, attributes }) => {
        let tag = document.createElement(tagName);

        for (let [key, value] of Object.entries(attributes)) {
            tag[key] = value;
        }

        // Append the script to the body
        domElement.appendChild(tag);
    })
}


const initHeadLinks = () => {

    var head = document.querySelector('head');

    initTags(headTags, head)
}

const initBottomLinks = () => {
    initTags(bottomTags, document.body)
}


initHeadLinks();
initBottomLinks();


// Source Code
import { createApp } from 'https://unpkg.com/petite-vue?module'

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDsnelmBqcMkRnVCNY31rSKnSPdfrXFqD0",
    authDomain: "ladi-server.firebaseapp.com",
    projectId: "ladi-server",
    storageBucket: "ladi-server.appspot.com",
    messagingSenderId: "17377594943",
    appId: "1:17377594943:web:8fb81d318bc3a41446f28a",
    measurementId: "G-8CP8ZLM5KK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp({
    // exposed to all expressions
    count: 0,
    // getters
    get plusOne() {
        return this.count + 1
    },
    // methods
    increment() {
        this.count++
    }
}).mount()