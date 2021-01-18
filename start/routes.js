"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});
/*************USERS*****************/
Route.get("users", "UserController.usersList");
Route.put("users/:id", "UserController.userUpdate");
Route.get("users/:id", "UserController.userDetails");
Route.delete("users/:id", "UserController.userDelete");
Route.post("users", "UserController.userAdd");

Route.get("userType", "UserController.userType");
Route.get("userProfile", "UserController.userProfile");
Route.put("userProfile/:id", "UserController.userProfileUpdate");
Route.delete("userProfile/:id", "UserController.userProfileDelete");
Route.post("userProfile", "UserController.userProfileAdd");

Route.get("warehouse", "LocationController.warehouse");
Route.get("warehouse/:id", "LocationController.warehouseDetails");
Route.put("warehouse/:id", "LocationController.warehouseUpdate");
Route.delete("warehouse/:id", "LocationController.warehouseDelete");
Route.post("warehouse", "LocationController.warehouseAdd");

Route.get("countries", "LocationController.countries");
Route.get("countries/:id", "LocationController.countryDetails");
Route.post("countries", "LocationController.countryAdd");
Route.put("countries/:id", "LocationController.countryUpdate");
Route.delete("countries/:id", "LocationController.countryDelete");

Route.get("cities", "LocationController.cities");
Route.get("cities/:id", "LocationController.cityDetails");
Route.post("cities", "LocationController.cityAdd");
Route.put("cities/:id", "LocationController.cityUpdate");
Route.delete("cities/:id", "LocationController.cityDelete");

Route.get("tiers", "LocationController.tiers");
Route.get("tiers/:id", "LocationController.tierDetails");
Route.post("tiers", "LocationController.tierAdd");
Route.put("tiers/:id", "LocationController.tierUpdate");
Route.delete("tiers/:id", "LocationController.tierDelete");

Route.get("neighbourhoods", "LocationController.neighbourhoods");
Route.get("neighbourhoods/:id", "LocationController.neighbourhoodDetails");
Route.post("neighbourhoods", "LocationController.neighbourhoodAdd");
Route.put("neighbourhoods/:id", "LocationController.neighbourhoodUpdate");
Route.delete("neighbourhoods/:id", "LocationController.neighbourhoodDelete");

Route.get("serviceTypes", "ServiceController.serviceTypes");
Route.get("serviceTypes/:id", "ServiceController.serviceTypeDetails");
Route.post("serviceTypes", "ServiceController.serviceTypeAdd");
Route.put("serviceTypes/:id", "ServiceController.serviceTypeUpdate");
Route.delete("serviceTypes/:id", "ServiceController.serviceTypeDelete");

Route.get("suppliers", "ServiceController.suppliers");
Route.get("suppliers/:id", "ServiceController.supplierDetails");
Route.post("suppliers", "ServiceController.supplierAdd");
Route.put("suppliers/:id", "ServiceController.supplierUpdate");
Route.delete("suppliers/:id", "ServiceController.supplierDelete");
