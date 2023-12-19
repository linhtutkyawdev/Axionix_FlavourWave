<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
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
            $table->integer('total_price');
            $table->boolean('is_urgent')->default(false);
            $table->string('truck_number')->nullable();
            $table->string('date')->nullable();
            $table->integer('capacity')->nullable();
            $table->string('driver_nrc')->nullable();
            $table->string('status')->default('pending');
            $table->text('cancel_reason')->nullable();
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
