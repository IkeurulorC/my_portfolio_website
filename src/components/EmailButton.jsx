const EmailButton = ({ children }) => {
  return (
    <div className="pt-4 flex items-center justify-center gap-4">
      <a href="mailto:ikeurulorsebastin@gmail.com">
        <button className="px-11! py-3! bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full! transition-all active:scale-95! shadow-lg shadow-purple-500/20">
                  {children}
        </button>
      </a>
         {" "}
    </div>
  );
};

export default EmailButton;
