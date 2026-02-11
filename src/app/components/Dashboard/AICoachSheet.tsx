import React from 'react';
import { Drawer } from 'vaul';
import { Send, ArrowDown } from 'lucide-react';
import CopilotLogo from '../../../imports/Container-6-1212';
import imgImageAvatar from "figma:asset/47fba8fe00506fcec69e898ee1ff74a8660b0c46.png";

export default function AICoachSheet() {
  return (
    <div className="bg-[#262626] flex flex-col rounded-t-[24px] overflow-hidden h-[75vh] border-t border-[#333333]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 h-[68.5px] border-b border-[#333333] shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-[32px] h-[32px] rounded-full overflow-hidden relative shrink-0">
            <CopilotLogo />
          </div>
          <span className="text-white text-[16px] font-bold tracking-[-0.3px]">AI 職涯教練</span>
        </div>
        <Drawer.Close className="w-[36px] h-[36px] bg-[#333333] rounded-full flex items-center justify-center hover:bg-[#404040] transition-colors">
          <ArrowDown className="text-[#99A1AF] rotate-0" size={20} />
        </Drawer.Close>
      </div>

      {/* Chat Area */}
      <div className="flex flex-col gap-4 p-4 overflow-y-auto flex-1">
        {/* Message 1 (AI) */}
        <div className="flex gap-3 items-start">
          <div className="w-[32px] h-[32px] rounded-full overflow-hidden shrink-0 bg-[#1A1A1A] p-[2px] border border-[#333333]">
             <CopilotLogo />
          </div>
          <div className="bg-[#333333] rounded-[16px] rounded-tl-none p-3 max-w-[290px]">
            <p className="text-[#e5e7eb] text-[12px] leading-[17px]">
              Cosmo，我看您這週對於「專案延宕」的記錄，似乎在團隊溝通上遇到了一些瓶頸？
            </p>
          </div>
        </div>

        {/* Message 2 (User) */}
        <div className="flex gap-3 items-start justify-end">
          <div className="bg-[#ff7800] rounded-[16px] rounded-tr-none p-3 max-w-[290px]">
            <p className="text-white text-[12px] leading-[17px]">
              對啊，工程那邊一直說資源不足，但我看他們都在忙別的 Refactor。
            </p>
          </div>
          <div className="w-[32px] h-[32px] rounded-full overflow-hidden shrink-0 border border-[#333333]">
            <img 
              src={imgImageAvatar}
              alt="User" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Message 3 (AI) */}
        <div className="flex gap-3 items-start">
          <div className="w-[32px] h-[32px] rounded-full overflow-hidden shrink-0 bg-[#1A1A1A] p-[2px] border border-[#333333]">
             <CopilotLogo />
          </div>
          <div className="bg-[#333333] rounded-[16px] rounded-tl-none p-3 max-w-[290px]">
            <p className="text-[#e5e7eb] text-[12px] leading-[17px]">
              這確實令人沮喪。不過根據您的日誌，您後來選擇先理解他們的技術債，這展現了很好的同理心。這對長期合作很有幫助。您想討論看看下週如何更有效地同步進度嗎？
            </p>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-[#262626] p-4 pt-4 border-t border-[#333333] shrink-0">
        <div className="flex gap-2 items-center h-[40px]">
          <div className="flex-1 bg-[#1a1a1a] rounded-full h-full px-4 flex items-center border border-[#333333]">
            <input 
              type="text" 
              placeholder="輸入訊息..." 
              className="bg-transparent text-white text-[12px] w-full focus:outline-none placeholder:text-white/50"
            />
          </div>
          <button className="w-[40px] h-[40px] bg-[#ff7800] rounded-full flex items-center justify-center shrink-0 hover:bg-[#e66c00] transition-colors">
            <Send className="text-white" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
