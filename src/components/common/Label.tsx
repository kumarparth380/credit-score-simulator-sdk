import * as React from "react"

const labelBaseStyles = "text-sm font-medium leading-none";
const labelDisabledStyles = "cursor-not-allowed opacity-70";

type LabelProps = React.ComponentPropsWithoutRef<"label"> & {
  isDisabled?: boolean;
  className?: string;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, isDisabled, ...props }, ref) => {
    // Combine base styles with disabled styles if needed
    const combinedClassName = [
      labelBaseStyles,
      isDisabled ? labelDisabledStyles : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return <label ref={ref} className={combinedClassName} {...props} />;
  }
);

Label.displayName = "Label";

export { Label };
