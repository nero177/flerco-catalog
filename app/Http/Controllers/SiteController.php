<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SiteController extends Controller
{
    public function index()
    {
        return Inertia::render('Home');
    }

    public function checklist()
    {
        return Inertia::render('Checklist');
    }

    public function aboutUs() {
        return Inertia::render('AboutUs');
    }

    public function faq() {
        $questions = [

        ];

        return Inertia::render('FAQ', ['questions' => $questions]);
    }
}
