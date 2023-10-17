<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {

            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('gender');
            $table->string('address');
            $table->string('phone_number')->nullable();
            $table->string('linkedin_link')->nullable();
            $table->mediumText('image')->default('http://127.0.0.1:8000/assets/images/default_profile.png');


            $table->string('academic_specialization');
            $table->string('academic_level');
            $table->string('professional_level');

            $table->string('career_field');
            $table->string('jop_title');
            $table->bigInteger('years_of_experience');
            $table->string('cv')->nullable();

            $table->string('subscription');
            $table->rememberToken();
            $table->timestamps();


        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
