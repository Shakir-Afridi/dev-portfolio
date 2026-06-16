import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ParticleBackground from "@/components/ParticleBackground";
import { resumeData } from "@/data/resumeData";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: "swap",
});

const siteUrl = "https://shakir-ullah.netlify.app";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "Shakir Ullah | Senior Software Engineer",
        template: "%s | Shakir Ullah",
    },
    description:
        "Senior Software Engineer with 7+ years of experience in React, TypeScript & Node.js. Building scalable, high-performance web applications for enterprise and product companies.",
    keywords: [
        "Senior Software Engineer",
        "React Developer",
        "TypeScript",
        "Next.js",
        "Node.js",
        "Full Stack Developer",
        "Frontend Engineer",
        "Shakir Ullah",
        "JavaScript Developer",
        "Web Developer Pakistan",
        "RAKBANK",
        "React Portfolio",
    ],
    authors: [{ name: "Shakir Ullah", url: resumeData.socials.linkedin }],
    creator: "Shakir Ullah",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteUrl,
        siteName: "Shakir Ullah – Portfolio",
        title: "Shakir Ullah | Senior Software Engineer",
        description:
            "Senior Software Engineer with 7+ years building scalable React & Node.js applications. Specializing in enterprise front-end, design systems, and full-stack JS.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Shakir Ullah | Senior Software Engineer",
        description:
            "Senior Software Engineer with 7+ years building scalable React & Node.js applications.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: siteUrl,
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shakir Ullah",
    url: siteUrl,
    email: resumeData.email,
    jobTitle: "Senior Software Engineer",
    description:
        "Senior Software Engineer specializing in React, TypeScript, and Node.js with 7+ years of experience building scalable web applications.",
    sameAs: [resumeData.socials.linkedin, resumeData.socials.github].filter(
        Boolean
    ),
    knowsAbout: resumeData.skills,
    alumniOf: {
        "@type": "EducationalOrganization",
        name: "NAMAL University",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Mianwali",
            addressCountry: "PK",
        },
    },
    address: {
        "@type": "PostalAddress",
        addressLocality: "Lahore",
        addressRegion: "Punjab",
        addressCountry: "PK",
    },
    worksFor: {
        "@type": "Organization",
        name: "RAKBANK",
        url: "https://www.rakbank.ae",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLd),
                    }}
                />
            </head>
            <body className={`${geistSans.variable} font-sans antialiased`}>
                <ParticleBackground />
                <Header />
                {children}
            </body>
        </html>
    );
}
