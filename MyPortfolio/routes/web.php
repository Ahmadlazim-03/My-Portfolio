<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SendMessage;

Route::get('/', function () {
    return view('index');
});

Route::POST('/sendmessage',[SendMessage::class,'SendMessage']);
