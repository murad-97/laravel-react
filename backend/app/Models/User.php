<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'gender',
        'address',
        'phone_number',
        'linkedin link',
        'image',
        'academic_specialization',
        'academic_level',
        'professional_level',
        'career_field',
        'jop_title',
        'years_of_experience',
        'cv',
        'subscription',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    public function user_language()
    {
        return $this->hasMany(UserLanguage::class);
    }
    public function user_skill()
    {
        return $this->hasMany(UserSkill::class);
    }
    public function post()
    {
        return $this->hasMany(Post::class);
    }
    public function comment()
    {
        return $this->hasMany(Comment::class);
    }
    public function application()
    {
        return $this->hasMany(Application::class);
    }
}
