<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;

class CatalogController extends Controller
{
    public function index()
    {
        $products = Product::with('colors')->showcaseCatalogItem()->get();
        $fullCatalogProducts = Product::with('colors')->fullCatalogItem()->get();

        return Inertia::render('Catalog/Index', ['initialProducts' => $products, 'initialFullCatalogProducts' => $fullCatalogProducts]);
    }
}
