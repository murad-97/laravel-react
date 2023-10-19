<?php

namespace App\Http\Controllers;


use App\Models\User;
use App\Models\Language;
use Illuminate\Http\Request;
// USE App\Models\User;
use PhpParser\Node\Stmt\Return_;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::with('user_skills')->get();
        return response()->json($users);
    }
    public function get(){
    // $user1=User::get()->last();
    // return response()->json($user1);
    $user1 = User::all(); // Retrieve all users
    return response()->json($user1);


    }

    
    public function getLanguagesForUser($userId=1)
    {
       

      
    $user = User::with('languages')->find($userId);

    if (!$user) {
        return response()->json(['message' => 'User not found'], 404);
    }

    return response()->json($user);
    }
    
    



    public function getUserSkills($userId = 1)
    {
        $user = User::with('user_skills')->find($userId);
    
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }
    
        return response()->json($user);
    }
    
    
   

    public function getUserEducations($userId = 1)
    {
        $userEducation = User::with('educations')->find($userId);
    
        if (!$userEducation) {
            return response()->json(['message' => 'User not found'], 404);
        }
    
        return response()->json($userEducation);
    }
    public function getUserExperience($userId = 1)
    {
        $userEducation = User::with('experiences')->find($userId);
    
        if (!$userEducation) {
            return response()->json(['message' => 'User not found'], 404);
        }
    
        return response()->json($userEducation);
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
