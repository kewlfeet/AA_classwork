require 'json'

class Flash
attr_accessor :now
  def initialize(req)

    @flash = {}
    if req.cookies["_rails_lite_app_flash"]
      @now = JSON.parse(req.cookies["_rails_lite_app_flash"])
    else 
      @now = {}
    end
  end

  def [](key)
    current = @now[key.to_s]
    # current = @now[key.to_sym] unless current
    return @flash[key.to_s] unless current
    current
  end

  def []=(key, val)
    @flash[key.to_s] = val
  end

  def store_flash(res)
    res.set_cookie("_rails_lite_app_flash", {path: "/" , value: @flash.to_json})
  end
end
