function ImageAvatar() {
  return (
    <div className="h-[32px] relative rounded-[16777200px] shrink-0 w-full bg-[#333333] flex items-center justify-center" data-name="Image (Avatar)">
      <span className="text-white text-sm font-bold">C</span>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[2px] pt-[4px] px-[4px] relative rounded-[16777200px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#ff7800] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <ImageAvatar />
    </div>
  );
}