import logo from './logo.svg';
import './main.css';
import { Home } from './components/home';

function App() {
  return (
    <div >
      <Home />
      <div class="position-relative overflow-hidden p-3 p-md-5  text-center bg-light">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
          <h6 class="display-4 font-weight-normal">select an option</h6>
          <select class="form-control mr-5 ml-2 mt-4 mb-5">
            <option></option>
            <option> Supplier index </option>
            <option> Production Analytics </option>
            <option> Inventory Tracking</option> 
          </select>
          <a class="btn btn-outline-secondary" href="#">confirm</a>
        </div>
        <div class="product-device shadow-sm d-none d-md-block"></div>
        <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
    </div>
  );
}

export default App;
