export function formatDate(dateStr?: string): string {
    if (!dateStr || dateStr === "Present") return "Present";
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}
