import consulting from "@/data/packs/consulting-english.json";
import emails from "@/data/packs/emails-that-get-replies.json";
import finance from "@/data/packs/finance-english.json";
import interview from "@/data/packs/interview-english.json";
import meetings from "@/data/packs/meetings-and-pushback.json";
import starter from "@/data/packs/office-english-starter.json";
import presentations from "@/data/packs/presentations.json";
import smallTalk from "@/data/packs/small-talk-that-works.json";
import tech from "@/data/packs/tech-team-english.json";

export type PackWord = {
  word: string;
  pos: string;
  definition: string;
  example: string;
  collocations: string[];
};

export type PackData = {
  slug: string;
  name: string;
  tab: string;
  kind: string;
  categories: string[];
  level: string;
  cefr: string;
  minutes: number;
  featured?: boolean;
  lede: string;
  outcome: string;
  outcomes: string[];
  aside: { title: string; body: string };
  words: PackWord[];
};

export type Pack = PackData & {
  wordCount: number;
  sessionCount: number;
  sampleWords: string[];
};

export type PackSummary = {
  slug: string;
  name: string;
  tab: string;
  categories: string[];
  level: string;
  outcome: string;
  wordCount: number;
  sessionCount: number;
  minutes: number;
  sampleWords: string[];
  featured: boolean;
};

const sources: PackData[] = [
  starter,
  meetings,
  emails,
  interview,
  smallTalk,
  presentations,
  finance,
  tech,
  consulting,
];

function toPack(data: PackData): Pack {
  return {
    ...data,
    wordCount: data.words.length,
    sessionCount: Math.ceil(data.words.length / 6),
    sampleWords: data.words.slice(0, 4).map((word) => word.word),
  };
}

export const packs: Pack[] = sources.map(toPack);

export function getPack(slug: string): Pack | undefined {
  return packs.find((pack) => pack.slug === slug);
}

export function getPackSummaries(): PackSummary[] {
  return packs.map((pack) => ({
    slug: pack.slug,
    name: pack.name,
    tab: pack.tab,
    categories: pack.categories,
    level: pack.level,
    outcome: pack.outcome,
    wordCount: pack.wordCount,
    sessionCount: pack.sessionCount,
    minutes: pack.minutes,
    sampleWords: pack.sampleWords,
    featured: pack.featured ?? false,
  }));
}

export function getRelatedPacks(slug: string, count = 3): PackSummary[] {
  const current = getPack(slug);
  const others = getPackSummaries().filter((pack) => pack.slug !== slug);
  if (!current) return others.slice(0, count);
  const overlap = (pack: PackSummary) =>
    pack.categories.filter((category) => current.categories.includes(category)).length;
  return [...others].sort((a, b) => overlap(b) - overlap(a)).slice(0, count);
}
