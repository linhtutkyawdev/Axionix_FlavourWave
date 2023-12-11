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
        Schema::create('preorders', function (Blueprint $table) {
            $table->id();
            $table->string('customer_id');
            $table->string('order_id')->unique();
            $table->text('location');
            $table->boolean('is_urgent')->nullable();
            $table->string('truck_number')->nullable();
            $table->string('date')->nullable();
            $table->integer('capacity')->nullable();
            $table->string('driver_nrc')->nullable();
            $table->string('status')->default('pending');
            $table->integer('delivered_quantity');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('preorders');
    }
};
