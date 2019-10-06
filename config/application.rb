require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Blog
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
<<<<<<< HEAD
    config.i18n.default_locale = :ja
    config.i18n.load_path += Dir[Rails.root.join('config','locales','**','*.{rb,yml}').to_s]
=======
>>>>>>> 27b39a79bc556885ef4de3734f333e155dc07a5b
  end
end
