import * as React from "react";

type MorganLogoProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  bodyColor?: string;
};

function MyLogo({
  size = 32,
  bodyColor = "#5f84ea",
  ...props
}: MorganLogoProps) {
  const maskId = React.useId();

  return (
    <svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <mask id={maskId}>
          {/* visible area */}
          <rect width="256" height="256" fill="white" />

          {/* cut-out M */}
          <path
            fill="black"
            d="
              M74 78
              L74 160
              C74 166 79 171 85 171
              C91 171 96 166 96 160
              L96 108
              L128 126
              L160 108
              L160 160
              C160 166 165 171 171 171
              C177 171 182 166 182 160
              L182 78
              C182 72 177 67 171 67
              C169 67 167 68 165 69
              L128 92
              L91 69
              C89 68 87 67 85 67
              C79 67 74 72 74 78
            "
          />
        </mask>
      </defs>

      {/* hex with M hole */}
      <path
        mask={`url(#${maskId})`}
        fill={bodyColor}
        d="
          M128 8
          L208 48
          C220 54 228 67 228 81
          V175
          C228 189 220 202 208 208
          L128 248
          L48 208
          C36 202 28 189 28 175
          V81
          C28 67 36 54 48 48
          Z
        "
      />
    </svg>
  );
}
export default MyLogo;
