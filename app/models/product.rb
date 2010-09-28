class Product < ActiveRecord::Base
  def specs=(specs)
    self[:specs]= specs.to_json
  end

  def specs
    JSON.parse(self[:specs]||'{}')
  end

  def active=(active)
    self[:active]= active ? true : false
  end
end
