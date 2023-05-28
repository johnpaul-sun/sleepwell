<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'full_name' => 'Admin',
            'email' => 'super@admin.com',
            'age' => 99,
            'gender' => 'Prefer not to say',
            'password' => bcrypt('password'),
            'avatar' => "https://api.multiavatar.com/admin.png",
            'is_admin' => true,
        ]);

        User::factory(6)->create();
    }
}
