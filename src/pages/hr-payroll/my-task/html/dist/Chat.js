import React from 'react'
import '../../../../../../src/assets/payroll/css/Emaize.style.min.scss';
import { Link } from 'react-router-dom';

function Chat() {
  return (
<>
  <div id="mytask-layout" className="theme-indigo">
    {/* sidebar */}
    <div className="sidebar px-4 py-4 py-md-5 me-0">
    <div className="d-flex flex-column h-100">
      {/* <a href="index-2.html" className="mb-0 brand-icon"> */}
        <Link to="/Indx2" className="mb-0 brand-icon">

        <span className="logo-icon">
          <img
            src="favicon.png"
            alt=""
            style={{ width: "100%", margin: "0 auto", objectFit: "cover" }}
            />
        </span>
        <span className="logo-text">Emaize</span>
            </Link>
      {/* </a> */}
      {/* Menu: main ul */}
      <ul className="menu-list flex-grow-1 mt-3">
        <li className="collapsed">
          <a
            className="m-link active"
            data-bs-toggle="collapse"
            data-bs-target="#dashboard-Components"
            href='#'
          >
            <i className="icofont-home fs-5" /> <span>Dashboard</span>{" "}
            <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
          </a>
          {/* Menu: Sub menu ul */}
          <ul className="sub-menu collapse show" id="dashboard-Components">
            <li>
              {/* <a className="ms-link active" href="index-2.html"> */}
                {" "}
                <Link to="/Indx2" className="ms-link active"> 
                <span>Hr Dashboard</span>.
                </Link>
              {/* </a> */}
            </li>
            <li>
              {/* <a className="ms-link" href="project-dashboard.html"> */}
                {" "}
                <Link to="/project_Dashboard" className="ms-link">
                <span>Project Dashboard</span>
                </Link>
              {/* </a> */}
            </li>
          </ul>
        </li>
        <li className="collapsed">
          <a
            className="m-link"
            data-bs-toggle="collapse"
            data-bs-target="#project-Components"
            href="#"
          >
            <i className="icofont-briefcase" />
            <span>Projects</span>{" "}
            <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
          </a>
          {/* Menu: Sub menu ul */}
          <ul className="sub-menu collapse" id="project-Components">
            <li>
              {/* <a className="ms-link" href="projects.html"> */}
                <Link to="/Projects" className='ms-link'>
                <span>Projects</span>
                </Link>
              {/* </a> */}
            </li>
            <li>
              {/* <a className="ms-link" href="task.html"> */}
              <Link to="/Task" className='ms-link'>
                <span>Tasks</span>
              </Link>
            </li>
            <li>
              {/* <a className="ms-link" href="timesheet.html"> */}
              <Link to="/TimeSheet" className='ms-link'>
                <span>Timesheet</span>
              </Link>
            </li>
            <li>
              {/* <a className="ms-link" href="team-leader.html"> */}
            <Link to="/Team_Leader" className='ms-link'>

                <span>Leaders</span>
            </Link>
              {/* </a> */}
            </li>
          </ul>
        </li>
        <li className="collapsed">
          <a
            className="m-link"
            data-bs-toggle="collapse"
            data-bs-target="#tikit-Components"
            href="#"
          >
            <i className="icofont-ticket" /> <span>Tickets</span>{" "}
            <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
          </a>
          {/* Menu: Sub menu ul */}
          <ul className="sub-menu collapse" id="tikit-Components">
            <li>
              {/* <a className="ms-link" href="tickets.html"> */}
                {" "}
                <Link to="/Ticket" className="ms-link">
                <span>Tickets View</span>
                </Link>
            </li>
            <li>
              {/* <a className="ms-link" href="ticket-detail.html"> */}

                {" "}
                <Link to="/Ticket_Detail" className="ms-link">
                <span>Ticket Detail</span>
              </Link>
            </li>
          </ul>
        </li>
        <li className="collapsed">
          <a
            className="m-link"
            data-bs-toggle="collapse"
            data-bs-target="#client-Components"
            href="#"
          >
            <i className="icofont-user-male" /> <span>Our Clients</span>{" "}
            <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
          </a>
          {/* Menu: Sub menu ul */}
          <ul className="sub-menu collapse" id="client-Components">
            <li>
              {/* <a className="ms-link" href="ourclients.html"> */}
              <Link to="/OurClients" className="ms-link" >
                {" "}
                <span>Clients</span>
                </Link>
              {/* </a> */}
            </li>
            <li>
              <Link className="ms-link" to="/Profile">
                {" "}
                <span>Client Profile</span>
              </Link>
            </li>
          </ul>
        </li>
        <li className="collapsed">
          <a
            className="m-link"
            data-bs-toggle="collapse"
            data-bs-target="#emp-Components"
            href="#"
          >
            <i className="icofont-users-alt-5" /> <span>Employees</span>{" "}
            <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
          </a>
          {/* Menu: Sub menu ul */}
          <ul className="sub-menu collapse" id="emp-Components">
            <li>
              {/* <a className="ms-link" href="members.html"> */}
              <Link to="/Members" className="ms-link">
                {" "}
                <span>Members</span>
              </Link>
              {/* </a> */}

            </li>
            <li>
              {/* <a className="ms-link" href="employee-profile.html"> */}
                {" "}
                <Link to="/Employee_Profile" className="ms-link">
                <span>Members Profile</span>
              </Link>
              {/* </a> */}

            </li>
            <li>
              {/* <a className="ms-link" href="holidays.html"> */}
                {" "}
                <Link to="/Holidays" className="ms-link">
                
                <span>Holidays</span>
              </Link>
            </li>
            <li>
              {/* <a className="ms-link" href="attendance-employees.html"> */}
                {" "}
                <Link to="/Attendance_Employees" className="ms-link">
                <span>Attendance Employees</span>
              </Link>
            </li>
            <li>
              <Link className="ms-link" to="Attendance">
                {" "}
                <span>Attendance</span>
              </Link>
            </li>
            <li>
              <Link className="ms-link" to="Leave_Request">
                {" "}
                <span>Leave Request</span>
              </Link>
            </li>
            <li>
              <Link className="ms-link" to="Department">
                {" "}
                <span>Department</span>
              </Link>
            </li>
            <li>
              <Link className="ms-link" to="Loan">
                {" "}
                <span>Loan</span>
              </Link>
            </li>
          </ul>
        </li>
        <li className="collapsed">
          <a
            className="m-link"
            data-bs-toggle="collapse"
            data-bs-target="#menu-Componentsone"
            href="#"
          >
            <i className="icofont-ui-calculator" /> <span>Accounts</span>{" "}
            <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
          </a>
          {/* Menu: Sub menu ul */}
          <ul className="sub-menu collapse" id="menu-Componentsone">
            <li>
              {/* <a className="ms-link" href="invoices.html"> */}
              <Link to="/Invoices" className="ms-link">
                <span>Invoices</span>{" "}
                </Link>
              {/* </a> */}
            </li>
            <li>
              {/* <a className="ms-link" href="payments.html"> */}
              <Link to="/Payments" className="ms-link">
                <span>Payments</span>{" "}
                </Link>
              {/* </a> */}
            </li>
            <li>
              {/* <a className="ms-link" href="expenses.html"> */}
              <Link to="/Expenses" className="ms-link">
                <span>Expenses</span>{" "}
              </Link>
            </li>
            <li>
              {/* <a className="ms-link" href="create-invoice.html"> */}
              <Link to="/Create_Invoice" className="ms-link">
                <span>Create Invoice</span>{" "}
              </Link>
            </li>
          </ul>
        </li>
        <li className="collapsed">
          <a
            className="m-link"
            data-bs-toggle="collapse"
            data-bs-target="#payroll-Components"
            href="#"
          >
            <i className="icofont-users-alt-5" /> <span>Payroll</span>{" "}
            <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
          </a>
          {/* Menu: Sub menu ul */}
          <ul className="sub-menu collapse" id="payroll-Components">
            <li>
              {/* <a className="ms-link" href="salaryslip.html"> */}
              <Link to="/SalarySlip" className="ms-link">
                <span>Employee Salary</span>{" "}
              </Link>
            </li>
          </ul>
        </li>
        <li className="collapsed">
          <a
            className="m-link"
            data-bs-toggle="collapse"
            data-bs-target="#app-Components"
            href="#"
          >
            <i className="icofont-contrast" /> <span>Tasks</span>{" "}
            <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
          </a>
          {/* Menu: Sub menu ul */}
          <ul className="sub-menu collapse" id="app-Components">
            <li>
              {/* <a className="ms-link" href="calendar.html"> */}
              <Link className="ms-link" to="/Calender">
                {" "}
                <span>Calander</span>
              </Link>
            </li>
            {/* <li><a class="ms-link" href="chat.html"><span>Chat App</span></a></li> */}
          </ul>
        </li>
        {/* <li class="collapsed">
                  <a class="m-link" data-bs-toggle="collapse" data-bs-target="#extra-Components" href="#">
                      <i class="icofont-code-alt"></i> <span>Other Pages</span> <span class="arrow icofont-dotted-down ms-auto text-end fs-5"></span></a> */}
        {/* Menu: Sub menu ul */}
        {/* <ul class="sub-menu collapse" id="extra-Components">
                      <li><a class="ms-link" href="charts.html"> <span>Apex Charts</span></a></li>
                      <li><a class="ms-link" href="forms.html"><span>Forms Example</span></a></li>
                      <li><a class="ms-link" href="table.html"> <span>Table Example</span></a></li>
                      <li><a class="ms-link" href="icon.html"><span>Reviews Page</span></a></li>
                      <li><a class="ms-link" href="icon.html"><span></span>Icons</span></a></li>
                  </ul>
              </li> */}
        {/* <li><a class="m-link" href="ui-elements/ui-alerts.html"><i class="icofont-paint"></i> <span>UI Components</span></a></li> */}
      </ul>
      {/* Theme: Switch Theme */}
      <ul className="list-unstyled mb-0">
        <li className="d-flex align-items-center justify-content-center">
          <div className="form-check form-switch theme-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="theme-switch"
            />
            <label className="form-check-label" htmlFor="theme-switch">
              Enable Dark Mode!
            </label>
          </div>
        </li>
        {/* <li class="d-flex align-items-center justify-content-center">
              <div class="form-check form-switch theme-rtl">
                  <input class="form-check-input" type="checkbox" id="theme-rtl">
                  <label class="form-check-label" for="theme-rtl">Enable RTL Mode!</label>
              </div>
          </li> */}
      </ul>
      {/* Menu: menu collepce btn */}
      <button
        type="button"
        className="btn btn-link sidebar-mini-btn text-light"
      >
        <span className="ms-2">
          <i className="icofont-bubble-right" />
        </span>
      </button>
    </div>
  </div>
    {/* main body area */}
    <div className="main">
      {/* Body: Body */}
      <div className="body d-flex">
        <div className="container-xxl p-0">
          <div className="row g-0">
            <div className="col-12 d-flex">
              {/* Card: */}
              <div className="card card-chat border-right border-top-0 border-bottom-0  w380">
                <div className="px-4 py-3 py-md-4">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control mb-1"
                      placeholder="Search..."
                    />
                  </div>
                  <div
                    className="nav nav-pills justify-content-between text-center"
                    role="tablist"
                  >
                    <a
                      className="flex-fill rounded border-0 nav-link active"
                      data-bs-toggle="tab"
                      href="#chat-recent"
                      role="tab"
                      aria-selected="true"
                    >
                      Chat
                    </a>
                    <a
                      className="flex-fill rounded border-0 nav-link"
                      data-bs-toggle="tab"
                      href="#chat-groups"
                      role="tab"
                      aria-selected="false"
                    >
                      Members Groups
                    </a>
                    <a
                      className="flex-fill rounded border-0 nav-link"
                      data-bs-toggle="tab"
                      href="#chat-contact"
                      role="tab"
                      aria-selected="false"
                    >
                      Contact
                    </a>
                  </div>
                </div>
                <div className="tab-content border-top">
                  <div
                    className="tab-pane fade show active"
                    id="chat-recent"
                    role="tabpanel"
                  >
                    <ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <img
                            className="avatar rounded-circle"
                            src="assets/images/xs/avatar6.jpg"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="d-flex justify-content-between mb-0">
                              <span>Vanessa Knox</span>{" "}
                              <small className="msg-time">10:45 AM</small>
                            </h6>
                            <span className="text-muted">
                              There are many variations of passages
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <img
                            className="avatar rounded-circle"
                            src="assets/images/xs/avatar1.jpg"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="d-flex justify-content-between mb-0">
                              <span>Abigail Bell</span>{" "}
                              <small className="msg-time">11:45 AM</small>
                            </h6>
                            <span className="text-muted">
                              changed an issue from "In Progress" to
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <div className="avatar rounded-circle no-thumbnail">
                            RH
                          </div>
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="d-flex justify-content-between mb-0">
                              <span>Diane Blake</span>{" "}
                              <small className="msg-time">12:45 AM</small>
                            </h6>
                            <span className="text-muted">
                              It is a long established fact that a reader will
                              be distracted
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <img
                            className="avatar rounded-circle"
                            src="assets/images/xs/avatar4.jpg"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="d-flex justify-content-between mb-0">
                              <span>Megan Dyer</span>{" "}
                              <small className="msg-time">12:46 AM</small>
                            </h6>
                            <span className="text-muted">
                              Contrary to popular belief
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <img
                            className="avatar rounded-circle"
                            src="assets/images/xs/avatar1.jpg"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="d-flex justify-content-between mb-0">
                              <span>Abigail Bell</span>{" "}
                              <small className="msg-time">12:47 PM</small>
                            </h6>
                            <span className="text-muted">
                              changed an issue from "In Progress" to
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <img
                            className="avatar rounded-circle"
                            src="assets/images/xs/avatar5.jpg"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="d-flex justify-content-between mb-0">
                              <span>Diane Blake</span>{" "}
                              <small className="msg-time">12:48 PM</small>
                            </h6>
                            <span className="text-muted">
                              making it over 2000 years old
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item px-md-4 py-3 py-md-4 open">
                        <a href="javascript:void(0);" className="d-flex">
                          <img
                            className="avatar rounded-circle"
                            src="assets/images/xs/avatar3.jpg"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="d-flex justify-content-between mb-0">
                              <span>Vanessa Knox</span>{" "}
                              <small className="msg-time">12:49 PM</small>
                            </h6>
                            <span className="text-muted">
                              There are many variations of passages
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <img
                            className="avatar rounded-circle"
                            src="assets/images/xs/avatar7.jpg"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="d-flex justify-content-between mb-0">
                              <span>Donna Grant</span>{" "}
                              <small className="msg-time">Thu</small>
                            </h6>
                            <span className="text-muted">
                              Add Calander Event
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <div className="avatar rounded-circle no-thumbnail">
                            RH
                          </div>
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="d-flex justify-content-between mb-0">
                              <span>Diane Blake</span>{" "}
                              <small className="msg-time">Wed</small>
                            </h6>
                            <span className="text-muted">
                              It is a long established fact that a reader will
                              be distracted
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <img
                            className="avatar rounded-circle"
                            src="assets/images/xs/avatar3.jpg"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="d-flex justify-content-between mb-0">
                              <span>Vanessa Knox</span>{" "}
                              <small className="msg-time">13/10/2020</small>
                            </h6>
                            <span className="text-muted">
                              There are many variations of passages
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <img
                            className="avatar rounded-circle"
                            src="assets/images/xs/avatar4.jpg"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="d-flex justify-content-between mb-0">
                              <span>Megan Dyer</span>{" "}
                              <small className="msg-time">13/10/2020</small>
                            </h6>
                            <span className="text-muted">
                              Contrary to popular belief
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <img
                            className="avatar rounded-circle"
                            src="assets/images/xs/avatar5.jpg"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="d-flex justify-content-between mb-0">
                              <span>Diane Blake</span>{" "}
                              <small className="msg-time">22/10/2020</small>
                            </h6>
                            <span className="text-muted">
                              making it over 2000 years old
                            </span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="chat-groups"
                    role="tabpanel"
                  >
                    <ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <div className="avatar rounded-circle no-thumbnail">
                            WD
                          </div>
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="d-flex justify-content-between mb-0">
                              <span>Website Design</span>{" "}
                              <small className="msg-time">15/04/2021</small>
                            </h6>
                            <span className="text-muted">
                              The point of using Lorem Ipsum
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <div className="avatar rounded-circle no-thumbnail">
                            AD
                          </div>
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="d-flex justify-content-between mb-0">
                              <span>App Development</span>{" "}
                              <small className="msg-time">13/04/2021</small>
                            </h6>
                            <span className="text-muted">
                              If you are going to use a passage
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <div className="avatar rounded-circle no-thumbnail">
                            QC
                          </div>
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="d-flex justify-content-between mb-0">
                              <span>Quality Assurance</span>{" "}
                              <small className="msg-time">12/04/2021</small>
                            </h6>
                            <span className="text-muted">
                              The point of using Lorem Ipsum
                            </span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="chat-contact"
                    role="tabpanel"
                  >
                    <ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <img
                            className="avatar rounded-circle"
                            src="assets/images/xs/avatar10.jpg"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <div className="d-flex justify-content-between mb-0">
                              <h6 className="mb-0">Hannah Gill</h6>
                              <div className="text-muted">
                                <i className="fa fa-heart-o pl-2 text-danger" />
                                <i className="fa fa-trash pl-2 text-danger" />
                              </div>
                            </div>
                            <span className="text-muted">
                              hannahgill@Emaize.com
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <img
                            className="avatar rounded-circle"
                            src="assets/images/xs/avatar2.jpg"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <div className="d-flex justify-content-between mb-0">
                              <h6 className="mb-0">Abigail Bell</h6>
                              <div className="text-muted">
                                <i className="fa fa-heart pl-2 text-danger" />
                                <i className="fa fa-trash pl-2 text-danger" />
                              </div>
                            </div>
                            <span className="text-muted">
                              abigailbell@Emaize.com
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <img
                            className="avatar rounded-circle"
                            src="assets/images/xs/avatar1.jpg"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <div className="d-flex justify-content-between mb-0">
                              <h6 className="mb-0">Megan Dyer</h6>
                              <div className="text-muted">
                                <i className="fa fa-heart-o pl-2 text-danger" />
                                <i className="fa fa-trash pl-2 text-danger" />
                              </div>
                            </div>
                            <span className="text-muted">
                              barbara.kelly@Emaize.com
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <img
                            className="avatar rounded-circle"
                            src="assets/images/xs/avatar7.jpg"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <div className="d-flex justify-content-between mb-0">
                              <h6 className="mb-0">Ruth Cornish</h6>
                              <div className="text-muted">
                                <i className="fa fa-heart pl-2 text-danger" />
                                <i className="fa fa-trash pl-2 text-danger" />
                              </div>
                            </div>
                            <span className="text-muted">
                              ruthcornish@Emaize.com
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <img
                            className="avatar rounded-circle"
                            src="assets/images/xs/avatar4.jpg"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <div className="d-flex justify-content-between mb-0">
                              <h6 className="mb-0">Yvonne Duncan</h6>
                              <div className="text-muted">
                                <i className="fa fa-heart-o pl-2 text-danger" />
                                <i className="fa fa-trash pl-2 text-danger" />
                              </div>
                            </div>
                            <span className="text-muted">
                              yvonneduncan@Emaize.com
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <img
                            className="avatar rounded-circle"
                            src="assets/images/xs/avatar6.jpg"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <div className="d-flex justify-content-between mb-0">
                              <h6 className="mb-0">Nicola Carl</h6>
                              <div className="text-muted">
                                <i className="fa fa-heart-o pl-2 text-danger" />
                                <i className="fa fa-trash pl-2 text-danger" />
                              </div>
                            </div>
                            <span className="text-muted">
                              nicolacarl@Emaize.com
                            </span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Card: */}
              <div className="card card-chat-body border-0  w-100 px-4 px-md-5 py-3 py-md-4">
                {/* Chat: Header */}
                <div className="chat-header d-flex justify-content-between align-items-center border-bottom pb-3">
                  <div className="d-flex align-items-center">
                    <Link to="/Indx2" title="Home">
                      <i className="icofont-arrow-left fs-4" />
                    </Link>
                    <a href="javascript:void(0);" title="">
                      <img
                        className="avatar rounded"
                        src="assets/images/xs/avatar2.jpg"
                        alt="avatar"
                      />
                    </a>
                    <div className="ms-3">
                      <h6 className="mb-0">Grace Smith</h6>
                      <small className="text-muted">
                        Last seen: 3 hours ago
                      </small>
                    </div>
                  </div>
                  <div className="d-flex">
                    <a
                      className="nav-link py-2 px-3 text-muted d-none d-lg-block"
                      href="javascript:void(0);"
                    >
                      <i className="fa fa-camera" />
                    </a>
                    <a
                      className="nav-link py-2 px-3 text-muted d-none d-lg-block"
                      href="javascript:void(0);"
                    >
                      <i className="fa fa-video-camera" />
                    </a>
                    <a
                      className="nav-link py-2 px-3 text-muted d-none d-lg-block"
                      href="javascript:void(0);"
                    >
                      <i className="fa fa-gear" />
                    </a>
                    <a
                      className="nav-link py-2 px-3 text-muted d-none d-lg-block"
                      href="javascript:void(0);"
                    >
                      <i className="fa fa-info-circle" />
                    </a>
                    <a
                      className="nav-link py-2 px-3 d-block d-lg-none chatlist-toggle"
                      href="#"
                    >
                      <i className="fa fa-bars" />
                    </a>
                    {/* Mobile menu */}
                    <div className="nav-item list-inline-item d-block d-xl-none">
                      <div className="dropdown">
                        <a
                          className="nav-link text-muted px-0"
                          href="#"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fa fa-ellipsis-v" />
                        </a>
                        <ul className="dropdown-menu shadow border-0">
                          <li>
                            <Link className="dropdown-item" to="Indx2">
                              <i className="fa fa-camera" /> Share Images
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="Indx2">
                              <i className="fa fa-video-camera" /> Video Call
                            </Link>
                          </li>
                          <li>
                          <Link className="dropdown-item" to="Indx2">
                              <i className="fa fa-gear" /> Settings
                            </Link>
                          </li>
                          <li>
                          <Link className="dropdown-item" to="Indx2">
                              <i className="fa fa-info-circle" /> Info
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Chat: body */}
                <ul className="chat-history list-unstyled mb-0 py-lg-5 py-md-4 py-3 flex-grow-1">
                  {/* Chat: left */}
                  <li className="mb-3 d-flex flex-row align-items-end">
                    <div className="max-width-70">
                      <div className="user-info mb-1">
                        <img
                          className="avatar sm rounded-circle me-1"
                          src="assets/images/xs/avatar2.jpg"
                          alt="avatar"
                        />
                        <span className="text-muted small">
                          10:10 AM, Today
                        </span>
                      </div>
                      <div className="card border-0 p-3">
                        <div className="message"> Hi Aiden, how are you?</div>
                      </div>
                    </div>
                    {/* More option */}
                    <div className="btn-group">
                      <a
                        href="#"
                        className="nav-link py-2 px-3 text-muted"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa fa-ellipsis-v" />
                      </a>
                      <ul className="dropdown-menu border-0 shadow">
                        <li>
                          <a className="dropdown-item" href="#">
                            Edit
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Share
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* Chat: right */}
                  <li className="mb-3 d-flex flex-row-reverse align-items-end">
                    <div className="max-width-70 text-right">
                      <div className="user-info mb-1">
                        <span className="text-muted small">
                          10:12 AM, Today
                        </span>
                      </div>
                      <div className="card border-0 p-3 bg-primary text-light">
                        <div className="message">
                          How many task are working?
                        </div>
                      </div>
                    </div>
                    {/* More option */}
                    <div className="btn-group">
                      <a
                        href="#"
                        className="nav-link py-2 px-3 text-muted"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa fa-ellipsis-v" />
                      </a>
                      <ul className="dropdown-menu border-0 shadow">
                        <li>
                          <a className="dropdown-item" href="#">
                            Edit
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Share
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* Chat: left */}
                  <li className="mb-3 d-flex flex-row align-items-end">
                    <div className="max-width-70">
                      <div className="user-info mb-1">
                        <img
                          className="avatar sm rounded-circle me-1"
                          src="assets/images/xs/avatar2.jpg"
                          alt="avatar"
                        />
                        <span className="text-muted small">
                          10:10 AM, Today
                        </span>
                      </div>
                      <div className="card border-0 p-3">
                        <div className="message">
                          {" "}
                          I am working on 10 tasks.5 tasks Completed and 5
                          inprogress
                        </div>
                      </div>
                    </div>
                    {/* More option */}
                    <div className="btn-group">
                      <a
                        href="#"
                        className="nav-link py-2 px-3 text-muted"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa fa-ellipsis-v" />
                      </a>
                      <ul className="dropdown-menu border-0 shadow">
                        <li>
                          <a className="dropdown-item" href="#">
                            Edit
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Share
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* Chat: left */}
                  <li className="mb-3 d-flex flex-row align-items-end">
                    <div className="max-width-70">
                      <div className="user-info mb-1">
                        <img
                          className="avatar sm rounded-circle me-1"
                          src="assets/images/xs/avatar2.jpg"
                          alt="avatar"
                        />
                        <span className="text-muted small">
                          10:10 AM, Today
                        </span>
                      </div>
                      <div className="card border-0 p-3">
                        <div className="message">
                          {" "}
                          Why Map job is launched when I run SELECT * FROM
                          tablename;
                        </div>
                      </div>
                    </div>
                    {/* More option */}
                    <div className="btn-group">
                      <a
                        href="#"
                        className="nav-link py-2 px-3 text-muted"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa fa-ellipsis-v" />
                      </a>
                      <ul className="dropdown-menu border-0 shadow">
                        <li>
                          <a className="dropdown-item" href="#">
                            Edit
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Share
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* Chat: right */}
                  <li className="mb-3 d-flex flex-row-reverse align-items-end">
                    <div className="max-width-70 text-right">
                      <div className="user-info mb-1">
                        <span className="text-muted small">
                          10:12 AM, Today
                        </span>
                      </div>
                      <div className="card border-0 p-3 bg-primary text-light">
                        <div className="message">
                          This behaviour is directed by <br /> some of the hive
                          performance tuning settings of the hive.fetch.*
                          family.
                          <br />
                          They decide on whether a shortcut to just go at the
                          (table)file in HDFS without any MR/Tez is wanted
                          and/or feasible.
                        </div>
                      </div>
                    </div>
                    {/* More option */}
                    <div className="btn-group">
                      <a
                        href="#"
                        className="nav-link py-2 px-3 text-muted"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa fa-ellipsis-v" />
                      </a>
                      <ul className="dropdown-menu border-0 shadow">
                        <li>
                          <a className="dropdown-item" href="#">
                            Edit
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Share
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* Chat: left */}
                  <li className="mb-3 d-flex flex-row align-items-end">
                    <div className="max-width-70">
                      <div className="user-info mb-1">
                        <img
                          className="avatar sm rounded-circle me-1"
                          src="assets/images/xs/avatar2.jpg"
                          alt="avatar"
                        />
                        <span className="text-muted small">
                          10:10 AM, Today
                        </span>
                      </div>
                      <div className="card border-0 p-3">
                        <div className="message">
                          <p>Please find attached images</p>
                          <img
                            className="w120 img-thumbnail"
                            src="assets/images/gallery/1.jpg"
                            alt=""
                          />
                          <img
                            className="w120 img-thumbnail"
                            src="assets/images/gallery/2.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    {/* More option */}
                    <div className="btn-group">
                      <a
                        href="#"
                        className="nav-link py-2 px-3 text-muted"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa fa-ellipsis-v" />
                      </a>
                      <ul className="dropdown-menu border-0 shadow">
                        <li>
                          <a className="dropdown-item" href="#">
                            Edit
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Share
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* Chat: right */}
                  <li className="mb-3 d-flex flex-row-reverse align-items-end">
                    <div className="max-width-70 text-right">
                      <div className="user-info mb-1">
                        <span className="text-muted small">
                          10:12 AM, Today
                        </span>
                      </div>
                      <div className="card border-0 p-3 bg-primary text-light">
                        <div className="message">
                          Okay, will check and let you know.
                        </div>
                      </div>
                    </div>
                    {/* More option */}
                    <div className="btn-group">
                      <a
                        href="#"
                        className="nav-link py-2 px-3 text-muted"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa fa-ellipsis-v" />
                      </a>
                      <ul className="dropdown-menu border-0 shadow">
                        <li>
                          <a className="dropdown-item" href="#">
                            Edit
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Share
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
                {/* Chat: Footer */}
                <div className="chat-message">
                  <textarea
                    className="form-control"
                    placeholder="Enter text here..."
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
          </div>{" "}
          {/* row end */}
        </div>
      </div>
    </div>
  </div>
  {/* Jquery Core Js */}
  {/* Jquery Page Js */}
</>

  )
}

export default Chat