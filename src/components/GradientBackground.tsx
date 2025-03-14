const GradientBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none">
      <div className="absolute inset-0 bg-[#0a0118]" />
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] -translate-y-1/2">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/30 to-blue-500/30 blur-3xl animate-pulse" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-l from-purple-500/20 to-pink-500/20 blur-3xl animate-pulse delay-1000" />
        </div>
      </div>
    </div>
  );
};

export default GradientBackground;
