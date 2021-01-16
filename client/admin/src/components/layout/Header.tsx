import React from "react";

const Header: React.FC = () => {
  return (
    <div className="d-flex flex-column flex-root">
      <div className="d-flex flex-row flex-column-fluid page">
        <div
          className="d-flex flex-column flex-row-fluid wrapper"
          id="kt_wrapper"
        >
          <div id="kt_header" className="header flex-column  header-fixed ">
            <div className="header-top">
              <div className=" container ">
                <div className="align-items-center mr-3">
                  <a href="index.html" className="mr-10">
                    <h2>e-commerce | Admin Panel</h2>
                  </a>
                </div>

                <div className="topbar">
                  <div className="topbar-item">
                    <div
                      className="btn btn-icon w-auto d-flex align-items-center btn-lg px-2"
                      id="kt_quick_user_toggle"
                    >
                      <div className="d-flex text-right pr-3">
                        <span className="text-white opacity-50 font-weight-bold font-size-sm d-none d-md-inline mr-1">
                          Hi,
                        </span>
                        <span className="text-white font-weight-bolder font-size-sm d-none d-md-inline">
                          Sean
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="header-bottom">
              <div className=" container ">
                <div
                  className="header-menu-wrapper header-menu-wrapper-left"
                  id="kt_header_menu_wrapper"
                >
                  <div
                    id="kt_header_menu"
                    className="header-menu header-menu-left header-menu-mobile  header-menu-layout-default "
                  >
                    <ul className="menu-nav ">
                      <li className="menu-item  menu-item-active ">
                        <a href="index.html" className="menu-link ">
                          <span className="menu-text">Home</span>
                        </a>
                      </li>
                      <li
                        className="menu-item  menu-item-submenu menu-item-rel"
                        data-menu-toggle="click"
                      >
                        <a href="!#" className="menu-link menu-toggle">
                          <span className="menu-text">Features</span>
                          <span className="menu-desc" />
                          <i className="menu-arrow" />
                        </a>
                        <div className="menu-submenu menu-submenu-classic menu-submenu-left">
                          <ul className="menu-subnav">
                            <li
                              className="menu-item  menu-item-submenu"
                              data-menu-toggle="hover"
                            >
                              <a href="!#" className="menu-link menu-toggle">
                                <span className="menu-text">Bootstrap</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="d-none d-lg-flex align-items-center">
                  <div
                    className="quick-search quick-search-inline ml-4 w-250px"
                    id="kt_quick_search_inline"
                  >
                    {/*begin::Form*/}
                    <form method="get" className="quick-search-form">
                      <div className="input-group rounded">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <span className="svg-icon svg-icon-lg">
                              {/*begin::Svg Icon | path:assets/media/svg/icons/General/Search.svg*/}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                              >
                                <g
                                  stroke="none"
                                  strokeWidth={1}
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <rect x={0} y={0} width={24} height={24} />
                                  <path
                                    d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                    opacity="0.3"
                                  />
                                  <path
                                    d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                  />
                                </g>
                              </svg>
                              {/*end::Svg Icon*/}
                            </span>{" "}
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control h-40px"
                          placeholder="Search..."
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">
                            <i className="quick-search-close ki ki-close icon-sm" />
                          </span>
                        </div>
                      </div>
                    </form>
                    {/*end::Form*/}
                    {/*begin::Search Toggle*/}
                    <div
                      id="kt_quick_search_toggle"
                      data-toggle="dropdown"
                      data-offset="0px,0px"
                    />
                    {/*end::Search Toggle*/}
                    {/*begin::Dropdown*/}
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg dropdown-menu-anim-up">
                      <div
                        className="quick-search-wrapper scroll"
                        data-scroll="true"
                        data-height={350}
                        data-mobile-height={200}
                      ></div>
                    </div>
                    {/*end::Dropdown*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
