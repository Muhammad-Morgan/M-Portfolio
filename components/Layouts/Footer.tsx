import MyLogo from "@/components/Atoms/MyLogo";
const Footer = () => {
  return (
    <section className="border-t border-border/70">
      <div className="section-inner flex flex-col px-[clamp(1.25rem,6vw,6rem)] py-6 text-xs text-muted-foreground sm:flex-row justify-center items-center gap-3">
        <MyLogo size={40} bodyColor="#4957da" />
        <span className="text-sm uppercase tracking-widest">Portfolio</span>
      </div>
    </section>
  );
};

export default Footer;
