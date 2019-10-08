# -*- encoding: utf-8 -*-
# stub: bootstrap_jt 0.1.0 ruby lib

Gem::Specification.new do |s|
  s.name = "bootstrap_jt".freeze
  s.version = "0.1.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.metadata = { "allowed_push_host" => "https://rubygems.org" } if s.respond_to? :metadata=
  s.require_paths = ["lib".freeze]
  s.authors = ["@JimT2".freeze]
  s.bindir = "exe".freeze
  s.date = "2015-06-29"
  s.description = "".freeze
  s.email = ["jtunnessen@gmail.com".freeze]
  s.homepage = "https://github.com/jtunnessen/bootstrap_jt".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.0.6".freeze
  s.summary = "Bootstrap 3 resource. This gem provides all the CSS and javascript assets needed to integrate Bootstrap into your web app to provide your Responsive Web Design (mobile-friendly design) experience.".freeze

  s.installed_by_version = "3.0.6" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<bundler>.freeze, ["~> 1.9"])
      s.add_development_dependency(%q<rake>.freeze, ["~> 10.0"])
    else
      s.add_dependency(%q<bundler>.freeze, ["~> 1.9"])
      s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
    end
  else
    s.add_dependency(%q<bundler>.freeze, ["~> 1.9"])
    s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
  end
end
