import imgImageAvatar from "figma:asset/47fba8fe00506fcec69e898ee1ff74a8660b0c46.png";

function ImageAvatar() {
  return (
    <div className="h-[32px] relative rounded-[16777200px] shrink-0 w-full" data-name="Image (Avatar)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16777200px] size-full" src={imgImageAvatar} />
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