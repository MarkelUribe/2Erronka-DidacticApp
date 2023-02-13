<?php

use App\Http\Controllers\KoordenatuakController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', KoordenatuakController::class . '@index')->name('app');

Route::get('/koordenatuak', KoordenatuakController::class . '@index')->name('app');

Route::get('/api/koordenatuak', KoordenatuakController::class . '@indexApi');

Route::post('/koordenatuak', KoordenatuakController::class . '@store')->name('app');

Route::get('/koordenatuak/{id}', KoordenatuakController::class . '@show')->name('koordenatuak-edit');

Route::get('/api/koordenatuak/{id}', KoordenatuakController::class . '@showApi');

Route::patch('/koordenatuak/{id}', KoordenatuakController::class . '@update')->name('koordenatuak-update');

Route::delete('/api/koordenatuak/{id}', KoordenatuakController::class . '@destroy');