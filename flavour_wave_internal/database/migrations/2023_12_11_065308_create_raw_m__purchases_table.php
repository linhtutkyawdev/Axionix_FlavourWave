<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('raw_m__purchases', function (Blueprint $table) {
            $table->id();
            $table->string('source');
            $table->integer('amount');
            $table->integer('unit_price');
            $table->string('purchased_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('raw_m__purchases');
    }
};
