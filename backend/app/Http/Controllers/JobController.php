<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;

class JobController extends Controller
{
    public function getAllJobs()
    {
        
        $jobs = Job::with('company.location')->get();
         return response()->json($jobs);




// // You can also further filter the query if needed, for instance, with a specific location.
// $jobsInSpecificLocation = Job::with('company.location')
//     ->whereHas('company.location', function ($query) use ($specificLocationId) {
//         $query->where('id', $specificLocationId);
//     })
//     ->get();


    }



    public function index()
    {
        $users = Job::all();

        return response()->json($users, 200);
    }


    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $job = Job::with(['application', 'company.location','company.industry' ,'qualification', 'skill', 'responsible'])
    ->find($id);
        return response()->json($job);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function edit(Job $job)
    {
        //
    }


    public function update(Request $request, Job $job)
    {
        //
    }

    public function destroy(Job $job)
    {
        //
    }

}
