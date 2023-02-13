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
        Schema::create('koordenatuaks', function (Blueprint $table) {
            $table->id();
            $table->string("gunearen_izena");
            $table->string("helbidea");
            $table->double("latitudea");
            $table->double("longitudea");
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
        Schema::dropIfExists('koordenatuaks');
    }
};
