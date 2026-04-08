import type { ReactNode, CSSProperties, ElementType } from "react";
import { useInView } from "../hooks/useInView";

type Direction = "up" | "down" | "left" | "right" | "none";

interface FadeInProps {
  children: ReactNode;
  /** Translation direction before entering. "up" is most common. */
  direction?: Direction;
  /** Delay in milliseconds — use for staggered children */
  delay?: number;
  /** Duration in milliseconds (default 500) */
  duration?: number;
  /** Extra class names applied to the wrapper div */
  className?: string;
  /** Render as a different tag */
  as?: ElementType;
}

const offsets: Record<Direction, string> = {
  up: "translateY(18px)",
  down: "translateY(-18px)",
  left: "translateX(18px)",
  right: "translateX(-18px)",
  none: "none",
};

/**
 * Wraps children in a div that fades + translates into view when scrolled to.
 * Respects `prefers-reduced-motion` — motion is disabled automatically.
 */
export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 500,
  className = "",
  as: Tag = "div",
}: FadeInProps) {
  const [ref, isInView] = useInView<HTMLElement>();

  const style: CSSProperties = {
    opacity: isInView ? 1 : 0,
    transform: isInView ? "none" : offsets[direction],
    transition: `opacity ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
    willChange: "opacity, transform",
  };

  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}
