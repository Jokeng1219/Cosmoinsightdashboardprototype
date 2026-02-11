import svgPaths from "./svg-fr5yzqcm0k";

function Paragraph() {
  return (
    <div className="absolute h-[30px] left-0 top-0 w-[167.727px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[30px] left-0 not-italic text-[28px] text-white top-[0.5px] tracking-[0.7828px]">Cosmo Yang</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[17px] left-[8px] top-[2px] w-[24px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[17px] left-0 not-italic text-[#ff7800] text-[12px] top-[0.5px]">目標</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-[#51361e] h-[21px] left-0 rounded-[16777200px] top-0 w-[40px]" data-name="Container">
      <Paragraph1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[17px] left-[46px] top-[2px] w-[202.711px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[17px] left-0 not-italic text-[#bfbfbf] text-[12px] top-[0.5px]">產品企劃主管｜5年內達到年薪 150 萬</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[21px] left-0 top-[38px] w-[248.711px]" data-name="Container">
      <Container4 />
      <Paragraph2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[59px] left-[16.5px] top-[16.5px] w-[383px]" data-name="Container">
      <Paragraph />
      <Container3 />
    </div>
  );
}

function CopilotLogo() {
  return (
    <div className="absolute contents inset-[0_-0.01%_0_0]" data-name="copilot logo">
      <div className="absolute inset-[17.52%_50.97%_51.02%_17.59%]" data-name="Intersect">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.03017 5.03479">
          <path d={svgPaths.p74a9780} fill="var(--fill-0, #4CA1DE)" id="Intersect" />
        </svg>
      </div>
      <div className="absolute inset-[17.54%_17.63%_51%_51.56%]" data-name="Intersect_2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.93026 5.03438">
          <path d={svgPaths.p3f3f6200} fill="var(--fill-0, #FECF65)" id="Intersect_2" />
        </svg>
      </div>
      <div className="absolute inset-[51.5%_17.63%_17.54%_51.58%]" data-name="Intersect_3">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.92711 4.95416">
          <path d={svgPaths.p3e145100} fill="var(--fill-0, #F3A2A2)" id="Intersect_3" />
        </svg>
      </div>
      <div className="absolute inset-[51.27%_50.98%_17.52%_17.6%]" data-name="Intersect_4">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.02762 4.99473">
          <path d={svgPaths.p1aec0480} fill="var(--fill-0, #33C488)" id="Intersect_4" />
        </svg>
      </div>
      <div className="absolute inset-[0_0_49.75%_0]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8.04">
          <path d={svgPaths.p3fb90200} fill="url(#paint0_linear_6_576)" id="Shape" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_6_576" x1="13.338" x2="7.25021" y1="6.91562" y2="-0.488518">
              <stop stopColor="#FF9A10" />
              <stop offset="1" stopColor="#FFE396" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[8.75%_0_0_0.09%]" data-name="Shape_2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9853 14.6">
          <path d={svgPaths.pd8d9000} fill="url(#paint0_linear_6_574)" id="Shape_2" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_6_574" x1="11.5535" x2="4.99298" y1="14.6" y2="-0.462593">
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
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <CopilotLogo />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[16px] top-0" data-name="Container">
      <Icon />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[16px] left-[24px] top-0 w-[63.703px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[12px] text-white top-px">AI 洞察</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[16px] left-[12px] top-[12px] w-[359px]" data-name="Container">
      <Container8 />
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[36px] left-[12px] overflow-clip top-[32px] w-[359px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#d1d5dc] text-[12px] top-px w-[352px] whitespace-pre-wrap">Cosmo，讀了您週三關於「專案延宕」的日誌，偵測到您雖對「團隊究責」感到焦慮，但仍展現了「同理心」去理解工程師的困難....</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[17px] relative shrink-0 w-[30px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[17px] left-[15.5px] not-italic text-[#ff7800] text-[10px] text-center top-[0.5px] tracking-[0.1172px]">想聊聊</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-center justify-center left-[315px] p-px rounded-[16777200px] top-[73px] w-[56px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ff8a46] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <Paragraph5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[106px] left-0 top-0 w-[383px]" data-name="Container">
      <Container7 />
      <Paragraph4 />
      <Container9 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[#202020] h-[106px] left-[16.5px] rounded-[6px] top-[89.5px] w-[383px]" data-name="Container">
      <Container6 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[212px] left-0 overflow-clip rounded-[12px] top-0 w-[416px]" data-name="Container">
      <Container2 />
      <Container5 />
    </div>
  );
}

function Container10() {
  return <div className="absolute border-[#333] border-[0.5px] border-solid h-[212px] left-0 rounded-[12px] top-0 w-[416px]" data-name="Container" />;
}

export default function Container() {
  return (
    <div className="bg-[#262626] relative rounded-[12px] size-full" data-name="Container">
      <Container1 />
      <Container10 />
    </div>
  );
}