<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorksDays extends Model
{
    use HasFactory;

    protected $fillable = [
        'Company_id',
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'From',
        'To',
    ];

    public function company()
    {
        return $this->belongsTo(Company::class, 'Company_id');
    }
}
