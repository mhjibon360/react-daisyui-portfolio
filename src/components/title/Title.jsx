const Title = ({ heading, desc }) => {
  return (
    <div className=" w-full max-w-5xl mb-10">
      <h2 className=" text-6xl md:text-8xl font-extrabold mb-2 text-yellow">
        {heading}
      </h2>
      <p className=" text-2xl text-darkblue font-normal leading-relaxed">
        {desc}
      </p>
    </div>
  );
};

export default Title;
