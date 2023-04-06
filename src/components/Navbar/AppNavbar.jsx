import React, { useState } from "react";
import { Navbar, Dropdown, Avatar, Button } from "flowbite-react";
import AuthModal from "../Auth/AuthModal";
import useAuthUser from "../../hooks/useAuthUser";
import { useAuth } from "../../contexts/AuthContext";

const AppNavbar = () => {
  const [show, setShow] = useState(false);
  const { currentUser, signout } = useAuth();

  const isValidUser = useAuthUser();

  return (
    <>
      <Navbar
        className="container mx-auto px-4 border-b "
        fluid={true}
        rounded={true}
      >
        <Navbar.Brand href="">
          <img
            className="w-10 pr-2"
            src="https://lh3.googleusercontent.com/VP9kvg4vsdn1lbujSFPvfTdulnAGIll6ylgExa-mODyeI643fgYPodK68NjLHzahRfKA9Nae71CYuldTGUYn6w=w240-h240"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Firestore
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {currentUser?.email ? (
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                <Avatar
                  className="pr-2"
                  alt="User settings"
                  img={currentUser?.photoURL}
                  rounded={true}
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">
                  {currentUser?.displayName}
                </span>
                <span className="block truncate text-sm font-medium">
                  {currentUser?.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={signout}>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <Button
              onClick={() => setShow(true)}
              className="self-center mr-2"
              size="xs"
            >
              Sign In
            </Button>
          )}

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="">About</Navbar.Link>
          <Navbar.Link href="">Services</Navbar.Link>
          <Navbar.Link href="">Pricing</Navbar.Link>
          <Navbar.Link href="">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      <AuthModal setShow={setShow} show={show} />
    </>
  );
};

export default AppNavbar;
