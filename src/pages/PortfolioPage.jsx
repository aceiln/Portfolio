import logo from '../assets/white_berry_img.jpg';

export default function PortfolioPage() {
  return (
    <div className="container pt-4">
      <h4>Portfolio</h4>
      <section className="features-icons bg-light text-center m-4">
        <div className="container">
          <div className="row p-2">
            <div className="col-lg-4">
            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-layers m-auto text-primary" />
                </div>
                <h3>Project Name</h3>
                <p className="lead mb-0">
                  Project Description.
                </p>
                <img src={logo} style={{width: "80%"}}/>
                <br/>
                <small ><a class="text-secondary" href="https://www.github.com">Link to Project</a></small>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-layers m-auto text-primary" />
                </div>
                <h3>Project Name</h3>
                <p className="lead mb-0">
                  Project Description.
                </p>
                <img src={logo} style={{width: "80%"}}/>
                <br/>
                <small ><a class="text-secondary" href="https://www.github.com">Link to Project</a></small>
              </div>
            </div>
            <div className="col-lg-4">
            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-layers m-auto text-primary" />
                </div>
                <h3>Project Name</h3>
                <p className="lead mb-0">
                  Project Description.
                </p>
                <img src={logo} style={{width: "80%"}}/>
                <br/>
                <small ><a class="text-secondary" href="https://www.github.com">Link to Project</a></small>
              </div>
            </div>
          </div>
          <br/>
          <div className="row p-2">
            <div className="col-lg-4">
            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-layers m-auto text-primary" />
                </div>
                <h3>Project Name</h3>
                <p className="lead mb-0">
                  Project Description.
                </p>
                <img src={logo} style={{width: "80%"}}/>
                <br/>
                <small ><a class="text-secondary" href="https://www.github.com">Link to Project</a></small>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-layers m-auto text-primary" />
                </div>
                <h3>Project Name</h3>
                <p className="lead mb-0">
                  Project Description.
                </p>
                <img src={logo} style={{width: "80%"}}/>
                <br/>
                <small ><a class="text-secondary" href="https://www.github.com">Link to Project</a></small>
              </div>
            </div>
            <div className="col-lg-4">
            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-layers m-auto text-primary" />
                </div>
                <h3>Project Name</h3>
                <p className="lead mb-0">
                  Project Description.
                </p>
                <img src={logo} style={{width: "80%"}}/>
                <br/>
                <small ><a class="text-secondary" href="https://www.github.com">Link to Project</a></small>
              </div>
            </div>
          </div>
        </div>
      </section>
      <p>
       These are just a few of my many, many projects I've created :)
      </p>
    </div>
  );
}
