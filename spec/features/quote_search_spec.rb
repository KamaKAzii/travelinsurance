require "spec_helper"

feature "Getting a quote" do
  scenario "Guest visits the homepage" do
    visit "/"
    
    expect(page).to have_text("Tell us about your trip")

    within("form") do
      fill_in 'countries', { with: "1" }
      fill_in 'departure_date', { width: "2014 Jan 20" }
      fill_in 'return_date', { with: "2014 Jan 25" }
      click_button 'save'
    end

    expect(page).to have_text("Here are your quotes")
  end
end
