import type { MetadataRoute } from "next";
import { resumeData } from "@/data/resumeData";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: `${resumeData.name} — Portfolio`,
        short_name: resumeData.name,
        description: resumeData.title.replace(/^🚀\s*/, ""),
        start_url: "/",
        display: "standalone",
        background_color: "#07070a",
        theme_color: "#07070a",
        icons: [
            { src: "/icon", sizes: "32x32", type: "image/png" },
            { src: "/apple-icon", sizes: "180x180", type: "image/png" },
        ],
    };
}
