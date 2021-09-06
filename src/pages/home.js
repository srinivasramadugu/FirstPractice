import React from 'react';

export default function Home() {
    return (
        // START FOR HOME PAGE
        <div className="home_content my-3">
            <h5 className="text-center px-3">Home page <br/> My Practice - React JS (Developed and Maintained By Facebook)</h5>
            {/* BUTTON */}

            {/* ACCORDION */}
             <div className="container py-3 text-center">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item py-2">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Srinivas Ramadugu
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>He is Senior Front End Devel</strong> <br/> <code>at Company Name</code>.
                    </div>
                    </div>
                </div>
                <div className="accordion-item py-2">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                       Ashok Ramadugu
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>Accounts Manager</strong><br/> <code>at Company name - Worli</code>
                    </div>
                    </div>
                </div>
                <div className="accordion-item py-2">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                       Kavya Ramadugu
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>She is Very Clever in Studies</strong> <br/><code>her School name is GK Marg School</code>
                    </div>
                    </div>
                </div>
            </div>
             </div>
             <div className="text-center">
                <button type="button" className="btn btn-primary mr-2">Submit</button>
                <button type="button" className="btn btn-secondary">Reset</button>
            </div>
        </div>
        // END FOR HOME PAGE
    )
}
