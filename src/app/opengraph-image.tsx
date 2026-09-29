import { ImageResponse } from "next/og";
import { resumeData } from "@/data/resumeData";
import {
    OgImageContent,
    ogImageContentType,
    ogImageSize,
    ogImageTitle,
} from "@/lib/ogImage";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = `${resumeData.name} — ${ogImageTitle()}`;

export default function OpengraphImage() {
    return new ImageResponse(<OgImageContent />, size);
}
