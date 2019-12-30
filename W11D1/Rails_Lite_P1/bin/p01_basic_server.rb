require 'rack'
require 'byebug'

app = Proc.new do |env|
    req = Rack::Request.new(env)
    res = Rack::Response.new
    # debugger
    res['Content-Type'] = 'text/html'
    if req.path == "/i/love/app/academy"
        res.write("i/love/app/academy")
    elsif req.path == "/"
        res.write("Hello world!")
    else
        res.write("404 Not Found")
    end
    res.finish

end

Rack::Server.start(
    app: app,
    Port: 3000
)
###req methods
# [:update_param, :delete_param, :params, :logger, :user_agent, :multithread?, :referer, :referrer, :session, :session_options, :get?, :head?, :options?, :link?, :patch?, :post?, :put?, :trace?, :unlink?, :cookies, :xhr?, :host_with_port, :content_length, :ssl?, :ip, :fullpath, :[], :path, :media_type, :media_type_params, :content_charset, :form_data?, :parseable_data?, :base_url, :accept_encoding, :accept_language, :port, :trusted_proxy?, :host, :[]=, :path_info, :content_type, :values_at, :script_name, :delete?, :url, :authority, :GET, :POST, :body, :scheme, :script_name=, :path_info=, :request_method, :query_string, :env, :add_header, :set_header, :delete_header, :has_header?, :get_header, :fetch_header, :each_header]

###res methods
#[:to_ary, :to_a, :[], :[]=, :length=, :body=, :write, :empty?, :close, :headers, :has_header?, :get_header, :status, :set_header, :header, :delete_header, :finish, :length, :redirect, :status=, :chunked?, :each, :body, :moved_permanently?, :bad_request?, :unauthorized?, :forbidden?, :not_found?, :method_not_allowed?, :precondition_failed?, :unprocessable?, :redirect?, :content_length, :set_cookie, :delete_cookie, :location, :set_cookie_header, :set_cookie_header=, :cache_control, :cache_control=, :etag=, :etag, :media_type, :media_type_params, :location=, :add_header, :content_type, :invalid?, :informational?, :successful?, :redirection?, :client_error?, :server_error?, :ok?, :created?, :accepted?, :no_content?]

