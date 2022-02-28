// Use this file to change prototype configuration.

// Note: prototype config can be overridden using environment variables (eg on heroku)

module.exports = {
  // Service name used in header. Eg: 'Renew your passport'
  serviceName: 'Manage T Level results',

  // Default port that prototype runs on
  port: '3000',

  // Enable or disable password protection on production
  useAuth: 'true',

  // Automatically stores form data, and send to all views
  useAutoStoreData: 'true',

  // Load data from csv or json files in app/data/data-files to session data
  useDataFilesToSessionData: 'true',

  // enable live reload (on page load) of data from data files (only matters if useDataFilesToSessionData = 'true')
  // NB - this will overwrite any changes made by user (via forms etc) to session data loaded from files
  dataFilesToSessionDataLiveReload: 'true',

  // Enable cookie-based session store (persists on restart)
  // Please note 4KB cookie limit per domain, cookies too large will silently be ignored
  useCookieSessionStore: 'false',

  // Enable or disable built-in docs and examples.
  useDocumentation: 'true',

  // Force HTTP to redirect to HTTPS on production
  useHttps: 'true',

  // Enable or disable Browser Sync
  useBrowserSync: 'true'

}
