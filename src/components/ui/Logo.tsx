export const Logo = () => {
  return (
    <a href="#top" className="inline-flex items-center gap-3 text-white transition-opacity hover:opacity-90">
      <div className="grid h-11 w-11 place-items-center rounded-[4px] border border-cyan/70 bg-white/10 shadow-[0_0_18px_rgba(57,195,255,0.16)]">
        <span className="text-2xl font-bold leading-none text-white">π</span>
      </div>
      <div className="leading-none">
        <div className="text-[22px] font-extrabold tracking-wide">ПРОТЕЙ</div>
        <div className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/80">Группа компаний</div>
      </div>
    </a>
  );
};
