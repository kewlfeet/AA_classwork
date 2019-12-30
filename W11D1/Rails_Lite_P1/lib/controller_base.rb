require 'active_support'
require 'active_support/core_ext'
require 'erb'
require_relative './session'
require 'byebug'


class ControllerBase
  attr_reader :req, :res, :params

  # Setup the controller
  def initialize(req, res , params = {})
    @req = req
    @res = res
    @params = params.merge!(req.params)
  end

  # Helper method to alias @already_built_response
  def already_built_response?
    @already_built_response
  end

  # Set the response status code and header
 def redirect_to(url)
    unless already_built_response?
      self.res.location = url
      self.res.status = 302      
      session.store_session(self.res)
      @already_built_response = true
    else
      raise "double render"
    end
  end

  # Populate the response with content.
  # Set the response's content type to the given type.
  # Raise an error if the developer tries to double render.
  def render_content(content, content_type)
    unless already_built_response?
      self.res.write(content)   
      self.res.set_header('Content-Type', content_type)
      session.store_session(self.res)
      @already_built_response = true
    else
      raise "double render"
    end
  end

  # use ERB and binding to evaluate templates
  # pass the rendered html to render_content
  def render(template_name)
    file_n = ["views",self.class.to_s.underscore, template_name.to_s+ ".html.erb"]
    filename = file_n.join("/")
    data = File.read(filename)
    template = ERB.new(data)
    render_content(template.result(binding), "text/html")
  end
  #"views/#{controller_name}/#{template_name}.html.erb"

  # method exposing a `Session` object
  def session
    @session ||= Session.new(@req)
  end

  # use this with the router to call action_name (:index, :show, :create...)
  def invoke_action(name)
    self.send(name)
  end
end

