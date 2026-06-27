import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://georgisnanos.com";

  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/resume`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/resume/consulting`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/resume/ai-projects`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/resume/auditor-vs-consultant`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/resume/deepdock-secure`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/leadership`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/leadership/soft-skills`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/leadership/tools`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/leadership/sales`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/certificates`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/certificates/shipping`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/certificates/digital`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/impressions`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/disclaimer`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
