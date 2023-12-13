export default function Navbar() {
  return (
    <div class="flex justify-between m-6">
      <div>
        Logo
      </div>
      
      <div>
        <ul class="flex align-items flex-start gap-8 ">
          <a href="Home">Home</a>
          <a href="Servicio">Servicio</a>
          <a href="Acerca de mi">Acerca de mi</a>
          <a href="Contacto">Contacto</a>
        </ul>
      </div>
    </div>
  );
}
