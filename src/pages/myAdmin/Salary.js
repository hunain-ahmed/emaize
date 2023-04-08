import React from 'react'

function Salary() {
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
                  <a href="employees.html">All Employees</a>
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
                  <a className="active" href="salary.html">
                    {" "}
                    Employee Salary{" "}
                  </a>
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
              <h3 className="page-title">Employee Salary</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Salary</li>
              </ul>
            </div>
            <div className="col-auto float-right ml-auto">
              <a
                href="#"
                className="btn add-btn"
                data-toggle="modal"
                data-target="#add_salary"
              >
                <i className="fa fa-plus" /> Add Salary
              </a>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        {/* Search Filter */}
        <div className="row filter-row">
          <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
            <div className="form-group form-focus">
              <input type="text" className="form-control floating" />
              <label className="focus-label">Employee Name</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
            <div className="form-group form-focus select-focus">
              <select className="select floating">
                <option value=""> -- Select -- </option>
                <option value="">Employee</option>
                <option value={1}>Manager</option>
              </select>
              <label className="focus-label">Role</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
            <div className="form-group form-focus select-focus">
              <select className="select floating">
                <option> -- Select -- </option>
                <option> Pending </option>
                <option> Approved </option>
                <option> Rejected </option>
              </select>
              <label className="focus-label">Leave Status</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
            <div className="form-group form-focus">
              <div className="cal-icon">
                <input
                  className="form-control floating datetimepicker"
                  type="text"
                />
              </div>
              <label className="focus-label">From</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
            <div className="form-group form-focus">
              <div className="cal-icon">
                <input
                  className="form-control floating datetimepicker"
                  type="text"
                />
              </div>
              <label className="focus-label">To</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
            <a href="#" className="btn btn-success btn-block">
              {" "}
              Search{" "}
            </a>
          </div>
        </div>
        {/* /Search Filter */}
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-striped custom-table datatable">
                <thead>
                  <tr>
                    <th>Employee</th>
                    <th>Employee ID</th>
                    <th>Email</th>
                    <th>Join Date</th>
                    <th>Role</th>
                    <th>Salary</th>
                    <th>Payslip</th>
                    <th className="text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a href="profile.html" className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-02.jpg" />
                        </a>
                        <a href="profile.html">
                          John Doe <span>Web Designer</span>
                        </a>
                      </h2>
                    </td>
                    <td>FT-0001</td>
                    <td>johndoe@example.com</td>
                    <td>1 Jan 2013</td>
                    <td>
                      <div className="dropdown">
                        <a
                          href=""
                          className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Web Designer{" "}
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Software Engineer
                          </a>
                          <a className="dropdown-item" href="#">
                            Software Tester
                          </a>
                          <a className="dropdown-item" href="#">
                            Frontend Developer
                          </a>
                          <a className="dropdown-item" href="#">
                            UI/UX Developer
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>$59698</td>
                    <td>
                      <a
                        className="btn btn-sm btn-primary"
                        href="salary-view.html"
                      >
                        Generate Slip
                      </a>
                    </td>
                    <td className="text-right">
                      <div className="dropdown dropdown-action">
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
                            data-target="#edit_salary"
                          >
                            <i className="fa fa-pencil m-r-5" /> Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-toggle="modal"
                            data-target="#delete_salary"
                          >
                            <i className="fa fa-trash-o m-r-5" /> Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a href="profile.html" className="avatar">
                          <img src="assets/img/profiles/avatar-09.jpg" alt="" />
                        </a>
                        <a href="profile.html">
                          Richard Miles <span>Web Developer</span>
                        </a>
                      </h2>
                    </td>
                    <td>FT-0002</td>
                    <td>richardmiles@example.com</td>
                    <td>1 Jan 2013</td>
                    <td>
                      <div className="dropdown">
                        <a
                          href=""
                          className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Web Developer{" "}
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Software Engineer
                          </a>
                          <a className="dropdown-item" href="#">
                            Software Tester
                          </a>
                          <a className="dropdown-item" href="#">
                            Frontend Developer
                          </a>
                          <a className="dropdown-item" href="#">
                            UI/UX Developer
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>$72000</td>
                    <td>
                      <a
                        className="btn btn-sm btn-primary"
                        href="salary-view.html"
                      >
                        Generate Slip
                      </a>
                    </td>
                    <td className="text-right">
                      <div className="dropdown dropdown-action">
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
                            data-target="#edit_salary"
                          >
                            <i className="fa fa-pencil m-r-5" /> Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-toggle="modal"
                            data-target="#delete_salary"
                          >
                            <i className="fa fa-trash-o m-r-5" /> Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a href="profile.html" className="avatar">
                          <img src="assets/img/profiles/avatar-10.jpg" alt="" />
                        </a>
                        <a href="profile.html">
                          John Smith <span>Android Developer</span>
                        </a>
                      </h2>
                    </td>
                    <td>FT-0003</td>
                    <td>johnsmith@example.com</td>
                    <td>1 Jan 2013</td>
                    <td>
                      <div className="dropdown">
                        <a
                          href=""
                          className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Android Developer{" "}
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Software Engineer
                          </a>
                          <a className="dropdown-item" href="#">
                            Software Tester
                          </a>
                          <a className="dropdown-item" href="#">
                            Frontend Developer
                          </a>
                          <a className="dropdown-item" href="#">
                            UI/UX Developer
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>$48200</td>
                    <td>
                      <a
                        className="btn btn-sm btn-primary"
                        href="salary-view.html"
                      >
                        Generate Slip
                      </a>
                    </td>
                    <td className="text-right">
                      <div className="dropdown dropdown-action">
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
                            data-target="#edit_salary"
                          >
                            <i className="fa fa-pencil m-r-5" /> Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-toggle="modal"
                            data-target="#delete_salary"
                          >
                            <i className="fa fa-trash-o m-r-5" /> Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a href="profile.html" className="avatar">
                          <img src="assets/img/profiles/avatar-05.jpg" alt="" />
                        </a>
                        <a href="profile.html">
                          Mike Litorus <span>IOS Developer</span>
                        </a>
                      </h2>
                    </td>
                    <td>FT-0004</td>
                    <td>mikelitorus@example.com</td>
                    <td>1 Jan 2013</td>
                    <td>
                      <div className="dropdown">
                        <a
                          href=""
                          className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          IOS Developer{" "}
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Software Engineer
                          </a>
                          <a className="dropdown-item" href="#">
                            Software Tester
                          </a>
                          <a className="dropdown-item" href="#">
                            Frontend Developer
                          </a>
                          <a className="dropdown-item" href="#">
                            UI/UX Developer
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>$59698</td>
                    <td>
                      <a
                        className="btn btn-sm btn-primary"
                        href="salary-view.html"
                      >
                        Generate Slip
                      </a>
                    </td>
                    <td className="text-right">
                      <div className="dropdown dropdown-action">
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
                            data-target="#edit_salary"
                          >
                            <i className="fa fa-pencil m-r-5" /> Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-toggle="modal"
                            data-target="#delete_salary"
                          >
                            <i className="fa fa-trash-o m-r-5" /> Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a href="profile.html" className="avatar">
                          <img src="assets/img/profiles/avatar-11.jpg" alt="" />
                        </a>
                        <a href="profile.html">
                          Wilmer Deluna <span>Team Leader</span>
                        </a>
                      </h2>
                    </td>
                    <td>FT-0005</td>
                    <td>wilmerdeluna@example.com</td>
                    <td>1 Jan 2013</td>
                    <td>
                      <div className="dropdown">
                        <a
                          href=""
                          className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Team Leader{" "}
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Software Engineer
                          </a>
                          <a className="dropdown-item" href="#">
                            Software Tester
                          </a>
                          <a className="dropdown-item" href="#">
                            Frontend Developer
                          </a>
                          <a className="dropdown-item" href="#">
                            UI/UX Developer
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>$43000</td>
                    <td>
                      <a
                        className="btn btn-sm btn-primary"
                        href="salary-view.html"
                      >
                        Generate Slip
                      </a>
                    </td>
                    <td className="text-right">
                      <div className="dropdown dropdown-action">
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
                            data-target="#edit_salary"
                          >
                            <i className="fa fa-pencil m-r-5" /> Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-toggle="modal"
                            data-target="#delete_salary"
                          >
                            <i className="fa fa-trash-o m-r-5" /> Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a href="profile.html" className="avatar">
                          <img src="assets/img/profiles/avatar-12.jpg" alt="" />
                        </a>
                        <a href="profile.html">
                          Jeffrey Warden <span>Web Developer</span>
                        </a>
                      </h2>
                    </td>
                    <td>FT-0006</td>
                    <td>jeffreywarden@example.com</td>
                    <td>1 Jan 2013</td>
                    <td>
                      <div className="dropdown">
                        <a
                          href=""
                          className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Web Developer
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Software Engineer
                          </a>
                          <a className="dropdown-item" href="#">
                            Software Tester
                          </a>
                          <a className="dropdown-item" href="#">
                            Frontend Developer
                          </a>
                          <a className="dropdown-item" href="#">
                            UI/UX Developer
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>$45000</td>
                    <td>
                      <a
                        className="btn btn-sm btn-primary"
                        href="salary-view.html"
                      >
                        Generate Slip
                      </a>
                    </td>
                    <td className="text-right">
                      <div className="dropdown dropdown-action">
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
                            data-target="#edit_salary"
                          >
                            <i className="fa fa-pencil m-r-5" /> Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-toggle="modal"
                            data-target="#delete_salary"
                          >
                            <i className="fa fa-trash-o m-r-5" /> Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a href="profile.html" className="avatar">
                          <img src="assets/img/profiles/avatar-13.jpg" alt="" />
                        </a>
                        <a href="profile.html">
                          Bernardo Galaviz <span>Web Developer</span>
                        </a>
                      </h2>
                    </td>
                    <td>FT-0007</td>
                    <td>bernardogalaviz@example.com</td>
                    <td>1 Jan 2014</td>
                    <td>
                      <div className="dropdown">
                        <a
                          href=""
                          className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Web Developer{" "}
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Software Engineer
                          </a>
                          <a className="dropdown-item" href="#">
                            Software Tester
                          </a>
                          <a className="dropdown-item" href="#">
                            Frontend Developer
                          </a>
                          <a className="dropdown-item" href="#">
                            UI/UX Developer
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>$38400</td>
                    <td>
                      <a
                        className="btn btn-sm btn-primary"
                        href="salary-view.html"
                      >
                        Generate Slip
                      </a>
                    </td>
                    <td className="text-right">
                      <div className="dropdown dropdown-action">
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
                            data-target="#edit_salary"
                          >
                            <i className="fa fa-pencil m-r-5" /> Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-toggle="modal"
                            data-target="#delete_salary"
                          >
                            <i className="fa fa-trash-o m-r-5" /> Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a href="profile.html" className="avatar">
                          <img src="assets/img/profiles/avatar-01.jpg" alt="" />
                        </a>
                        <a href="profile.html">
                          Lesley Grauer <span>Team Leader</span>
                        </a>
                      </h2>
                    </td>
                    <td>FT-0008</td>
                    <td>lesleygrauer@example.com</td>
                    <td>1 Jun 2015</td>
                    <td>
                      <div className="dropdown">
                        <a
                          href=""
                          className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Team Leader{" "}
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Software Engineer
                          </a>
                          <a className="dropdown-item" href="#">
                            Software Tester
                          </a>
                          <a className="dropdown-item" href="#">
                            Frontend Developer
                          </a>
                          <a className="dropdown-item" href="#">
                            UI/UX Developer
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>$75500</td>
                    <td>
                      <a
                        className="btn btn-sm btn-primary"
                        href="salary-view.html"
                      >
                        Generate Slip
                      </a>
                    </td>
                    <td className="text-right">
                      <div className="dropdown dropdown-action">
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
                            data-target="#edit_salary"
                          >
                            <i className="fa fa-pencil m-r-5" /> Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-toggle="modal"
                            data-target="#delete_salary"
                          >
                            <i className="fa fa-trash-o m-r-5" /> Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a href="profile.html" className="avatar">
                          <img src="assets/img/profiles/avatar-16.jpg" alt="" />
                        </a>
                        <a href="profile.html">
                          Jeffery Lalor <span>Team Leader</span>
                        </a>
                      </h2>
                    </td>
                    <td>FT-0009</td>
                    <td>jefferylalor@example.com</td>
                    <td>1 Jan 2013</td>
                    <td>
                      <div className="dropdown">
                        <a
                          href=""
                          className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Team Leader{" "}
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Software Engineer
                          </a>
                          <a className="dropdown-item" href="#">
                            Software Tester
                          </a>
                          <a className="dropdown-item" href="#">
                            Frontend Developer
                          </a>
                          <a className="dropdown-item" href="#">
                            UI/UX Developer
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>$73550</td>
                    <td>
                      <a
                        className="btn btn-sm btn-primary"
                        href="salary-view.html"
                      >
                        Generate Slip
                      </a>
                    </td>
                    <td className="text-right">
                      <div className="dropdown dropdown-action">
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
                            data-target="#edit_salary"
                          >
                            <i className="fa fa-pencil m-r-5" /> Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-toggle="modal"
                            data-target="#delete_salary"
                          >
                            <i className="fa fa-trash-o m-r-5" /> Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a href="profile.html" className="avatar">
                          <img src="assets/img/profiles/avatar-04.jpg" alt="" />
                        </a>
                        <a href="profile.html">
                          Loren Gatlin <span>Android Developer</span>
                        </a>
                      </h2>
                    </td>
                    <td>FT-0010</td>
                    <td>lorengatlin@example.com</td>
                    <td>1 Jan 2013</td>
                    <td>
                      <div className="dropdown">
                        <a
                          href=""
                          className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Android Developer{" "}
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Software Engineer
                          </a>
                          <a className="dropdown-item" href="#">
                            Software Tester
                          </a>
                          <a className="dropdown-item" href="#">
                            Frontend Developer
                          </a>
                          <a className="dropdown-item" href="#">
                            UI/UX Developer
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>$55000</td>
                    <td>
                      <a
                        className="btn btn-sm btn-primary"
                        href="salary-view.html"
                      >
                        Generate Slip
                      </a>
                    </td>
                    <td className="text-right">
                      <div className="dropdown dropdown-action">
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
                            data-target="#edit_salary"
                          >
                            <i className="fa fa-pencil m-r-5" /> Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-toggle="modal"
                            data-target="#delete_salary"
                          >
                            <i className="fa fa-trash-o m-r-5" /> Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a href="profile.html" className="avatar">
                          <img src="assets/img/profiles/avatar-03.jpg" alt="" />
                        </a>
                        <a href="profile.html">
                          Tarah Shropshire <span>Android Developer</span>
                        </a>
                      </h2>
                    </td>
                    <td>FT-0011</td>
                    <td>tarahshropshire@example.com</td>
                    <td>1 Jan 2013</td>
                    <td>
                      <div className="dropdown">
                        <a
                          href=""
                          className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Android Developer{" "}
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Software Engineer
                          </a>
                          <a className="dropdown-item" href="#">
                            Software Tester
                          </a>
                          <a className="dropdown-item" href="#">
                            Frontend Developer
                          </a>
                          <a className="dropdown-item" href="#">
                            UI/UX Developer
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>$92400</td>
                    <td>
                      <a
                        className="btn btn-sm btn-primary"
                        href="salary-view.html"
                      >
                        Generate Slip
                      </a>
                    </td>
                    <td className="text-right">
                      <div className="dropdown dropdown-action">
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
                            data-target="#edit_salary"
                          >
                            <i className="fa fa-pencil m-r-5" /> Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-toggle="modal"
                            data-target="#delete_salary"
                          >
                            <i className="fa fa-trash-o m-r-5" /> Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* Add Salary Modal */}
      <div id="add_salary" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Staff Salary</h5>
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
                      <label>Select Staff</label>
                      <select className="select">
                        <option>John Doe</option>
                        <option>Richard Miles</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label>Net Salary</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <h4 className="text-primary">Earnings</h4>
                    <div className="form-group">
                      <label>Basic</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                      <label>DA(40%)</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                      <label>HRA(15%)</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                      <label>Conveyance</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                      <label>Allowance</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                      <label>Medical Allowance</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                      <label>Others</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="add-more">
                      <a href="#">
                        <i className="fa fa-plus-circle" /> Add More
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <h4 className="text-primary">Deductions</h4>
                    <div className="form-group">
                      <label>TDS</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                      <label>ESI</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                      <label>PF</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                      <label>Leave</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                      <label>Prof. Tax</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                      <label>Labour Welfare</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                      <label>Others</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="add-more">
                      <a href="#">
                        <i className="fa fa-plus-circle" /> Add More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Salary Modal */}
      {/* Edit Salary Modal */}
      <div id="edit_salary" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-md"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Staff Salary</h5>
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
                      <label>Select Staff</label>
                      <select className="select">
                        <option>John Doe</option>
                        <option>Richard Miles</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label>Net Salary</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="$4000"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <h4 className="text-primary">Earnings</h4>
                    <div className="form-group">
                      <label>Basic</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="$6500"
                      />
                    </div>
                    <div className="form-group">
                      <label>DA(40%)</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="$2000"
                      />
                    </div>
                    <div className="form-group">
                      <label>HRA(15%)</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="$700"
                      />
                    </div>
                    <div className="form-group">
                      <label>Conveyance</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="$70"
                      />
                    </div>
                    <div className="form-group">
                      <label>Allowance</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="$30"
                      />
                    </div>
                    <div className="form-group">
                      <label>Medical Allowance</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="$20"
                      />
                    </div>
                    <div className="form-group">
                      <label>Others</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <h4 className="text-primary">Deductions</h4>
                    <div className="form-group">
                      <label>TDS</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="$300"
                      />
                    </div>
                    <div className="form-group">
                      <label>ESI</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="$20"
                      />
                    </div>
                    <div className="form-group">
                      <label>PF</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="$20"
                      />
                    </div>
                    <div className="form-group">
                      <label>Leave</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="$250"
                      />
                    </div>
                    <div className="form-group">
                      <label>Prof. Tax</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="$110"
                      />
                    </div>
                    <div className="form-group">
                      <label>Labour Welfare</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="$10"
                      />
                    </div>
                    <div className="form-group">
                      <label>Fund</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="$40"
                      />
                    </div>
                    <div className="form-group">
                      <label>Others</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="$15"
                      />
                    </div>
                  </div>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Salary Modal */}
      {/* Delete Salary Modal */}
      <div className="modal custom-modal fade" id="delete_salary" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Salary</h3>
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
      {/* /Delete Salary Modal */}
    </div>
    {/* /Page Wrapper */}
  </div>
  {/* /Main Wrapper */}
  {/* jQuery */}
  {/* Bootstrap Core JS */}
  {/* Slimscroll JS */}
  {/* Select2 JS */}
  {/* Datetimepicker JS */}
  {/* Datatable JS */}
  {/* Custom JS */}
</>

    )
}

export default Salary