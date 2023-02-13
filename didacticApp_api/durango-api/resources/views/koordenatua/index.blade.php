@extends('app')

@section('content')
    <div class="container w-30 border p-4 mt-4">
        <div>
            @foreach ($koordenatuak as $koordenatua)
            <div class="row py-1">
                <div class="col-md-9 d-flex align-items-center">    
                    <a href="{{ route('koordenatuak-edit', ['id' => $koordenatua->id]) }}">{{ $koordenatua->gunearen_izena }} &nbsp | &nbsp </a>
                    <a href="{{ route('koordenatuak-edit', ['id' => $koordenatua->id]) }}">{{ $koordenatua->helbidea }} &nbsp | &nbsp</a>
                    <a href="{{ route('koordenatuak-edit', ['id' => $koordenatua->id]) }}">{{ $koordenatua->latitudea }}  &nbsp | &nbsp</a>
                    <a href="{{ route('koordenatuak-edit', ['id' => $koordenatua->id]) }}">{{ $koordenatua->longitudea }}  &nbsp | &nbsp</a>
                </div>
            </div>
            @endforeach
        </div>
    </div>



@endsection