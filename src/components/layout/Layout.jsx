
// TODO sækja Sass
//eslint-disable-next-line
export function Layout({ /* todo senda inn efni */ children }) {
  // TODO setja upp layout fyrir vef
  return (
    <div>
      <header>
        <title>Fréttir</title>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <span>
          <p>Fréttir frá <a href="https://www.ruv.is/">RÚV.</a></p>
        </span>
      </footer>
    </div>
  );
}
