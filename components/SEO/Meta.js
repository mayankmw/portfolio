import React from 'react'
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>Mayank Wadhwa Portfolio - Software Engineer</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Mayank Wadhwa Portfolio - Software Engineer" />
            <meta name="description"
                content="Mayank Wadhwa's Personal Portfolio Website. Showcasing software engineering projects and achievements, built with modern web technologies." />
            <meta name="author" content="Mayank Wadhwa" />
            <meta name="keywords"
                content="Mayank Wadhwa, Mayank Wadhwa portfolio, software engineer, Mayank's projects, Mayank's software portfolio, Mayank Wadhwa developer" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#0078D7" />

            {/* Search Engine */}
            <meta name="image" content="images/logos/fevicon.png" />
            {/* Schema.org for Google */}
            <meta itemProp="name" content="Mayank Wadhwa Portfolio - Software Engineer" />
            <meta itemProp="description"
                content="Mayank Wadhwa's Personal Portfolio Website. Showcasing software engineering projects and achievements, built with modern web technologies." />
            <meta itemProp="image" content="images/logos/fevicon.png" />
            {/* Twitter */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Mayank Wadhwa Portfolio - Software Engineer" />
            <meta name="twitter:description"
                content="Mayank Wadhwa's Personal Portfolio Website. Showcasing software engineering projects and achievements, built with modern web technologies." />
            <meta name="twitter:site" content="mayankwadhwa" />
            <meta name="twitter:creator" content="mayankwadhwa" />
            <meta name="twitter:image:src" content="images/logos/logo_1024.png" />
            {/* Open Graph general (Facebook, Pinterest & Google+) */}
            <meta name="og:title" content="Mayank Wadhwa Portfolio - Software Engineer" />
            <meta name="og:description"
                content="Mayank Wadhwa's Personal Portfolio Website. Showcasing software engineering projects and achievements, built with modern web technologies." />
            <meta name="og:image" content="images/logos/logo_1200.png" />
            <meta name="og:url" content="http://mayankwadhwa.github.io/" />
            <meta name="og:site_name" content="Mayank Wadhwa Personal Portfolio" />
            <meta name="og:locale" content="en_US" />
            <meta name="og:type" content="website" />

            <link rel="icon" href="images/logos/fevicon.svg" />
            <link rel="apple-touch-icon" href="images/logos/logo.png" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        </Head>
    )
}
