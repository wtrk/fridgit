'use strict'
const Database = use("Database");
const Env = use('Env')

class ServiceController {
    
    async serviceTypes({ response }) {
      const serviceTypesFromDb = await Database.table("service_types");
      response.header("Access-Control-Allow-Origin", Env.get('FRONTEND_URL'));
      response.json([
        {
          msg: "Success selection from serviceTypes",
          data: serviceTypesFromDb,
        },
      ]);
    }
    async serviceTypeDetails({ params, response }) {
      const serviceTypeDetailsFromDb = await Database.table("service_types").where(
        "id",
        params.id
      );
      const msg = serviceTypeDetailsFromDb != "" ? `Successfully selected serviceType ${params.id}` : `Service Type (${params.id}) not found`;
      response.json([
        {
          msg,
          data: serviceTypeDetailsFromDb,
        },
      ]);
    }
    async serviceTypeAdd({ request, response }) {
      const serviceTypeAdd = await Database.from("service_types").insert(request.body[0]);
      response.json([
        {
          msg: "Success addition in serviceTypes",
        },
      ]);
    }
    async serviceTypeUpdate({ params, request, response }) {
      const affectedRows = await Database.table('service_types').where('id', params.id).update(request.body[0])
      
      const msg = affectedRows != "" ? `Successfully updated Service Type ${params.id}` : `Service Type (${params.id}) not found`;
      response.json([
        {
          msg,
          data: affectedRows,
        },
      ]);
    }
    async serviceTypeDelete({ params, response }) {
      const serviceTypeDelete = await Database.table("service_types")
        .where("id", params.id)
        .delete();
      const msg = serviceTypeDelete != "" ? `Successfully deleted Service Type ${params.id}` : `Service Type (${params.id}) not found`;
      response.json([
        {
          msg,
          id: params.id,
        },
      ]);
    }
}

module.exports = ServiceController
