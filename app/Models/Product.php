<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\Scope;
use Illuminate\Database\Eloquent\Builder;

class Product extends Model
{
    protected $fillable = [
        'title',
        'desc',
        'thumbnail',
        'gallery',
        'blueprints',
        'full_catalog_item'
    ];

    protected $casts = [
        'gallery' => 'array',
        'blueprints' => 'array',
        'title' => 'array',
        'desc' => 'array',
    ];

    public function colors() {
        return $this->belongsToMany(Color::class, 'product_color');
    }

    #[Scope]
    protected function fullCatalogItem(Builder $query): void 
    {
        $query->where('full_catalog_item', true);
    }

    #[Scope]
    protected function showcaseCatalogItem(Builder $query): void 
    {
        $query->where('full_catalog_item', false);
    }
}
