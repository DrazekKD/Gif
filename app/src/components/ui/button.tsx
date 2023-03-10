import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const buttonStyles = cva(
  "flex items-center justify-center px-4 rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-offset-white focus:ring-offset-1 disabled:opacity-60 disabled:pointer-events-none hover:bg-opacity-90",
  {
    variants: {
      intent: {
        primary: "bg-accent text-white",
        outline:
          "bg-white text-accent border border-accent hover:bg-accent hover:text-white",
        outlineInverted:
          "bg-transparent text-white border border-white hover:bg-accent hover:text-white",
      },
      fullWidth: {
        true: "w-full",
        false: "w-fit",
      },
      slim: {
        true: "py-1",
        false: "py-3",
      },
    },
    defaultVariants: {
      intent: "primary",
      slim: false,
    },
  }
);

export interface IButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonStyles> {
  fullWidth?: boolean;
  slim?: boolean;
}

export function Button({
  intent,
  fullWidth,
  className,
  slim,
  ...props
}: IButtonProps) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={`${buttonStyles({ intent, fullWidth, slim })} ${className}`}
      {...props}
    />
  );
}
