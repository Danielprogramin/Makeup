export default function Inicio() {
  return (
    <div>
      <div class ="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class ="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="lg:text-7xl text-2xl">Makeup By Yuli</h1>

          <div class="font-montserrat text-base font-normal mt-8">
            <p>El maquillaje es una forma de expresión personal que permite</p>
            <p>realzar la belleza natural , ven y descubre tu belleza.</p>
          </div>
          <div class="text-2xl pt-4 ">
            <button class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              conoceme
            </button>
          </div>
        </div>
        <div class="w-56 pt-8 lg:pt-0 mr-14 flex">
          <img 
          class="object-cover object-center rounded"
          alt="hero"
          src="/img/makeup.jpeg"></img>
        </div>
      </div>
    </div>
  );
}
