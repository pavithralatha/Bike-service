import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ProfilePopper from "../../HomeComponents/ProfilePopper/ProfilePopper";

// Define the NavBar component
const NavBar = ({ setShowSidebar, show }) => {
  // Get the 'panel' parameter from the URL using React Router's useParams
  const { panel } = useParams();

  return (
    <Navbar expand="lg" variant="light" bg="white">
      <Container fluid>
        {/* Toggle button for the sidebar */}
        <button
          onClick={() => setShowSidebar(!show)}
          type="button"
          id="sidebarCollapse"
          className={show ? "navbar-btn active" : "navbar-btn"}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <Navbar.Brand>
          <h2
            className="d-inline-block ml-md-3 mb-0"
            style={{ fontSize: "1.4rem", fontWeight: "600" }}
          >
            {panel === "profile"
              ? "Profile"
              : panel === "book"
              ? "Book"
              : panel === "book-list"
              ? "Book List"
              : panel === "reviews"
              ? "Reviews"
              : panel === "add-services"
              ? "Add Services"
              : panel === "add-admins"
              ? "Add Admins"
              : panel === "all-orders"
              ? "All Orders"
              : panel === "manage-services"
              ? "Manage Services"
              : panel === "all-reviews"
              ? "Manage Reviews"
              : panel === "all-admins"
              ? "Manage Admins"
              : ""}
          </h2>
        </Navbar.Brand>

        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="ml-auto">
            {/* Display user profile pop-up menu */}
            <ProfilePopper />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;