<?php

namespace App\Http\Controllers;

use App\Models\Industry;
use Illuminate\Http\Request;

class IndustryController extends Controller
{

    public function getAllIndustries()
    {
        $industries = Industry::with('company.job')->get();
        return response()->json($industries);

      
    }







    public function index()
    {
        //
    }


    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        //
    }


    public function show(Industry $industry)
    {
        //
    }


    public function edit(Industry $industry)
    {
        //
    }


    public function update(Request $request, Industry $industry)
    {
        //
    }


    public function destroy(Industry $industry)
    {
        //
    }
}
