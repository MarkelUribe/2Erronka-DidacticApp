<?php

namespace App\Http\Controllers;

use App\Models\Koordenatuak;
use Illuminate\Http\Request;

class KoordenatuakController extends Controller
{
    
    public function index()
    {
        $koordenatuaks = Koordenatuak::all();
        return view('koordenatua.index', ['koordenatuak' => $koordenatuaks]);
    }

    public function indexApi(){
        $koordenatuaks = Koordenatuak::all();
        return $koordenatuaks;

    }

    public function showApi($id){
        $koordenatuaks = Koordenatuak::find($id);
        return $koordenatuaks;

    }
   
    public function show($id)
    {
        $koordenatuaks = Koordenatuak::find($id);
        return view('koordenatua.show', ['koordenatuak' => $koordenatuaks]);

    }

    public function update(Request $request, $id){
        $koordenatuaks = Koordenatuak::find($id);
        $koordenatuaks->gunearen_izena = $request->gunearen_izena;
        $koordenatuaks->helbidea = $request->helbidea;
        $koordenatuaks->latitudea = $request->latitudea;
        $koordenatuaks->longitudea = $request->longitudea;
        $koordenatuaks->save();
        
        return redirect()->route('app')->with('success', 'Koordenatuak aldatuta!'); 
    }

    public function destroy($id){
        $koordenatuaks = Koordenatuak::find($id);
        $koordenatuaks->delete();
        return "Koordenatua ezabatu da"; 
    }
}
