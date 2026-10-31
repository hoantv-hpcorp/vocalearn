import { Suspense } from "react";
import type { Metadata } from "next";
import { connection } from "next/server";
import { ReviewSession, type SessionCard } from "@/components/ReviewSession";
import { getCurrentUser, getUserFirstName } from "@/lib/auth";
import { getPack } from "@/lib/packs";

const SAMPLE_SIZE = 5;

type Props = {
  searchParams: Promise<{ pack?: string; full?: string }>;
};

export const metadata: Metadata = {
  title: "Daily review",
  description:
    "Your five-minute WordStack review. One card at a time, revealed at the right moment.",
};

function pickRandom<T>(items: readonly T[], count: number): T[] {
  const pool = [...items];
  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
}

async function SessionCards({ searchParams }: Props) {
  await connection();
  const { pack: slug, full } = await searchParams;
  const pack = slug ? getPack(slug) : undefined;
  const isFullPack = Boolean(pack && full);
  const source = pack
    ? isFullPack
      ? pack.words
      : pickRandom(pack.words, SAMPLE_SIZE)
    : undefined;
  const cards: SessionCard[] | undefined = source?.map((word) => ({
    word: word.word,
    pos: word.pos,
    definition: word.definition,
    example: word.example,
    collocations: word.collocations,
  }));
  const user = await getCurrentUser();
  const userName = user ? getUserFirstName(user) : undefined;

  return (
    <ReviewSession
      key={crypto.randomUUID()}
      title={pack?.name}
      cards={cards}
      variant={pack ? (isFullPack ? "pack" : "sample") : undefined}
      userName={userName}
    />
  );
}

export default function SessionPage({ searchParams }: Props) {
  return (
    <div className="session-body">
      <a className="skip-link" href="#session-card">
        Skip to the card
      </a>
      <Suspense fallback={null}>
        <SessionCards searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
