const Container = ({ children }) => {
  return (
    <main className="bg-slate-100 min-h-screen ">
      <div className="w-full max-w-xl min-h-screen container mx-auto bg-white shadow-md rounded p-5 animate-fade-in ">
        {children}
      </div>
    </main>
  );
};

export default Container;
