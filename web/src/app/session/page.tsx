import { Suspense } from "react";
import type { Metadata } from "next";
import { connection } from "next/server";
import { ReviewSession, type SessionCard } from "@/components/ReviewSession";
import { getCurrentUser } from "@/lib/auth";
import { getPack } from "@/lib/packs";
import { getUserFirstName } from "@/lib/user-name";

const SAMPLE_SIZE = 5;
const SESSION_SIZE = 9;

type Props = {
  searchParams: Promise<{ pack?: string; sample?: string }>;
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
  const { pack: slug, sample } = await searchParams;
  const pack = slug ? getPack(slug) : undefined;
  const isSample = Boolean(pack && sample === "true");
  const source = pack
    ? pickRandom(pack.words, isSample ? SAMPLE_SIZE : SESSION_SIZE)
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
      variant={pack ? (isSample ? "sample" : "pack") : undefined}
      userName={userName}
      signedIn={Boolean(user)}
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
