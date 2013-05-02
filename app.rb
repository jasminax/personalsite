require 'sinatra'

get '/' do
	erb :index
end

get '/jquery' do
	erb :jquery
end

get '/javascript' do
	erb :javascript
end