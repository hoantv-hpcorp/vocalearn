import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  name: string;
  className?: string;
};

export function Icon({ name, className = "icon", ...props }: IconProps) {
  return (
    <svg className={className} aria-hidden="true" {...props}>
      <use href={`#i-${name}`} />
    </svg>
  );
}
