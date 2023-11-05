# v1.0.13 - 06/22/2021

* Updated dependencies

# v1.0.12 - 01/17/2021

* Updated dependencies
* Fixed issue where using `new URL("uri")` in `Request` constructor did not properly work
* Added support for constructing a new `Request` with a String URI
* Removed all uses of the deprected `url.parse()` method

# v1.0.11 - 11/11/2020

* Updated dependencies

# v1.0.10 - 10/07/2020

* Updated dependencies

# v1.0.9 - 06/23/2020

* Added `proxy` field to options for web proxy support
* Fixed defect where hostnames provided with invalid port numbers were not corrected

# v1.0.8 - 03/19/2019

* Removed `prepublish` NPM script in favor of `prepare`
* Added better handling around HTTP request body serialization

# v1.0.7 - 03/12/2019

* Adjusted how content-length header is calculated and applied for JSON data

# v1.0.6 - 03/05/2019

* Added statusCode property from response to error when available
* Fixed issue where 204 (no content) or an empty body caused parsing to fail

# v1.0.5 - 02/28/2019

* Added check for timeout option provided as a string

# v1.0.4 - 02/26/2019

* Updated dev dependency for nyc (security patch)
* Fixed issue that occurred when data passed for writing to the request stream was not properly serialized

# v1.0.3 - 02/26/2019

* Added support for failover / multiple hosts in request

# v1.0.2 - 02/13/2019

* Added more unit tests
* Fixed issue where redirects fail when location header value begins with '//' instead of protocol

# v1.0.1 - 02/13/2019

* Initial release - fleshing out Request functionality

# v1.0.0 - 01/30/2019

* Strawman release - hold on NPM namespace