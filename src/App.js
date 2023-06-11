import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <div className="container-box">
          <div className="left">
            <span>Start Bootstrap</span>
          </div>
          <div className="right">
            <a href="#" className='nav'>Home</a>
            <a href="#" className='nav'>About</a>
            <a href="#" className='nav'>Contact</a>
            <a href="#" className='blog'>Blog</a>
          </div>
        </div>
      </header>

      <section className="top-section">
        <div>
        <h2>Welcome to Blog Home!</h2>
        <p>A Bootstrap 5 starter layout for your next blog homepage</p>
        </div>
      </section>

      <secction className="main">

        <div className="card-box">
          <div className="row">
            <div className="col-8 left-row">
              <div className="row">
                <div className="col-12">

                <div class="card mb-3" >
                  <img src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="" />
                   <div class="card-body">
                   <h5 class="card-title">Card title</h5>
                   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <a href="#" class="btn btn-primary">Go somewhere</a>
                   </div>
                 </div>

                </div>
                <div className="col-6">

                <div class="card mb-3" >
                  <img src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="" />
                   <div class="card-body">
                   <h5 class="card-title">Card title</h5>
                   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <a href="#" class="btn btn-primary">Go somewhere</a>
                   </div>
                 </div>


                </div>
                <div className="col-6">
                  
                <div class="card mb-3" >
                  <img src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="" />
                   <div class="card-body">
                   <h5 class="card-title">Card title</h5>
                   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <a href="#" class="btn btn-primary">Go somewhere</a>
                   </div>
                 </div>

                </div>

                <div className="col-6">
                  
                <div class="card mb-3" >
                  <img src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="" />
                   <div class="card-body">
                   <h5 class="card-title">Card title</h5>
                   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <a href="#" class="btn btn-primary">Go somewhere</a>
                   </div>
                 </div>

                </div>


                <div className="col-6">
                  
                <div class="card mb-3" >
                  <img src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="" />
                   <div class="card-body">
                   <h5 class="card-title">Card title</h5>
                   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <a href="#" class="btn btn-primary">Go somewhere</a>
                   </div>
                 </div>

                </div>

              </div>

              <div className="pages text-center">
                <span>
                <button class="btn border left-btn select">Newer</button>
                </span>
                <span>
                  <button className="btn btn-primary mid">1</button>
                </span>
                <span>
                  <button className="btn border mid  select">2</button>
                </span>
                <span>
                  <button className="btn border mid select">3</button>
                </span>
                <span>
                  <button className="btn border mid select">...</button>
                </span>
                <span>
                  <button className="btn border mid select">15</button>
                </span>
                <span>
                <button class="btn border right-btn select">Order</button>
                </span>
              </div>
            </div>
            <div className="col-4">

            <div class="card mb-3">
              <div class="card-header">
                Search
              </div>
              <div class="card-body">
              <div class="input-group mb-3">
                <input input type="text" class="form-control" placeholder="Enter search trem..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Go</button>
                </div>
              </div>
            </div>


            <div class="card mb-3">
              <div class="card-header">
              Categories
              </div>
              <div class="card-body">
                <div className="row">
                  <div className="col-6 ">
                    <a href="#">Web Design</a>
                  </div>

                  <div className="col-6 ">
                    <a href="#">Web Design</a>
                  </div>

                  <div className="col-6 ">
                    <a href="#">Web Design</a>
                  </div>

                  <div className="col-6 ">
                    <a href="#">Web Design</a>
                  </div>

                  <div className="col-6 ">
                    <a href="#">Web Design</a>
                  </div>

                  <div className="col-6 ">
                    <a href="#">Web Design</a>
                  </div>



                </div>
              </div>
            </div>


            <div class="card">
              <div class="card-header">
              Side Widget
              </div>
              <div class="card-body">
                <p>You can put anything you want inside of 
                  these side widgets. They are easy to use, 
                  and feature the Bootstrap 5 card component!</p>
              </div>
            </div>




            </div>
          </div>
        </div>
        
      </secction>

      <footer className="mt-5">
        <p>Copyright © Your Website 2023</p>
      </footer>
    </div>
  );
}

export default App;
