<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use App\Http\Requests\FeedbackRequest;

class FeedbackController extends Controller
{
    public function create(FeedbackRequest $request)
    {
        $feedback = Feedback::create($request->all());
        return response()->json(['error' => false]);
        
        if ($request->expectsJson()) {
            return response()->json([
                'message' => 'Feedback created successfully',
                'feedback' => $feedback
            ], 201);
        }
        
        return response()->json(['success' => true, 'message' => 'Feedback created successfully']);
    }
}
