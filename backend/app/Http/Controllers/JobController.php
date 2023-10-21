<?php

namespace App\Http\Controllers;
use App\Models\Company;
use App\Models\Job;
use Illuminate\Http\Request;

class JobController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $jobs = Job::all();

        // Pass the users data to the view
        return view('dashboard.job' ,  compact('jobs'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
  
        public function create()
        {
            $companies = Company::pluck('name', 'id'); // Assuming 'name' is the company name field in your database
            return view('dashboard.createjob', compact('companies'));
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
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'salary' => 'required|string|max:255',
            'deadline_date' => 'required|date',
            'professional_level' => 'required|string|max:255',
            'location_type' => 'required|string|max:255',
            'employment_type' => 'required|string|max:255',
            'company_id' => 'required|integer',
            // Add more validation rules for other fields if necessary
        ]);
    
        // Create a new Job instance and fill it with the request data
        $job = new Job();
        $job->title = $request->input('title');
        $job->description = $request->input('description');
        $job->salary = $request->input('salary');
        $job->deadline_date = $request->input('deadline_date');
        $job->professional_level = $request->input('professional_level');
        $job->location_type = $request->input('location_type');
        $job->employment_type = $request->input('employment_type');
        $job->company_id = $request->input('company_id');
    
        // Save the job to the database
        $job->save();
    
        return redirect('jobdash')->with('success', 'Job created successfully');
    }
    

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function show(Job $job)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function edit( $id)
    {
        $job = Job::find($id);
    
        if (!$job) {
            return redirect('jobdash')->with('error', 'job not found');
        }
    
        return view('dashboard.editjob')->with('job', $job);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'salary' => 'required|string|max:255',
            'deadline_date' => 'required|date',
            'professional_level' => 'required|string|max:255',
            'location_type' => 'required|string|max:255',
            'employment_type' => 'required|string|max:255',
            'company_id' => 'required|integer',
            // Add more validation rules for other fields if necessary
        ]);
    
        $job = Job::find($id);
    
        if (!$job) {
            return redirect('jobdash')->with('error', 'Job not found');
        }
    
        $job->title = $request->title;
        $job->description = $request->description;
        $job->salary = $request->salary;
        $job->deadline_date = $request->deadline_date;
        $job->professional_level = $request->professional_level;
        $job->location_type = $request->location_type;
        $job->employment_type = $request->employment_type;
        $job->company_id = $request->company_id;
    
        $job->save();
    
        return redirect('jobdash')->with('success', 'Job updated successfully');
    }
    
    

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Job::find($id)->delete();
        Job::destroy($id);
        return redirect('jobdash')->with('flash_message', 'job deleted successfully');
    }
}
