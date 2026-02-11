import svgPaths from "./svg-kdbnw8xus9";

function CopilotLogo() {
  return (
    <div className="absolute contents inset-0" data-name="copilot logo">
      <div className="absolute inset-[17.52%_50.97%_51.02%_17.59%]" data-name="Intersect">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.70218 9.71108">
          <path d={svgPaths.p1d124a00} fill="var(--fill-0, #4CA1DE)" id="Intersect" />
        </svg>
      </div>
      <div className="absolute inset-[17.54%_17.63%_51%_51.56%]" data-name="Intersect_2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.50947 9.71029">
          <path d={svgPaths.p13f550f0} fill="var(--fill-0, #FECF65)" id="Intersect_2" />
        </svg>
      </div>
      <div className="absolute inset-[51.5%_17.63%_17.54%_51.58%]" data-name="Intersect_3">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.50339 9.55558">
          <path d={svgPaths.p143ca800} fill="var(--fill-0, #F3A2A2)" id="Intersect_3" />
        </svg>
      </div>
      <div className="absolute inset-[51.27%_50.98%_17.52%_17.6%]" data-name="Intersect_4">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.69726 9.63382">
          <path d={svgPaths.p11ddbef0} fill="var(--fill-0, #33C488)" id="Intersect_4" />
        </svg>
      </div>
      <div className="absolute inset-[0_0_49.75%_0]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.8608 15.5075">
          <path d={svgPaths.p5058a00} fill="url(#paint0_linear_6_918)" id="Shape" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_6_918" x1="25.7263" x2="13.9842" y1="13.3388" y2="-0.942254">
              <stop stopColor="#FF9A10" />
              <stop offset="1" stopColor="#FFE396" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[8.75%_0_0_0.09%]" data-name="Shape_2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.8324 28.1605">
          <path d={svgPaths.p36e3e980} fill="url(#paint0_linear_6_912)" id="Shape_2" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_6_912" x1="22.2845" x2="9.63046" y1="28.1605" y2="-0.892248">
              <stop stopColor="#E55010" />
              <stop offset="0.622953" stopColor="#FF7800" />
              <stop offset="1" stopColor="#FF9A10" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-full overflow-clip relative shrink-0 w-full" data-name="Icon">
      <CopilotLogo />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-full" data-name="Container">
      <Icon />
    </div>
  );
}

export default function Container() {
  return (
    <div className="relative rounded-[19071400px] size-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[0.568px] relative rounded-[inherit] size-full">
        <Container1 />
      </div>
      <div aria-hidden="true" className="absolute border-[#262626] border-[0.568px] border-solid inset-0 pointer-events-none rounded-[19071400px]" />
    </div>
  );
}
