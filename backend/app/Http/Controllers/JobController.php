<?php

namespace App\Http\Controllers;

use App\Models\Job;
use App\Models\industry;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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


    public function sameJobs($id)
    {
        $industryId = $id; // Replace 1 with the actual ID of the industry you want to retrieve jobs for

        $industry = Industry::with(['company.job']) // Eager load companies and their jobs
            ->find($industryId);

        if ($industry) {
            $jobs = optional($industry->company)->flatMap(function ($company) {
                if ($company && $company->job) { // Use the singular form "job"
                    return $company->job->take(3)->map(function ($job) use ($company) {
                        // Include related data (e.g., company and additional data inside company)
                        $jobData = [
                            'id' => $job->id,
                            'title' => $job->title,
                            'company' => $job->company,
                            'location' => $job->company->location,
                            'industry' => $job->company->industry,
                            'salary' => $job->salary,
                            'deadline_date' => $job->deadline_date,
                            'location_type' => $job->location_type,
                            'professional_level' => $job->professional_level,
                        ];

                        return $jobData;
                    });
                }
                return [];
            });

            return response()->json($jobs);
        }
        return response()->json(['message' => 'Industry not found'], 404);
    }

}
