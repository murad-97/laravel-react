<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User; 

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();

        // Pass the users data to the view
        return view('dashboard.user')->with('users', $users);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('dashboard.createuser');

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    
        public function store(Request $request)
        {
            $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email|unique:users,email',
                'password' => 'required|min:8',
                'gender' => 'sometimes|string',
                'address' => 'sometimes|string',
                'phone_number' => 'sometimes|string',
                'academic_specialization' => 'sometimes|string',
                'academic_level' => 'sometimes|string',
                'professional_level' => 'sometimes|string',
                'career_field' => 'sometimes|string',
                'job_title' => 'sometimes|string',
                'years_of_experience' => 'sometimes|integer',

            ]);
        
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => bcrypt($request->password),
                'gender' => $request->gender,
                'address' => $request->address,
                'phone_number' => $request->phone_number,
                'academic_specialization' => $request->academic_specialization,
                'academic_level' => $request->academic_level,
                'professional_level' => $request->professional_level,
                'career_field' => $request->career_field,
                'job_title' => $request->job_title,
                'years_of_experience' => $request->years_of_experience,
            ]);
        
            return redirect('userdash')->with('success', 'User created successfully');
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
    public function destroy( $id)
    {
        User::find($id)->delete();
        User::destroy($id);
        return redirect('userdash')->with('flash_message', 'user deleted successfully');
    }
}

