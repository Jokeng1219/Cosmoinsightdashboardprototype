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

function Container3() {
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

function Container2() {
  return (
    <div className="absolute h-[21px] left-0 top-[38px] w-[248.711px]" data-name="Container">
      <Container3 />
      <Paragraph2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[59px] left-[16.5px] top-[16.5px] w-[383px]" data-name="Container">
      <Paragraph />
      <Container2 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[16.5px] top-[16.5px]">
      <Container1 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[#262626] relative rounded-[12px] size-full" data-name="Container">
      <Group />
    </div>
  );
}