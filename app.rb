require 'sinatra'

get '/' do
	erb :index
end

get '/jquery' do
	erb :jquery
end
