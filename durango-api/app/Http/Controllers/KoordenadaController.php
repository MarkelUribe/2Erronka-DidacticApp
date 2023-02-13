<?php

namespace App\Http\Controllers;

use App\Models\Koordenada;
use Illuminate\Http\Request;

class KoordenadaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $json ="{";
        foreach (Koordenada::all() as &$valor) {
            $json .= '"'.$valor['izena'].'":{';
            $json .= '"izena": "'.$valor['izena'].'",'; 
            $json .= '"lat": '.$valor['lat'].','; 
            $json .= '"lon": '.$valor['lon'].','; 
            $json .= '"kalea": "'.$valor['kalea'].'",'; 
            $json .= '"img": "'.$valor['img'].'"'; 
            $json .= '},';
        }

        $json =rtrim($json, ",");
        $json .= "}";

        return $json;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Koordenada  $koordenada
     * @return \Illuminate\Http\Response
     */
    public function show(Koordenada $koordenada)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Koordenada  $koordenada
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Koordenada $koordenada)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Koordenada  $koordenada
     * @return \Illuminate\Http\Response
     */
    public function destroy(Koordenada $koordenada)
    {
        //
    }
}
