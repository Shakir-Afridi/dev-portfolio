import { resumeData } from "@/data/resumeData";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

export function ogImageTitle() {
    return resumeData.title.replace(/^🚀\s*/, "");
}

function ogImageShortTitle() {
    return ogImageTitle().split("|")[0].trim();
}

export function OgImageContent() {
    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                backgroundColor: "#07070a",
                backgroundImage:
                    "radial-gradient(circle at 22% 18%, rgba(34,211,238,0.35), transparent 45%), radial-gradient(circle at 80% 85%, rgba(168,85,247,0.32), transparent 50%)",
            }}
        >
            <div
                style={{
                    display: "flex",
                    fontSize: 78,
                    fontWeight: 800,
                    color: "#22d3ee",
                }}
            >
                {resumeData.name}
            </div>
            <div
                style={{
                    display: "flex",
                    marginTop: 22,
                    fontSize: 36,
                    color: "#e2e8f0",
                }}
            >
                {ogImageShortTitle()}
            </div>
            <div
                style={{
                    display: "flex",
                    marginTop: 20,
                    fontSize: 26,
                    color: "#94a3b8",
                }}
            >
                React · TypeScript · Node.js · NestJS
            </div>
        </div>
    );
}
