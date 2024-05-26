import { cn } from "@/lib/utils";
import { ReactNode, type FC } from "react";

type CardProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export const Card: FC<CardProps> = ({
  title,
  children,
  className,
}: CardProps) => {
  return (
    <div
      className={cn(
        "relative bg-primary-background w-full h-fit rounded-2xl border border-border p-6 text-primary-foreground overflow-hidden"
      )}
    >
      <div className="flex flex-col gap-y-6">
        {/* tittle */}
        {title ? (
          <div className="font-pixel">
            <p className="uppercase text-lg">{title}</p>
          </div>
        ) : null}

        {/* children */}
        {children}
      </div>
    </div>
  );
};
