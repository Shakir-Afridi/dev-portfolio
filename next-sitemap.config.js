/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://shakir-ullah.netlify.app",
    generateRobotsTxt: true, // Generate robots.txt automatically
    sitemapSize: 7000,
    exclude: ["/404", "/500", "/api/*", "/_next/*", "/server-sitemap.xml"],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
                disallow: [
                    "/api/",
                    "/_next/",
                    "/server-sitemap.xml",
                    "/404",
                    "/500",
                ],
            },
        ],
        additionalSitemaps: ["https://shakir-ullah.netlify.app/sitemap.xml"],
    },
};
