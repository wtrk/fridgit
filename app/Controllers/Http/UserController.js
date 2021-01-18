"use strict";
const Database = use("Database");
const Env = use('Env')

class UserController {
  async usersList({ response }) {
    const usersListFromDb = await Database.table("users");
    response.header("Access-Control-Allow-Origin", Env.get('FRONTEND_URL'));
    response.json([
      {
        msg: "Successfully selected users",
        data: usersListFromDb,
      },
    ]);
  }
  async userDetails({ params, response }) {
    const userDetailsFromDb = await Database.table("users").where(
      "id",
      params.id
    );
    const msg = userDetailsFromDb != "" ? `Successfully selected user ${params.id}` : `User (${params.id}) not found`;
    response.json([
      {
        msg,
        data: userDetailsFromDb,
      },
    ]);
  }
  async userAdd({ request, response }) {
    const firstUserId = await Database.from("users").insert(request.body[0]);
    response.json([
      {
        msg: "Success addition in users",
      },
    ]);
  }
  async userUpdate({ params, request, response }) {
    const affectedRows = await Database.table('users').where('id', params.id).update(request.body[0])
    
    const msg = affectedRows != "" ? `Successfully updated user ${params.id}` : `User (${params.id}) not found`;
    response.json([
      {
        msg,
        data: affectedRows,
      },
    ]);
  }
  async userDelete({ params, response }) {
    const userDetailsFromDb = await Database.table("users")
      .where("id", params.id)
      .delete();
    const msg = userDetailsFromDb != "" ? `Successfully deleted user ${params.id}` : `User (${params.id}) not found`;
    response.json([
      {
        msg,
        id: params.id,
      },
    ]);
  }

  async userProfile({ response }) {
    const usersProfileFromDb = await Database.table("user_profile");
    response.header("Access-Control-Allow-Origin", Env.get('FRONTEND_URL'));
    response.json([
      {
        msg: "Success selection from user_profiles",
        data: usersProfileFromDb,
      },
    ]);
  }
  async userProfileAdd({ request, response }) {
    const userProfileAdd = await Database.from("user_profile").insert(request.body[0]);
    response.json([
      {
        msg: "Success addition in user_profile",
      },
    ]);
  }
  async userProfileUpdate({ params, request, response }) {
    const affectedRows = await Database.table('user_profile').where('id', params.id).update(request.body[0])
    
    const msg = affectedRows != "" ? `Successfully updated User Profile ${params.id}` : `User profile (${params.id}) not found`;
    response.json([
      {
        msg,
        data: affectedRows,
      },
    ]);
  }
  async userProfileDelete({ params, response }) {
    const userProfileDelete = await Database.table("user_profile")
      .where("id", params.id)
      .delete();
    const msg = userProfileDelete != "" ? `Successfully deleted User Profile ${params.id}` : `User Profile (${params.id}) not found`;
    response.json([
      {
        msg,
        id: params.id,
      },
    ]);
  }

  async userType({ response }) {
    const usersTypeFromDb = await Database.table("user_type");
    response.header("Access-Control-Allow-Origin", Env.get('FRONTEND_URL'));
    response.json([
      {
        msg: "Success selection from user_types",
        data: usersTypeFromDb,
      },
    ]);
  }
}

module.exports = UserController;
