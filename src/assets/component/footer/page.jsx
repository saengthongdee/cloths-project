import React from "react";
import "./style.css";

function page() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <footer>
        <div className="box-footer">
          <div
            style={{
              backgroundImage: `url(https://images.pexels.com/photos/32228096/pexels-photo-32228096.jpeg?auto=compress&cs=tinysrgb&w=600)`,
            }}
            className="image"
          ></div>
          <div className="text-footer">
            <form onSubmit={handleSubmit}>
              <input type="email" placeholder="Enter your email" required />
              <input type="submit" value="Subscribe Now!" />
            </form>
            <div className="contect">
              <div className="box">
                <h2>Company A</h2>
                <p>
                  456 Market Street, Suite 800
                  <br />
                  San Francisco, CA 94111
                  <br />
                  United States
                </p>
                <p>Phone: +1 (415) 555-0123</p>
                <p>Email: contact@companya.com</p>
              </div>

              <div className="box">
                <h2>Company B</h2>
                <p>
                  12 Baker Street
                  <br />
                  London W1U 3BW
                  <br />
                  United Kingdom
                </p>
                <p>Phone: +44 20 7946 0998</p>
                <p>Email: info@companyb.co.uk</p>
              </div>

              <div className="box">
                <h2>Social</h2>
                <p>
                  Facebook Page: @CompanyC
                  <br />
                </p>
                <p>Phone: +81 3-1234-5678</p>
                <p>Email: hello@companyc.jp</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default page;
