'use strict'
const Database = use("Database");
const Env = use('Env')

class LocationController {
  async countries({ response }) {
    const countriesListFromDb = await Database.table("countries");
    response.header("Access-Control-Allow-Origin", Env.get('FRONTEND_URL'));
    response.json([
      {
        msg: "Success selection from countries",
        data: countriesListFromDb,
      },
    ]);
  }
  async countryDetails({ params, response }) {
    const countryDetailsFromDb = await Database.table("countries").where(
      "id",
      params.id
    );
    const msg = countryDetailsFromDb != "" ? `Successfully selected country ${params.id}` : `Country (${params.id}) not found`;
    response.json([
      {
        msg,
        data: countryDetailsFromDb,
      },
    ]);
  }
  async countryAdd({ request, response }) {
    const firstCountryId = await Database.from("countries").insert(request.body[0]);
    response.json([
      {
        msg: "Success addition in countries",
      },
    ]);
  }
  async countryUpdate({ params, request, response }) {
    const affectedRows = await Database.table('countries').where('id', params.id).update(request.body[0])
    
    const msg = affectedRows != "" ? `Successfully updated country ${params.id}` : `Country (${params.id}) not found`;
    response.json([
      {
        msg,
        data: affectedRows,
      },
    ]);
  }
  async countryDelete({ params, response }) {
    const countryDetailsFromDb = await Database.table("countries")
      .where("id", params.id)
      .delete();
    const msg = countryDetailsFromDb != "" ? `Successfully deleted country ${params.id}` : `Country (${params.id}) not found`;
    response.json([
      {
        msg,
        id: params.id,
      },
    ]);
  }

  async cities({ response }) {
    const citiesListFromDb = await Database.table("cities");
    response.header("Access-Control-Allow-Origin", Env.get('FRONTEND_URL'));
    response.json([
      {
        msg: "Success selection from cities",
        data: citiesListFromDb,
      },
    ]);
  }
  async cityDetails({ params, response }) {
    const cityDetailsFromDb = await Database.table("cities").where(
      "id",
      params.id
    );
    const msg = cityDetailsFromDb != "" ? `Successfully selected city ${params.id}` : `City (${params.id}) not found`;
    response.json([
      {
        msg,
        data: cityDetailsFromDb,
      },
    ]);
  }
  async cityAdd({ request, response }) {
    const firstCityId = await Database.from("cities").insert(request.body[0]);
    response.json([
      {
        msg: "Success addition in cities",
      },
    ]);
  }
  async cityUpdate({ params, request, response }) {
    const affectedRows = await Database.table('cities').where('id', params.id).update(request.body[0])
    
    const msg = affectedRows != "" ? `Successfully updated city ${params.id}` : `City (${params.id}) not found`;
    response.json([
      {
        msg,
        data: affectedRows,
      },
    ]);
  }
  async cityDelete({ params, response }) {
    const cityDetailsFromDb = await Database.table("cities")
      .where("id", params.id)
      .delete();
    const msg = cityDetailsFromDb != "" ? `Successfully deleted city ${params.id}` : `City (${params.id}) not found`;
    response.json([
      {
        msg,
        id: params.id,
      },
    ]);
  }

  async tiers({ response }) {
    const tiersListFromDb = await Database.table("tiers");
    response.header("Access-Control-Allow-Origin", Env.get('FRONTEND_URL'));
    response.json([
      {
        msg: "Success selection from tiers",
        data: tiersListFromDb,
      },
    ]);
  }
  async tierDetails({ params, response }) {
    const tierDetailsFromDb = await Database.table("tiers").where(
      "id",
      params.id
    );
    const msg = tierDetailsFromDb != "" ? `Successfully selected tier ${params.id}` : `Tier (${params.id}) not found`;
    response.json([
      {
        msg,
        data: tierDetailsFromDb,
      },
    ]);
  }
  async tierAdd({ request, response }) {
    const firstTierId = await Database.from("tiers").insert(request.body[0]);
    response.json([
      {
        msg: "Success addition in tiers",
      },
    ]);
  }
  async tierUpdate({ params, request, response }) {
    const affectedRows = await Database.table('tiers').where('id', params.id).update(request.body[0])
    
    const msg = affectedRows != "" ? `Successfully updated tier ${params.id}` : `Tier (${params.id}) not found`;
    response.json([
      {
        msg,
        data: affectedRows,
      },
    ]);
  }
  async tierDelete({ params, response }) {
    const tierDetailsFromDb = await Database.table("tiers")
      .where("id", params.id)
      .delete();
    const msg = tierDetailsFromDb != "" ? `Successfully deleted tier ${params.id}` : `Tier (${params.id}) not found`;
    response.json([
      {
        msg,
        id: params.id,
      },
    ]);
  }


