import React from "react";
import * as f from "./Footer.css";
import { Box, Container, Row, Column, FooterLink, Heading } from "./Footer.css";

export const Footer = () => {
  return (
    <f.root>
      <Box>
        <h1
          style={{ color: "#B01414", textAlign: "center", marginTop: "-55px" }}
        >
          666 Music : Divine Power of God
        </h1>
        <Container>
          <Row>
            <Column>
              <Heading>About Us</Heading>
              <FooterLink href="#">Aim</FooterLink>
              <FooterLink href="#">Vision</FooterLink>
              <FooterLink href="#">Testimonials</FooterLink>
            </Column>

            <Column>
              <Heading>Contact Us</Heading>
              <FooterLink href="#">Uttar Pradesh</FooterLink>
              <FooterLink href="#">Ahemdabad</FooterLink>
              <FooterLink href="#">Indore</FooterLink>
              <FooterLink href="#">Mumbai</FooterLink>
            </Column>
            <Column>
              <Heading>Social Media</Heading>
              <FooterLink href="https://www.facebook.com/profile.php?id=100073623379590">
                <i className="fab fa-facebook-f">
                  <span style={{ marginLeft: "10px" }}>Facebook</span>
                </i>
              </FooterLink>
              <FooterLink href="https://www.instagram.com/sandexh7shrestha/">
                <i className="fab fa-instagram">
                  <span style={{ marginLeft: "10px" }}>Instagram</span>
                </i>
              </FooterLink>

              <FooterLink href="https://www.youtube.com/c/ShadesofNamasteNepal">
                <i className="fab fa-youtube">
                  <span style={{ marginLeft: "10px" }}>Youtube</span>
                </i>
              </FooterLink>
            </Column>
          </Row>
        </Container>
      </Box>
    </f.root>
  );
};
