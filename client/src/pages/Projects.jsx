import CallToAction from "../components/CallToAction";

const Projects = () => {
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>Projects</h1>
      <p className='text-md text-gray-500'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        excepturi ratione placeat laborum officiis, in, sequi odit eum nostrum
        quibusdam minima similique incidunt voluptates sed facilis autem neque
        eligendi nisi.
      </p>
      <CallToAction />
    </div>
  );
};

export default Projects;
