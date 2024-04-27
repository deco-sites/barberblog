import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Props {
  /** 
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  description?: string;
  image?: ImageWidget;
  placement?: "left" | "right";
  cta?: CTA[];
}

const PLACEMENT = {
  left: "flex-col text-left lg:flex-row-reverse",
  right: "flex-col text-left lg:flex-row",
};

export default function HeroFlats({
  title = "Click here to tweak this text however you want.",
  description = "This text is entirely editable, tailor it freely.",
  image,
  placement = "left",
  cta,
}: Props) {
  return (
    <div>
      <div class="flex flex-col gap-8 items-center mx-auto bg-no-repeat bg-center md:bg-cover md:bg-contain
      bg-[url('https://barberblog.deco.site/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F8359%2Fc2399a70-9e7b-4fae-80be-7d9c67554eae&fit=cover&width=640')]
      ">
        <div
          class={`flex w-full xl:container xl:mx-auto py-20 z-10 lg:pt-36 lg:pb-20 gap-12 items-center`}>
          <div
            class={`mx-6 lg:mx-auto lg:w-full space-y-4 gap-4 text-center max-w-[850px]`}
          >
            <div
              class="font-medium inline-block leading-[100%] lg:text-[80px] text-4xl tracking-[-2.4px]"
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            >
            </div>
            <p class="leading-[150%] md:text-md text-lg">
              {description}
            </p>
            {cta && cta.length > 0 &&
              (
                <div class="flex items-center lg:pt-5 justify-center">
                  {cta?.map((item) => (
                    <a
                      key={item?.id}
                      id={item?.id}
                      href={item?.href}
                      target={item?.href.includes("http") ? "_blank" : "_self"}
                      class={`font-normal btn btn-primary ${item.outline && "btn-outline"
                        }`}
                    >
                      {item?.text}
                    </a>
                  ))}
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
