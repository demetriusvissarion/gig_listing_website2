import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Gig from "../src/components/Gig";
import userEvent from "@testing-library/user-event";

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

    expect(screen.getByRole("heading")).toHaveTextContent("Queen");
});

test("renders gig with a favorite button that toggles correctly", async () => {
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

  const favoriteButton = screen.getByText("Add to favourites");
  expect(favoriteButton).toHaveTextContent("Add to favourites");

  userEvent.click(favoriteButton);
  await waitFor(() => {
    expect(favoriteButton).toHaveTextContent("Remove from favourites");
  });

  userEvent.click(favoriteButton);
  await waitFor(() => {
    expect(favoriteButton).toHaveTextContent("Add to favourites");
  });
});