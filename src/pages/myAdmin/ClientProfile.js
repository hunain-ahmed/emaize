import React from 'react'

function ClientProfile() {
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
                     <a className="active" href="client-profile.html">
                       {" "}
                       Client Profile{" "}
                     </a>
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
             <div className="row">
               <div className="col-sm-12">
                 <h3 className="page-title">Profile</h3>
                 <ul className="breadcrumb">
                   <li className="breadcrumb-item">
                     <a href="index.html">Dashboard</a>
                   </li>
                   <li className="breadcrumb-item active">Profile</li>
                 </ul>
               </div>
             </div>
           </div>
           {/* /Page Header */}
           <div className="card mb-0">
             <div className="card-body">
               <div className="row">
                 <div className="col-md-12">
                   <div className="profile-view">
                     <div className="profile-img-wrap">
                       <div className="profile-img">
                         <a href="">
                           <img src="assets/img/profiles/avatar-19.jpg" alt="" />
                         </a>
                       </div>
                     </div>
                     <div className="profile-basic">
                       <div className="row">
                         <div className="col-md-5">
                           <div className="profile-info-left">
                             <h3 className="user-name m-t-0">
                               Global Technologies
                             </h3>
                             <h5 className="company-role m-t-0 mb-0">
                               Barry Cuda
                             </h5>
                             <small className="text-muted">CEO</small>
                             <div className="staff-id">Employee ID : CLT-0001</div>
                             <div className="staff-msg">
                               <a href="chat.html" className="btn btn-custom">
                                 Send Message
                               </a>
                             </div>
                           </div>
                         </div>
                         <div className="col-md-7">
                           <ul className="personal-info">
                             <li>
                               <span className="title">Phone:</span>
                               <span className="text">
                                 <a href="">9876543210</a>
                               </span>
                             </li>
                             <li>
                               <span className="title">Email:</span>
                               <span className="text">
                                 <a href="">barrycuda@example.com</a>
                               </span>
                             </li>
                             <li>
                               <span className="title">Birthday:</span>
                               <span className="text">2nd August</span>
                             </li>
                             <li>
                               <span className="title">Address:</span>
                               <span className="text">
                                 5754 Airport Rd, Coosada, AL, 36020
                               </span>
                             </li>
                             <li>
                               <span className="title">Gender:</span>
                               <span className="text">Male</span>
                             </li>
                           </ul>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div className="card tab-box">
             <div className="row user-tabs">
               <div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
                 <ul className="nav nav-tabs nav-tabs-bottom">
                   <li className="nav-item col-sm-3">
                     <a
                       className="nav-link active"
                       data-toggle="tab"
                       href="#myprojects"
                     >
                       Projects
                     </a>
                   </li>
                   <li className="nav-item col-sm-3">
                     <a className="nav-link" data-toggle="tab" href="#tasks">
                       Tasks
                     </a>
                   </li>
                 </ul>
               </div>
             </div>
           </div>
           <div className="row">
             <div className="col-lg-12">
               <div className="tab-content profile-tab-content">
                 {/* Projects Tab */}
                 <div id="myprojects" className="tab-pane fade show active">
                   <div className="row">
                     <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                       <div className="card">
                         <div className="card-body">
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
                                 data-target="#edit_project"
                               >
                                 <i className="fa fa-pencil m-r-5" /> Edit
                               </a>
                               <a
                                 className="dropdown-item"
                                 href="#"
                                 data-toggle="modal"
                                 data-target="#delete_project"
                               >
                                 <i className="fa fa-trash-o m-r-5" /> Delete
                               </a>
                             </div>
                           </div>
                           <h4 className="project-title">
                             <a href="project-view.html">Office Management</a>
                           </h4>
                           <small className="block text-ellipsis m-b-15">
                             <span className="text-xs">1</span>{" "}
                             <span className="text-muted">open tasks, </span>
                             <span className="text-xs">9</span>{" "}
                             <span className="text-muted">tasks completed</span>
                           </small>
                           <p className="text-muted">
                             Lorem Ipsum is simply dummy text of the printing and
                             typesetting industry. When an unknown printer took a
                             galley of type and scrambled it...
                           </p>
                           <div className="pro-deadline m-b-15">
                             <div className="sub-title">Deadline:</div>
                             <div className="text-muted">17 Apr 2019</div>
                           </div>
                           <div className="project-members m-b-15">
                             <div>Project Leader :</div>
                             <ul className="team-members">
                               <li>
                                 <a
                                   href="#"
                                   data-toggle="tooltip"
                                   title="Jeffery Lalor"
                                 >
                                   <img
                                     alt=""
                                     src="assets/img/profiles/avatar-16.jpg"
                                   />
                                 </a>
                               </li>
                             </ul>
                           </div>
                           <div className="project-members m-b-15">
                             <div>Team :</div>
                             <ul className="team-members">
                               <li>
                                 <a
                                   href="#"
                                   data-toggle="tooltip"
                                   title="John Doe"
                                 >
                                   <img
                                     alt=""
                                     src="assets/img/profiles/avatar-02.jpg"
                                   />
                                 </a>
                               </li>
                               <li>
                                 <a
                                   href="#"
                                   data-toggle="tooltip"
                                   title="Richard Miles"
                                 >
                                   <img
                                     alt=""
                                     src="assets/img/profiles/avatar-09.jpg"
                                   />
                                 </a>
                               </li>
                               <li>
                                 <a
                                   href="#"
                                   data-toggle="tooltip"
                                   title="John Smith"
                                 >
                                   <img
                                     alt=""
                                     src="assets/img/profiles/avatar-10.jpg"
                                   />
                                 </a>
                               </li>
                               <li>
                                 <a
                                   href="#"
                                   data-toggle="tooltip"
                                   title="Mike Litorus"
                                 >
                                   <img
                                     alt=""
                                     src="assets/img/profiles/avatar-05.jpg"
                                   />
                                 </a>
                               </li>
                               <li className="dropdown avatar-dropdown">
                                 <a
                                   href="#"
                                   className="all-users dropdown-toggle"
                                   data-toggle="dropdown"
                                   aria-expanded="false"
                                 >
                                   +15
                                 </a>
                                 <div className="dropdown-menu dropdown-menu-right">
                                   <div className="avatar-group">
                                     <a className="avatar avatar-xs" href="#">
                                       <img
                                         alt=""
                                         src="assets/img/profiles/avatar-02.jpg"
                                       />
                                     </a>
                                     <a className="avatar avatar-xs" href="#">
                                       <img
                                         alt=""
                                         src="assets/img/profiles/avatar-09.jpg"
                                       />
                                     </a>
                                     <a className="avatar avatar-xs" href="#">
                                       <img
                                         alt=""
                                         src="assets/img/profiles/avatar-10.jpg"
                                       />
                                     </a>
                                     <a className="avatar avatar-xs" href="#">
                                       <img
                                         alt=""
                                         src="assets/img/profiles/avatar-05.jpg"
                                       />
                                     </a>
                                     <a className="avatar avatar-xs" href="#">
                                       <img
                                         alt=""
                                         src="assets/img/profiles/avatar-11.jpg"
                                       />
                                     </a>
                                     <a className="avatar avatar-xs" href="#">
                                       <img
                                         alt=""
                                         src="assets/img/profiles/avatar-12.jpg"
                                       />
                                     </a>
                                     <a className="avatar avatar-xs" href="#">
                                       <img
                                         alt=""
                                         src="assets/img/profiles/avatar-13.jpg"
                                       />
                                     </a>
                                     <a className="avatar avatar-xs" href="#">
                                       <img
                                         alt=""
                                         src="assets/img/profiles/avatar-01.jpg"
                                       />
                                     </a>
                                     <a className="avatar avatar-xs" href="#">
                                       <img
                                         alt=""
                                         src="assets/img/profiles/avatar-16.jpg"
                                       />
                                     </a>
                                   </div>
                                   <div className="avatar-pagination">
                                     <ul className="pagination">
                                       <li className="page-item">
                                         <a
                                           className="page-link"
                                           href="#"
                                           aria-label="Previous"
                                         >
                                           <span aria-hidden="true">«</span>
                                           <span className="sr-only">
                                             Previous
                                           </span>
                                         </a>
                                       </li>
                                       <li className="page-item">
                                         <a className="page-link" href="#">
                                           1
                                         </a>
                                       </li>
                                       <li className="page-item">
                                         <a className="page-link" href="#">
                                           2
                                         </a>
                                       </li>
                                       <li className="page-item">
                                         <a
                                           className="page-link"
                                           href="#"
                                           aria-label="Next"
                                         >
                                           <span aria-hidden="true">»</span>
                                           <span className="sr-only">Next</span>
                                         </a>
                                       </li>
                                     </ul>
                                   </div>
                                 </div>
                               </li>
                             </ul>
                           </div>
                           <p className="m-b-5">
                             Progress{" "}
                             <span className="text-success float-right">40%</span>
                           </p>
                           <div className="progress progress-xs mb-0">
                             <div
                               className="progress-bar bg-success"
                               role="progressbar"
                               data-toggle="tooltip"
                               title="40%"
                               style={{ width: "40%" }}
                             />
                           </div>
                         </div>
                       </div>
                     </div>
                     <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                       <div className="card">
                         <div className="card-body">
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
                                 data-target="#edit_project"
                               >
                                 <i className="fa fa-pencil m-r-5" /> Edit
                               </a>
                               <a
                                 className="dropdown-item"
                                 href="#"
                                 data-toggle="modal"
                                 data-target="#delete_project"
                               >
                                 <i className="fa fa-trash-o m-r-5" /> Delete
                               </a>
                             </div>
                           </div>
                           <h4 className="project-title">
                             <a href="project-view.html">Project Management</a>
                           </h4>
                           <small className="block text-ellipsis m-b-15">
                             <span className="text-xs">2</span>{" "}
                             <span className="text-muted">open tasks, </span>
                             <span className="text-xs">5</span>{" "}
                             <span className="text-muted">tasks completed</span>
                           </small>
                           <p className="text-muted">
                             Lorem Ipsum is simply dummy text of the printing and
                             typesetting industry. When an unknown printer took a
                             galley of type and scrambled it...
                           </p>
                           <div className="pro-deadline m-b-15">
                             <div className="sub-title">Deadline:</div>
                             <div className="text-muted">17 Apr 2019</div>
                           </div>
                           <div className="project-members m-b-15">
                             <div>Project Leader :</div>
                             <ul className="team-members">
                               <li>
                                 <a
                                   href="#"
                                   data-toggle="tooltip"
                                   title="Jeffery Lalor"
                                 >
                                   <img
                                     alt=""
                                     src="assets/img/profiles/avatar-16.jpg"
                                   />
                                 </a>
                               </li>
                             </ul>
                           </div>
                           <div className="project-members m-b-15">
                             <div>Team :</div>
                             <ul className="team-members">
                               <li>
                                 <a
                                   href="#"
                                   data-toggle="tooltip"
                                   title="John Doe"
                                 >
                                   <img
                                     alt=""
                                     src="assets/img/profiles/avatar-02.jpg"
                                   />
                                 </a>
                               </li>
                               <li>
                                 <a
                                   href="#"
                                   data-toggle="tooltip"
                                   title="Richard Miles"
                                 >
                                   <img
                                     alt=""
                                     src="assets/img/profiles/avatar-09.jpg"
                                   />
                                 </a>
                               </li>
                               <li>
                                 <a
                                   href="#"
                                   data-toggle="tooltip"
                                   title="John Smith"
                                 >
                                   <img
                                     alt=""
                                     src="assets/img/profiles/avatar-10.jpg"
                                   />
                                 </a>
                               </li>
                               <li>
                                 <a
                                   href="#"
                                   data-toggle="tooltip"
                                   title="Mike Litorus"
                                 >
                                   <img
                                     alt=""
                                     src="assets/img/profiles/avatar-05.jpg"
                                   />
                                 </a>
                               </li>
                               <li className="dropdown avatar-dropdown">
                                 <a
                                   href="#"
                                   className="all-users dropdown-toggle"
                                   data-toggle="dropdown"
                                   aria-expanded="false"
                                 >
                                   +15
                                 </a>
                                 <div className="dropdown-menu dropdown-menu-right">
                                   <div className="avatar-group">
                                     <a className="avatar avatar-xs" href="#">
                                       <img
                                         alt=""
                                         src="assets/img/profiles/avatar-02.jpg"
                                       />
                                     </a>
                                     <a className="avatar avatar-xs" href="#">
                                       <img
                                         alt=""
                                         src="assets/img/profiles/avatar-09.jpg"
                                       />
                                     </a>
                                     <a className="avatar avatar-xs" href="#">
                                       <img
                                         alt=""
                                         src="assets/img/profiles/avatar-10.jpg"
                                       />
                                     </a>
                                     <a className="avatar avatar-xs" href="#">
                                       <img
                                         alt=""
                                         src="assets/img/profiles/avatar-05.jpg"
                                       />
                                     </a>
                                     <a className="avatar avatar-xs" href="#">
                                       <img
                                         alt=""
                                         src="assets/img/profiles/avatar-11.jpg"
                                       />
                                     </a>
                                     <a className="avatar avatar-xs" href="#">
                                       <img
                                         alt=""
                                         src="assets/img/profiles/avatar-12.jpg"
                                       />
                                     </a>
                                     <a className="avatar avatar-xs" href="#">
                                       <img
                                         alt=""
                                         src="assets/img/profiles/avatar-13.jpg"
                                       />
                                     </a>
                                     <a className="avatar avatar-xs" href="#">
                                       <img
                                         alt=""
                                         src="assets/img/profiles/avatar-01.jpg"
                                       />
                                     </a>
                                     <a className="avatar avatar-xs" href="#">
                                       <img
                                         alt=""
                                         src="assets/img/profiles/avatar-16.jpg"
                                       />
                                     </a>
                                   </div>
                                   <div className="avatar-pagination">
                                     <ul className="pagination">
                                       <li className="page-item">
                                         <a
                                           className="page-link"
                                           href="#"
                                           aria-label="Previous"
                                         >
                                           <span aria-hidden="true">«</span>
                                           <span className="sr-only">
                                             Previous
                                           </span>
                                         </a>
                                       </li>
                                       <li className="page-item">
                                         <a className="page-link" href="#">
                                           1
                                         </a>
                                       </li>
                                       <li className="page-item">
                                         <a className="page-link" href="#">
                                           2
                                         </a>
                                       </li>
                                       <li className="page-item">
                                         <a
                                           className="page-link"
                                           href="#"
                                           aria-label="Next"
                                         >
                                           <span aria-hidden="true">»</span>
                                           <span className="sr-only">Next</span>
                                         </a>
                                       </li>
                                     </ul>
                                   </div>
                                 </div>
                               </li>
                             </ul>
                           </div>
                           <p className="m-b-5">
                             Progress{" "}
                             <span className="text-success float-right">40%</span>
                           </p>
                           <div className="progress progress-xs mb-0">
                             <div
                               className="progress-bar bg-success"
                               role="progressbar"
                               data-toggle="tooltip"
                               title="40%"
                               style={{ width: "40%" }}
                             />
                           </div>
                         </div>
                       </div>
                     </div>
                     <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                       <div className="card">
                         <div className="card-body">
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
                                 data-target="#edit_project"
                               >
                                 <i className="fa fa-pencil m-r-5" /> Edit
                               </a>
                               <a
                                 className="dropdown-item"
                                 href="#"
                                 data-toggle="modal"
                                 data-target="#delete_project"
                               >
                                 <i className="fa fa-trash-o m-r-5" /> Delete
                               </a>
                             </div>
                           </div>
                           <h4 className="project-title">
                             <a href="project-view.html">Video Calling App</a>
                           </h4>
                           <small className="block text-ellipsis m-b-15">
                             <span className="text-xs">3</span>{" "}
                             <span className="text-muted">open tasks, </span>
                             <span className="text-xs">3</span>{" "}
                             <span className="text-muted">tasks completed</span>
                           </small>
                           <p className="text-muted">
                             Lorem Ipsum is simply dummy text of the printing and
                             typesetting industry. When an unknown printer took a
                             galley of type and scrambled it...
                           </p>
                           <div className="pro-deadline m-b-15">
                             <div className="sub-title">Deadline:</div>
                             <div className="text-muted">17 Apr 2019</div>
                           </div>
                           <div className="project-members m-b-15">
                             <div>Project Leader :</div>
                             <ul className="team-members">
                               <li>
                                 <a
                                   href="#"
                                   data-toggle="tooltip"
                                   title="Jeffery Lalor"
                                 >
                                   <img
                                     alt=""
                                     src="assets/img/profiles/avatar-16.jpg"
                                   />
                                 </a>
                               </li>
                             </ul>
                           </div>
                           <div className="project-members m-b-15">
                             <div>Team :</div>
                             <ul className="team-members">
                               <li>
                                 <a
                                   href="#"
                                   data-toggle="tooltip"
                                   title="John Doe"
                                 >
                                   <img
                                     alt=""
                                     src="assets/img/profiles/avatar-02.jpg"
                                   />
                                 </a>
                               </li>
                               <li>
                                 <a
                                   href="#"
                                   data-toggle="tooltip"
                                   title="Richard Miles"
                                 >
                                   <img
                                     alt=""
                                     src="assets/img/profiles/avatar-09.jpg"
                                   />
                                 </a>
                               </li>
                               <li>
                                 <a
                                   href="#"
                                   data-toggle="tooltip"
                                   title="John Smith"
                                 >
                                   <img
                                     alt=""
                                     src="assets/img/profiles/avatar-10.jpg"
                                   />
                                 </a>
                               </li>
                               <li>
                                 <a
                                   href="#"
                                   data-toggle="tooltip"
                                   title="Mike Litorus"
                                 >
                                   <img
                                     alt=""
                                     src="assets/img/profiles/avatar-05.jpg"
                                   />
                                 </a>
                               </li>
                               <li className="dropdown avatar-dropdown">
                                 <a
                                   href="#"
                                   className="all-users dropdown-toggle"
                                   data-toggle="dropdown"
                                   aria-expanded="false"
                                 >
                                   +15
                                 </a>
                                 <div className="dropdown-menu dropdown-menu-right">
                                   <div className="avatar-group">
                                     <a className="avatar avatar-xs" href="#">
                                       <img
                                         alt=""
                                         src="assets/img/profiles/avatar-02.jpg"
                                       />
                                     </a>
                                     <a className="avatar avatar-xs" href="#">
                                       <img
                                         alt=""
                                         src="assets/img/profiles/avatar-09.jpg"
                                       />
                                     </a>
                                     <a className="avatar avatar-xs" href="#">
                                       <img
                                         alt=""
                                         src="assets/img/profiles/avatar-10.jpg"
                                       />
                                     </a>
                                     <a className="avatar avatar-xs" href="#">
                                       <img
                                         alt=""
                                         src="assets/img/profiles/avatar-05.jpg"
                                       />
                                     </a>
                                     <a className="avatar avatar-xs" href="#">
                                       <img
                                         alt=""
                                         src="assets/img/profiles/avatar-11.jpg"
                                       />
                                     </a>
                                     <a className="avatar avatar-xs" href="#">
                                       <img
                                         alt=""
                                         src="assets/img/profiles/avatar-12.jpg"
                                       />
                                     </a>
                                     <a className="avatar avatar-xs" href="#">
                                       <img
                                         alt=""
                                         src="assets/img/profiles/avatar-13.jpg"
                                       />
                                     </a>
                                     <a className="avatar avatar-xs" href="#">
                                       <img
                                         alt=""
                                         src="assets/img/profiles/avatar-01.jpg"
                                       />
                                     </a>
                                     <a className="avatar avatar-xs" href="#">
                                       <img
                                         alt=""
                                         src="assets/img/profiles/avatar-16.jpg"
                                       />
                                     </a>
                                   </div>
                                   <div className="avatar-pagination">
                                     <ul className="pagination">
                                       <li className="page-item">
                                         <a
                                           className="page-link"
                                           href="#"
                                           aria-label="Previous"
                                         >
                                           <span aria-hidden="true">«</span>
                                           <span className="sr-only">
                                             Previous
                                           </span>
                                         </a>
                                       </li>
                                       <li className="page-item">
                                         <a className="page-link" href="#">
                                           1
                                         </a>
                                       </li>
                                       <li className="page-item">
                                         <a className="page-link" href="#">
                                           2
                                         </a>
                                       </li>
                                       <li className="page-item">
                                         <a
                                           className="page-link"
                                           href="#"
                                           aria-label="Next"
                                         >
                                           <span aria-hidden="true">»</span>
                                           <span className="sr-only">Next</span>
                                         </a>
                                       </li>
                                     </ul>
                                   </div>
                                 </div>
                               </li>
                             </ul>
                           </div>
                           <p className="m-b-5">
                             Progress{" "}
                             <span className="text-success float-right">40%</span>
                           </p>
                           <div className="progress progress-xs mb-0">
                             <div
                               className="progress-bar bg-success"
                               role="progressbar"
                               data-toggle="tooltip"
                               title="40%"
                               style={{ width: "40%" }}
                             />
                           </div>
                         </div>
                       </div>
                     </div>
                     <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                       <div className="card">
                         <div className="card-body">
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
                                 data-target="#edit_project"
                               >
                                 <i className="fa fa-pencil m-r-5" /> Edit
                               </a>
                               <a
                                 className="dropdown-item"
                                 href="#"
                                 data-toggle="modal"
                                 data-target="#delete_project"
                               >
                                 <i className="fa fa-trash-o m-r-5" /> Delete
                               </a>
                             </div>
                           </div>
                           <h4 className="project-title">
                             <a href="project-view.html">
                               Hospital Administration
                             </a>
                           </h4>
                           <small className="block text-ellipsis m-b-15">
                             <span className="text-xs">12</span>{" "}
                             <span className="text-muted">open tasks, </span>
                             <span className="text-xs">4</span>{" "}
                             <span className="text-muted">tasks completed</span>
                           </small>
                           <p className="text-muted">
                             Lorem Ipsum is simply dummy text of the printing and
                             typesetting industry. When an unknown printer took a
                             galley of type and scrambled it...
                           </p>
                           <div className="pro-deadline m-b-15">
                             <div className="sub-title">Deadline:</div>
                             <div className="text-muted">17 Apr 2019</div>
                           </div>
                           <div className="project-members m-b-15">
                             <div>Project Leader :</div>
                             <ul className="team-members">
                               <li>
                                 <a
                                   href="#"
                                   data-toggle="tooltip"
                                   title="Jeffery Lalor"
                                 >
                                   <img
                                     alt=""
                                     src="assets/img/profiles/avatar-16.jpg"
                                   />
                                 </a>
                               </li>
                             </ul>
                           </div>
                           <div className="project-members m-b-15">
                             <div>Team :</div>
                             <ul className="team-members">
                               <li>
                                 <a
                                   href="#"
                                   data-toggle="tooltip"
                                   title="John Doe"
                                 >
                                   <img
                                     alt=""
                                     src="assets/img/profiles/avatar-02.jpg"
                                   />
                                 </a>
                               </li>
                               <li>
                                 <a
                                   href="#"
                                   data-toggle="tooltip"
                                   title="Richard Miles"
                                 >
                                   <img
                                     alt=""
                                     src="assets/img/profiles/avatar-09.jpg"
                                   />
                                 </a>
                               </li>
                               <li>
                                 <a
                                   href="#"
                                   data-toggle="tooltip"
                                   title="John Smith"
                                 >
                                   <img
                                     alt=""
                                     src="assets/img/profiles/avatar-10.jpg"
                                   />
                                 </a>
                               </li>
                               <li>
                                 <a
                                   href="#"
                                   data-toggle="tooltip"
                                   title="Mike Litorus"
                                 >
                                   <img
                                     alt=""
                                     src="assets/img/profiles/avatar-05.jpg"
                                   />
                                 </a>
                               </li>
                               <li className="dropdown avatar-dropdown">
                                 <a
                                   href="#"
                                   className="all-users dropdown-toggle"
                                   data-toggle="dropdown"
                                   aria-expanded="false"
                                 >
                                   +15
                                 </a>
                                 <div className="dropdown-menu dropdown-menu-right">
                                   <div className="avatar-group">
                                     <a className="avatar avatar-xs" href="#">
                                       <img
                                         alt=""
                                         src="assets/img/profiles/avatar-02.jpg"
                                       />
                                     </a>
                                     <a className="avatar avatar-xs" href="#">
                                       <img
                                         alt=""
                                         src="assets/img/profiles/avatar-09.jpg"
                                       />
                                     </a>
                                     <a className="avatar avatar-xs" href="#">
                                       <img
                                         alt=""
                                         src="assets/img/profiles/avatar-10.jpg"
                                       />
                                     </a>
                                     <a className="avatar avatar-xs" href="#">
                                       <img
                                         alt=""
                                         src="assets/img/profiles/avatar-05.jpg"
                                       />
                                     </a>
                                     <a className="avatar avatar-xs" href="#">
                                       <img
                                         alt=""
                                         src="assets/img/profiles/avatar-11.jpg"
                                       />
                                     </a>
                                     <a className="avatar avatar-xs" href="#">
                                       <img
                                         alt=""
                                         src="assets/img/profiles/avatar-12.jpg"
                                       />
                                     </a>
                                     <a className="avatar avatar-xs" href="#">
                                       <img
                                         alt=""
                                         src="assets/img/profiles/avatar-13.jpg"
                                       />
                                     </a>
                                     <a className="avatar avatar-xs" href="#">
                                       <img
                                         alt=""
                                         src="assets/img/profiles/avatar-01.jpg"
                                       />
                                     </a>
                                     <a className="avatar avatar-xs" href="#">
                                       <img
                                         alt=""
                                         src="assets/img/profiles/avatar-16.jpg"
                                       />
                                     </a>
                                   </div>
                                   <div className="avatar-pagination">
                                     <ul className="pagination">
                                       <li className="page-item">
                                         <a
                                           className="page-link"
                                           href="#"
                                           aria-label="Previous"
                                         >
                                           <span aria-hidden="true">«</span>
                                           <span className="sr-only">
                                             Previous
                                           </span>
                                         </a>
                                       </li>
                                       <li className="page-item">
                                         <a className="page-link" href="#">
                                           1
                                         </a>
                                       </li>
                                       <li className="page-item">
                                         <a className="page-link" href="#">
                                           2
                                         </a>
                                       </li>
                                       <li className="page-item">
                                         <a
                                           className="page-link"
                                           href="#"
                                           aria-label="Next"
                                         >
                                           <span aria-hidden="true">»</span>
                                           <span className="sr-only">Next</span>
                                         </a>
                                       </li>
                                     </ul>
                                   </div>
                                 </div>
                               </li>
                             </ul>
                           </div>
                           <p className="m-b-5">
                             Progress{" "}
                             <span className="text-success float-right">40%</span>
                           </p>
                           <div className="progress progress-xs mb-0">
                             <div
                               className="progress-bar bg-success"
                               role="progressbar"
                               data-toggle="tooltip"
                               title="40%"
                               style={{ width: "40%" }}
                             />
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                 {/* /Projects Tab */}
                 {/* Task Tab */}
                 <div id="tasks" className="tab-pane fade">
                   <div className="project-task">
                     <ul className="nav nav-tabs nav-tabs-top nav-justified mb-0">
                       <li className="nav-item">
                         <a
                           className="nav-link active"
                           href="#all_tasks"
                           data-toggle="tab"
                           aria-expanded="true"
                         >
                           All Tasks
                         </a>
                       </li>
                       <li className="nav-item">
                         <a
                           className="nav-link"
                           href="#pending_tasks"
                           data-toggle="tab"
                           aria-expanded="false"
                         >
                           Pending Tasks
                         </a>
                       </li>
                       <li className="nav-item">
                         <a
                           className="nav-link"
                           href="#completed_tasks"
                           data-toggle="tab"
                           aria-expanded="false"
                         >
                           Completed Tasks
                         </a>
                       </li>
                     </ul>
                     <div className="tab-content">
                       <div className="tab-pane show active" id="all_tasks">
                         <div className="task-wrapper">
                           <div className="task-list-container">
                             <div className="task-list-body">
                               <ul id="task-list">
                                 <li className="task">
                                   <div className="task-container">
                                     <span className="task-action-btn task-check">
                                       <span
                                         className="action-circle large complete-btn"
                                         title="Mark Complete"
                                       >
                                         <i className="material-icons">check</i>
                                       </span>
                                     </span>
                                     <span
                                       className="task-label"
                                       contentEditable="true"
                                     >
                                       Patient appointment booking
                                     </span>
                                     <span className="task-action-btn task-btn-right">
                                       <span
                                         className="action-circle large"
                                         title="Assign"
                                       >
                                         <i className="material-icons">
                                           person_add
                                         </i>
                                       </span>
                                       <span
                                         className="action-circle large delete-btn"
                                         title="Delete Task"
                                       >
                                         <i className="material-icons">delete</i>
                                       </span>
                                     </span>
                                   </div>
                                 </li>
                                 <li className="task">
                                   <div className="task-container">
                                     <span className="task-action-btn task-check">
                                       <span
                                         className="action-circle large complete-btn"
                                         title="Mark Complete"
                                       >
                                         <i className="material-icons">check</i>
                                       </span>
                                     </span>
                                     <span
                                       className="task-label"
                                       contentEditable="true"
                                     >
                                       Appointment booking with payment gateway
                                     </span>
                                     <span className="task-action-btn task-btn-right">
                                       <span
                                         className="action-circle large"
                                         title="Assign"
                                       >
                                         <i className="material-icons">
                                           person_add
                                         </i>
                                       </span>
                                       <span
                                         className="action-circle large delete-btn"
                                         title="Delete Task"
                                       >
                                         <i className="material-icons">delete</i>
                                       </span>
                                     </span>
                                   </div>
                                 </li>
                                 <li className="completed task">
                                   <div className="task-container">
                                     <span className="task-action-btn task-check">
                                       <span
                                         className="action-circle large complete-btn"
                                         title="Mark Complete"
                                       >
                                         <i className="material-icons">check</i>
                                       </span>
                                     </span>
                                     <span className="task-label">
                                       Doctor available module
                                     </span>
                                     <span className="task-action-btn task-btn-right">
                                       <span
                                         className="action-circle large"
                                         title="Assign"
                                       >
                                         <i className="material-icons">
                                           person_add
                                         </i>
                                       </span>
                                       <span
                                         className="action-circle large delete-btn"
                                         title="Delete Task"
                                       >
                                         <i className="material-icons">delete</i>
                                       </span>
                                     </span>
                                   </div>
                                 </li>
                                 <li className="task">
                                   <div className="task-container">
                                     <span className="task-action-btn task-check">
                                       <span
                                         className="action-circle large complete-btn"
                                         title="Mark Complete"
                                       >
                                         <i className="material-icons">check</i>
                                       </span>
                                     </span>
                                     <span
                                       className="task-label"
                                       contentEditable="true"
                                     >
                                       Patient and Doctor video conferencing
                                     </span>
                                     <span className="task-action-btn task-btn-right">
                                       <span
                                         className="action-circle large"
                                         title="Assign"
                                       >
                                         <i className="material-icons">
                                           person_add
                                         </i>
                                       </span>
                                       <span
                                         className="action-circle large delete-btn"
                                         title="Delete Task"
                                       >
                                         <i className="material-icons">delete</i>
                                       </span>
                                     </span>
                                   </div>
                                 </li>
                                 <li className="task">
                                   <div className="task-container">
                                     <span className="task-action-btn task-check">
                                       <span
                                         className="action-circle large complete-btn"
                                         title="Mark Complete"
                                       >
                                         <i className="material-icons">check</i>
                                       </span>
                                     </span>
                                     <span
                                       className="task-label"
                                       contentEditable="true"
                                     >
                                       Private chat module
                                     </span>
                                     <span className="task-action-btn task-btn-right">
                                       <span
                                         className="action-circle large"
                                         title="Assign"
                                       >
                                         <i className="material-icons">
                                           person_add
                                         </i>
                                       </span>
                                       <span
                                         className="action-circle large delete-btn"
                                         title="Delete Task"
                                       >
                                         <i className="material-icons">delete</i>
                                       </span>
                                     </span>
                                   </div>
                                 </li>
                                 <li className="task">
                                   <div className="task-container">
                                     <span className="task-action-btn task-check">
                                       <span
                                         className="action-circle large complete-btn"
                                         title="Mark Complete"
                                       >
                                         <i className="material-icons">check</i>
                                       </span>
                                     </span>
                                     <span
                                       className="task-label"
                                       contentEditable="true"
                                     >
                                       Patient Profile add
                                     </span>
                                     <span className="task-action-btn task-btn-right">
                                       <span
                                         className="action-circle large"
                                         title="Assign"
                                       >
                                         <i className="material-icons">
                                           person_add
                                         </i>
                                       </span>
                                       <span
                                         className="action-circle large delete-btn"
                                         title="Delete Task"
                                       >
                                         <i className="material-icons">delete</i>
                                       </span>
                                     </span>
                                   </div>
                                 </li>
                               </ul>
                             </div>
                             <div className="task-list-footer">
                               <div className="new-task-wrapper">
                                 <textarea
                                   id="new-task"
                                   placeholder="Enter new task here. . ."
                                   defaultValue={""}
                                 />
                                 <span className="error-message hidden">
                                   You need to enter a task first
                                 </span>
                                 <span
                                   className="add-new-task-btn btn"
                                   id="add-task"
                                 >
                                   Add Task
                                 </span>
                                 <span className="btn" id="close-task-panel">
                                   Close
                                 </span>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="tab-pane" id="pending_tasks" />
                       <div className="tab-pane" id="completed_tasks" />
                     </div>
                   </div>
                 </div>
                 {/* /Task Tab */}
               </div>
             </div>
           </div>
         </div>
         {/* /Page Content */}
       </div>
     </div>
     {/* /Main Wrapper */}
     {/* jQuery */}
     {/* Bootstrap Core JS */}
     {/* Slimscroll JS */}
     {/* Select2 JS */}
     {/* Task JS */}
     {/* Custom JS */}
   </>
   
  
  )
}

export default ClientProfile