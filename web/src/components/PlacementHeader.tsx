import Link from "next/link";
import { Icon } from "./Icon";

export function PlacementHeader() {
  return (
    <header className="placement-header">
      <div className="wrap header-inner">
        <Link className="brand" href="/" aria-label="WordStack home">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          WordStack
        </Link>
        <Link className="placement-exit" href="/">
          <Icon name="arrow-left" className="icon icon-sm" />
          Back to site
        </Link>
      </div>
    </header>
  );
}
