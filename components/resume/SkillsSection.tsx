import { skillBlocks, languages } from "@/content/skills";
import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";

const langFlagMap: Record<string, string> = {
  English: "gb",
  German: "de",
  Greek: "gr",
  Swedish: "se",
  Norwegian: "no",
};

export default function SkillsSection() {
  return (
    <div className="space-y-8">
      {/* Languages */}
      <FadeIn>
        <div className="bg-canvas border border-hairline rounded-xl p-6">
          <h3 className="font-sans text-sm font-medium text-ink mb-4">Languages</h3>
          <div className="flex flex-wrap gap-4">
            {languages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-2">
                <Image
                  src={`/images/flags/${langFlagMap[lang.name]}.png`}
                  alt={lang.name}
                  width={20}
                  height={14}
                  className="rounded-sm"
                />
                <span className="text-sm text-body-strong">{lang.name}</span>
                <span className="text-xs text-muted">{lang.proficiency}</span>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Skill blocks */}
      <div className="grid md:grid-cols-2 gap-4">
        {skillBlocks.map((block, i) => (
          <FadeIn key={block.title} delay={i * 0.06}>
            <div className="bg-canvas border border-hairline rounded-xl p-6 h-full">
              <h3 className="font-sans text-sm font-medium text-ink mb-3">{block.title}</h3>
              <ul className="space-y-2">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-body">
                    <span className="text-accent-steel mt-1 flex-shrink-0">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
