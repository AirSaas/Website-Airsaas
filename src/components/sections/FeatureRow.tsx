import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type FeatureRowProps = {
  heading: React.ReactNode;
  description: React.ReactNode;
  image: string;
  imageAlt: string;
  reversed?: boolean;
  bgColor?: "white" | "alt" | "lavender";
};

const bgColors = {
  white: "bg-white",
  alt: "bg-bg-alt",
  lavender: "bg-bg-lavender",
};

export function FeatureRow({
  heading,
  description,
  image,
  imageAlt,
  reversed = false,
  bgColor = "white",
}: FeatureRowProps) {
  return (
    <section className={cn("py-16", bgColors[bgColor])}>
      <Container>
        <div
          className={cn(
            "flex items-center gap-16",
            reversed ? "flex-col-reverse md:flex-row-reverse" : "flex-col md:flex-row",
          )}
        >
          <div className="flex-1">
            <h3 className="text-[1.5rem] font-semibold leading-[2rem]">
              {heading}
            </h3>
            <div className="mt-4 text-[17px] leading-[23px] text-text-secondary">
              {description}
            </div>
          </div>
          <div className="relative flex-1">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[10px]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
