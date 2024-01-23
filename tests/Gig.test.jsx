import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Gig from "../src/components/Gig";

test("renders gig with the correct band_name ", () => {
  const band_name = 'Queen';
  const band_description = "Makers' favourite rock band";
  const event_time = '26/01/2024 @20:00';
  const event_location = 'O2 Arena';
    render(
      <Gig 
        band_name={band_name}
        band_description={band_description}
        event_time={event_time} 
        event_location={event_location} 
      />
    );

    // Assert
    expect(screen.getByRole("heading")).toHaveTextContent("Queen");
});
