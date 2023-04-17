import React from 'react'

export default function Edit() {
  return (
    <>
    <div className="container">
          <div className="row flex-lg-nowrap">
            <div className="col">
              <div className="row">
                <div className="col mb-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="e-profile">
                        <div className="row">
                          <div className="col-la-6 col-md-6 col-sm-auto mb-3">
                            <div className="w-100 mx-auto" style={{width: 140 +'px'}}>
                              <img src="../../image/hero3.jpg" className="img-circle rounded-2" alt="Avatar" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 d-flex flex-column flex-sm-row justify-content-between mb-3">
                            <div className="text-center text-sm-left mb-2 mb-sm-0">
                              <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">John Smith</h4>
                              <p className="mb-0">@johnny.s</p>
                              <div className="text-muted"><small>Last update 2 hours ago</small></div>
                              <div className="mt-2">
                                <button className="btn btn-primary" type="button">
                                  <i className="fa fa-fw fa-camera"></i>
                                  <form class="btn btn-primary d-flex justify-content-around align-items-center">
                              <label for="upload" class="mb-0">change photo</label>
                              <input
                                type="file"
                                class="form-control-file"
                                hidden
                                id="upload"
                              />
                            </form>
                                </button>
                              </div>
                            </div>
                          
                          </div>
                        </div>
                        <ul className="nav nav-tabs">
                          <li className="nav-item"><a href="#" className="active nav-link">informaition</a></li>
                        </ul>
                        <div className="tab-content pt-3">
                          <div className="tab-pane active">
                            <form className="form" novalidate="">
                              <div className="row">
                                <div className="col">
                                  <div className="row">
                                    <div className="col">
                                      <div className="form-group">
                                        <label>Full Name</label>
                                        <input className="form-control" type="text" name="name" placeholder="John Smith" value="John Smith"/>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="form-group">
                                        <label>Username</label>
                                        <input className="form-control" type="text" name="username" placeholder="johnny.s" value="johnny.s"/>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col">
                                      <div className="form-group">
                                        <label>Email</label>
                                        <input className="form-control" type="text" placeholder="user@example.com"/>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col mb-3">
                                      <div className="form-group">
                                        <label>About</label>
                                        <textarea className="form-control" rows="5" placeholder="My Bio"></textarea>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-12 col-sm-6 mb-3">
                                  <div className="mb-2"><b>Change Password</b></div>
                                  <div className="row">
                                    <div className="col">
                                      <div className="form-group">
                                        <label>Current Password</label>
                                        <input className="form-control" type="password" placeholder="••••••"/>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col">
                                      <div className="form-group">
                                        <label>New Password</label>
                                        <input className="form-control" type="password" placeholder="••••••"/>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col">
                                      <div className="form-group">
                                        <label>Confirm <span className="d-none d-xl-inline">Password</span></label>
                                        <input className="form-control" type="password" placeholder="••••••"/></div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-5 offset-sm-1 mb-3">
                                  <div className="mb-2"><b>Keeping in Touch</b></div>
                                  <div className="row">
                                    <div className="col">
                                      <label>Email Notifications</label>
                                      <div className="custom-controls-stacked px-2">
                                        <div className="custom-control custom-checkbox">
                                          <input type="checkbox" className="custom-control-input" id="notifications-blog" checked=""/>
                                          <label className="custom-control-label" for="notifications-blog">Blog posts</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                          <input type="checkbox" className="custom-control-input" id="notifications-news" checked=""/>
                                          <label className="custom-control-label" for="notifications-news">Newsletter</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                          <input type="checkbox" className="custom-control-input" id="notifications-offers" checked=""/>
                                          <label className="custom-control-label" for="notifications-offers">Personal Offers</label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col d-flex justify-content-end">
                                  <button className="btn btn-primary" type="submit">Save Changes</button>
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
    </>
  )
}
