import React from 'react';

const App = () => {
  return (
    <div>
      {/* Bootstrap CSS from CDN */}
      <link 
        rel="stylesheet" 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      />   
      {/* my own style.css */}
      <link rel="stylesheet" href="style.css"></link> 
      <style>
        {`
          #main {
            background-color: #f8f9fa;
            font-family: Roboto, "Helvetica Neue", Arial, sans-serif;
          }
          .card {
            transition: transform 0.3s ease-in-out;
          }
          .card:hover {
            transform: scale(1.05);
          }
        `}
      </style>

      <div className="container py-3">
        <header className="text-center mb-5">
          <h1 className="display-5 fw-bold text-dark">Star Wars Explorer</h1>
          <p className="lead text-muted">
            Explore characters, planets, and starships
          </p>
          <p className="fw-bold">
            May the Force be with you!
          </p>
        </header>
        <main>
          <div className="row g-4">
            {/* Character */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card shadow-sm h-100 rounded-3">
                <div className="card-body">
                  <h5 className="card-title fw-semibold">Luke Skywalker</h5>
                  <div className="card-text">
                    <ul className="list-unstyled">
                      <li className="d-flex justify-content-between">
                        <span>Gender:</span>
                        <span className="fw-medium">Male</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>Height:</span>
                        <span className="fw-medium">172 cm</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>Mass:</span>
                        <span className="fw-medium">77 kg</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>Homeworld:</span>
                        <span className="fw-medium">Tatooine</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Starship */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card shadow-sm h-100 rounded-3">
                <div className="card-body">
                  <h5 className="card-title fw-semibold">Millennium Falcon</h5>
                  <div className="card-text">
                    <ul className="list-unstyled">
                      <li className="d-flex justify-content-between">
                        <span>Model:</span>
                        <span className="fw-medium">YT-1300 light freighter</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>Crew:</span>
                        <span className="fw-medium">4</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>Passengers:</span>
                        <span className="fw-medium">6</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>Hyperdrive Rating:</span>
                        <span className="fw-medium">0.5</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Home planet */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card shadow-sm h-100 rounded-3">
                <div className="card-body">
                  <h5 className="card-title fw-semibold">Tatooine</h5>
                  <div className="card-text">
                    <ul className="list-unstyled">
                      <li className="d-flex justify-content-between">
                        <span>Climate:</span>
                        <span className="fw-medium">Arid</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>Population:</span>
                        <span className="fw-medium">200,000</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>Diameter:</span>
                        <span className="fw-medium">10,465 km</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>Gravity:</span>
                        <span className="fw-medium">1 standard</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 d-flex justify-content-center gap-3">
            <button className="btn btn-primary btn-lg shadow-sm">
              Show more characters
            </button>
            <button className="btn btn-primary btn-lg shadow-sm">
              Next page
            </button>
          </div>
        </main>
      </div>

      <script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
      ></script>  
    </div>
  );
};

export default App;