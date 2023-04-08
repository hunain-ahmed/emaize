
import React from 'react'

function Employeez() {
  return (
    <>
    {/* Main Wrapper */}
    <div className="main-wrapper">
      {/* Header */}
      <div className="header">
        {/* Logo */}
        <div className="header-left">
          <a href="index.html" className="logo">
            <img src="assets/img/logo.png" width={40} height={40} alt="" />
          </a>
        </div>
        {/* /Logo */}
        <a id="toggle_btn" href="javascript:void(0);">
          <span className="bar-icon">
            <span />
            <span />
            <span />
          </span>
        </a>
        {/* Header Title */}
        <div className="page-title-box">
          <h3>Emaize Web Admin</h3>
        </div>
        {/* /Header Title */}
        <a id="mobile_btn" className="mobile_btn" href="#sidebar">
          <i className="fa fa-bars" />
        </a>
        {/* Header Menu */}
        <ul className="nav user-menu">
          {/* Search */}
          <li className="nav-item">
            <div className="top-nav-search">
              <a href="javascript:void(0);" className="responsive-search">
                <i className="fa fa-search" />
              </a>
              <form action="search.html">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search here"
                />
                <button className="btn" type="submit">
                  <i className="fa fa-search" />
                </button>
              </form>
            </div>
          </li>
          {/* /Search */}
          {/* Flag */}
          <li className="nav-item dropdown has-arrow flag-nav">
            <a
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
            >
              <img src="assets/img/flags/us.png" alt="" height={20} />{" "}
              <span>English</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a href="javascript:void(0);" className="dropdown-item">
                <img src="assets/img/flags/us.png" alt="" height={16} /> English
              </a>
              <a href="javascript:void(0);" className="dropdown-item">
                <img src="assets/img/flags/fr.png" alt="" height={16} /> French
              </a>
              <a href="javascript:void(0);" className="dropdown-item">
                <img src="assets/img/flags/es.png" alt="" height={16} /> Spanish
              </a>
              <a href="javascript:void(0);" className="dropdown-item">
                <img src="assets/img/flags/de.png" alt="" height={16} /> German
              </a>
            </div>
          </li>
          {/* /Flag */}
          {/* Notifications */}
          <li className="nav-item dropdown">
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-toggle="dropdown"
            >
              <i className="fa fa-bell-o" />{" "}
              <span className="badge badge-pill">3</span>
            </a>
            <div className="dropdown-menu notifications">
              <div className="topnav-dropdown-header">
                <span className="notification-title">Notifications</span>
                <a href="javascript:void(0)" className="clear-noti">
                  {" "}
                  Clear All{" "}
                </a>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  <li className="notification-message">
                    <a href="activities.html">
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-02.jpg" />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">John Doe</span> added new
                            task{" "}
                            <span className="noti-title">
                              Patient appointment booking
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">4 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="activities.html">
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-03.jpg" />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Tarah Shropshire</span>{" "}
                            changed the task name{" "}
                            <span className="noti-title">
                              Appointment booking with payment gateway
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">6 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="activities.html">
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-06.jpg" />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Misty Tison</span> added{" "}
                            <span className="noti-title">Domenic Houston</span>{" "}
                            and <span className="noti-title">Claire Mapes</span>{" "}
                            to project{" "}
                            <span className="noti-title">
                              Doctor available module
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">8 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="activities.html">
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-17.jpg" />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Rolland Webber</span>{" "}
                            completed task{" "}
                            <span className="noti-title">
                              Patient and Doctor video conferencing
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">12 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="activities.html">
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-13.jpg" />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Bernardo Galaviz</span>{" "}
                            added new task{" "}
                            <span className="noti-title">
                              Private chat module
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">2 days ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <a href="activities.html">View all Notifications</a>
              </div>
            </div>
          </li>
          {/* /Notifications */}
          {/* Message Notifications */}
          <li className="nav-item dropdown">
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-toggle="dropdown"
            >
              <i className="fa fa-comment-o" />{" "}
              <span className="badge badge-pill">8</span>
            </a>
            <div className="dropdown-menu notifications">
              <div className="topnav-dropdown-header">
                <span className="notification-title">Messages</span>
                <a href="javascript:void(0)" className="clear-noti">
                  {" "}
                  Clear All{" "}
                </a>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  <li className="notification-message">
                    <a href="chat.html">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img alt="" src="assets/img/profiles/avatar-09.jpg" />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Richard Miles </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="chat.html">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img alt="" src="assets/img/profiles/avatar-02.jpg" />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">John Doe</span>
                          <span className="message-time">6 Mar</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="chat.html">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img alt="" src="assets/img/profiles/avatar-03.jpg" />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            {" "}
                            Tarah Shropshire{" "}
                          </span>
                          <span className="message-time">5 Mar</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="chat.html">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img alt="" src="assets/img/profiles/avatar-05.jpg" />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Mike Litorus</span>
                          <span className="message-time">3 Mar</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="chat.html">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img alt="" src="assets/img/profiles/avatar-08.jpg" />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            {" "}
                            Catherine Manseau{" "}
                          </span>
                          <span className="message-time">27 Feb</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <a href="chat.html">View all Messages</a>
              </div>
            </div>
          </li>
          {/* /Message Notifications */}
          <li className="nav-item dropdown has-arrow main-drop">
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-toggle="dropdown"
            >
              <span className="user-img">
                <img src="assets/img/profiles/avatar-21.jpg" alt="" />
                <span className="status online" />
              </span>
              <span>Admin</span>
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="profile.html">
                My Profile
              </a>
              <a className="dropdown-item" href="settings.html">
                Settings
              </a>
              <a className="dropdown-item" href="login.html">
                Logout
              </a>
            </div>
          </li>
        </ul>
        {/* /Header Menu */}
        {/* Mobile Menu */}
        <div className="dropdown mobile-user-menu">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa fa-ellipsis-v" />
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="profile.html">
              My Profile
            </a>
            <a className="dropdown-item" href="settings.html">
              Settings
            </a>
            <a className="dropdown-item" href="login.html">
              Logout
            </a>
          </div>
        </div>
        {/* /Mobile Menu */}
      </div>
      {/* /Header */}
      {/* Sidebar */}
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title">
                <span>Main</span>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-dashboard" /> <span> Dashboard</span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="index.html">Admin Dashboard</a>
                  </li>
                  <li>
                    <a href="employee-dashboard.html">Employee Dashboard</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-cube" /> <span> Apps</span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="chat.html">Chat</a>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <span> Calls</span> <span className="menu-arrow" />
                    </a>
                    <ul style={{ display: "none" }}>
                      <li>
                        <a href="voice-call.html">Voice Call</a>
                      </li>
                      <li>
                        <a href="video-call.html">Video Call</a>
                      </li>
                      <li>
                        <a href="outgoing-call.html">Outgoing Call</a>
                      </li>
                      <li>
                        <a href="incoming-call.html">Incoming Call</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="events.html">Calendar</a>
                  </li>
                  <li>
                    <a href="contacts.html">Contacts</a>
                  </li>
                  <li>
                    <a href="inbox.html">Email</a>
                  </li>
                  <li>
                    <a href="file-manager.html">File Manager</a>
                  </li>
                </ul>
              </li>
              <li className="menu-title">
                <span>Employees</span>
              </li>
              <li className="submenu">
                <a href="#" className="noti-dot">
                  <i className="la la-user" /> <span> Employees</span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a className="active" href="employees.html">
                      All Employees
                    </a>
                  </li>
                  <li>
                    <a href="holidays.html">Holidays</a>
                  </li>
                  <li>
                    <a href="leaves.html">
                      Leaves (Admin){" "}
                      <span className="badge badge-pill bg-primary float-right">
                        1
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="leaves-employee.html">Leaves (Employee)</a>
                  </li>
                  <li>
                    <a href="leave-settings.html">Leave Settings</a>
                  </li>
                  <li>
                    <a href="attendance.html">Attendance (Admin)</a>
                  </li>
                  <li>
                    <a href="attendance-employee.html">Attendance (Employee)</a>
                  </li>
                  <li>
                    <a href="departments.html">Departments</a>
                  </li>
                  <li>
                    <a href="designations.html">Designations</a>
                  </li>
                  <li>
                    <a href="timesheet.html">Timesheet</a>
                  </li>
                  <li>
                    <a href="overtime.html">Overtime</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="clients.html">
                  <i className="la la-users" /> <span>Clients</span>
                </a>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-rocket" /> <span> Projects</span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="projects.html">Projects</a>
                  </li>
                  <li>
                    <a href="tasks.html">Tasks</a>
                  </li>
                  <li>
                    <a href="task-board.html">Task Board</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="leads.html">
                  <i className="la la-user-secret" /> <span>Leads</span>
                </a>
              </li>
              <li>
                <a href="tickets.html">
                  <i className="la la-ticket" /> <span>Tickets</span>
                </a>
              </li>
              <li className="menu-title">
                <span>HR</span>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-files-o" /> <span> Accounts </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="estimates.html">Estimates</a>
                  </li>
                  <li>
                    <a href="invoices.html">Invoices</a>
                  </li>
                  <li>
                    <a href="payments.html">Payments</a>
                  </li>
                  <li>
                    <a href="expenses.html">Expenses</a>
                  </li>
                  <li>
                    <a href="provident-fund.html">Provident Fund</a>
                  </li>
                  <li>
                    <a href="taxes.html">Taxes</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-money" /> <span> Payroll </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="salary.html"> Employee Salary </a>
                  </li>
                  <li>
                    <a href="salary-view.html"> Payslip </a>
                  </li>
                  <li>
                    <a href="payroll-items.html"> Payroll Items </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="policies.html">
                  <i className="la la-file-pdf-o" /> <span>Policies</span>
                </a>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-pie-chart" /> <span> Reports </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="expense-reports.html"> Expense Report </a>
                  </li>
                  <li>
                    <a href="invoice-reports.html"> Invoice Report </a>
                  </li>
                </ul>
              </li>
              <li className="menu-title">
                <span>Performance</span>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-graduation-cap" />{" "}
                  <span> Performance </span> <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="performance-indicator.html">
                      {" "}
                      Performance Indicator{" "}
                    </a>
                  </li>
                  <li>
                    <a href="performance.html"> Performance Review </a>
                  </li>
                  <li>
                    <a href="performance-appraisal.html">
                      {" "}
                      Performance Appraisal{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-crosshairs" /> <span> Goals </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="goal-tracking.html"> Goal List </a>
                  </li>
                  <li>
                    <a href="goal-type.html"> Goal Type </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-edit" /> <span> Training </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="training.html"> Training List </a>
                  </li>
                  <li>
                    <a href="trainers.html"> Trainers</a>
                  </li>
                  <li>
                    <a href="training-type.html"> Training Type </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="promotion.html">
                  <i className="la la-bullhorn" /> <span>Promotion</span>
                </a>
              </li>
              <li>
                <a href="resignation.html">
                  <i className="la la-external-link-square" />{" "}
                  <span>Resignation</span>
                </a>
              </li>
              <li>
                <a href="termination.html">
                  <i className="la la-times-circle" /> <span>Termination</span>
                </a>
              </li>
              <li className="menu-title">
                <span>Administration</span>
              </li>
              <li>
                <a href="assets.html">
                  <i className="la la-object-ungroup" /> <span>Assets</span>
                </a>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-briefcase" /> <span> Jobs </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="jobs.html"> Manage Jobs </a>
                  </li>
                  <li>
                    <a href="job-applicants.html"> Applied Candidates </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="knowledgebase.html">
                  <i className="la la-question" /> <span>Knowledgebase</span>
                </a>
              </li>
              <li>
                <a href="activities.html">
                  <i className="la la-bell" /> <span>Activities</span>
                </a>
              </li>
              <li>
                <a href="users.html">
                  <i className="la la-user-plus" /> <span>Users</span>
                </a>
              </li>
              <li>
                <a href="settings.html">
                  <i className="la la-cog" /> <span>Settings</span>
                </a>
              </li>
              <li className="menu-title">
                <span>Pages</span>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-user" /> <span> Profile </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="profile.html"> Employee Profile </a>
                  </li>
                  <li>
                    <a href="client-profile.html"> Client Profile </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-key" /> <span> Authentication </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="login.html"> Login </a>
                  </li>
                  <li>
                    <a href="register.html"> Register </a>
                  </li>
                  <li>
                    <a href="forgot-password.html"> Forgot Password </a>
                  </li>
                  <li>
                    <a href="otp.html"> OTP </a>
                  </li>
                  <li>
                    <a href="lock-screen.html"> Lock Screen </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-exclamation-triangle" />{" "}
                  <span> Error Pages </span> <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="error-404.html">404 Error </a>
                  </li>
                  <li>
                    <a href="error-500.html">500 Error </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-hand-o-up" /> <span> Subscriptions </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="subscriptions.html"> Subscriptions (Admin) </a>
                  </li>
                  <li>
                    <a href="subscriptions-company.html">
                      {" "}
                      Subscriptions (Company){" "}
                    </a>
                  </li>
                  <li>
                    <a href="subscribed-companies.html"> Subscribed Companies</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-columns" /> <span> Pages </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="search.html"> Search </a>
                  </li>
                  <li>
                    <a href="faq.html"> FAQ </a>
                  </li>
                  <li>
                    <a href="terms.html"> Terms </a>
                  </li>
                  <li>
                    <a href="privacy-policy.html"> Privacy Policy </a>
                  </li>
                  <li>
                    <a href="blank-page.html"> Blank Page </a>
                  </li>
                </ul>
              </li>
              <li className="menu-title">
                <span>UI Interface</span>
              </li>
              <li>
                <a href="components.html">
                  <i className="la la-puzzle-piece" /> <span>Components</span>
                </a>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-object-group" /> <span> Forms </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="form-basic-inputs.html">Basic Inputs </a>
                  </li>
                  <li>
                    <a href="form-input-groups.html">Input Groups </a>
                  </li>
                  <li>
                    <a href="form-horizontal.html">Horizontal Form </a>
                  </li>
                  <li>
                    <a href="form-vertical.html"> Vertical Form </a>
                  </li>
                  <li>
                    <a href="form-mask.html"> Form Mask </a>
                  </li>
                  <li>
                    <a href="form-validation.html"> Form Validation </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-table" /> <span> Tables </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="tables-basic.html">Basic Tables </a>
                  </li>
                  <li>
                    <a href="data-tables.html">Data Table </a>
                  </li>
                </ul>
              </li>
              <li className="menu-title">
                <span>Extras</span>
              </li>
              <li>
                <a href="#">
                  <i className="la la-file-text" /> <span>Documentation</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <i className="la la-info" /> <span>Change Log</span>{" "}
                  <span className="badge badge-primary ml-auto">v3.4</span>
                </a>
              </li>
              <li className="submenu">
                <a href="javascript:void(0);">
                  <i className="la la-share-alt" /> <span>Multi Level</span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li className="submenu">
                    <a href="javascript:void(0);">
                      {" "}
                      <span>Level 1</span> <span className="menu-arrow" />
                    </a>
                    <ul style={{ display: "none" }}>
                      <li>
                        <a href="javascript:void(0);">
                          <span>Level 2</span>
                        </a>
                      </li>
                      <li className="submenu">
                        <a href="javascript:void(0);">
                          {" "}
                          <span> Level 2</span> <span className="menu-arrow" />
                        </a>
                        <ul style={{ display: "none" }}>
                          <li>
                            <a href="javascript:void(0);">Level 3</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Level 3</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          {" "}
                          <span>Level 2</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      {" "}
                      <span>Level 1</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* /Sidebar */}
      {/* Page Wrapper */}
      <div className="page-wrapper">
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Employee</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Employee</li>
                </ul>
              </div>
              <div className="col-auto float-right ml-auto">
                <a
                  href="#"
                  className="btn add-btn"
                  data-toggle="modal"
                  data-target="#add_employee"
                >
                  <i className="fa fa-plus" /> Add Employee
                </a>
                <div className="view-icons">
                  <a
                    href="employees.html"
                    className="grid-view btn btn-link active"
                  >
                    <i className="fa fa-th" />
                  </a>
                  <a
                    href="employees-list.html"
                    className="list-view btn btn-link"
                  >
                    <i className="fa fa-bars" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          {/* Search Filter */}
          <div className="row filter-row">
            <div className="col-sm-6 col-md-3">
              <div className="form-group form-focus">
                <input type="text" className="form-control floating" />
                <label className="focus-label">Employee ID</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="form-group form-focus">
                <input type="text" className="form-control floating" />
                <label className="focus-label">Employee Name</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="form-group form-focus select-focus">
                <select className="select floating">
                  <option>Select Designation</option>
                  <option>Web Developer</option>
                  <option>Web Designer</option>
                  <option>Android Developer</option>
                  <option>Ios Developer</option>
                </select>
                <label className="focus-label">Designation</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <a href="#" className="btn btn-success btn-block">
                {" "}
                Search{" "}
              </a>
            </div>
          </div>
          {/* Search Filter */}
          <div className="row staff-grid-row">
            <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
              <div className="profile-widget">
                <div className="profile-img">
                  <a href="profile.html" className="avatar">
                    <img src="assets/img/profiles/avatar-02.jpg" alt="" />
                  </a>
                </div>
                <div className="dropdown profile-action">
                  <a
                    href="#"
                    className="action-icon dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="material-icons">more_vert</i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#edit_employee"
                    >
                      <i className="fa fa-pencil m-r-5" /> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#delete_employee"
                    >
                      <i className="fa fa-trash-o m-r-5" /> Delete
                    </a>
                  </div>
                </div>
                <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                  <a href="profile.html">John Doe</a>
                </h4>
                <div className="small text-muted">Web Designer</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
              <div className="profile-widget">
                <div className="profile-img">
                  <a href="profile.html" className="avatar">
                    <img src="assets/img/profiles/avatar-09.jpg" alt="" />
                  </a>
                </div>
                <div className="dropdown profile-action">
                  <a
                    href="#"
                    className="action-icon dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="material-icons">more_vert</i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#edit_employee"
                    >
                      <i className="fa fa-pencil m-r-5" /> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#delete_employee"
                    >
                      <i className="fa fa-trash-o m-r-5" /> Delete
                    </a>
                  </div>
                </div>
                <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                  <a href="profile.html">Richard Miles</a>
                </h4>
                <div className="small text-muted">Web Developer</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
              <div className="profile-widget">
                <div className="profile-img">
                  <a href="profile.html" className="avatar">
                    <img src="assets/img/profiles/avatar-10.jpg" alt="" />
                  </a>
                </div>
                <div className="dropdown profile-action">
                  <a
                    href="#"
                    className="action-icon dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="material-icons">more_vert</i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#edit_employee"
                    >
                      <i className="fa fa-pencil m-r-5" /> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#delete_employee"
                    >
                      <i className="fa fa-trash-o m-r-5" /> Delete
                    </a>
                  </div>
                </div>
                <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                  <a href="profile.html">John Smith</a>
                </h4>
                <div className="small text-muted">Android Developer</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
              <div className="profile-widget">
                <div className="profile-img">
                  <a href="profile.html" className="avatar">
                    <img src="assets/img/profiles/avatar-05.jpg" alt="" />
                  </a>
                </div>
                <div className="dropdown profile-action">
                  <a
                    href="#"
                    className="action-icon dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="material-icons">more_vert</i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#edit_employee"
                    >
                      <i className="fa fa-pencil m-r-5" /> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#delete_employee"
                    >
                      <i className="fa fa-trash-o m-r-5" /> Delete
                    </a>
                  </div>
                </div>
                <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                  <a href="profile.html">Mike Litorus</a>
                </h4>
                <div className="small text-muted">IOS Developer</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
              <div className="profile-widget">
                <div className="profile-img">
                  <a href="profile.html" className="avatar">
                    <img src="assets/img/profiles/avatar-11.jpg" alt="" />
                  </a>
                </div>
                <div className="dropdown profile-action">
                  <a
                    href="#"
                    className="action-icon dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="material-icons">more_vert</i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#edit_employee"
                    >
                      <i className="fa fa-pencil m-r-5" /> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#delete_employee"
                    >
                      <i className="fa fa-trash-o m-r-5" /> Delete
                    </a>
                  </div>
                </div>
                <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                  <a href="profile.html">Wilmer Deluna</a>
                </h4>
                <div className="small text-muted">Team Leader</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
              <div className="profile-widget">
                <div className="profile-img">
                  <a href="profile.html" className="avatar">
                    <img src="assets/img/profiles/avatar-12.jpg" alt="" />
                  </a>
                </div>
                <div className="dropdown profile-action">
                  <a
                    href="#"
                    className="action-icon dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="material-icons">more_vert</i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#edit_employee"
                    >
                      <i className="fa fa-pencil m-r-5" /> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#delete_employee"
                    >
                      <i className="fa fa-trash-o m-r-5" /> Delete
                    </a>
                  </div>
                </div>
                <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                  <a href="profile.html">Jeffrey Warden</a>
                </h4>
                <div className="small text-muted">Web Developer</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
              <div className="profile-widget">
                <div className="profile-img">
                  <a href="profile.html" className="avatar">
                    <img src="assets/img/profiles/avatar-13.jpg" alt="" />
                  </a>
                </div>
                <div className="dropdown profile-action">
                  <a
                    href="#"
                    className="action-icon dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="material-icons">more_vert</i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#edit_employee"
                    >
                      <i className="fa fa-pencil m-r-5" /> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#delete_employee"
                    >
                      <i className="fa fa-trash-o m-r-5" /> Delete
                    </a>
                  </div>
                </div>
                <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                  <a href="profile.html">Bernardo Galaviz</a>
                </h4>
                <div className="small text-muted">Web Developer</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
              <div className="profile-widget">
                <div className="profile-img">
                  <a href="profile.html" className="avatar">
                    <img src="assets/img/profiles/avatar-01.jpg" alt="" />
                  </a>
                </div>
                <div className="dropdown profile-action">
                  <a
                    href="#"
                    className="action-icon dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="material-icons">more_vert</i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#edit_employee"
                    >
                      <i className="fa fa-pencil m-r-5" /> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#delete_employee"
                    >
                      <i className="fa fa-trash-o m-r-5" /> Delete
                    </a>
                  </div>
                </div>
                <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                  <a href="profile.html">Lesley Grauer</a>
                </h4>
                <div className="small text-muted">Team Leader</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
              <div className="profile-widget">
                <div className="profile-img">
                  <a href="profile.html" className="avatar">
                    <img src="assets/img/profiles/avatar-16.jpg" alt="" />
                  </a>
                </div>
                <div className="dropdown profile-action">
                  <a
                    href="#"
                    className="action-icon dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="material-icons">more_vert</i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#edit_employee"
                    >
                      <i className="fa fa-pencil m-r-5" /> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#delete_employee"
                    >
                      <i className="fa fa-trash-o m-r-5" /> Delete
                    </a>
                  </div>
                </div>
                <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                  <a href="profile.html">Jeffery Lalor</a>
                </h4>
                <div className="small text-muted">Team Leader</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
              <div className="profile-widget">
                <div className="profile-img">
                  <a href="profile.html" className="avatar">
                    <img src="assets/img/profiles/avatar-04.jpg" alt="" />
                  </a>
                </div>
                <div className="dropdown profile-action">
                  <a
                    href="#"
                    className="action-icon dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="material-icons">more_vert</i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#edit_employee"
                    >
                      <i className="fa fa-pencil m-r-5" /> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#delete_employee"
                    >
                      <i className="fa fa-trash-o m-r-5" /> Delete
                    </a>
                  </div>
                </div>
                <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                  <a href="profile.html">Loren Gatlin</a>
                </h4>
                <div className="small text-muted">Android Developer</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
              <div className="profile-widget">
                <div className="profile-img">
                  <a href="profile.html" className="avatar">
                    <img src="assets/img/profiles/avatar-03.jpg" alt="" />
                  </a>
                </div>
                <div className="dropdown profile-action">
                  <a
                    href="#"
                    className="action-icon dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="material-icons">more_vert</i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#edit_employee"
                    >
                      <i className="fa fa-pencil m-r-5" /> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#delete_employee"
                    >
                      <i className="fa fa-trash-o m-r-5" /> Delete
                    </a>
                  </div>
                </div>
                <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                  <a href="profile.html">Tarah Shropshire</a>
                </h4>
                <div className="small text-muted">Android Developer</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
              <div className="profile-widget">
                <div className="profile-img">
                  <a href="profile.html" className="avatar">
                    <img src="assets/img/profiles/avatar-08.jpg" alt="" />
                  </a>
                </div>
                <div className="dropdown profile-action">
                  <a
                    href="#"
                    className="action-icon dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="material-icons">more_vert</i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#edit_employee"
                    >
                      <i className="fa fa-pencil m-r-5" /> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#delete_employee"
                    >
                      <i className="fa fa-trash-o m-r-5" /> Delete
                    </a>
                  </div>
                </div>
                <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                  <a href="profile.html">Catherine Manseau</a>
                </h4>
                <div className="small text-muted">Android Developer</div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
        {/* Add Employee Modal */}
        <div id="add_employee" className="modal custom-modal fade" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Employee</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">
                          First Name <span className="text-danger">*</span>
                        </label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">Last Name</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">
                          Username <span className="text-danger">*</span>
                        </label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">
                          Email <span className="text-danger">*</span>
                        </label>
                        <input className="form-control" type="email" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">Password</label>
                        <input className="form-control" type="password" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">Confirm Password</label>
                        <input className="form-control" type="password" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">
                          Employee ID <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">
                          Joining Date <span className="text-danger">*</span>
                        </label>
                        <div className="cal-icon">
                          <input
                            className="form-control datetimepicker"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">Phone </label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">Company</label>
                        <select className="select">
                          <option value="">Global Technologies</option>
                          <option value={1}>Delta Infotech</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          Department <span className="text-danger">*</span>
                        </label>
                        <select className="select">
                          <option>Select Department</option>
                          <option>Web Development</option>
                          <option>IT Management</option>
                          <option>Marketing</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          Designation <span className="text-danger">*</span>
                        </label>
                        <select className="select">
                          <option>Select Designation</option>
                          <option>Web Designer</option>
                          <option>Web Developer</option>
                          <option>Android Developer</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive m-t-15">
                    <table className="table table-striped custom-table">
                      <thead>
                        <tr>
                          <th>Module Permission</th>
                          <th className="text-center">Read</th>
                          <th className="text-center">Write</th>
                          <th className="text-center">Create</th>
                          <th className="text-center">Delete</th>
                          <th className="text-center">Import</th>
                          <th className="text-center">Export</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Holidays</td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                        </tr>
                        <tr>
                          <td>Leaves</td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                        </tr>
                        <tr>
                          <td>Clients</td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                        </tr>
                        <tr>
                          <td>Projects</td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                        </tr>
                        <tr>
                          <td>Tasks</td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                        </tr>
                        <tr>
                          <td>Chats</td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                        </tr>
                        <tr>
                          <td>Assets</td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                        </tr>
                        <tr>
                          <td>Timing Sheets</td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="submit-section">
                    <button className="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Add Employee Modal */}
        {/* Edit Employee Modal */}
        <div id="edit_employee" className="modal custom-modal fade" role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Employee</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">
                          First Name <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          defaultValue="John"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">Last Name</label>
                        <input
                          className="form-control"
                          defaultValue="Doe"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">
                          Username <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          defaultValue="johndoe"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">
                          Email <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          defaultValue="johndoe@example.com"
                          type="email"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">Password</label>
                        <input
                          className="form-control"
                          defaultValue="johndoe"
                          type="password"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">Confirm Password</label>
                        <input
                          className="form-control"
                          defaultValue="johndoe"
                          type="password"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">
                          Employee ID <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          defaultValue="FT-0001"
                          readOnly=""
                          className="form-control floating"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">
                          Joining Date <span className="text-danger">*</span>
                        </label>
                        <div className="cal-icon">
                          <input
                            className="form-control datetimepicker"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">Phone </label>
                        <input
                          className="form-control"
                          defaultValue={9876543210}
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">Company</label>
                        <select className="select">
                          <option>Global Technologies</option>
                          <option>Delta Infotech</option>
                          <option selected="">International Software Inc</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          Department <span className="text-danger">*</span>
                        </label>
                        <select className="select">
                          <option>Select Department</option>
                          <option>Web Development</option>
                          <option>IT Management</option>
                          <option>Marketing</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          Designation <span className="text-danger">*</span>
                        </label>
                        <select className="select">
                          <option>Select Designation</option>
                          <option>Web Designer</option>
                          <option>Web Developer</option>
                          <option>Android Developer</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive m-t-15">
                    <table className="table table-striped custom-table">
                      <thead>
                        <tr>
                          <th>Module Permission</th>
                          <th className="text-center">Read</th>
                          <th className="text-center">Write</th>
                          <th className="text-center">Create</th>
                          <th className="text-center">Delete</th>
                          <th className="text-center">Import</th>
                          <th className="text-center">Export</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Holidays</td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                        </tr>
                        <tr>
                          <td>Leaves</td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                        </tr>
                        <tr>
                          <td>Clients</td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                        </tr>
                        <tr>
                          <td>Projects</td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                        </tr>
                        <tr>
                          <td>Tasks</td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                        </tr>
                        <tr>
                          <td>Chats</td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                        </tr>
                        <tr>
                          <td>Assets</td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                        </tr>
                        <tr>
                          <td>Timing Sheets</td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input defaultChecked="" type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="submit-section">
                    <button className="btn btn-primary submit-btn">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Edit Employee Modal */}
        {/* Delete Employee Modal */}
        <div
          className="modal custom-modal fade"
          id="delete_employee"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete Employee</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div className="modal-btn delete-action">
                  <div className="row">
                    <div className="col-6">
                      <a
                        href="javascript:void(0);"
                        className="btn btn-primary continue-btn"
                      >
                        Delete
                      </a>
                    </div>
                    <div className="col-6">
                      <a
                        href="javascript:void(0);"
                        data-dismiss="modal"
                        className="btn btn-primary cancel-btn"
                      >
                        Cancel
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Delete Employee Modal */}
      </div>
      {/* /Page Wrapper */}
    </div>
    {/* /Main Wrapper */}
    {/* jQuery */}
    {/* Bootstrap Core JS */}
    {/* Slimscroll JS */}
    {/* Select2 JS */}
    {/* Datetimepicker JS */}
    {/* Custom JS */}
  </>
  
  
  )
}
export default Employeez