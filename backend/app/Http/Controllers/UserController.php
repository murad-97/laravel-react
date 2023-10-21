<?php

namespace App\Http\Controllers;


use App\Models\User;
use App\Models\Language;
use App\Models\UserLanguage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
// USE App\Models\User;
use PhpParser\Node\Stmt\Return_;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $users = User::with('user_skills')->with('educations')->with('experiences')->with('languages')->find($id);

        return response()->json($users);
    }
    public function allUsers()
    {
        $users = User::with('user_skills')->with('educations')->with('experiences')->get();

        return response()->json($users);
    }
    public function updateInformation(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust the max file size and allowed extensions as needed
            ]
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()->all()], 400); // Return a validation error response
        }

        $user = User::find($request->id);

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $filename = time() . '.' . $image->getClientOriginalExtension();
            $destinationPath = public_path('img');
            $image->move($destinationPath, $filename);
}
            // Store the image path or URL in the user's database record
            $user->image =  $filename;
            $user->email = $request->email;
            $user->academic_specialization = $request->academic_specialization;
            $user->name = $request->name;
            // $user->experiences->position = "ggggg";   
        
        $user->update();

        return response()->json(['message' => 'Image uploaded and stored in the database successfully'], 201);
    }

    



    public function addLanguage(Request $request)
    {


        $languages = Language::where('name',$request->Lang1)->first();
        if($languages){
            $userLang = UserLanguage::create([
                'user_id' => $request->id,
                'language_id' => $languages->id,
                'level' => $request->level
            ]);
        }else{
        $language = Language::create([
            'name' => $request->Lang1,
        ]);
            $userLang = UserLanguage::create([
                'user_id' => $request->id,
                'language_id' => $language->id,
                'level' => $request->level
            ]);
    }
 
        

        return response()->json();
    }
    public function get()
    {
        // $user1=User::get()->last();
        // return response()->json($user1);
        $user1 = User::all(); // Retrieve all users
        return response()->json($user1);
    }


    public function getLanguagesForUser($userId = 1)
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
