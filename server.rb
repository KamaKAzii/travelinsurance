gem 'compass'

require 'compass'
require 'sinatra'
require 'sass'

set :bind, '0.0.0.0'

configure do
  Compass.configuration do |config|
    config.project_path = File.dirname(__FILE__)
    config.sass_dir = 'views'
  end

  set :sass, Compass.sass_engine_options
end

get "/screen.css" do
  content_type 'text/css'
  sass :screen
end

get "/" do
  erb :index
end

