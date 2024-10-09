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


const scriptTags = [
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

const initScriptLinks = () => {
    initTags(scriptTags, document.body)
}


initHeadLinks();
initScriptLinks();




