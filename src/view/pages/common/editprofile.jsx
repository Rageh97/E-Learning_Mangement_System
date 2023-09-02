import React, { useState } from "react";
import LayoutResolver from "../../layouts/LayoutResolver";
import { v4 as uuidv4 } from "uuid";
const id = uuidv4();
const currentUser = {
  id: id,
  fullName: "",
  username: "",
  email: "",
  password: "",
  image: "",
  bio:'',
};
export default function EditProfile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [userInfo, setUserInfo] = useState(currentUser);
console.log(userInfo);
const handleInputChange = (e) => {
  const { name, value } = e.target;

  if (name === "image" && e.target.files[0]) {
    // Generate a URL for the selected image file
    const imageUrl = URL.createObjectURL(e.target.files[0]);
    setUserInfo({ ...userInfo, [name]: imageUrl });
  } else {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  }
};
  const handleSaveChanges = (e) => {
    e.preventDefault();
    localStorage.setItem("userinfo", JSON.stringify(userInfo));

  };
  return (
    <LayoutResolver>
      <div className="container">
        <div className="row flex-lg-nowrap">
          <div className="col">
            <div className="row">
              <div className="col mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="e-profile">
                      <div className="row">
                        {/* handle photo */}
                        <div className="col-la-6 col-md-6 col-sm-auto mb-3">
                          <div
                            className="w-100 mx-auto"
                            style={{ width: 140 + "px" }}
                          >
                            <img
                              src={`${userInfo.image ? userInfo.image : process.env.PUBLIC_URL + "/images/hero3.jpg"}`} 
                              className="img-circle w-50 rounded-2"
                              alt="Avatar"
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6 d-flex flex-column flex-sm-row justify-content-between mb-3">
                          <div className="text-center text-sm-left mb-2 mb-sm-0">
                            <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">
                              {user.name}
                            </h4>
                            <p className="mb-0">
                              {userInfo.email ? userInfo.email : user.email}
                            </p>
                            <div className="text-muted">
                              <small>Last update 2 hours ago</small>
                            </div>
                            <div className="mt-2">
                              <button className="btn btn-primary" type="button">
                                <i className="fa fa-fw fa-camera"></i>
                                <form class="btn btn-primary d-flex justify-content-around align-items-center">
                                  <label for="upload" class="mb-0">
                                    change photo
                                  </label>
                                  <input
                                    accept="image/*"
                                    type="file"
                                    class="form-control-file"
                                    onChange={handleInputChange}
                                    hidden
                                    name="image"
                                    id="upload"
                                  />
                                </form>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* edit informations */}
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                          <a href="#" className="active nav-link">
                            informaition
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content pt-3">
                        <div className="tab-pane active">
                          <form className="form" onSubmit={handleSaveChanges}>
                            <div className="row">
                              <div className="col">
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label>Full Name</label>
                                      <input
                                        className="form-control"
                                        type="text"
                                        name="fullName"
                                        placeholder="Full Name"
                                        value={userInfo.fullName}
                                        onChange={handleInputChange}
                                      />
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="form-group">
                                      <label>Username</label>
                                      <input
                                        className="form-control"
                                        type="text"
                                        name="username"
                                        placeholder="username"
                                        value={userInfo.username}
                                        onChange={handleInputChange}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label>Email</label>
                                      <input
                                        className="form-control"
                                        type="text"
                                        name="email"
                                        placeholder="student@example.com"
                                        value={userInfo.email}
                                        onChange={handleInputChange}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col mb-3">
                                    <div className="form-group">
                                      <label>About</label>
                                      <textarea
                                        className="form-control"
                                        rows="5"
                                        placeholder="My Bio"
                                        name="bio"
                                        value={userInfo.bio}
                                        onChange={handleInputChange}
                                      ></textarea>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* handle password */}
                            <div className="row">
                              <div className="col-12 col-sm-6 mb-3">
                                <div className="mb-2">
                                  <b>Change Password</b>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label>Current Password</label>
                                      <input
                                        className="form-control"
                                        type="password"
                                        placeholder="••••••"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label>New Password</label>
                                      <input
                                        className="form-control"
                                        type="password"
                                        placeholder="••••••"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label>
                                        Confirm{" "}
                                        <span className="d-none d-xl-inline">
                                          Password
                                        </span>
                                      </label>
                                      <input
                                        className="form-control"
                                        type="password"
                                        placeholder="••••••"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 col-sm-5 offset-sm-1 mb-3">
                                <div className="mb-2">
                                  <b>Keeping in Touch</b>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <label>Email Notifications</label>
                                    <div className="custom-controls-stacked px-2">
                                      <div className="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          className="custom-control-input"
                                          id="notifications-blog"
                                          checked=""
                                        />
                                        <label
                                          className="custom-control-label"
                                          for="notifications-blog"
                                        >
                                          Blog posts
                                        </label>
                                      </div>
                                      <div className="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          className="custom-control-input"
                                          id="notifications-news"
                                          checked=""
                                        />
                                        <label
                                          className="custom-control-label"
                                          for="notifications-news"
                                        >
                                          Newsletter
                                        </label>
                                      </div>
                                      <div className="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          className="custom-control-input"
                                          id="notifications-offers"
                                          checked=""
                                        />
                                        <label
                                          className="custom-control-label"
                                          for="notifications-offers"
                                        >
                                          Personal Offers
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col d-flex justify-content-end">
                                <button
                                  className="btn btn-primary"
                                  type="submit"
                                >
                                  Save Changes
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutResolver>
  );
}
