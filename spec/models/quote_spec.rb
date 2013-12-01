require "spec_helper"

describe "Quote" do
  it "Can be created with a date of today" do
    quote = Quote.create
    expect(quote).to be_valid
    expect(quote.default_date).to eq(Date.now)
  end
end
