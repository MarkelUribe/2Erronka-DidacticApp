@extends('app')

@section('content')
    <div class="container w-25 border p-4 mt-4">
        <form action="{{route('koordenatuak-update', ['id' => $koordenatuak -> id])}}" method="POST">
            @method('PATCH')
            @csrf

            @if (session('success'))
                <h6 class="alert alert-success">{{session('success')}}</h6>   
            @endif

            @error('gunearen_izena')
            <h6 class="alert alert-danger">{{ $message }}</h6>
            @enderror

            @error('helbidea')
            <h6 class="alert alert-danger">{{ $message }}</h6>
            @enderror

            @error('latitudea')
            <h6 class="alert alert-danger">{{ $message }}</h6>
            @enderror

            @error('longitudea')
            <h6 class="alert alert-danger">{{ $message }}</h6>
            @enderror
            <div class="mb-3">
                <label for="title" class="form-label">Durangoko gunearen izena</label>
                <input type="text" class="form-control" name="gunearen_izena" value="{{$koordenatuak->gunearen_izena}}"> 
                <label for="title" class="form-label mt-2">Durangoko gunearen helbidea</label>
                <input type="text" class="form-control" name="helbidea" value="{{$koordenatuak->helbidea}}"> 
                <label for="title" class="form-label mt-2">Durangoko gunearen latitudea</label>
                <input type="text" class="form-control" name="latitudea" value="{{$koordenatuak->latitudea}}"> 
                <label for="title" class="form-label mt-2">Durangoko gunearen longitudea</label>
                <input type="text" class="form-control" name="longitudea" value="{{$koordenatuak->longitudea}}"> 
            </div>        
            <button type="submit" class="btn btn-primary">Durangoko gunearen datuak aldatu</button>
        
        </form>
        
    </div>



@endsection