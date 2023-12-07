export default function Nav({ links }) {
    return (
      <nav className="navbar navbar-expand-lg bg-secondary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <h1 className="text-white navbar-nav px-5">Ella</h1>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-3">
              {links.map((link) => link)}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  