import Head from "next/head";
import React from "react";

Meta.defaultProps = {
    description: "dpa bietet einen Marktplatz für Nachrichtenprofis und Kommunikationsteams. Auf diesem Marktplatz ermöglichen wir Ihnen einen einfachen und schnellen Zugang zu wertvollen Tools der dpa und unserer Partner, die Ihnen Ihre tägliche Arbeit erleichtern. Die dpa ID ist Ihr persönlicher Schlüssel zu unserem Marktplatz.",
    image: "https://atelierdisko-17f76.kxcdn.com/cms/48831a5e-9ceb-49a8-abdd-ece09694b8ce.jpg"
}

function Meta({title, description, image, robots, children}) {
    let url = null;

    if (typeof document !== "undefined") {
        url = document.location.href;
    }

    const defaultRobots = "index, follow"

    return (
        <Head>
            <meta charSet="utf-8"/>

            <title>dpa marketplace | {title}</title>
            <link rel="icon" href="/favicon.ico" />

            <meta
                name="description"
                content={description}
            />
            <meta property="og:title" content={`DPA – ${title}`}/>
            {description && <meta
                property="og:description"
                content={description}
            />}
            <meta property="og:locale" content="de_DE"/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content={url}/>
            <meta
                property="og:image"
                content={`${image}?width=1200&height=627&crop=smart`}
            />

            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content={title}/>
            <meta name="twitter:description" content={description}/>
            <meta name="twitter:image"
                  content={`${image}?width=1200&height=627&crop=smart`}/>

            <meta name="theme-color" content="#0E26FC"/>
            <meta name="robots" content={robots ? robots : defaultRobots}/>

            {children}
        </Head>
    );
}

export {Meta};
