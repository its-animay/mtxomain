import React from 'react';

function Profile() {
  return (
    <div className="section-header bg-primary-app pb-0">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <img src="/static/assets/img/team/profile-picture-freelancer.jpg" className="rounded-circle img-thumbnail image-lg border-gray-300 p-2" alt="Profile image" />
            <div className="mt-4 mb-5">
              <h1 className="display-2 fw-normal my-4">Hello, I’m <span className="text-through fw-bold">Anthony Knowles aka</span> Little Picasso.</h1>
              <h5 className="fw-normal text-gray">Head of Design at <span className="fw-bold text-dark">Themesberg</span></h5>
            </div>
            <ul className="list-inline text-center mb-0">
              <li className="list-inline-item">
                <a className="icon icon-md icon-twitter me-3" data-toggle="tooltip" data-placement="top" title="twitter">
                  <span className="fab fa-twitter"></span>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="icon icon-md icon-github me-3" data-toggle="tooltip" data-placement="top" title="github">
                  <span className="fab fa-github"></span>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="icon icon-md icon-dribbble me-3" data-toggle="tooltip" data-placement="top" title="dribbble">
                  <span className="fab fa-dribbble"></span>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="icon icon-md icon-slack" data-toggle="tooltip" data-placement="top" title="slack">
                  <span className="fab fa-slack"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
