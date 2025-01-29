<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;

class SendMessage extends Controller
{
    public function SendMessage(Request $request){
        $create = Comment::create([
            'FullName' => $request->FullName,
            'Email' => $request->Email,
            'Comment' => $request->Comment
        ]);
    }
}
