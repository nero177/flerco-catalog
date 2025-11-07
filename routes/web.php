<?php

use App\Http\Controllers\CatalogController;
use App\Http\Controllers\ChecklistController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\SiteController;
use Illuminate\Support\Facades\Route;

Route::get('/', [SiteController::class, 'index'])->name('home');
Route::get('/catalog', [CatalogController::class, 'index'])->name('catalog');
Route::get('/checklist', [SiteController::class, 'checklist'])->name('checklist');
Route::get('/about-us', [SiteController::class, 'aboutUs'])->name('about-us');
Route::get('/faq', [SiteController::class, 'faq'])->name('faq');

Route::post('/order/create', [OrderController::class, 'create'])->name('order.create');
Route::post('/feedback/create', [FeedbackController::class, 'create'])->name('feedback.create');