  async neighbourhoods({ response }) {
    const neighbourhoodsListFromDb = await Database.table("neighbourhoods");
    response.header("Access-Control-Allow-Origin", Env.get('FRONTEND_URL'));
    response.json([
      {
        msg: "Success selection from neighbourhoods",
        data: neighbourhoodsListFromDb,
      },
    ]);
  }
  async neighbourhoodDetails({ params, response }) {
    const neighbourhoodDetailsFromDb = await Database.table("neighbourhoods").where(
      "id",
      params.id
    );
    const msg = neighbourhoodDetailsFromDb != "" ? `Successfully selected neighbourhood ${params.id}` : `Neighbourhood (${params.id}) not found`;
    response.json([
      {
        msg,
        data: neighbourhoodDetailsFromDb,
      },
    ]);
  }
  async neighbourhoodAdd({ request, response }) {
    const firstNeighbourhoodId = await Database.from("neighbourhoods").insert(request.body[0]);
    response.json([
      {
        msg: "Success addition in neighbourhoods",
      },
    ]);
  }
  async neighbourhoodUpdate({ params, request, response }) {
    const affectedRows = await Database.table('neighbourhoods').where('id', params.id).update(request.body[0])
    
    const msg = affectedRows != "" ? `Successfully updated neighbourhood ${params.id}` : `Neighbourhood (${params.id}) not found`;
    response.json([
      {
        msg,
        data: affectedRows,
      },
    ]);
  }
  async neighbourhoodDelete({ params, response }) {
    const neighbourhoodDetailsFromDb = await Database.table("neighbourhoods")
      .where("id", params.id)
      .delete();
    const msg = neighbourhoodDetailsFromDb != "" ? `Successfully deleted neighbourhood ${params.id}` : `Neighbourhood (${params.id}) not found`;
    response.json([
      {
        msg,
        id: params.id,
      },
    ]);
  }

    
    async warehouse({ response }) {
      const warehouseFromDb = await Database.table("warehouse");
      response.header("Access-Control-Allow-Origin", Env.get('FRONTEND_URL'));
      response.json([
        {
          msg: "Success selection from warehouse",
          data: warehouseFromDb,
        },
      ]);
    }
    async warehouseDetails({ params, response }) {
      const warehouseDetailsFromDb = await Database.table("warehouse").where(
        "id",
        params.id
      );
      const msg = warehouseDetailsFromDb != "" ? `Successfully selected warehouse ${params.id}` : `Warehouse (${params.id}) not found`;
      response.json([
        {
          msg,
          data: warehouseDetailsFromDb,
        },
      ]);
    }
    async warehouseAdd({ request, response }) {
      const warehouseAdd = await Database.from("warehouse").insert(request.body[0]);
      response.json([
        {
          msg: "Success addition in warehouse",
        },
      ]);
    }
    async warehouseUpdate({ params, request, response }) {
      const affectedRows = await Database.table('warehouse').where('id', params.id).update(request.body[0])
      
      const msg = affectedRows != "" ? `Successfully updated Warehouse ${params.id}` : `Warehouse (${params.id}) not found`;
      response.json([
        {
          msg,
          data: affectedRows,
        },
      ]);
    }
    async warehouseDelete({ params, response }) {
      const warehouseDelete = await Database.table("warehouse")
        .where("id", params.id)
        .delete();
      const msg = warehouseDelete != "" ? `Successfully deleted Warehouse ${params.id}` : `Warehouse (${params.id}) not found`;
      response.json([
        {
          msg,
          id: params.id,
        },
      ]);
    }
}

module.exports = LocationController
